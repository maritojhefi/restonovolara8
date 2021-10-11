<div class="card">
    <div class="card-body">
        <div class="result-info p-b-30 d-flex flex-column  p-2">
            @isset($canciones)
            <div wire:loading.remove class="h6 result-count row mb-2 ml-2"><small><strong>{{$canciones->count()}}</strong> <strong>Resultados para "{{$buscar}}"</strong></small></div>
            
            
            <div class="row">
                <div class="card no-shadow">
                    @foreach ($canciones as $cancion)
                    <div class="row no-gutters m-b-30">
                        <div class="col-auto">
                            <img src="{{$cancion['foto']}}" class="img-thumbnail max-w-100" alt="">
                        </div>
                        <div class="col">
                            <div class="m-l-10">
                                <h6 class="card-title m-0"><a class="text-dark">{{$cancion['nombre']}}</a></h6>
                                <small class="card-text">{{$cancion['artista']}}</small> <br>
                                <a href="#" data-toggle="modal" data-target="#modal{{$loop->index}}" wire:loading.remove>  <small class="text-muted"><span class="badge badge-pill badge-dark"><i class="font-size-22 v-align-middle zmdi zmdi-plus-square zmdi-hc-fw text-white"></i>Añadir</span></small> </a> <br>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade bd-example-modal-sm" id="modal{{$loop->index}}" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" >
                        <div class="modal-dialog modal-sm" >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <img src="{{asset('asset-cliente/play.gif')}}" class="w-35 rounded-circle" alt="">
                                    <small class="modal-title" id="exampleModalLongTitle"><strong>{{$cancion['nombre']}}</strong></small> 
                                    
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" class="zmdi zmdi-close"></span>
                                    </button>
                                </div>
                                <div class="modal-body mx-auto">
                                    
                                    <div class="row mx-auto"><small>
                                        Se agregara 1 bs a tu cuenta y tu cancion se reproducira en breve! Continuar?
                                    </small></div>
                                   
                                    
                                    <div class="row mx-auto">
                                        <img src="{{$cancion['foto']}}" class="img-thumbnail max-w-100 mx-auto" alt="">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger btn-outline btn-rounded btn-sm" data-dismiss="modal"><i class="la la-close font-size-22 v-align-middle text-danger"></i>No</button>

                                    <form action="{{route('agregaracola')}}" method="get">
                                        @csrf
                                       <div id="loading"><button type="submit" class="btn btn-dark btn-rounded btn-sm cargar"  data-qt-block="body" onclick="cargar({{$loop->index}})" ><i class="la la-play font-size-22 v-align-middle text-white"></i>Si</button></div> 


                                        
                                         <input type="hidden" name="trackid" value="{{$cancion['uri']}}">
                                         <input type="hidden" name="cancion" value="{{$cancion['nombre']}}">
                                         <input type="hidden" name="artista" value="{{$cancion['artista']}}">
                                         <input type="hidden" name="foto" value="{{$cancion['foto']}}">

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    
                   
                    </div>
            </div>
            
            @endisset
            
           @empty($canciones)
           <div class="h6 result-count"><span>Ingrese al menos 5 caracteres</span> </div>

           @endempty
        </div>
      
        </div>
    </div>