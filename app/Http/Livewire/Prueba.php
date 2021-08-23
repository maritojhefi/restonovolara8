<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Prueba extends Component
{
    public $mensaje="";

    // Special Syntax: ['echo:{channel},{event}' => '{method}']
    protected $listeners = ['echo:canal,Mensaje' => 'notifyNewOrder'];

    public function notifyNewOrder()
    {
        $this->mensaje="como estas";
    }
    public function render()
    {
        return view('livewire.prueba',[$this->mensaje=>'mensaje']);
    }
}
