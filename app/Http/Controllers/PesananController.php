<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PesananController extends Controller
{
    //
    public function index()
    {
        $pesanans = \App\Pesanan::all();
 
        return $pesanans->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_invoice' => 'required',
            'id_barang' => 'required',
        ]);
 
        $project = \App\Pesanan::create([
            'id_invoice' => $validatedData['id_invoice'],
            'id_barang' => $validatedData['id_barang'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Article created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getPesanan($id) // for edit and show
    {
        $pesanan = \App\Pesanan::find($id);
 
        return $pesanan->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'id_invoice' => 'required',
            'id_barang' => 'required',
        ]);
 
        $pesanan = \App\Pesanan::find($id);
        $pesanan->id_invoice = $validatedData[' id_invoice '];
        $pesanan->id_barang = $validatedData[' id_barang '];
        $pesanan->save();
 
        $msg = [
            'success' => true,
            'message' => 'Article updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $pesanan = \App\Pesanan::find($id);
        if(!empty($pesanan)){
            $pesanan->delete();
            $msg = [
                'success' => true,
                'message' => 'Pesanan deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Pesanan deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
