<?php

namespace App\Http\Controllers\dashboard;

use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AlmacenController extends Controller
{
    public function stockindex(Request $request){
        if($request->buscar)
        {
            $productos=Product::where('nombre','like','%'.$request->buscar.'%')->orWhere('estado','like','%'.$request->buscar.'%')->orWhere('genero','like','%'.$request->buscar.'%')->orderBy('cantidad','asc')->simplePaginate(10);

        }
        else{
            $productos=Product::orderBy('cantidad','asc')->simplePaginate(10);

        }
        $cantidad = $productos->count();
        return view('dashboard.almacen.stock',compact('productos','cantidad'));
    }

    public function cambiarstock(Request $request){
        $producto=Product::find($request->idproducto);
        $producto->cantidad=$request->nuevacantidad;
        $producto->update();
        return back()->with('success','El producto: '.$producto->nombre.' tiene un nuevo stock de: '.$request->nuevacantidad);
    }
    public function cambiarestado(Request $request){
        $producto= Product::find($request->id);
        if($producto->estado=='activo')
        {
            $producto->estado='inactivo';
            $producto->update();
            echo 'inactivo';
        }
        else
        {
            $producto->estado='activo';
            $producto->update();
            echo 'activo';
        }
    }
}
