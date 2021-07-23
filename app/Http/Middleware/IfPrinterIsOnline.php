<?php

namespace App\Http\Middleware;

use Closure;
use App\Printer_device;
use Illuminate\Http\Request;
use Rawilk\Printing\Facades\Printing;

class IfPrinterIsOnline
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
        
        $printer=Printer_device::first();
        $printeractivo=Printing::find($printer->id_impresora);
        if($printeractivo->isOnline())
        {
            return $next($request);

        }
        else
        {
            return back()->with('danger','La impresora seleccionada no esta activa');
        }
    }
}
