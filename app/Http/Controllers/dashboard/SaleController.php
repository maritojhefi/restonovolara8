<?php

namespace App\Http\Controllers\dashboard;

use App\Caja;
use App\Sale;
use App\User;
use App\Table;
use App\Product;
use App\Categoria;

use Carbon\Carbon;
use App\Sale_record;
use App\Number_ticket;
use Mike42\Escpos\Printer;
use Illuminate\Support\Str;
use App\Helpers\CustomPrint;
use Illuminate\Http\Request;
use Mike42\Escpos\EscposImage;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Mike42\Escpos\CapabilityProfile;
use Rawilk\Printing\Facades\Printing;
use App\Events\OrderStatusChangedEvent;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Database\Eloquent\Builder;
use Rawilk\Printing\Receipts\ReceiptPrinter;
use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;

class SaleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('ifcajaopen');
        $this->middleware('printernotfound');
    }
    public function cuentasActivas()
    {

        $meseros = User::whereHas('rol', function (Builder $query) {
            $query->where('nombre', 'like', 'Mesero');
        })->get();
        
    
        $cuentas = Sale::orderBy('created_at','desc')->get();
        
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

    public function creartokenmesa(Sale $id)
    {
        if($id->token!=null)
        {
            $profile= CapabilityProfile::load('simple');
            $nombre_impresora = "POS-582"; 
            $connector = new WindowsPrintConnector("smb://INTEL:jhefi123@DESKTOP-M8AETTU/".$nombre_impresora);
            $printer = new Printer($connector, $profile);
            $printer->setJustification(Printer::JUSTIFY_CENTER);
            $printer->setTextSize(1, 2);
            $printer->text("Clave para acceder al sistema:" . "\n");
           
            $printer->feed(1);
            $printer->setTextSize(2, 2);
            $printer->text($id->token. "\n");
            $printer->feed(1);
            $printer->setTextSize(1, 1);
            $printer->text("Mesa # ".$id->table->numero."\n");
            $printer->text(Carbon::now()."\n");

            $printer->setTextSize(2, 2);
            $printer->text("--------------\n");
            $printer->setTextSize(1, 1);
            $printer->text("Valido hasta el cierre de cuenta\n");
            $printer->feed(3);
            //convertimos en array y recorremos hasta obtener el string para enviar al helper de impresion
            $lista= collect($printer);      
            $cont=0;    
            $listastring="";
            foreach($lista as $p)
            {
                $cont++;
                if($cont==2)
                {
                    $boleta=collect($p);           
                    foreach($boleta as $asd)
                    {         
                            for ($i=0; $i < collect($asd)->count() ; $i++) { 
                        $listastring=$listastring.$asd[$i];             
                    }
                    break;              
                    }         
                }
            }
            //helper para imprimir por api
          CustomPrint::imprimir($listastring);
           return back()->with('info','La mesa ya tiene el token: '.$id->token); 

        }
        else
        {
           
            $id->token=rand ( 10000 , 99999 );
            
            $id->update();
            $profile= CapabilityProfile::load('simple');
            $nombre_impresora = "POS-582"; 
            $connector = new WindowsPrintConnector("smb://INTEL:jhefi123@DESKTOP-M8AETTU/".$nombre_impresora);
            $printer = new Printer($connector, $profile);
            $printer->setJustification(Printer::JUSTIFY_CENTER);
        
                
            
            $printer->setTextSize(1, 2);
            $printer->text("Clave para acceder al sistema" . "\n");
           
            $printer->feed(1);
            $printer->setTextSize(2, 2);
            $printer->text($id->token. "\n");
            $printer->feed(1);
            $printer->setTextSize(1, 1);
            $printer->text("Mesa # ".$id->table->numero."\n");
            $printer->text(Carbon::now()."\n");

            $printer->setTextSize(2, 2);
            $printer->text("--------------\n");
            $printer->setTextSize(1, 1);
            $printer->text("Valido hasta el cierre de cuenta\n");
            $printer->feed(3);
            //convertimos en array y recorremos hasta obtener el string para enviar al helper de impresion
            $lista= collect($printer);      
            $cont=0;    
            $listastring="";
            foreach($lista as $p)
            {
                $cont++;
                if($cont==2)
                {
                    $boleta=collect($p);           
                    foreach($boleta as $asd)
                    {         
                            for ($i=0; $i < collect($asd)->count() ; $i++) { 
                        $listastring=$listastring.$asd[$i];             
                    }
                    break;              
                    }         
                }
            }
            //helper para imprimir por api
          CustomPrint::imprimir($listastring);
            return back()->with('success','Se creo token para la mesa '.$id->table->numero.': '.$id->token);
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
    public function mostrarListaCompleta(Request $request)
    {
        $cuenta = Sale::find($request->id_sale);
        $listafiltrada=$cuenta->products->pluck('nombre');
        
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
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id,'idmesa'=>$cuenta->id]);

        }     
        return response($personalizado);   
    }
    public function deletecuenta(Sale $cuenta)
    {
        $cuenta->delete();
        return back()->with('info','La mesa #'.$cuenta->table->numero.' fue borrada');
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
    public function deleteproductocuentaCompleta(Request $request)
    {
        $cuenta = Sale::find($request->id_sale);
        $producto=Product::find($request->id_producto);
       
        for ($i=1; $i <= $request->cantidad; $i++) { 
            DB::table('sales')->where('id','=',$request->id_sale)->decrement('total',$producto->precioventa);
            $cuenta->products()->detach($request->id_producto);
        }
        DB::table('products')->where('id','=',$request->id_producto)->increment('cantidad',$request->cantidad);

        $listafiltrada=$cuenta->products->pluck('nombre');
        $total=$cuenta->products->pluck('precioventa')->sum();
        $contando=$listafiltrada->countBy();
        $coleccion=collect($contando);
        $personalizado=collect();

        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id,'idmesa'=>$cuenta->id]);

        }     
        return response($personalizado);  

        
    }

   
    public function sumarproducto(Request $request)
    {
        $cuenta = Sale::find($request->id_sale);
        $producto=Product::find($request->id_producto);
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
                $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id,'idmesa'=>$cuenta->id]);
    
            }     
            return response($personalizado);  
        }
        else
        {
            echo 'agotado';
        }
        
    }
   

    public function archivarcuenta(Sale $cuenta)
    {
        
        if($cuenta->token!=null)
        {
            $usuarioscontoken=User::where('token',$cuenta->token)->get();
            foreach($usuarioscontoken as $usertoken)
            {
                $usertoken->token=null;
                $usertoken->update();
            }
            
        }

        if($cuenta->total!=0)
        {
            $mesero=$cuenta->usuario_id;
            $mesa=$cuenta->mesa_id;
            $total=$cuenta->total;
            $observacion=$cuenta->observacion;
            $cliente=$cuenta->comprador_id;

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
          
         $productos=$cuenta->products;
        $sumaproductos = $productos->pluck('precioventa')->sum();
         foreach($productos as $prod)
         {
             
            $cuentaguardada->products()->attach($prod->id);
    
         }
            
            $cuenta->delete();
            $cuenta->products()->detach();
            DB::table('cajas')->where('id','=',$caja[0]->id)->increment('monto_acumulado',$sumaproductos);
            DB::table('cajas')->where('id','=',$caja[0]->id)->increment('rockola_acumulado',$cuenta->rockola);

            return back()->with('success','La mesa: '. $cuenta->table->numero.' fue archivada!');
        }
        else{
            $cuenta->delete();
            return back()->with('danger','La mesa: '. $cuenta->table->numero.' no se archivo porque no tiene ningun producto!'); 
        }
        
    }
    public function reabrir(Sale $cuenta)
    {
        DB::table('sales')
          ->where('id', $cuenta->id)
          ->update(['estado' => "pendiente"]);
          return back()->with('info','Se volvio a abrir la mesa: '.$cuenta->table->numero);
    }
    public function actualizarcantidad(Request $request)
    {
        $producto=Product::find($request->id);
        echo $producto->cantidad;
    }
    public function cobrar(Sale $cuenta)
    {
        $cuenta = Sale::find($cuenta->id);
        $idcuenta=$cuenta->id;
        $canciones=null;
        if($cuenta->rockola!=0)
        {
            $canciones=$cuenta->rockola;
        }
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
            return view('dashboard.ventasdiarias.cobrar',compact('cabecera','personalizado','total','numeromesa','idcuenta','canciones'));

        }
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
        //event(new OrderStatusChangedEvent($cuenta));

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
            if($list['cantidad']==1)
            {
                $printer->text($list['cantidad'] . "x " . $list['nombre'] . "\n"); 

            }
            else
            {
                $printer->text($list['cantidad'] . "x " . $list['nombre'] ."(Bs ".$list['precio']." c/u)". "\n"); 

            }
         
            /*Y a la derecha para el importe*/
            $printer->setJustification(Printer::JUSTIFY_RIGHT);
            $printer->text(' Bs ' . $list['subtotal'] . "\n");
        }
       
        if($cuenta->rockola!=0)
        {
            $printer->setJustification(Printer::JUSTIFY_LEFT);
            $printer->text("RestoMusic!:". $cuenta->rockola." canciones" ."\n");
            $printer->setJustification(Printer::JUSTIFY_RIGHT);
            $printer->text(' Bs ' . $cuenta->rockola . "\n");

        }
        $printer->text("--------\n");
        $printer->setTextSize(1, 2);
        $printer->text("TOTAL: Bs ". $total+$cuenta->rockola ."\n");
        $printer->setTextSize(1, 1);
        $printer->text("Muchas gracias por preferirnos!\n");
        $printer->feed(3);
        //convertimos en array y recorremos hasta obtener el string para enviar al helper de impresion
        $lista= collect($printer);      
        $cont=0;    
        $listastring="";
        foreach($lista as $p)
        {
            $cont++;
            if($cont==2)
            {
                $boleta=collect($p);           
                foreach($boleta as $asd)
                {         
                        for ($i=0; $i < collect($asd)->count() ; $i++) { 
                    $listastring=$listastring.$asd[$i];             
                }
                break;              
                }         
            }
        }
        //helper para imprimir por api
      CustomPrint::imprimir($listastring);
    return back()->with('success','La cuenta '.$numeromesa.' ahora esta finalizada!')->with('borrar','boton borrado');
    }

    public function listarmesasMesero()
    {
       
        $mesero=auth()->user()->name;
        $nombre=Str::of($mesero)->explode(' ');
        
        $cabecera="Tus cuentas ".$nombre[0];
        $cuentas = Sale::where('usuario_id',auth()->user()->id)->orderBy('created_at','desc')->get();
        
        return view('dashboard.ventasdiarias.indexMesero',compact('cuentas','cabecera'));
    }

    public function imprimirpedidocompleto(Sale $cuenta)
    {
        $lista= Sale::find($cuenta->id);
        $listapendientes= $lista->products->pluck('nombre');  
        $contando=$listapendientes->countBy();

        //sumar # de ticket para boleta
      
            $nombre=Str::of($cuenta->user->name)->explode(' ');

        
            $nombre_impresora = "POS-582"; 
           
            $connector = new WindowsPrintConnector($nombre_impresora);
            $printer = new Printer($connector);
            $printer->setJustification(Printer::JUSTIFY_RIGHT);
            $printer->setTextSize(2, 2);
            $printer->text("Mesa:".$cuenta->table->numero."\n");
            $printer->setJustification(Printer::JUSTIFY_LEFT);
            $printer->setTextSize(1, 1);
            $printer->text("Mesero:".$nombre[0]."\n"); 
            $printer->setTextSize(1, 2);
    
              foreach ($contando as $nombre=>$cantidad) {
                $verificartipo=Product::where('nombre',$nombre)->first();
                if($verificartipo->genero=='comida')
                {
                    $printer->setJustification(Printer::JUSTIFY_LEFT);
                    $printer->text($cantidad." ".$nombre."\n");
                }
                
                
            }
            $printer->text("---------------"."\n");
            $printer->setTextSize(1, 1);
            foreach ($contando as $nombre=>$cantidad) {
                $verificartipo=Product::where('nombre',$nombre)->first();
                if($verificartipo->genero=='bebida')
                {
                    $printer->setJustification(Printer::JUSTIFY_LEFT);
                    $printer->text($cantidad." ".$nombre."\n");
                }
                
                
            }
            $printer->setJustification(Printer::JUSTIFY_CENTER);
            $printer->setTextSize(1, 2);
            $printer->text("---------------"."\n");
            $printer->text($lista->created_at->format('H:i:s')."\n");
            $printer->setTextSize(1, 1);
            $printer->text(date('d-m-Y')."\n");

          
            $printer->feed(3);
          //convertimos en array y recorremos hasta obtener el string para enviar al helper de impresion
          $lista= collect($printer);      
          $cont=0;    
          $listastring="";
          foreach($lista as $p)
          {
              $cont++;
              if($cont==2)
              {
                  $boleta=collect($p);           
                  foreach($boleta as $asd)
                  {         
                          for ($i=0; $i < collect($asd)->count() ; $i++) { 
                      $listastring=$listastring.$asd[$i];             
                  }
                  break;              
                  }         
              }
          }
          //helper para imprimir por api
        CustomPrint::imprimir($listastring);
                         
         return back()->with('info','Pedido completo impreso!');
       
        

     
     
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
           
            $connector = new WindowsPrintConnector($nombre_impresora);
            $printer = new Printer($connector);
            $printer->setTextSize(2, 2);
            $printer->text("#".$tickets."\n");
            $printer->setTextSize(2, 1);
            $printer->text("Mesero:".$nombre[0]."\n");
            $printer->setJustification(Printer::JUSTIFY_RIGHT);
            $printer->setTextSize(1, 1);
            $printer->text("Nro Mesa:".$cuenta->table->numero."\n");
            $printer->setJustification(Printer::JUSTIFY_LEFT);
    
            $printer->setTextSize(1, 2);
    
              foreach ($contando as $nombre=>$cantidad) {
                $verificartipo=Product::where('nombre',$nombre)->first();
                if($verificartipo->genero=='comida')
                {
                    $printer->setJustification(Printer::JUSTIFY_LEFT);
                    $printer->text($cantidad." ".$nombre."\n");
                }
                
                
            }
            foreach ($contando as $nombre=>$cantidad) {
                $verificartipo=Product::where('nombre',$nombre)->first();
                if($verificartipo->genero=='bebida')
                {
                    $printer->setTextSize(1, 1);
                    $printer->setJustification(Printer::JUSTIFY_LEFT);
                    $printer->text($cantidad." ".$nombre."\n");
                }
                
                
            }
            $printer->setJustification(Printer::JUSTIFY_CENTER);
            $printer->setTextSize(1, 2);
            $printer->text("---------------"."\n");
            $printer->text(date('H:i:s')."\n");
            $printer->setTextSize(1, 1);
            $printer->text(date('d-m-Y')."\n");

          
            $printer->feed(3);
          //convertimos en array y recorremos hasta obtener el string para enviar al helper de impresion
          $lista= collect($printer);      
          $cont=0;    
          $listastring="";
          foreach($lista as $p)
          {
              $cont++;
              if($cont==2)
              {
                  $boleta=collect($p);           
                  foreach($boleta as $asd)
                  {         
                          for ($i=0; $i < collect($asd)->count() ; $i++) { 
                      $listastring=$listastring.$asd[$i];             
                  }
                  break;              
                  }         
              }
          }
          //helper para imprimir por api
        CustomPrint::imprimir($listastring);
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

    public function meserosactivos()
    {
     
        $usuarios=User::with('sales')->where('rol_id','=','3')->get();
    return view('dashboard.ventasdiarias.meserosactivos', compact('usuarios'));
    
    }
   
}
