import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

    class PesananEdit extends Component {
     constructor (props) {
        super(props)
        this.state = {
            id_pesanan: '',
            id_barang: '',
            alert: null,
            message:'',
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleUpdatePesanan = this.handleUpdatePesanan.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
      }
 
      handleFieldChange (event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
 
      componentDidMount () {
 
        const pesananId = this.props.match.params.id
 
        axios.get(`/api/pesanan/edit/${pesananId}`).then(response => {
          this.setState({
            id_invoice: response.data.id_invoice,
            id_barang: response.data.id_barang
          })
        })
      }
 
      goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                {this.state.message}
            </SweetAlert>
          );
          this.setState({
            alert: getAlert()
          });
      }
 
      onSuccess() {
        this.props.history.push('/pesanan');
      }
 
      hideAlert() {
        this.setState({
          alert: null
        });
      }
 
      handleUpdatePesanan (event) {
        event.preventDefault()
 
        const pesanan = {
            id_invoice: this.state.id_invoice,
            id_barang: this.state.id_barang
        }
 
        const pesananId = this.props.match.params.id
 
        axios.put(`/api/pesanan/${pesananId}`, pesanan)
          .then(response => {
            // redirect to the homepage
            var msg = response.data.success;
            if(msg == true){
                this.setState({
                    message: response.data.message
                })
                return this.goToHome();
            }
 
          });
      }
 
      hasErrorFor (field) {
        return !!this.state.errors[field]
      }
 
      renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
          return (
            <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
          )
        }
      }
 
      render () {
        const { pesanan } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Update Pesanan</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleUpdatePesanan}>
                      <div className='form-group'>
                        <label htmlFor='id_invoice'>Invoice</label>
                        <input
                          id='id_invoice'
                          className={`form-control ${this.hasErrorFor('id_invoice') ? 'is-invalid' : ''}`}
                          name='id_invoice'
                          value={this.state.id_invoice}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('id_invoice')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='id_barang'>Barang</label>
                        <input
                          id='id_barang'
                          className={`form-control ${this.hasErrorFor('id_barang') ? 'is-invalid' : ''}`}
                          name='id_barang'
                          value={this.state.id_barang}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('id_barang')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/pesanan`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Update</button>
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
export default PesananEdit