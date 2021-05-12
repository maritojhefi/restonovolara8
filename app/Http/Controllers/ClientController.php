<?php

namespace App\Http\Controllers;

use App\Sale;
use App\User;
use App\Product;
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
            'clave' => 'required|min:6',
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
                    return back()->with('info','Ya estas con el acceso a la plataforma!');
                }
                $usuario->token=$request->clave;
                $usuario->update();
                return back()->with('success','Clave aceptada! Ya puedes acceder a todas las funciones!');
            }
        }
        return back()->with('danger','Acceso denegado, clave incorrecta o inexistente');
        
    }

    public function detallecuenta(){
        $tokenusuario= auth()->user()->token;
        $mesa=Sale::where('token',$tokenusuario)->first();
        $listafiltrada=$mesa->products->pluck('nombre');
        
        $total=$mesa->products->pluck('precioventa')->sum();
        $contando=$listafiltrada->countBy();
        $coleccion=collect($contando);
        $personalizado=collect();
       
        foreach($coleccion as $nombre=>$cantidad)
        {
            $producto=Product::where('nombre',$nombre)->first();
           $subtotal=$producto->precioventa*$cantidad;
            $personalizado->prepend(['nombre'=>$nombre,'cantidad'=>$cantidad,'precio'=>$producto->precioventa,'subtotal'=>$subtotal,'id'=>$producto->id]);

        }     
        return view('frontend.dashboardcliente.cuenta.info', compact('mesa','personalizado','total'));
    }

}
