<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/barangs', 'app');
Route::view('/barang/edit/{id}', 'app');
Route::view('/barang/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');
//invoice
Route::view('/invoices', 'app');
Route::view('/invoice/edit/{id}', 'app');
Route::view('/invoice/{id}', 'app');
//pesanan
Route::view('/pesanans', 'app');
Route::view('/pesanan/edit/{id}', 'app');
Route::view('/pesanan/{id}', 'app');
