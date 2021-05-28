<?php

namespace App\Http\Controllers\dashboard;

use Spotify;
use Illuminate\Http\Request;
use SpotifySeed;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;


class SpotifyController extends Controller
{
  

public function token()
{
    $token=Http::get('https://accounts.spotify.com/authorize?response_type=code&state=&client_id=a7814781430f49b38051ef66eb2baa99&scope=user-read-playback-state%20user-modify-playback-state&redirect_uri=https%3A%2F%2Frestonovolara8.test%2Fdashboard%2Frockola%2Fcallback');
    return response($token) ;
}
public function gettoken(Request $request)
{
    $clientid='a7814781430f49b38051ef66eb2baa99';
    $clientpass='a1734acb42e443baa9be5232c6eacf1a';
    
    $codificado=base64_encode($clientid.":".$clientpass);
    $fullurl=$request->fullUrl();

    $code=explode('code=',$fullurl);
  $onlycode=explode('state',$code[1]);
  
 
$url = "https://accounts.spotify.com/api/token";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Authorization: Basic ".$codificado,
   "Content-Type: application/x-www-form-urlencoded",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$data = "grant_type=authorization_code&code=".$onlycode[0]."&redirect_uri=https%3A%2F%2Frestonovo.site%2Fdashboard%2Frockola%2Fcallback";

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);

$devolucion=explode('":"',$resp);
$token=explode('"',$devolucion[1]);
echo $token[0];
$token_refresh=explode('"',$devolucion[3]);
echo $token_refresh[0];



}

}
