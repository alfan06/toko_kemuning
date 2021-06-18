<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    //
    protected $table = "invoice";
    protected $fillable = ['nama', 'alamat', 'no_telpon', 'tgl_transaksi'];
}
