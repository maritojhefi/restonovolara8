<?php

namespace App\Http\Livewire;

use App\Product;
use App\Categoria;
use Livewire\Component;

class MenuRealTime extends Component
{
    protected $listeners = ['echo:canal,Mensaje' => 'render'];

    public function render()
    {
        $productos=Product::all();
        $categorias=Categoria::where('tipo','comida')->get();
        $bebidas=Categoria::where('tipo','bebida')->get();
        return view('livewire.menu-real-time',compact('productos','categorias','bebidas'));
    }
}
