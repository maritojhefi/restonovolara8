<?php

namespace App\Http\Middleware;

use Closure;
use App\Caja;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class CheckIfCajaOpen
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
        $caja= Caja::whereDate('created_At',Carbon::today())->get();
        foreach($caja as $cash)
        if($cash->estado=='activo') 
        {
            return $next($request);

        }
        
        return back()->with('danger','Acceso denegado, la caja diaria debe estar activa');
    }
}
