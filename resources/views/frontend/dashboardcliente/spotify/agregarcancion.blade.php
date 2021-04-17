@extends('frontend.dashboardcliente.master')
@section('content')
<header class="page-header" style="background-color: rgb(206, 26, 26); padding: 30px 15px 80px;">
    <div class="container">
        <!-- PAGE SEARCH -->
        <form  action="{{route("agregarmusica")}}" method="get">
            @csrf
            <div class="search-wrapper page-search ">
                <button class="search-button-submit" type="submit"><i class="icon dripicons-search"></i></button>
                @isset($track)
                <input type="text" class="search-input" placeholder="Artista o cancion" name="cancion" value="{{$track}}">

                @endisset
                @empty($track)
                <input type="text" class="search-input" placeholder="Artista o cancion" name="cancion">

                @endempty
            </div>
        </form>
        <!-- PAGE TABS -->
        <ul class="nav nav-tabs">
         
          
            <li class="nav-item" role="presentation">
                <a href="#tab-busqueda" class="nav-link active show" data-toggle="tab" aria-expanded="true">Buscar</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#tab-cola" class="nav-link actual" data-toggle="tab"  aria-expanded="true">En reproduccion</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#tab-ranking" class="nav-link" data-toggle="tab" aria-expanded="true">Ranking</a>
            </li>
        </ul>
    </div>
</header>

<section class="container m-t-30">
    @include('frontend.dashboardcliente.partials.session-flash-status')

    @include('frontend.dashboardcliente.partials.validation-error')
    <!-- ROW -->
    <div class="row">
        <!-- COLUMN -->
        <div class="col">
            <!-- TAB CONTENT -->
            <div class="tab-content">
                
                <div class="tab-pane fadeIn show active" id="tab-busqueda">
                    <div class="card">
                        <div class="card-body">
                           
                                @isset ($listafiltrada)
                                @if($listafiltrada->count()==0)
                                <div class="result-info p-b-30">
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                       No se encontraron resultados... 
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true" class="la la-close"></span>
                                        </button>
                                    </div>
                                </div>
                                @endif
                               
                                @endisset
                                @isset($listafiltrada)
                                            @if ($listafiltrada->count()>0)
                                            <strong>Resultados : {{$listafiltrada->count()}}</strong>

                                            @endif
                                                
                                            <div class="row">
                                            @foreach ($listafiltrada as $canciones)
                                            
                                                <div class="col-sm-12 col-md-4">
                                                    <div class="card text-white">
                                                        <img class="card-img" src="{{$canciones['foto']}}" style="width: auto" alt="Card image">
                                                        <div class="card-img-overlay">
                                                            <h3 class="card-title texto-borde">{{$canciones['nombre']}}</h3>
                                                            <p class="texto-artist ">{{$canciones['artista']}}</p>
                                                            <form action="{{route('agregaracola')}}" method="get">
                                                                @csrf
                                                                <button type="submit" class="btn btn-dark btn-rounded btn-outline btn-lg " data-qt-block="body" style="position:absolute;bottom:30px;right:15px;">
                                                                    Anadir
                                                                    <input type="hidden" name="trackid" value="{{$canciones['uri']}}">
                                                                 </button>

                                                            </form>
                                                            
                                                        </div>
                
                                                    </div>
                                                </div>
                                            
                                           
                                            @endforeach
                                        </div>
                                            
                                @endisset
                                
                               

                            <strong>Sugerencias:</strong>
                            <ul class="list-reset">
                                <li>Escriba correctamente el nombre completo de la cancion.</li>
                                 <li>Busca la cancion junto al artista.</li>
                                <li>Agrega canciones de gusto general.</li>
                            </ul>
                        </div>
                    </div>

                   
                </div>

                <div class="tab-pane fadeIn" id="tab-cola" >
                  <!--
                            <div class="result-info p-b-30">
                                <div class="alert alert-info alert-dismissible fade show" role="alert">
                                   Pendejo
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true" class="la la-close"></span>
                                    </button>
                                </div>
                            </div>
                        -->
                        <div class="col-sm-12 col-md-4" id="cardactual">
                           
                        </div>

<!--
                            <div class="" id="imagen">
                               
                            </div>
                            <div class="card bg-dark text-center p-3 mt-1">
                                <blockquote class="blockquote mb-0" >
                                    <p class="text-white" id="cancion"></p>
                                    <footer class="blockquote-footer">
                                        <small class="text-white" id="artista">
                                            
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            
                        -->            
                </div>

                <div class="tab-pane fadeIn" id="tab-ranking">
                    <div class="card">
                        <div class="card-body">
                            <div class="result-info p-b-30">
                                <div class="alert alert-info alert-dismissible fade show" role="alert">
                                   aggg
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true" class="la la-close"></span>
                                    </button>
                                </div>
                            </div>
                            <h6>Suggestions:</h6>
                            <ul class="list-reset">
                                <li>Make sure all words are spelled correctly.</li>
                                 <li>Try different keywords.</li>
                                <li>Try more general keywords.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<script>
        document.querySelectorAll(".actual").
   forEach(link=>link.addEventListener("click", function(){
      
   $.ajax({
     method: "get",
     url: "{{route('vercancionactual')}}",
     data:{'_token': '{{csrf_token()}}'}
   })
     .done(function( approved ) {
         if(approved!='error')
         {
            leerjson2(approved)

         }
         else
         {
            var error = document.getElementById("tab-cola");
            error.innerHTML='   <div id="contenedor" class="result-info p-b-30"><div class="alert alert-info alert-dismissible fade show" role="alert">Sin permisos para ver esta seccion...<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="la la-close"></span></button></div></div>';
            
        setTimeout(function() {
          $("#contenedor").hide(1000);
        }, 6000);
      }
         });
  
     
   }))
   function leerjson(approved){
    console.log(approved);
     var artista = document.getElementById("artista");
     var cancion = document.getElementById("cancion");
     var imagen =  document.getElementById("imagen");
       artista.innerHTML=approved[1];
       cancion.innerHTML=approved[2];
       imagen.innerHTML=' <img class="card-img" src="'+approved[0]+'" alt="Card image">';
   }

   function leerjson2(approved){
    console.log(approved);
    
     var imagen =  document.getElementById("cardactual");
      
       imagen.innerHTML='<div class="card text-white"><img class="card-img" src="'+approved[0]+'" style="width: auto" alt="Card image"><div class="card-img-overlay"><h3 class="card-title texto-borde">'+approved[2]+'</h3><p class="texto-artist ">'+approved[1]+'</p><img src="{{asset('asset-cliente/casette.gif')}}" style="width: 150px; position: absolute; right:10px;bottom:10px;" alt=""></div></div>';

       
   }


  
</script>
@endsection