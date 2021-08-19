<?php

namespace App\Http\Middleware;

use Closure;
use App\Sale;
use Illuminate\Http\Request;

class IfTokenExists
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(session()->has('tokenmesa'))
        {
            $clave = session('tokenmesa');
            $tokens=Sale::pluck('token');
            foreach($tokens as $token)
            {
                if($token==$clave)
                {
                    return $next($request);
        
                }
            }
            session()->forget('tokenmesa');
            return redirect()->route('cliente')->with('danger','Tu clave expiró!, debes tener una cuenta activa para usar Restonovo!');

        }
        else
        {
            return redirect()->route('cliente')->with('danger','Ingresa la clave, si aun no lo tienes solicitalo a tu mesero!');
        }
       
        
       
         
        
    }
}
