<?php

namespace App\Http\Controllers\dashboard;

use Spotify;
use Illuminate\Http\Request;
use SpotifySeed;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;


class SpotifyController extends Controller
{
   public function buscarcanciones()
   {
    $apiKey='a7814781430f49b38051ef66eb2baa99';
    $pass='a1734acb42e443baa9be5232c6eacf1a';
   $playlistdeusuario= Spotify::userPlaylists('22x6unlasi2zdl2qhwrnovygq')->get();
   $canciones= Spotify::searchTracks('skps a beat')->limit(50)->get('tracks');
   //$play=Http::withToken('BQASTABnSKPLkd1NPI0CSk16dH3ctUl0SrEAzhvhK8UDEkBu84as7d_r1skTalfk_s_E5fERRRRsl9EKo5inJYICM92msZJ7bBNC_O7EfjQP0bO5mZ6ry75nggRo6Jq2tor8vrOTGzo91ClBXlZRCK6wy9Z5ji23wONqQThebA1g')
   //->put('https://api.spotify.com/v1/me/player/play');


  $agregaracola = Http::withToken('BQDTAh991fJpF6mbwyehFn474wIrE7QYYLt36lkO2qPDjlKYmHqter5j_AQXSW5VJUpOYqfMbfGSY2c3zz3wb2iytrsjZHT21EkLYr9qhVRwu77P8Bf5tBXU4MB7QpkesL2iHlAOuf9fEPdaWtqsQCW7tr0zgw2qmfUnmvt0ZXad3PM')
  ->post("https://api.spotify.com/v1/me/player/queue?uri=spotify%3Atrack%3A1f8UCzB3RqIgNkW7QIiIeP&device_id=93becd543d17f1b639aa89c17dc8205bd494ee87");
  $listafiltrada=collect();
 $contador=0;
 
  foreach($canciones['items'] as $tema)
 {
  
      $nombre=$tema['name'];
      $artista=$tema['artists'][0]['name'];
      $uri=$tema['uri'];
      $listafiltrada->push(['nombre'=>$nombre,'artista'=>$artista,'uri'=>$uri]);
      $contador=$contador+1;

   
  

 }

 $dispositivos= Http::withToken('BQBN9ZsY8EeUFS35QTzuGnFBIzON1JCu7Os1Lh5uXC_BepgcC4lDSV6Mm8McbPURHySj-qCk6mc-Xo5IAlVtw7fSTsm-wGGaqNmZZvNDmtE7B7zhTeR0HmMYEZiOtRyTdLIXExW3hLl1RFzNAs0ldz0Ei71RZIPq_CJc_2-8hQnnJv0')
 ->get('https://api.spotify.com/v1/me/player/devices');

 $token=Http::get('https://accounts.spotify.com/authorize?response_type=code&state=&client_id=a7814781430f49b38051ef66eb2baa99&scope=user-read-playback-state%20user-modify-playback-state&redirect_uri=http%3A%2F%2Frestonovo.test%2Fdashboard%2Frockola');

 $token2=Http::post('https://accounts.spotify.com/api/token');

 return $token;



}


}
