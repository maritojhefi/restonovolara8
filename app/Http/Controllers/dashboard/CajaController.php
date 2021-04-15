<?php

namespace App\Http\Controllers\dashboard;

use App\Caja;
use App\Product;
use Carbon\Carbon;
use App\Sale_record;
use App\Number_ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class CajaController extends Controller
{
    public function cajaactiva()
    {
        $cajaactiva=Caja::whereDate('created_at',Carbon::today())->get();
        $coleccion=collect();
        $personalizadocomida=collect();
        $personalizadobebida=collect();
        if($cajaactiva->count()!=0)
        {
            foreach($cajaactiva as $caja)
            {
                if($caja->estado=='activo')
         
             {
                 $cuentas=Sale_record::where('caja_id',$cajaactiva[0]->id)->get();
                 
                 foreach($cuentas as $list)
                 {
                    if($list->products!=null)
                    {
                       foreach($list->products as $lista)
                       {
                        $coleccion->prepend(['nombre'=>$lista->nombre]);
                       
                       }
                    }
    
                 }
                $agrupado=$coleccion->pluck('nombre')->countBy();
                foreach($agrupado as $nombre=>$cantidad)
                        {
                            $producto=Product::where('nombre',$nombre)->first();
                           $subtotal=$producto->precioventa*$cantidad;
                           if($producto->genero=='bebida')
                           {
                            $personalizadobebida->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);
                           }
                           else if($producto->genero=='comida')
                           {
                            $personalizadocomida->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

                           }
                        }
                        //ordenando por cantidad
                        $comida=$personalizadocomida->sortByDesc('cantidad');
                       $comida= $comida->values()->all();
                       $bebida=$personalizadobebida->sortByDesc('cantidad');
                       $bebida= $bebida->values()->all();
                        
                return view('dashboard.ventasdiarias.cajaactiva', compact('bebida','comida','caja'));
                break;
             }
             else
             {
                 return back()->with('danger','Active la caja diaria primero para realizar transacciones');
             }
            }   
        }
        else
        {
            return back()->with('danger','Active la caja diaria primero para realizar transacciones');

        }
        
    }
    public function activarcaja()
    {  
     
        $cajaactiva=Caja::whereDate('created_at',Carbon::today())->get();
      
        foreach($cajaactiva as $caja)
        {
            if($caja->estado=='activo')
            {
               
               return view('dashboard.ventasdiarias.cajaactiva', compact('caja'))->with('info','Sin cambios, la caja se encuentra abierta');
               
            }
            else if($caja->estado=='finalizado')
            {
                $caja->estado='activo';
                $caja->save();
                
                return view('dashboard.ventasdiarias.cajaactiva', compact('caja'))->with('info','La caja diaria fue abierta de nuevo!');

            }
        }

        $caja=Caja::create([
            'estado' => 'activo',
        ]);
        Number_ticket::truncate();

        return back()->with('success','Acaba de aperturar la caja de hoy!');

       
    }
    public function finalizarcaja(Caja $caja)
    {
        DB::table('cajas')
        ->where('id', $caja->id)
        ->update(['estado' => 'finalizado']);

        return Redirect::route('principal')->with('success','Caja cerrada con exito!');
    }
}
