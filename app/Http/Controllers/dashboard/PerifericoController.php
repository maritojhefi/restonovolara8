<?php

namespace App\Http\Controllers\dashboard;

use App\Play_device;
use App\Spotify_token;
use App\Printer_device;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Rawilk\Printing\Facades\Printing;

class PerifericoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function periferico(){
        return view('dashboard.perifericos.side');
    }
    public function nuevotoken()
    {
        return view('dashboard.perifericos.tokenspotify');
    }
    public function guardartoken(Request $request)
    {
        Spotify_token::truncate();
        Spotify_token::create([
            'token'=>$request->token,
        ]);
        return back()->with('success','Guardado! Este token expirara de 1 hora...');
    }
    public function selecimpresora()
    {
        $impresoraactiva=Printer_device::find(1);
        $printers = Printing::printers();
        $coleccion=collect();
        foreach ($printers as $printer) {
       $idprinter= $printer->id();
       $nombre= $printer->name();
       $status= $printer->status();
       $isonline=$printer->isOnline();
       $coleccion->push(['idprinter'=>$idprinter,'nombre'=>$nombre,'status'=>$status,'isonline'=>$isonline]);
        }
        
        return view('dashboard.perifericos.listaimpresoras',compact('coleccion','impresoraactiva'));

    }
    public function activarimpresora(Request $request)
    {
        
        Printer_device::truncate();
        Printer_device::create([
            'nombre'=>$request->nombre,
            'id_impresora'=>$request->idprinter,
            'estado'=>'activo'
        ]);
        return back()->with('success',$request->nombre.' es ahora la impresora activa!');

    }

    public function activarreproductor(Request $request)
    {
       
        Play_device::truncate();
        Play_device::create([
            'nombre'=>$request->nombre,
            'id_reproductor'=>$request->idrep,
            'estado'=>'activo'
        ]);
        return back()->with('success',$request->nombre.' es ahora el reproductor activo!');
    }

    public function selecreproductor()
    {
        $reproductoractivo=Play_device::find(1);
        $tokens=Spotify_token::all();
        if($tokens->count()>0)
        {
            $tokenactual=$tokens->last();
    $dispositivos= Http::withToken($tokenactual->token)
    ->get('https://api.spotify.com/v1/me/player/devices');
    $cont=0;
   $lista=collect(response($dispositivos));
   $coleccion=collect();
  foreach($lista as $lis)
  {
      if($cont==1)
      {
        $separado=explode('"id" : "',$lis);
        $cont2=0;
        foreach ($separado as $filtro)
        {
            if($cont2>0)
            {
                $id=explode('"',$filtro);
                
                $coleccion->prepend(['id'=>$id[0],'nombre'=>$id[10],'tipo'=>$id[14]]);
            }
            $cont2++;
        }

        
      }
      
      $cont++;
  }
  
       return view('dashboard.perifericos.listadispositivosmusica', compact('coleccion','reproductoractivo'));
        }
        else
        {
            return back()->with('danger','Necesita un token de spotify para acceder a esta funcion');

        }
    }

}
