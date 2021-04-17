<?php

namespace App\Http\Controllers;

use Spotify;
use App\Spotify_token;
use Illuminate\Http\Request;
use SpotifyWebAPI\SpotifyWebAPI;
use Illuminate\Support\Facades\Http;

class MusicController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
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
            $foto,$artista,$nombre
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
      
       $listafiltrada->push(['nombre'=>$nombre,'artista'=>$artista,'uri'=>$uri,'foto'=>$foto]);
       $contador=$contador+1;
     }
     
     return view('frontend.dashboardcliente.spotify.agregarcancion', compact('listafiltrada','track'));
   }
   public function agregaracola(Request $request)
   {

    $track=explode(':',$request->trackid);
     $deviceid='93becd543d17f1b639aa89c17dc8205bd494ee87';
    $tokens=Spotify_token::all();
    if($tokens->count()>0)
    {
        $tokenactual=$tokens->last();
  
        $agregaracola = Http::withToken($tokenactual->token)
        ->post("https://api.spotify.com/v1/me/player/queue?uri=spotify%3Atrack%3A".$track[2]."&device_id=".$deviceid);

       
        if($agregaracola->successful())
        {
            return back()->with('success','La cancion fue agregada correctamente!');

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
 
}
