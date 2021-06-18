import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class BarangIndex extends Component {

    constructor() {
        super()
        this.state = {
            barangs: [],
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
        axios.get('/api/barangs').then(response => {
            this.setState({
                barangs: response.data
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
        axios.delete(`/api/barang/delete/${id}`).then(response => {
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
                Deleted barang successfully
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
        const { barangs } = this.state
        return (
            <div className="container-fluid">
                <button className="btn btn-sm btn-primary mb-3" ><i className="fas fa-sm fa-plus" />
                    <Link className="collapse-item" 
                        to='/create'
                        >Tambah Barang
                    </Link>
                </button>
                <table className="table table-bordered table-striped table-hover" id="list_barang">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Stok</th>
                            <th>Gambar</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {barangs.map((barang, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{barang.nama_barang}</td>
                                <td>{barang.harga_barang}</td>
                                <td>{barang.stok_barang}</td>
                                <td><img class="mb-3" src={barang.gambar} style={{width: '200px'}}/></td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-success btn-sm mr-3"><i className="fas fa-search-plus"></i>
                                            <Link
                                                to={`/barang/${barang.id}`}
                                                >Detail
                                            </Link>
                                        </button>
                                        <button type="button" className="btn btn-primary btn-sm mr-3"><i className="fa fa-edit"></i> 
                                            <Link
                                                to={`/barang/edit/${barang.id}`}
                                                >Edit
                                            </Link>
                                        </button>
                                        <button type="button" 
                                            className="btn btn-danger btn-sm" 
                                            onClick={() => this.confirmDelete(barang.id)}
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

export default BarangIndex