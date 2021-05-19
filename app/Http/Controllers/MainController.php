<?php

namespace App\Http\Controllers;

use App\Categoria;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function menu(){
        
        
        return view('auth.login');
    }
}
