<?php

namespace App\Http\Livewire;

use App\Sale;
use App\User;
use App\Product;
use App\Events\Mensaje;
use Livewire\Component;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;

class MesasActivas extends Component
{
    public $personalizado;
    public $cuentaactual;
    public $show;
    protected $listeners = ['echo:canal,Mensaje' => 'render'];
    
    public function cuentatotal(Sale $sale)
    {
        $this->emit('hidemodal');
        $this->emit('showmodal');
        $this->cuentaactual=$sale;
        $listafiltrada=$sale->pendientes->pluck('nombre');
        
        $lista=$sale->products->all();
        $total=$sale->products->pluck('precioventa')->sum();
        DB::table('sales')
        ->where('id', $sale->id)
        ->update(['total' => $total]);
       
       $contando=$listafiltrada->countBy();
   
        $coleccion=collect($contando);
       
        $this->personalizado=collect();

        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $this->personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

        }     
         
       
       
    }

    public function deleteproductos(Product $producto, $cantidad)
    {
        $this->emit('hidemodal');
        $this->emit('showmodal');
        $cuenta = Sale::find($this->cuentaactual->id);
       
            for ($i=1; $i <= $cantidad; $i++) { 
            
                DB::table('sales')->where('id','=',$this->cuentaactual->id)->decrement('total',$producto->precioventa);
                $cuenta->products()->detach($producto->id);
            }
            DB::table('products')->where('id','=',$producto->id)->increment('cantidad',$cantidad);
            

      
    }
    public function render()
    {
      
        $cuentas = Sale::orderBy('created_at','desc')->get();
        return view('livewire.mesas-activas',compact('cuentas'));
    }
}
