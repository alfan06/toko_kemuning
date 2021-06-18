import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PesananShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesanan: {}
        }
    }

    componentDidMount() {

        const pesananId = this.props.match.params.id

        axios.get(`/api/pesanan/${pesananId}`).then(response => {
            this.setState({
                pesanan: response.data
            })
        })
    }

    render() {
        const { pesanan } = this.state

        return (
            <div className="container-fluid">
                <table className="table table-hover table-bordered table-striped">
                    <tbody>
                        <tr>
                            <th>Invoice</th>
                            <td>{pesanan.id_invoice['nama']}</td>
                        </tr>
                        <tr>
                            <th>Barang</th>
                            <td>{pesanan.id_barang['nama_barang']}</td>
                        </tr>
                        <Link
                            className='btn btn-primary'
                            to={`/pesanan`}
                            >Back
                        </Link>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PesananShow