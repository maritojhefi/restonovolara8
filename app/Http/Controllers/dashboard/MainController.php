<?php

namespace App\Http\Controllers\dashboard;

use App\Sale;
use App\User;
use App\Empresa;
use Carbon\Carbon;
use App\Sale_record;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('cliente');
        $this->middleware('admin')->except('index');

    }
    public function index()
    {
        $coleccion=collect();
        if(auth()->user()->rol_id==3){
            $ventas=Sale_record::where('usuario_id',auth()->user()->id)->whereDate('created_at',Carbon::today())->orderBy('created_at','desc')->get();
            $ventasabiertas=Sale::where('usuario_id',auth()->user()->id)->whereDate('created_at',Carbon::today())->get();
        }
        else if(auth()->user()->rol_id==5)
        {
            $ventas=Sale_record::whereDate('created_at',Carbon::today())->orderBy('created_at','desc')->get();
            $ventasabiertas=Sale::whereDate('created_at',Carbon::today())->get();
            $reporte=Sale_record::whereDate('created_at',Carbon::today())->pluck('usuario_id');
           $usuarios=$reporte->countBy();
           
           foreach($usuarios as $usuario=>$numeromesas){
            $cuentass=Sale_record::where('usuario_id',$usuario)->whereDate('created_at',Carbon::today())->pluck('total');
            $mesero=User::find($usuario);
            $total=$cuentass->sum();
               $coleccion->prepend(['mesero'=>$mesero->name,'mesas'=>$numeromesas,'total'=>$total]);
           }
           
        }
       

        $numeroventas=$ventas->count();
        $numeroventasabiertas=$ventasabiertas->count();
        $totalvendido=0;
        $totalvendidoabierto=0;
        foreach($ventas as $venta){
            $totalvendido=$totalvendido+$venta->total;
        }
        foreach($ventasabiertas as $venta){
            $totalvendidoabierto=$totalvendidoabierto+$venta->total;
        }
        
        return view('dashboard.empresa.dashboard', compact('ventas','ventasabiertas','numeroventas','numeroventasabiertas','totalvendido','totalvendidoabierto','coleccion'));
    }
    public function configuracion()
    {
        $datos=Empresa::find(1);
        return view('dashboard.empresa.info', compact('datos'));
    }
}
