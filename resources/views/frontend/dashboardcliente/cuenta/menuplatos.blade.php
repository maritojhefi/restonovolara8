@extends('frontend.dashboardcliente.master')
@section('content')
<br>
<div class="col-12">
    <div class="alert alert-info alert-dismissible fade show" role="alert">
<strong>Pulse en el boton "Agregar" para realizar el pedido a su mesa!</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true" class="la la-close"></span>
        </button>
    </div>
    <ul class="nav nav-pills nav-pills-danger mb-3" id="pills-demo-1" role="tablist">
        <li class="nav-item">
            <a class="nav-link  active show" id="pills-1-tab" data-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="false">Comida</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-2-tab" data-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="true">Bebida</a>
        </li>
    </ul>
    <div class="tab-content" id="pills-tabContent-1">
        <div class="tab-pane active show" id="pills-1" role="tabpanel" aria-labelledby="pills-1">
            <div class="card">
            <h5 class="card-header">Comida</h5>
        
            <div class="row">
                <div class="col-4">
                    <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        @foreach ($categorias as $comida)
                        @if ($loop->first)
                        <a class="nav-link text-secondary active" style="padding: 10px 10px" id="v-pills-home-tab" data-toggle="pill" href="#{{$comida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$comida->nombre}}</a>
                        @else
                        <a class="nav-link text-secondary " style="padding: 10px 10px" id="v-pills-home-tab" data-toggle="pill" href="#{{$comida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$comida->nombre}}</a>

                    @endif


                        @endforeach
                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content" id="v-pills-tabContent">
                      @foreach ($categorias as $comida)
                      @if ($loop->first)

                      <div class="tab-pane fade show active" id="{{$comida->id}}" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div class="row">

                        
                       @foreach ($productos as $producto)
                       @if ($producto->category_id==$comida->id)

                      
                  <div class="row no-gutters m-b-30">
                    <div class="col-auto">
                        @if ($producto->image)
                        <img  class="img-thumbnail max-w-100 {{$producto->cantidad==0 || $producto->estado=='inactivo'?'opaco':''}}" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">

                        @else
                        <img src="{{asset('images/food.png')}}" class="img-thumbnail max-w-100" alt="">
                        @endif  
                    </div>
                    <div class="col">
                        <div class="m-l-10">
                            <h6 class="card-title m-0"><a class="text-dark">{{$producto->nombre}}</a></h6>
                            <small class="card-text"></small>{{$producto->precioventa}} Bs<br>
                            @if ($producto->cantidad==0 || $producto->estado=='inactivo')
                            <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-danger"><i class="font-size-22 v-align-middle la la-ban text-white"></i>No disponible</span></small> </a> <br>
                            @else
                            <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-secondary"><i class="font-size-22 v-align-middle zmdi zmdi-plus zmdi-hc-fw text-white"></i>Agregar</span></small> </a> <br>

                            @endif

                        </div>
                    </div>
                </div>
                       @endif

                       @endforeach
                      </div>
                      </div>
                      @else
                      <div class="tab-pane fade show" id="{{$comida->id}}" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div class="row">

                        
                       @foreach ($productos as $producto)
                       @if ($producto->category_id==$comida->id)
                     
                       <div class="row no-gutters m-b-30">
                        <div class="col-auto">
                            @if ($producto->image)
                            <img  class="img-thumbnail max-w-100 {{$producto->cantidad==0 || $producto->estado=='inactivo'?'opaco':''}}" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
    
                            @else
                            <img src="{{asset('images/food.png')}}" class="img-thumbnail max-w-100" alt="">
                            @endif  
                        </div>
                        <div class="col">
                            <div class="m-l-10">
                                <h6 class="card-title m-0"><a class="text-dark">{{$producto->nombre}}</a></h6>
                                <small class="card-text"></small>{{$producto->precioventa}} Bs<br>
                                @if ($producto->cantidad==0 || $producto->estado=='inactivo')
                                <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-danger"><i class="font-size-22 v-align-middle la la-ban text-white"></i>No disponible</span></small> </a> <br>
                                @else
                                <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-secondary"><i class="font-size-22 v-align-middle zmdi zmdi-plus zmdi-hc-fw text-white"></i>Agregar</span></small> </a> <br>
    
                                @endif    
                            </div>
                        </div>
                    </div>
                       @endif

                       @endforeach
                      </div>
                      </div>
                      @endif
                     @endforeach
                    </div>
                  </div>
                        </div>
                    
                </div>

                 
        </div>
        <div class="tab-pane" id="pills-2" role="tabpanel" aria-labelledby="pills-2">
            <div class="card">
                <h5 class="card-header">Bebida</h5>
            
                <div class="row">
                    <div class="col-4">
                        <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            @foreach ($bebidas as $comida)
                            @if ($loop->first)
                            <a class="nav-link text-secondary active" style="padding: 10px 10px" id="v-pills-home-tab" data-toggle="pill" href="#{{$comida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$comida->nombre}}</a>
                            @else
                            <a class="nav-link text-secondary" style="padding: 10px 10px" id="v-pills-home-tab" data-toggle="pill" href="#{{$comida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$comida->nombre}}</a>
    
                        @endif
    
    
                            @endforeach
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="tab-content" id="v-pills-tabContent">
                          @foreach ($bebidas as $comida)
                          @if ($loop->first)
    
                          <div class="tab-pane fade show active" id="{{$comida->id}}" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="row">
    
                            
                           @foreach ($productos as $producto)
                           @if ($producto->category_id==$comida->id)
    
                          
                      <div class="row no-gutters m-b-30">
                        <div class="col-auto">
                            @if ($producto->image)
                            <img  class="img-thumbnail max-w-100 {{$producto->cantidad==0 || $producto->estado=='inactivo'?'opaco':''}}" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
    
                            @else
                            <img src="{{asset('images/food.png')}}" class="img-thumbnail max-w-100" alt="">
                            @endif  
                        </div>
                        <div class="col">
                            <div class="m-l-10">
                                <h6 class="card-title m-0"><a class="text-dark">{{$producto->nombre}}</a></h6>
                                <small class="card-text"></small>{{$producto->precioventa}} Bs<br>
                                @if ($producto->cantidad==0 || $producto->estado=='inactivo')
                                <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-danger"><i class="font-size-22 v-align-middle la la-ban text-white"></i>No disponible</span></small> </a> <br>
                                @else
                                <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-secondary"><i class="font-size-22 v-align-middle zmdi zmdi-plus zmdi-hc-fw text-white"></i>Agregar</span></small> </a> <br>
    
                                @endif    
                            </div>
                        </div>
                    </div>
                           @endif
    
                           @endforeach
                          </div>
                          </div>
                          @else
                          <div class="tab-pane fade show" id="{{$comida->id}}" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="row">
    
                            
                           @foreach ($productos as $producto)
                           @if ($producto->category_id==$comida->id)
                         
                           <div class="row no-gutters m-b-30">
                            <div class="col-auto">
                                @if ($producto->image)
                                <img  class="img-thumbnail max-w-100 {{$producto->cantidad==0 || $producto->estado=='inactivo'?'opaco':''}}" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
        
                                @else
                                <img src="{{asset('images/food.png')}}" class="img-thumbnail max-w-100" alt="">
                                @endif  
                            </div>
                            <div class="col">
                                <div class="m-l-10">
                                    <h6 class="card-title m-0"><a class="text-dark">{{$producto->nombre}}</a></h6>
                                    <small class="card-text"></small>{{$producto->precioventa}} Bs<br>
                                    @if ($producto->cantidad==0 || $producto->estado=='inactivo')
                                    <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-danger"><i class="font-size-22 v-align-middle la la-ban text-white"></i>No disponible</span></small> </a> <br>
                                    @else
                                    <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-secondary"><i class="font-size-22 v-align-middle zmdi zmdi-plus zmdi-hc-fw text-white"></i>Agregar</span></small> </a> <br>
        
                                    @endif        
                                </div>
                            </div>
                        </div>
                           @endif
    
                           @endforeach
                          </div>
                          </div>
                          @endif
                         @endforeach
                        </div>
                      </div>
                            </div>
                        
                    </div>
        </div>
    </div>

  
</div>
@endsection