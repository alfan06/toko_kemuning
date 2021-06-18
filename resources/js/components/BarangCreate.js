import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class BarangCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nama_barang: '',
            harga_barang: '',
            stok_barang: '',
            keterangan_barang: '',
            gambar: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewBarang = this.handleCreateNewBarang.bind(this)
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
                Created barang successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push('/');
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleCreateNewBarang(event) {
        event.preventDefault()
        const barang = {
            nama_barang: this.state.nama_barang,
            harga_barang: this.state.harga_barang,
            stok_barang: this.state.stok_barang,
            keterangan_barang: this.state.keterangan_barang,
            gambar: this.state.gambar
        }
        axios.post('/api/barang/store', barang).then(response => {
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
                            <div className='card-header'>Create new project</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateNewBarang}>
                                <div className='form-group'>
                                        <label htmlFor='nama_barang'>Nama Barang</label>
                                        <input
                                        id='nama_barang'
                                        type='text'
                                        className={`form-control ${this.hasErrorFor('nama_barang') ? 'is-invalid' : ''}`}
                                        name='nama_barang'
                                        value={this.state.nama_barang}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('nama_barang')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='harga_barang'>Harga Barang</label>
                                        <input
                                        id='harga_barang'
                                        type='number'
                                        className={`form-control ${this.hasErrorFor('harga_barang') ? 'is-invalid' : ''}`}
                                        name='harga_barang'
                                        value={this.state.harga_barang}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('harga_barang')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='stok_barang'>Stok Barang</label>
                                        <input
                                        id='stok_barang'
                                        type='number'
                                        className={`form-control ${this.hasErrorFor('stok_barang') ? 'is-invalid' : ''}`}
                                        name='stok_barang'
                                        value={this.state.stok_barang}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('stok_barang')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='keterangan_barang'>Keterangan Barang</label>
                                        <input
                                        id='keterangan_barang'
                                        type='text'
                                        className={`form-control ${this.hasErrorFor('keterangan_barang') ? 'is-invalid' : ''}`}
                                        name='keterangan_barang'
                                        value={this.state.keterangan_barang}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('keterangan_barang')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='gambar'>Gambar</label>
                                        <input
                                        id='gambar'
                                        type='text'
                                        className={`form-control ${this.hasErrorFor('gambar') ? 'is-invalid' : ''}`}
                                        name='gambar'
                                        value={this.state.gambar}
                                        onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('gambar')}
                                    </div>
                                    <Link
                                        className='btn btn-secondary'
                                        to={`/`}
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
export default BarangCreate