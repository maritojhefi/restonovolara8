<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AlmacenController extends Controller
{
    public function stockindex(){
        return view('dashboard.almacen.stock');
    }
}
