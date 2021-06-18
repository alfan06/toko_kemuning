import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class InvoiceShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            invoice: {}
        }
    }

    componentDidMount() {

        const invoiceId = this.props.match.params.id

        axios.get(`/api/invoice/${invoiceId}`).then(response => {
            this.setState({
                invoice: response.data
            })
        })
    }

    render() {
        const { invoice } = this.state

        return (
            <div className="container-fluid">
                <table className="table table-hover table-bordered table-striped">
                    <tbody>
                        <tr>
                            <th>Nama</th>
                            <td>{invoice.nama}</td>
                        </tr>
                        <tr>
                            <th>Alamat</th>
                            <td>{invoice.alamat}</td>
                        </tr>
                        <tr>
                            <th>Telp</th>
                            <td>{invoice.no_telpon}</td>
                        </tr>
                        <tr>
                            <th>Keterangan</th>
                            <td>{invoice.tgl_transaksi}</td>
                        </tr>
                        <Link
                            className='btn btn-primary'
                            to={`/invoice`}
                            >Back
                        </Link>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default InvoiceShow