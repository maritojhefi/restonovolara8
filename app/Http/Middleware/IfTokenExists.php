<?php

namespace App\Http\Middleware;

use Closure;
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
        $clave=auth()->user()->token;
        if($clave!=null)
        {
            return $next($request);

        }
       
         return redirect()->route('cliente')->with('danger','Necesitas la clave de tu mesa, solicitalo a tu mesero o administrador');
        
    }
}
