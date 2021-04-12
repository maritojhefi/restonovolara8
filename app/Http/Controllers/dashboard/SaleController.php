<?php

namespace App\Http\Controllers\dashboard;

use App\Sale;
use App\User;
use App\Table;
use App\Product;
use App\Categoria;
use App\Number_ticket;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Mike42\Escpos\EscposImage;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Mike42\Escpos\CapabilityProfile;
use Rawilk\Printing\Facades\Printing;
use Rawilk\Printing\Contracts\Printer;
use App\Events\OrderStatusChangedEvent;
use Illuminate\Database\Eloquent\Builder;
use Rawilk\Printing\Receipts\ReceiptPrinter;
use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;

class SaleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function cuentasActivas()
    {

        $meseros = User::whereHas('rol', function (Builder $query) {
            $query->where('nombre', 'like', 'Mesero');
        })->get();
        
    
        $cuentas = Sale::all();
        
        return view('dashboard.ventasdiarias.index',compact('meseros','cuentas'));
    }
    public function editarCuenta(Sale $cuenta)
    {
        $productos=Product::where('estado','activo')->get();
        $catcomidas=Categoria::where('tipo','comida')->get();
        $catbebidas=Categoria::where('tipo','bebida')->get();
        $cabecera="mesa #".$cuenta->table->numero;
        return view('dashboard.ventasdiarias.edit',compact('catcomidas','catbebidas','cuenta','productos','cabecera'));
    }
    public function revisarMesaAjax(Request $request)
    {
       $estado="";
        $mesaexiste=false;
        $mesas=Table::pluck('numero');
        foreach($mesas as $mesa)
        {
            if($mesa==$request->mesa)
            {
                $mesaexiste=true;
            }
            
        }
        if($mesaexiste==true)
        {
         
            $cuentas= Sale::all();
            foreach($cuentas as $b)
            {
                if($b->table)
                {
                    
                    if(  $b->table->numero==$request->mesa)
                    {
                        
                        $estado="mesaocupada";
                      
                        break;
                    }
                 
                }
                
               
              
    
            }
          
        }
        else
        {
           $estado="mesanoexiste";
        }
        
        echo $estado;
    }

    public function crearMesaActiva(Request $request)
    {
       
    $mesa=0;
    $mesas=Table::all()->where('numero',$request->mesa_id);
   
    if($mesas->count()==0)
    {
        return back()->with('danger','La mesa no existe!');

    }
    else
    {
        foreach($mesas as $mesass)
        {
            if($mesass)
            {
                $mesa=$mesass->id; 
                $request->validate([
                    'mesa_id'=>'required|unique:sales|integer|max:25',
                  
                    'mesero'=>'required',
                    'observacion'=>''
                ]);
                Sale::create([
                    'usuario_id'=>$request->mesero,
                    'mesa_id'=>$mesa,
                    'observacion'=>$request->observacion,
                ]);
                return back()->with('success','Mesa: '.$mesass->numero.' creada');
                break;
            }
            
        }
    }
    
         
       
    }
    public function anadirALista(Request $request)
    {
        
        $cuenta = Sale::find($request->id_sale);
        $producto=Product::find($request->id);
        if($producto->cantidad>0)
        {
            DB::table('sales')->where('id','=',$request->id_sale)->increment('total',$producto->precioventa);
            DB::table('products')->where('id','=',$request->id)->decrement('cantidad',1);
            $cuenta->products()->attach($request->id);
        }
        else{
            echo 'agotado';
        }
    }

    public function mostrarLista(Request $request)
    {
        $cuenta = Sale::find($request->id_sale);
        $listafiltrada=$cuenta->pendientes->pluck('nombre');
        
        $lista=$cuenta->products->all();
        $total=$cuenta->products->pluck('precioventa')->sum();
        DB::table('sales')
        ->where('id', $cuenta->id)
        ->update(['total' => $total]);
       
       $contando=$listafiltrada->countBy();
   
        $coleccion=collect($contando);
       
        $personalizado=collect();

        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

        }     
        return response($personalizado);   
    }
    
    public function deleteproductocuenta(Request $request)
    {
        $cuenta = Sale::find($request->id_sale);
        $producto=Product::find($request->id_producto);
       
        for ($i=1; $i <= $request->cantidad; $i++) { 
            DB::table('sales')->where('id','=',$request->id_sale)->decrement('total',$producto->precioventa);
            $cuenta->pendientes()->detach($request->id_producto);
        }
        DB::table('products')->where('id','=',$request->id_producto)->increment('cantidad',$request->cantidad);

        $listafiltrada=$cuenta->pendientes->pluck('nombre');
        $total=$cuenta->products->pluck('precioventa')->sum();
        $contando=$listafiltrada->countBy();
        $coleccion=collect($contando);
        $personalizado=collect();

        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

        }     
        return response($personalizado);  

        
    }

    public function sumarproducto(Request $request)
    {
        $cuenta = Sale::find($request->id_sale);
        $producto=Product::find($request->id_producto);
       $agotado="agotado";
        if($producto->cantidad>0)
        {
            DB::table('sales')->where('id','=',$request->id_sale)->increment('total',$producto->precioventa);
            DB::table('products')->where('id','=',$request->id_producto)->decrement('cantidad',1);

            $cuenta->products()->attach($request->id_producto);
            
            $listafiltrada=$cuenta->pendientes->pluck('nombre');
            $total=$cuenta->products->pluck('precioventa')->sum();
            $contando=$listafiltrada->countBy();
            $coleccion=collect($contando);
            $personalizado=collect();
    
            foreach($coleccion as $nombre=>$cantidad)
            {
                $producto=Product::where('nombre',$nombre)->first();
               $subtotal=$producto->precioventa*$cantidad;
                $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);
    
            }     
            return response($personalizado);  
        }
        else
        {
            echo 'agotado';
        }
        
    }
   

    public function deletecuenta(Sale $cuenta)
    {
        $cuenta->delete();
        $cuenta->products()->detach();
        return back()->with('success','La mesa: '. $cuenta->table->numero.' fue eliminada!');
    }
    public function cobrar(Sale $cuenta)
    {
        $cuenta = Sale::find($cuenta->id);
        $idcuenta=$cuenta->id;

        $listafiltrada=$cuenta->products->pluck('nombre');
        $total=$cuenta->products->pluck('precioventa')->sum();
        DB::table('sales')
        ->where('id', $cuenta->id)
        ->update(['total' => $total]);
        $contando=$listafiltrada->countBy();
        $coleccion=collect($contando);
        $personalizado=collect();

        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

        }     
        $numeromesa=$cuenta->table->numero;
        $cabecera="Cuenta #".$numeromesa;
        if($total==0){
            return back()->with('danger','La cuenta '.$numeromesa.' no tiene ningun producto agregado');

        }
        else{
            return view('dashboard.ventasdiarias.cobrar',compact('cabecera','personalizado','total','numeromesa','idcuenta'));

        }
    }

    public function impresoralaravel(){

        $receiptPrinterId=70259292;
        $receipt = (string) (new ReceiptPrinter)
    ->centerAlign()
    ->text('My heading')
    ->leftAlign()
    ->line()
    ->twoColumnText('Item 1', '2.00')
    ->twoColumnText('Item 2', '4.00')
    ->feed(2)
    ->centerAlign()
    ->barcode('1234')
    ->cut();

// Now send the string to your receipt printer
Printing::newPrintTask()
    ->printer($receiptPrinterId)
    ->content($receipt)
    ->send();

        
    }
    public function imprimir(Sale $cuenta)
    {
        $cuenta = Sale::find($cuenta->id);
       

        $listafiltrada=$cuenta->products->pluck('nombre');
        $total=$cuenta->products->pluck('precioventa')->sum();
        $contando=$listafiltrada->countBy();
        $coleccion=collect($contando);
        $personalizado=collect();
        DB::table('sales')
          ->where('id', $cuenta->id)
          ->update(['estado' => "finalizado"]);

//actualizar mediante vue el estado
        event(new OrderStatusChangedEvent($cuenta));

        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

        }     
        $numeromesa=$cuenta->table->numero;
 
        $profile= CapabilityProfile::load('simple');
        $nombre_impresora = "POS-582"; 
        $connector = new WindowsPrintConnector("smb://INTEL:jhefi123@DESKTOP-M8AETTU/".$nombre_impresora);
        $printer = new Printer($connector, $profile);
        $printer->setJustification(Printer::JUSTIFY_CENTER);
    
            
        
        $printer->setTextSize(1, 2);
        $printer->text("Rincon Tomateno Restaurant" . "\n");
       
        $printer->feed(1);
        $printer->setTextSize(1, 1);
        $printer->text("A Orillas del Guadalquivir" . "\n");
        $printer->text(date("Y-m-d H:i:s") . "\n");

        $printer->feed(1);
        $printer->setTextSize(2, 2);
        $printer->text("--------------\n");
        $printer->setTextSize(1, 1);
          foreach ($personalizado as $list) {
         
            

            /*Alinear a la izquierda para la cantidad y el nombre*/
            $printer->setJustification(Printer::JUSTIFY_LEFT);
            $printer->text($list['cantidad'] . "x " . $list['nombre'] ."(Bs ".$list['precio']." c/u)". "\n");
         
            /*Y a la derecha para el importe*/
            $printer->setJustification(Printer::JUSTIFY_RIGHT);
            $printer->text(' Bs ' . $list['subtotal'] . "\n");
        }
        $printer->text("--------\n");
        $printer->text("TOTAL: Bs ". $total ."\n");
        $printer->text("Muchas gracias por su compra!\n");
        $printer->feed(3);
       
        $printer->close();
      

    return back()->with('success','La cuenta '.$numeromesa.' ahora esta finalizada!')->with('borrar','boton borrado');


  
    }

    public function listarmesasMesero()
    {
       
        $mesero=auth()->user()->name;
        $nombre=Str::of($mesero)->explode(' ');
        
        $cabecera="Tus cuentas ".$nombre[0];
        $cuentas = Sale::where('usuario_id',auth()->user()->id)->get();
        
        return view('dashboard.ventasdiarias.indexMesero',compact('cuentas','cabecera'));
    }

    public function imprimirpedidomesero(Sale $cuenta)
    {
        $lista= Sale::find($cuenta->id);
        $listapendientes= $lista->pendientes->pluck('nombre');  
        $contando=$listapendientes->countBy();

        //sumar # de ticket para boleta
        $tickets=Number_ticket::pluck('numero')->max();
        $tickets=$tickets+1;
        Number_ticket::create([
            'numero'=>$tickets
        ]);
        
        if($contando->count()>0)
        {
            $nombre=Str::of($cuenta->user->name)->explode(' ');

        
            $nombre_impresora = "POS-582"; 
            $profile= CapabilityProfile::load('simple');
            $connector = new WindowsPrintConnector($nombre_impresora);
            $printer = new Printer($connector ,$profile);
            $printer->setTextSize(2, 2);
            $printer->text("#".$tickets."\n");
            $printer->setTextSize(2, 1);
            $printer->text("Mesero:".$nombre[0]."\n");
            $printer->setJustification(Printer::JUSTIFY_RIGHT);
            $printer->setTextSize(1, 1);
            $printer->text("Nro Mesa:".$cuenta->table->numero."\n");
            $printer->setJustification(Printer::JUSTIFY_LEFT);
    
            $printer->setTextSize(2, 1);
    
              foreach ($contando as $nombre=>$cantidad) {
                $printer->setJustification(Printer::JUSTIFY_LEFT);
                $printer->text($nombre .' x '.$cantidad. "\n");
                
            }
            $printer->setJustification(Printer::JUSTIFY_CENTER);
    
            $printer->text("---------------"."\n");
          
          
            $printer->feed(3);
           
            $printer->close();
    
    
    
    
    
            DB::table('product_sale')
                  ->where('sale_id', $cuenta->id)
                  ->update(['estado_actual' => 'impreso']);
    
    
                  
                  return back()->with('success','Pedido impreso!');
        }
        else
        {
            return back()->with('danger','Agregue nuevos productos a la lista!');

        }
       
    }
}
