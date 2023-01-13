<?php

namespace App\Http\Livewire;

use App\Caja;
use App\Sale;
use App\User;
use App\Table;
use App\Product;
use Carbon\Carbon;
use App\Sale_record;
use Livewire\Component;
use App\Events\CrearMesa;
use Illuminate\Support\Facades\DB;

class IndexMeseroRealtime extends Component
{
    public $listaPersonalizada ,$total, $cuenta;
    public $cuentas, $mesas;
    protected $listeners = [
        'echo:canal,ActualizarLista' => 'ecoActualizarListaMesa',
        'echo:canal,CrearMesa' => 'ecoCrearMesa',
        'echo:canal,EliminarMesa' => 'ecoEliminarMesa'
    ];

    public function ecoCrearMesa($array)
    {
        
        if($array['idusuario']==auth()->user()->id)
        {
            $this->dispatchBrowserEvent('alert',[
                'type'=>'success',
                'message'=>"Se abrio la mesa #".$array['numeromesa'].'!'
            ]);
        }
        
    }
    public function ecoActualizarListaMesa($array)
    {
        if($this->cuenta)
        {
            if($this->cuenta->id==$array['idcuenta'])
            {
                $this->mostrarLista($this->cuenta);
                
            }
        }
        
        
    }
    public function ecoEliminarMesa($array)
    {
        if($this->cuenta)
        {
            if($this->cuenta->id==$array['idcuenta'])
            {
                $this->emit('cerrarModalLista','hola');
                $this->emit('cerrarModal2','hola');
                $this->reset();
            }  
        }
       
        $this->dispatchBrowserEvent('alert',[
            'type'=>'warning',
            'message'=>"Se elimino la mesa #".$array['numeromesa'].'!'
        ]);
        
       
            //try {
                $cuenta=Sale::find($array['idcuenta']);
            
            if($cuenta->total!=0)
            {
                
                $mesero=$cuenta->usuario_id;
                $mesa=$cuenta->mesa_id;
                $total=$cuenta->total;
                $observacion=$cuenta->observacion;
                $cliente=$cuenta->comprador_id;
                $productos=$cuenta->products;
                
                $caja= Caja::whereDate('created_At',Carbon::today())->get();
                
              $cuentaguardada= Sale_record::create([
                  'usuario_id'=>$mesero,
                  'mesa_id'=>$mesa,
                  'total'=>$total,
                  'observacion'=>$observacion,
                  'comprador_id'=>$cliente,
                  'caja_id'=>$caja[0]->id,
                  'estado'=>$cuenta->estado
              ]);
              
            
             $sumaproductos = $productos->pluck('precioventa')->sum();
             foreach($productos as $prod)
             {
                 
                $cuentaguardada->products()->attach($prod->id);
        
             }
             $this->dispatchBrowserEvent('alert',[
                'type'=>'success',
                'message'=>"La mesa #".$cuenta->table->numero." fue archivada!"
            ]);
            
                
                $cuenta->products()->detach();
                $cuenta->delete();
                DB::table('cajas')->where('id','=',$caja[0]->id)->increment('monto_acumulado',$sumaproductos);
                DB::table('cajas')->where('id','=',$caja[0]->id)->increment('rockola_acumulado',$cuenta->rockola);
               
               
               
            }
            else{
                $this->dispatchBrowserEvent('alert',[
                    'type'=>'warning',
                    'message'=>"La mesa #".$cuenta->table->numero." fue borrada sin registros!"
                ]); 
                $cuenta->delete();
            }
            //} catch (\Throwable $th) {
                //throw $th;
           // }
            
       
        
       
    }
    public function crearMesa($idMesa)
    {
        
        $venta=Sale::create([
            'usuario_id'=>auth()->user()->id,
            'mesa_id'=>$idMesa,
            
        ]);
      
        $this->emit('cerrarModal');
        $mesa=Table::find($idMesa);
        event(new CrearMesa($idMesa,$mesa->numero,auth()->user()->id));
    }

    public function mostrarLista(Sale $cuenta)
    {
        $this->cuenta=$cuenta;
        $listafiltrada=$cuenta->pendientes->pluck('nombre');
        
        $lista=$cuenta->products->all();
        $total=$cuenta->products->pluck('precioventa')->sum();
        $cuenta->total=$total;
        $cuenta->save();
       
       $contando=$listafiltrada->countBy();
   
        $coleccion=collect($contando);
       
        $personalizado=collect();

        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

        }     
        //dd($personalizado);
        $this->listaPersonalizada=$personalizado;
        $this->total=$cuenta->total;
    }
    public function render()
    {
        $this->cuentas = Sale::where('usuario_id',auth()->user()->id)->orderBy('created_at','desc')->get();
       
        $this->mesas=Table::all();
        return view('livewire.index-mesero-realtime');
    }
}
