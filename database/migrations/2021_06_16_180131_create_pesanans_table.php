<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePesanansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pesanan', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->BigInteger('id_invoice')->unsigned();
            $table->BigInteger('id_barang')->unsigned();
            $table->timestamps();

            $table->foreign('id_invoice')
                ->references('id')
                ->on('invoice');

            $table->foreign('id_barang')
                ->references('id')
                ->on('barang');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pesanans');
    }
}
