<?php

namespace App\Http\Controllers\dashboard;

use App\Empresa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MainController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        return view('dashboard.empresa.dashboard');
    }
    public function configuracion()
    {
        $datos=Empresa::find(1);
        return view('dashboard.empresa.info', compact('datos'));
    }
}
