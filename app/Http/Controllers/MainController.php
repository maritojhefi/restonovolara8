<?php

namespace App\Http\Controllers;

use App\Categoria;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }
    public function menu(){
        
        
        return view('frontend.dashboardcliente.cuenta.inicio');
    }
}
