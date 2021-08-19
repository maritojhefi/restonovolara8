<?php

namespace App\Http\Controllers;

use Spotify;
use App\Sale;
use App\Play_device;
use App\Ranking_track;
use App\Spotify_token;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use SpotifyWebAPI\SpotifyWebAPI;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class MusicController extends Controller
{
    public function __construct()
    {
       
        $this->middleware(['iftokenexist']);
    }
    public $clientid='a7814781430f49b38051ef66eb2baa99';
    public $clientpass='a1734acb42e443baa9be5232c6eacf1a';
    public $iduser='22x6unlasi2zdl2qhwrnovygq';
   
    public function prueba()
    {
   /* $token=Http::get('https://accounts.spotify.com/authorize?response_type=code&state=&client_id=a7814781430f49b38051ef66eb2baa99&scope=user-read-playback-state%20user-modify-playback-state&redirect_uri=https%3A%2F%2Frestonovo.site%2Fdashboard%2Frockola');
    $token2=Http::withHeaders([
      'Authorization' =>base64_encode($clientid.":".$clientpass),
      'grant_type' => 'authorization_code',
      'code' => 'AQBWg8Vwt9TA9ytmkamuOd__vNWOtPVfSFUhwlF1Z5CtOGnIz-OJSdjgiSQEjLvZBmjBclMfKD7P5VHjMliOQ9XJEJf8FEAc18yHR3tx6TQAtGJkREmRRQ3HDFBoOvWZy3OoTPDNbtMQFnVZHWtPdr8eYoxNh8nMCI6X7fW8s_uY4NpRzz06GBAgVR_6Ej32PbOJKYWsKJ2v0gsfJSS6owja2KviJOfWeja8sQ8l5boMpJGmdmTnqOM4RrCejDsESyw',
      'redirect_uri' => 'https://restonovo.site/dashboard/rockola',
      'client_id'=>'a7814781430f49b38051ef66eb2baa99'
    ])->post('https://accounts.spotify.com/api/token');*/
   }

   public function generartoken()
   {
    $session = new SpotifyWebAPI\Session(
        $clientid,
        $clientpass,
        'https://nena.fun'
    );
    
    $api = new SpotifyWebAPI\SpotifyWebAPI();
    
    if (isset($_GET['code'])) {
        $session->requestAccessToken($_GET['code']);
        $api->setAccessToken($session->getAccessToken());
    
        print_r($api->me());
    } else {
        $options = [
            'scope' => [
                'user-read-email',
            ],
        ];
    
        header('Location: ' . $session->getAuthorizeUrl($options));
        die();
    }
   }

   public function vercancionactual()
   {
    $tokens=Spotify_token::all();
    $tokenpaq=$tokens->last();
    $tokenactual=$tokenpaq->token;
    $contador=0;
    $cancionactual= Http::withToken($tokenactual)
    ->get('https://api.spotify.com/v1/me/player/currently-playing');
    if($cancionactual->successful())
    {
        $resultado= collect(response($cancionactual));
        $artista='';
        foreach($resultado as $res)
        {
         if($contador==1)
         {
             $track=explode('spotify:track:',$res);
     
          $uricancion=explode('"',$track[1]);
         
          $cancion= Spotify::track($uricancion[0])->get();
         $foto= $cancion['album']['images'][0]['url'];
         foreach($cancion['artists'] as $artistas)
         {
             $artista=$artista." ".$artistas['name'];
     
         }
         $nombre=$cancion['name'];
         
         }
         $contador++;
     
        }
        
        $coleccion=collect([
            $foto,Str::limit($artista, 50),Str::limit($nombre, 50)
        ]);
        return $coleccion;
    }
    else{
        return 'error';
    }
  
   }


   public function playresume()
   {
    $tokens=Spotify_token::all();
    $tokenpaq=$tokens->last();
    $tokenactual=$tokenpaq->token;
    $play= Http::withToken($tokenactual)
    ->put('https://api.spotify.com/v1/me/player/play', [
        "context_uri"=> "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
        "offset"=> [
          "position"=> 5
        ],
        "position_ms"=> 0
    ]);
  dd($play);
   }

   public function buscarcanciones(Request $request)
   {
    $validated = $request->validate([
        'cancion' => 'required|min:3',
       
    ]);
    $listafiltrada=collect();
    $contador=0;
    $track= $request->cancion;
    $canciones= Spotify::searchTracks($track)->limit(20)->get('tracks');
    
     foreach($canciones['items'] as $tema)
     {
        $artista='';

       $nombre=$tema['name'];
       foreach($tema['artists'] as $art)
       {
        $artista=$artista." ".$art['name'];

       }
       foreach($tema['album']['images'] as $img)
       {
        $foto= $img['url'];
        break;
       }
       $uri=$tema['uri'];
      
       $listafiltrada->push(['nombre'=>Str::limit($nombre, 40),'artista'=>Str::limit($artista, 50),'uri'=>$uri,'foto'=>$foto]);
       $contador=$contador+1;
     }
     
     return view('frontend.dashboardcliente.spotify.agregarcancion', compact('listafiltrada','track'));
   }
   public function agregaracola(Request $request)
   {

    $track=explode(':',$request->trackid);
    $reproductoractual=Play_device::find(1);

    if($reproductoractual!=null)
    {
  
        $deviceid=$reproductoractual->id_reproductor;
       $tokens=Spotify_token::all();
       if($tokens->count()>0)
       {
           $tokenactual=$tokens->last();
     
           $agregaracola = Http::withToken($tokenactual->token)
           ->post("https://api.spotify.com/v1/me/player/queue?uri=spotify%3Atrack%3A".$track[2]."&device_id=".$deviceid);
   
          
           if($agregaracola->successful())
           {
               $token=auth()->user()->token;
               $mesa=Sale::where('token',$token)->first();
               DB::table('sales')->where('token',$token)->increment('rockola',1);
              
               $canciones=Ranking_track::where('uri',$request->trackid)->get();
               if($canciones->count()==0)
               {
                   Ranking_track::create([
                       'nombre'=>$request->cancion,
                       'artista'=>$request->artista,
                       'foto'=>$request->foto,
                       'uri'=>$request->trackid,
                   ]);
               }
               else
               {
                   foreach($canciones as $cancion)
                   {
                       $cancion->increment('reproducido',1);
                       break;
                   }
               
               }
              
               return back()->with('success','Agregado a la cola! Tu cancion sonará en breve...');
   
           }
           else
           {
               return back()->with('danger','Error de token, notifique al administrador!');
   
           }
       }
       else
       {
           return back()->with('danger','No se encuentra habilitada la rockola');
   
       }
    }
    else
    {
        return back()->with('danger','No se habilito el reproductor, por favor notifique al administrador');
    }
    
  
 
   }
   public function buscarplaylists()
   {
    $playlistdeusuario= Spotify::userPlaylists($iduser)->get();

   }
   public function buscardispositivos()
   {
    $dispositivos= Http::withToken($tokenactual)
    ->get('https://api.spotify.com/v1/me/player/devices');
   }

   public function vistamusica()
   {
    return view('frontend.dashboardcliente.spotify.agregarcancion');
   }

   public function gettoken()
   {
    $token=Http::get('https://accounts.spotify.com/authorize?response_type=code&state=&client_id=a7814781430f49b38051ef66eb2baa99&scope=user-read-playback-state%20user-modify-playback-state&redirect_uri=https%3A%2F%2Frestonovo.site%2Fdashboard%2Frockola');

    //AQBW0QWT4sg1Rwc5a9gwQ7hHq9I7sJUQ2e4fzmddZMpWlGmON1AcpNU8k83GHxsSvGzfGSImtmAUeWE9cU50XrN8OrfvcBh0UCBIwh44R2zrGE6Jd2Nylr7hgsrotDgxlzHDxUEyptepee_DlNyfZmT2XZiQZhL_T1O2bMgmeijf8jQsgVTwDDbtMQ9lcfoI9orvatbj0YSX3raT-yNRvE_RF6lj5Dj007fcgrIgWKIQEhxjczvu73zErB6uMzqpy4c
  //AQAACXs/K06OjhI4HmqG0Cf7sj1kJCR67mw5T/DLWCqDOp4fK149TXGzsBm5jGLnvE3+OyB0jXhqb4o3/jSB3oMYu0vPbO34cHQNkzRDLryeX+Fm3P2I0Z2Xrh3InQHpU7W/KEjKWiTkQYRo1Kdcm0/XnNc9OQV2/5Q8FG9P/cSlElREg3BpRWq4Cj1a8hAgyk3T19sccDLqhb12ZJCdtZShfKPbkLq98fj6kB73qS1hsneqWEPqEAxw7NfPaT8rzooG+BtmCaFxdQCPQrhlL6bdbmhtlzhO7SPJgVXjd0t+Q2lYp3eSovz+YlYVpR9Kww9pfB2+JnGttHZJwt6/GN5yhbqGdEHZTgBO72zrMmxQxqkO7gP9Yiy7AmkY2DHNgnpXTCWSsxcf4yJESf/StlZdSYzdB/dQz76JGfBT/9hB1I6lwLnxPOcgMGZCR8YBiIYqXU7OD1Q/w9ksMTV03J73DEiITc0o35JChuVqMHmnMOdXonBEEECJ0Jl9fEBt+lqNXcs8
  //AQC40FGIVDlE9tFut30ivMuT9ryJ1lhIhNLwghcFy9bgM1WRg5cRttb1MuNRkIJsfAgb4-N2ejhFsB5WR8Zz0omXcYGxrFs033UJp91-m7ZupQ87q5vov9_eFKTDN8a3bTGrHHtgf6WJwzU2NaSH5RcBg3y-te95cBLPPfRsxyqgRfy3SYKSjUToFnQQCDQpiA4gLJpRgdjYdUOlSJwjTOtK5J8HXfalhAWm4snh9Huy0nJRJaXRssa5IixMcOCYqew 
 
   }

   public function listarranking()
   {
       $ranking= Ranking_track::orderBy('reproducido','desc')->take(10)->get();
      $coleccion=collect();
       foreach($ranking as $lista)
       {
        $coleccion->push([
            'nombre'=>Str::limit($lista->nombre, 30),
            'artista'=>Str::limit($lista->artista, 30),
            'foto'=>$lista->foto,
            'reproducido'=>$lista->reproducido,
        ]);
       }
     
       if($coleccion->sum('reproducido')>50)
       {
        return $coleccion;

       }
       else{
           return 'pocos registros';
       }

   }
 
}
