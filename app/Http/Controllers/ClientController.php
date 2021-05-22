<?php

namespace App\Http\Controllers;

use App\Sale;
use App\User;
use App\Product;
use App\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
        $this->middleware(['iftokenexist'])->only('detallecuenta');

       

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
                $iduser= auth()->user()->id;
                $usuario= User::find($iduser);
                if($usuario->token==$token)
                {
                    return back()->with('info','Ya estas con el acceso a la plataforma, Revisa el menu lateral!');
                }
                $usuario->token=$request->clave;
                $usuario->update();
                return back()->with('success','Clave aceptada! Ya puedes acceder a todas las funciones Restonovo!');
            }
        }
        return back()->with('danger','Acceso denegado, clave incorrecta o inexistente');
        
    }

    public function detallecuenta(){
        $tokenusuario= auth()->user()->token;
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
        $productos=Product::where('genero','comida')->where('estado','activo')->get();
        $categorias=Categoria::where('tipo','comida')->get();
        return view('frontend.dashboardcliente.cuenta.menuplatos',compact('productos','categorias'));
    }
    public function prepedido(){
        return view('frontend.dashboardcliente.cuenta.prepedido');
    }
    public function pagaronline(){
        return view('frontend.dashboardcliente.cuenta.pagaonline');
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
