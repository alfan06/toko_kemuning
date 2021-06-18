<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    //
    protected $table = "pesanan";
    protected $fillable = ['id_invoice', 'id_barang'];
}
