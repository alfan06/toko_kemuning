import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'

//Barang
import BarangIndex from './BarangIndex'
import BarangCreate from './BarangCreate'
import BarangShow from './BarangShow'
import BarangEdit from './BarangEdit'

//invoice
import InvoiceIndex from './Invoice/InvoiceIndex'
import InvoiceCreate from './Invoice/InvoiceCreate'
import InvoiceShow from './Invoice/InvoiceShow'
import InvoiceEdit from './Invoice/InvoiceEdit'

//pesanan
import PesananIndex from './Pesanan/PesananIndex'
import PesananCreate from './Pesanan/PesananCreate'
import PesananShow from './Pesanan/PesananShow'
import PesananEdit from './Pesanan/PesananEdit'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div id="wrapper">
                    <Header />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <Navbar/>
                        <Switch>
                        <Route exact path='/' component={BarangIndex}/>
                        <Route exact path='/create' component={BarangCreate} />
                        <Route path='/barang/edit/:id' component={BarangEdit} />
                        <Route path='/barang/:id' component={BarangShow} />
                        {/* invoice */}
                        <Route exact path='/invoice' component={InvoiceIndex}/>
                        <Route exact path='/invoiceCreate' component={InvoiceCreate} />
                        <Route path='/invoice/edit/:id' component={InvoiceEdit} />
                        <Route path='/invoice/:id' component={InvoiceShow} />
                        {/* pesanan */}
                        <Route exact path='/pesanan' component={PesananIndex}/>
                        <Route exact path='/pesananCreate' component={PesananCreate} />
                        <Route path='/pesanan/edit/:id' component={PesananEdit} />
                        <Route path='/pesanan/:id' component={PesananShow} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'))