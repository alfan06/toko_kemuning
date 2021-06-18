import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BarangShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            barang: {}
        }
    }

    componentDidMount() {

        const barangId = this.props.match.params.id

        axios.get(`/api/barang/${barangId}`).then(response => {
            this.setState({
                barang: response.data
            })
        })
    }

    render() {
        const { barang } = this.state

        return (
            <div className="container-fluid">
                <img className="mb-3" style={{width:'200px'}} src={barang.gambar}></img>
                <table className="table table-hover table-bordered table-striped">
                    <tbody>
                        <tr>
                            <th>Nama</th>
                            <td>{barang.nama_barang}</td>
                        </tr>
                        <tr>
                            <th>Harga</th>
                            <td>{barang.harga_barang}</td>
                        </tr>
                        <tr>
                            <th>Stok</th>
                            <td>{barang.stok_barang}</td>
                        </tr>
                        <tr>
                            <th>Keterangan</th>
                            <td>{barang.keterangan_barang}</td>
                        </tr>
                        <Link
                            className='btn btn-primary'
                            to={`/`}
                            >Back
                        </Link>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BarangShow