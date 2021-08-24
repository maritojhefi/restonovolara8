<?php

namespace App\Http\Livewire;

use App\Sale;
use Livewire\Component;
use Illuminate\Support\Str;

class MesasActivasMesero extends Component
{
    protected $listeners = ['echo:canal,Mensaje' => 'render'];
    public function render()
    {
        $mesero=auth()->user()->name;
        $nombre=Str::of($mesero)->explode(' ');
        
        $cabecera="Tus cuentas ".$nombre[0];
        $cuentas = Sale::where('usuario_id',auth()->user()->id)->orderBy('created_at','desc')->get();
        return view('livewire.mesas-activas-mesero', compact('cuentas','cabecera'));
    }
}
