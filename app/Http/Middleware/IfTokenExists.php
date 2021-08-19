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
        $clave = session('tokenmesa');
        $tokens=Sale::pluck('token');
        foreach($tokens as $token)
        {
            if($token==$clave)
            {
                return $next($request);
    
            }
        }
        
       
         return redirect()->route('cliente')->with('danger','Necesitas la clave de tu mesa, solicitalo a tu mesero o administrador');
        
    }
}
