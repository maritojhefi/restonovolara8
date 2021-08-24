<?php

namespace App\Http\Livewire;

use App\Sale;
use App\User;
use Livewire\Component;
use Illuminate\Database\Eloquent\Builder;

class MesasActivas extends Component
{
    protected $listeners = ['echo:canal,Mensaje' => 'render'];
    public function render()
    {
      
        $cuentas = Sale::orderBy('created_at','desc')->get();
        return view('livewire.mesas-activas',compact('cuentas'));
    }
}
