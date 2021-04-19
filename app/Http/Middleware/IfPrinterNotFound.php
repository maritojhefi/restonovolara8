<?php

namespace App\Http\Middleware;

use Closure;
use App\Printer_device;
use Illuminate\Http\Request;

class IfPrinterNotFound
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
        $impresoraactiva= Printer_device::find(1);
        if($impresoraactiva!=null)
        {
            return $next($request);
        }
        else
        {
            return back()->with('danger','Active una impresora en la seccion "PERIFERICOS"...');
        }
    }
}
