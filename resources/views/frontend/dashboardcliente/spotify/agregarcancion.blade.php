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
                <input type="text" class="search-input" placeholder="Artista y/o cancion" name="cancion" value="{{$track}}">

                @endisset
                @empty($track)
                <input type="text" class="search-input" placeholder="Artista y/o cancion" name="cancion">

                @endempty
            </div>
        </form>
        <!-- PAGE TABS -->
        <ul class="nav nav-tabs">
         
          
            <li class="nav-item" role="presentation">
                <a href="#tab-busqueda" class="nav-link active show" data-toggle="tab" aria-expanded="true">Buscar</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#tab-cola" class="nav-link actual" data-toggle="tab"  aria-expanded="true">Actual</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#tab-ranking" class="nav-link rank" data-toggle="tab" aria-expanded="true">Ranking</a>
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
                                    <div class="alert alert-danger alert-rounded alert-dismissible fade show" role="alert">
                                       No se encontraron resultados para <strong>{{$track}}</strong>.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true" class="la la-close"></span>
                                        </button>
                                    </div>
                                </div>
                                @endif
                               
                                @endisset
                                @isset($listafiltrada)
                                            @if ($listafiltrada->count()>0)
                                            <small> <strong>{{$listafiltrada->count()}} resultados para:  </strong>{{$track}}</small>
                                           

                                            @endif
                                                
                                            <div class="row">
                                            @foreach ($listafiltrada as $canciones)
                                            
                                                <div class="col-sm-12 col-md-4">
                                                    <div class="card text-white">
                                                        <img class="card-img" src="{{$canciones['foto']}}" style="width: auto" alt="Card image">
                                                        <div class="card-img-overlay">
                                                            <h3 class="card-title texto-borde">{{$canciones['nombre']}}</h3>
                                                            <p class="texto-artist ">{{$canciones['artista']}}</p>
                                                            <button type="button" class="btn btn-dark btn-rounded btn-outline"  data-toggle="modal" data-target="#modal{{$loop->index}}" style="padding: 10px 10px 40px 10px; position:absolute;bottom:30px;right:15px;box-shadow: 0px -1px 5px 1px rgb(250, 226, 226)">
                                                                <span class="material-icons">
                                                                    add_task
                                                                    </span><strong> Añadir</strong> </button>

                                                            
                                                        </div>
                
                                                    </div>
                                                </div>
                                               
                                                <div class="modal fade bd-example-modal-sm" id="modal{{$loop->index}}" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" >
                                                    <div class="modal-dialog modal-sm" >
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <small class="modal-title" id="exampleModalLongTitle"><strong>{{$canciones['nombre']}}</strong></small> 
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true" class="zmdi zmdi-close"></span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body mx-auto">
                                                                <div class="row mx-auto"><small>
                                                                    Se agregara 1 bs a tu cuenta y tu cancion se reproducira! Estas seguro?
                                                                </small></div>
                                                                <div class="row ">
                                                                    <div class="col-4"><img src="{{asset('asset-cliente/speaker.gif')}}" class="rounded-circle" style="width: 100px" alt="">                                                                    </div>
                                                                    <div class="col-4"><img src="{{asset('asset-cliente/wavesanimated.gif')}}" class="rounded-circle" style="width: 100px" alt=""></div>

                                                                    <div class="col-4"><img src="{{asset('asset-cliente/play.gif')}}" class="rounded-circle" style="width: 150px" alt=""></div>

                                                                    
                                                                    

                                                                </div>
                                                                
                                                                
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-danger btn-outline btn-rounded btn-sm" data-dismiss="modal">Cerrar</button>
                                                               
                                                                <form action="{{route('agregaracola')}}" method="get">
                                                                    @csrf
                                                                   <div id="loading"><button type="submit" class="btn btn-dark btn-rounded btn-sm cargar"  data-qt-block="body" onclick="cargar({{$loop->index}})" >Confirmar</button></div> 
    
                                                                    
                                                                    
                                                                     <input type="hidden" name="trackid" value="{{$canciones['uri']}}">
                                                                     <input type="hidden" name="cancion" value="{{$canciones['nombre']}}">
                                                                     <input type="hidden" name="artista" value="{{$canciones['artista']}}">
                                                                     <input type="hidden" name="foto" value="{{$canciones['foto']}}">
    
                                                                </form>
                                                            </div>
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
                        <div class="col-sm-12 col-md-6" id="cardactual">
                           
                        </div>
                        
                        <div class="">
                            <div class="alert alert-accent alert-rounded alert-dismissible fade show" role="alert">
                              
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true" class="la la-close"></span>
                                </button>
                                <small class="text-white">
                                    Recuerda volver a presionar <strong>"Actual"</strong> para actualizar la informacion de esta pestaña
                                </small>
                            </div>
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
                   
                    <div class="card" id="ranking">
                       
                               
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
            error.innerHTML='   <div id="cardactual" class="result-info p-b-30"><div class="alert alert-rounded alert-info alert-dismissible fade show" role="alert">Sin permisos para ver esta seccion...<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="la la-close"></span></button></div></div>';
            
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

   function cargar(index)
   {
    $('#modal'+index).modal('toggle'); // abrir
  }

   
   function leerjson2(approved){
    console.log(approved);
    
     var imagen =  document.getElementById("cardactual");
      
       imagen.innerHTML='<div class="card text-white"><img class="card-img" src="'+approved[0]+'" style="width: auto" alt="Card image"><div class="card-img-overlay"><img src="{{asset('asset-cliente/hojas.gif')}}" style="width: 80%; height:auto; position: absolute; " alt=""><h3 class="card-title texto-borde">'+approved[2]+'</h3><p class="texto-artist ">'+approved[1]+'</p><div style="position: absolute; left:15px;bottom:15px;"><a class="btn btn-rounded btn-dark mr-2" style="padding:10px 10px 30px 10px"><i class="zmdi zmdi-thumb-up zmdi-hc-fw" style="color:white"></i></a><a class="btn btn-rounded btn-dark" style="padding:10px 10px 30px 10px"><i class="zmdi zmdi-thumb-down zmdi-hc-fw" style="color:white"></i></a></div><img src="{{asset('asset-cliente/casette.gif')}}" style="width: 100px; position: absolute; right:15px;bottom:15px;" alt=""></div></div>';

       
   }

   document.querySelectorAll(".rank").
   forEach(link=>link.addEventListener("click", function(){
      
   $.ajax({
     method: "get",
     url: "{{route('listarranking')}}",
     data:{'_token': '{{csrf_token()}}'}
   })
     .done(function( approved ) {
         if(approved!='pocos registros')
         {
            leerjson3(approved)

         }
         else
         {
            var error = document.getElementById("tab-ranking");
            error.innerHTML='   <div id="cardactual" class="result-accent p-b-30"><div class="alert alert-rounded alert-danger alert-dismissible fade show" role="alert">Ups! Aun no hay el minimo de registros para formar un ranking...<strong>Empieza pidiendo un tema!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="la la-close"></span></button></div></div>';
            
        setTimeout(function() {
          $("#contenedor").hide(1000);
        }, 6000);
      }
         });
  
     
   }))
   function leerjson3(approved){
    console.log(approved);
    
     var cardrank =  document.getElementById("tab-ranking");
      
      var z=0;
      var a='';
      var b='';
      var c='';
      var d='';
      var e='';
      var f='';
      var g='';
      var h='';
      var i='';
      var j='';
      var k='';
      var l='';
      var m='';

       var card='';
        for(var lista in approved)
        {
           
            a='<li class="list-group-item">'
            b=a+'<a href="javascript:void(0)" class="item d-flex" data-q-action="page-aside-right-open">'
            c=b+'<div class="avatar order-1">'
            d=c+'<img src="'+approved[z].foto+'" alt="contact person" class="rounded-circle w-40 mCS_img_loaded">'
            e=d+'</div>'
            f=e+'<div class="row-content order-2">'
            g=f+'<button type="button" class="btn btn-dark btn-sm btn-rounded"><i class="zmdi zmdi-play-circle zmdi-hc-fw" style="color:white"></i><span class="badge badge-light">'+approved[z].reproducido+'</span></button><small class="text-dark">veces</small>'
            h=g+'<h6 class="list-group-item-heading">'+approved[z].nombre+'</h6>'
            i=h+'<p class="list-group-item-title">'+approved[z].artista+'</p>'
            j=i+''
            k=j+'</div>'
            l=k+'</a>'
            m=l+'</li>'
            card=card+m
            z++  
        }
            
        cardrank.innerHTML=card;
   }
</script>
@endsection