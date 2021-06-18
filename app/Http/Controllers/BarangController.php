<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BarangController extends Controller
{
    //
    public function index()
    {
        $barangs = \App\Barang::all();
 
        return $barangs->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'nama_barang' => 'required',
          'harga_barang' => 'required',
          'stok_barang' => 'required',
          'keterangan_barang' => 'required',
          'gambar' => 'required',
        ]);
 
        $project = \App\Barang::create([
            'nama_barang' => $validatedData['nama_barang'],
            'harga_barang' => $validatedData['harga_barang'],
            'stok_barang' => $validatedData['stok_barang'],
            'keterangan_barang' => $validatedData['keterangan_barang'],
            'gambar' => $validatedData['gambar'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Article created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getBarang($id) // for edit and show
    {
        $barang = \App\Barang::find($id);
 
        return $barang->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nama_barang' => 'required',
            'harga_barang' => 'required',
            'stok_barang' => 'required',
            'keterangan_barang' => 'required',
            'gambar' => 'required',
        ]);
 
        $barang = \App\Barang::find($id);
        $barang->nama_barang = $validatedData['nama_barang'];
        $barang->harga_barang = $validatedData['harga_barang'];
        $barang->stok_barang = $validatedData['stok_barang'];
        $barang->keterangan_barang = $validatedData['keterangan_barang'];
        $barang->gambar = $validatedData['gambar'];
        $barang->save();
 
        $msg = [
            'success' => true,
            'message' => 'Article updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $barang = \App\Barang::find($id);
        if(!empty($barang)){
            $barang->delete();
            $msg = [
                'success' => true,
                'message' => 'Barang deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Barang deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}

    // //
    // public function index()
    // {
    //     $barangs = \App\Barang::all();
 
    //     return $barangs->toJson();
    // }
 
    // public function store(Request $request)
    // {
    //     $validatedData = $request->validate([
    //       'nama_barang' => 'required',
    //       'harga_barang' => 'required',
    //       'stok_barang' => 'required',
    //       'keterangan_barang' => 'required',
    //       'gambar' => 'required',
    //     ]);
 
    //     $project = \App\Barang::create([
    //       'nama_barang' => $validatedData['nama_barang'],
    //       'harga_barang' => $validatedData['harga_barang'],
    //       'stok_barang' => $validatedData['stok_barang'],
    //       'keterangan_barang' => $validatedData['keterangan_barang'],
    //       'gambar' => $validatedData['gambar'],
    //     ]);
 
    //     $msg = [
    //         'success' => true,
    //         'message' => 'Barang created successfully!'
    //     ];
 
    //     return response()->json($msg);
    // }
 
    // public function getBarang($id) // for edit and show
    // {
    //     $barang = \App\Barang::find($id);
 
    //     return $barang->toJson();
    // }
 
    // public function update(Request $request, $id)
    // {
    //     $validatedData = $request->validate([
    //         'nama_barang' => 'required',
    //         'harga_barang' => 'required',
    //         'stok_barang' => 'required',
    //         'keterangan_barang' => 'required',
    //         'gambar' => 'required',
    //     ]);
 
    //     $barang = \App\Barang::find($id);
    //     $barang->nama_barang = $validatedData['nama_barang'];
    //     $barang->harga_barang = $validatedData['harga_barang'];
    //     $barang->stok_barang = $validatedData['stok_barang'];
    //     $barang->keterangan_barang = $validatedData['keterangan_barang'];
    //     $barang->gambar = $validatedData['gambar'];
    //     $barang->save();
 
    //     $msg = [
    //         'success' => true,
    //         'message' => 'Barang updated successfully'
    //     ];
 
    //     return response()->json($msg);
    // }
 
    // public function delete($id)
    // {
    //     $barang = \App\Barang::find($id);
    //     if(!empty($barang)){
    //         $barang->delete();
    //         $msg = [
    //             'success' => true,
    //             'message' => 'Barang deleted successfully!'
    //         ];
    //         return response()->json($msg);
    //     } else {
    //         $msg = [
    //             'success' => false,
    //             'message' => 'Barang deleted failed!'
    //         ];
    //         return response()->json($msg);
    //     }
    // }
