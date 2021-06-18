import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class InvoiceCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            alamat: '',
            no_telpon: '',
            tgl_transaksi: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewInvoice = this.handleCreateNewInvoice.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
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
                Created invoice successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push('/invoice');
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleCreateNewInvoice(event) {
        event.preventDefault()
        const invoice = {
            nama: this.state.nama,
            alamat: this.state.alamat,
            no_telpon: this.state.no_telpon,
            tgl_transaksi: this.state.tgl_transaksi
        }
        axios.post('/api/invoice/store', invoice).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                return this.goToHome();
            }
        })
    }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render() {
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Create new Invoice</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateNewInvoice}>
                                <div className='form-group'>
                                        <label htmlFor='nama'>Nama</label>
                                        <input
                                        id='nama'
                                        type='text'
                                        className={`form-control ${this.hasErrorFor('nama') ? 'is-invalid' : ''}`}
                                        name='nama'
                                        value={this.state.nama}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('nama')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='alamat'>Alamat</label>
                                        <input
                                        id='alamat'
                                        type='text'
                                        className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                                        name='alamat'
                                        value={this.state.alamat}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('alamat')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='no_telpon'>No. Telpon</label>
                                        <input
                                        id='no_telpon'
                                        type='text'
                                        className={`form-control ${this.hasErrorFor('no_telpon') ? 'is-invalid' : ''}`}
                                        name='no_telpon'
                                        value={this.state.no_telpon}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('no_telpon')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='tgl_transaksi'>Tanggal Pembelian</label>
                                        <input
                                        id='tgl_transaksi'
                                        type='date'
                                        className={`form-control ${this.hasErrorFor('tgl_transaksi') ? 'is-invalid' : ''}`}
                                        name='tgl_transaksi'
                                        value={this.state.tgl_transaksi}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('tgl_transaksi')}
                                    </div>
                                    <Link
                                        className='btn btn-secondary'
                                        to={`/invoice`}
                                        >Back
                                    </Link>
                                    <button className='btn btn-primary'>Create</button>
                                    {this.state.alert}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InvoiceCreate