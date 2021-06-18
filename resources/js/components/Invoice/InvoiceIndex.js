import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class InvoiceIndex extends Component {

    constructor() {
        super()
        this.state = {
            invoices: [],
            msg: null,
            type: null,
            flash: false,
            alert: null,
        }
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    componentDidMount() {
        axios.get('/api/invoices').then(response => {
            this.setState({
                invoices: response.data
            })
        })
    }

    confirmDelete(id) {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus Deh"
                cancelBtnText="Nggak Jadi"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Tunggu ..."
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
            >
                Kalau udah dihapus, nggak bakal balik lagi.
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    deleteItem(id) {
        axios.delete(`/api/invoice/delete/${id}`).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                this.hideAlert();
                this.goToHome();
            }
        })
    }

    goToHome() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess()}
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
            >
                Deleted invoice successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.componentDidMount();
        this.hideAlert();
    }

    render() {
        const { invoices } = this.state
        return (
            <div className="container-fluid">
                <button className="btn btn-sm btn-primary mb-3" ><i className="fas fa-sm fa-plus" />
                    <Link className="collapse-item" 
                        to='/invoiceCreate'
                        >Tambah Invoice
                    </Link>
                </button>
                <table className="table table-bordered table-striped table-hover" id="list_invoice">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>No. Telp</th>
                            <th>Tgl_transaksi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{invoice.nama}</td>
                                <td>{invoice.alamat}</td>
                                <td>{invoice.no_telpon}</td>
                                <td>{invoice.tgl_transaksi}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-success btn-sm mr-3"><i className="fas fa-search-plus"></i>
                                            <Link
                                                to={`/invoice/${invoice.id}`}
                                                >Detail
                                            </Link>
                                        </button>
                                        <button type="button" className="btn btn-primary btn-sm mr-3"><i className="fa fa-edit"></i> 
                                            <Link
                                                to={`/invoice/edit/${invoice.id}`}
                                                >Edit
                                            </Link>
                                        </button>
                                        <button type="button" 
                                            className="btn btn-danger btn-sm" 
                                            onClick={() => this.confirmDelete(invoice.id)}
                                            >Hapus
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.state.alert}
            </div>
        )
    }
}

export default InvoiceIndex