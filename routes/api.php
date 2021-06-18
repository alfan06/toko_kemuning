<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/barangs', 'BarangController@index');
Route::post('/barang/store', 'BarangController@store');
Route::get('/barang/edit/{id}', 'BarangController@getBarang');
Route::get('/barang/{id}', 'BarangController@getBarang');
Route::put('/barang/{id}', 'BarangController@update');
Route::delete('/barang/delete/{id}', 'BarangController@delete');

//pesanan
Route::get('/pesanans', 'PesananController@index');
Route::post('/pesanan/store', 'PesananController@store');
Route::get('/pesanan/edit/{id}', 'PesananController@getPesanan');
Route::get('/pesanan/{id}', 'PesananController@getPesanan');
Route::put('/pesanan/{id}', 'PesananController@update');
Route::delete('/pesanan/delete/{id}', 'PesananController@delete');

//invoice
Route::get('/invoices', 'InvoiceController@index');
Route::post('/invoice/store', 'InvoiceController@store');
Route::get('/invoice/edit/{id}', 'InvoiceController@getInvoice');
Route::get('/invoice/{id}', 'InvoiceController@getInvoice');
Route::put('/invoice/{id}', 'InvoiceController@update');
Route::delete('/invoice/delete/{id}', 'InvoiceController@delete');