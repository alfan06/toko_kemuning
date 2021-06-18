<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    //
    public function index()
    {
        $invoices = \App\Invoice::all();
 
        return $invoices->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'alamat' => 'required',
            'no_telpon' => 'required',
            'tgl_transaksi' => 'required',
        ]);
 
        $project = \App\Invoice::create([
            'nama' => $validatedData['nama'],
            'alamat' => $validatedData['alamat'],
            'no_telpon' => $validatedData['no_telpon'],
            'tgl_transaksi' => $validatedData['tgl_transaksi'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Article created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getInvoice($id) // for edit and show
    {
        $invoice = \App\Invoice::find($id);
 
        return $invoice->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'alamat' => 'required',
            'no_telpon' => 'required',
            'tgl_transaksi' => 'required',
        ]);
 
        $invoice = \App\Invoice::find($id);
        $invoice->nama = $validatedData['nama'];
        $invoice->alamat = $validatedData['alamat'];
        $invoice->no_telpon = $validatedData['no_telpon'];
        $invoice->tgl_transaksi = $validatedData['tgl_transaksi'];
        $invoice->save();
 
        $msg = [
            'success' => true,
            'message' => 'Article updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $invoice = \App\Invoice::find($id);
        if(!empty($invoice)){
            $invoice->delete();
            $msg = [
                'success' => true,
                'message' => 'Invoice deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Invoice deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
