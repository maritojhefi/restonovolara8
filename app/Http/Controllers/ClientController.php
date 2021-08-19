<?php

namespace App\Http\Controllers;

use App\Sale;
use App\User;
use App\Product;
use App\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    public function __construct()
    {
        
        $this->middleware(['iftokenexist'])->only('detallecuenta','pagaronline');

       

    }
    public function verificartoken(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'clave' => 'required|min:5',
        ]);
        if ($validator->fails()) {
            return back()
                        ->withErrors($validator)
                        ->withInput();
        }
        $tokencuentas= Sale::pluck('token');
        foreach($tokencuentas as $token)
        {
            if($token==$request->clave)
            {
                session(['tokenmesa' => $token]);
                /*$iduser= auth()->user()->id;
                $usuario= User::find($iduser);*/
                //if($usuario->token==$token)
                if(session()->has('tokenmesa'))
                {
                    return back()->with('info','Ya estas con el acceso a la aplicacion, Revisa el menu lateral!');
                }
               /* $usuario->token=$request->clave;
                $usuario->update();*/
                return back()->with('success','Clave aceptada! Revisa las funciones en el menu lateral!');
            }
        }
        return back()->with('danger','Acceso denegado, clave incorrecta o inexistente');
        
    }

    public function detallecuenta(){
        $tokenusuario= session('tokenmesa');
        $mesa=Sale::where('token',$tokenusuario)->first();
        $listafiltrada=$mesa->products->pluck('nombre');
        
        $total=$mesa->products->pluck('precioventa')->sum();
        $rockola=$mesa->rockola;
        $contando=$listafiltrada->countBy();
        $coleccion=collect($contando);
        $personalizado=collect();
       
        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

        }     
        return view('frontend.dashboardcliente.cuenta.info', compact('mesa','personalizado','total','rockola'));
    }

    public function menuplatos(){
        $productos=Product::all();
        $categorias=Categoria::where('tipo','comida')->get();
        $bebidas=Categoria::where('tipo','bebida')->get();

        return view('frontend.dashboardcliente.cuenta.menuplatos',compact('productos','categorias','bebidas'));
    }
    public function prepedido(){
        return view('frontend.dashboardcliente.cuenta.prepedido');
    }
    public function pagaronline(){
        $tokenusuario= session('tokenmesa');
        $mesa=Sale::where('token',$tokenusuario)->first();
        $cuenta=$mesa->total;

        $listafiltrada=$mesa->products->pluck('nombre');
        $total=$mesa->products->pluck('precioventa')->sum();
        $rockola=$mesa->rockola;
        $contando=$listafiltrada->countBy();
        $coleccion=collect($contando);
        $personalizado=collect();
        $string='';
        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
            if($producto->image)
            {
                $fotos=$producto->image->first();
                $subtotal=$producto->precioventa*$cantidad;
                 $string=$string.'{"concept":'.'"'.$nombre.'",'.'"productImageUrl":'.'"'.asset('images/'.$fotos->imagen).'",'.'"quantity":'.'"'.$cantidad.'",'.'"unitPrice":'.'"'.$producto->precioventa.'"},';
            }
            else
            {
                $subtotal=$producto->precioventa*$cantidad;
                 $string=$string.'{"concept":'.'"'.$nombre.'",'.'"productImageUrl":'.'"'.asset('images/food.png').'",'.'"quantity":'.'"'.$cantidad.'",'.'"unitPrice":'.'"'.$producto->precioventa.'"},'; 
            }
        }     
        $contador=0;
        $separado=[];
        $string = substr($string, 0, -1);//quitamos ultimo caracter al string en este caso ","
        $linkpago = Http::withHeaders([
            'Content-Type' => 'application/json',
            
        ])->withBody('{
            "affiliateCode": "c2f5558e-9c57-4950-868b-3b1192e1a61f",
            "withInvoice": false,
            "expireMinutes": 20,
            "externalCode": "1234",
            "paymentDescription": "Pago de Comida Restaurant Rincon Tomateño",
            "reserved1": "string",
            "reserved2": "string",
            "reserved3": "string",
            "reserved4": "string",
            "reserved5": "string",
            "details": [
                
            '.$string.'
            ]
            }','text/plain')->post('https://banipay.me:8443/api/payments/transaction');
            if($linkpago->successful())
            {
                $respuesta=response($linkpago);
                $array=collect($respuesta);
                foreach($array as $ar)
                {
                    if($contador==1)
                    {
                       $separado=explode('"',$ar);
                    }
                    $contador++;
                }
                $mesa->idpago=$separado[15];
                $mesa->save;
                return view('frontend.dashboardcliente.cuenta.pagaonline',['linkpago'=>$separado[11],'total'=>$total]);


            }
            else
            {
                return back()->with('danger','Error en realizar pago online');
            }
    }
    public function propina(){
        return view('frontend.dashboardcliente.cuenta.propina');
    }
    public function valoracion(){
        return view('frontend.dashboardcliente.cuenta.valoracion');
    }
    public function calificamesero(){
        return view('frontend.dashboardcliente.cuenta.calificamesero');
    }
    public function quienessomos(){
        return view('frontend.dashboardcliente.cuenta.contacto');
    }
    public function politicasdeuso(){
        return view('frontend.dashboardcliente.cuenta.politicas');
    }
}
