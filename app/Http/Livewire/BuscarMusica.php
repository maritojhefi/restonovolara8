<?php

namespace App\Http\Livewire;

use Spotify;
use Livewire\Component;
use Illuminate\Support\Str;

class BuscarMusica extends Component
{
    public $buscar= '';
    public $show='active show';
    public $musica;
    
    protected $queryString = ['buscar'];
    public function render()
    {
        $listafiltrada=collect();
        $contador=0;
        if(strlen($this->buscar)<=4)
        {
           
            return view('livewire.buscar-musica',['show'=>$this->show]);
            
        }
        else
        {
            $canciones= Spotify::searchTracks($this->buscar)->limit(20)->get('tracks');
            
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
          $nombreprocesado=Str::limit($nombre, 40);
          $nombreprocesado=str_replace("'","",$nombreprocesado);
          $artistaprocesado=Str::limit($artista, 50);
          $artistaprocesado=str_replace("'","",$artistaprocesado);
           $listafiltrada->push(['nombre'=>$nombreprocesado,'artista'=>$artistaprocesado,'uri'=>$uri,'foto'=>$foto]);
           $contador=$contador+1;
         }
        }
        return view('livewire.buscar-musica',['canciones'=>$listafiltrada,'show'=>$this->show]);
       
    }
}
