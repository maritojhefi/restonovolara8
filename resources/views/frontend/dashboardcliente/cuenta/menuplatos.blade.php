@extends('frontend.dashboardcliente.master')
@section('content')
<br>
<div class="col-12">
    <ul class="nav nav-pills nav-pills-primary mb-3" id="pills-demo-1" role="tablist">
        <li class="nav-item">
            <a class="nav-link  active show" id="pills-1-tab" data-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="false">Comida</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-2-tab" data-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="true">Bebida</a>
        </li>
    </ul>
    <div class="card">
        <h5 class="card-header">Vertical Pills</h5>
        
            <div class="row">
                <div class="col-4">
                    <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        @foreach ($categorias as $comida)
                        @if ($loop->first)
                        <a class="nav-link  active" style="padding: 10px 10px" id="v-pills-home-tab" data-toggle="pill" href="#{{$comida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$comida->nombre}}</a>
                        @else
                        <a class="nav-link " style="padding: 10px 10px" id="v-pills-home-tab" data-toggle="pill" href="#{{$comida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$comida->nombre}}</a>

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
                        <img  class="img-thumbnail max-w-100" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">

                        @else
                        <img src="{{asset('images/food.png')}}" class="img-thumbnail max-w-100" alt="">
                        @endif  
                    </div>
                    <div class="col">
                        <div class="m-l-10">
                            <h6 class="card-title m-0"><a class="text-dark">{{$producto->nombre}}</a></h6>
                            <small class="card-text"></small>{{$producto->cantidad}} <br>
                            <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-secondary"><i class="font-size-22 v-align-middle zmdi zmdi-plus-circle zmdi-hc-fw text-white"></i>Añadir</span></small> </a> <br>

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
                            <img  class="img-thumbnail max-w-100" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
    
                            @else
                            <img src="{{asset('images/food.png')}}" class="img-thumbnail max-w-100" alt="">
                            @endif  
                        </div>
                        <div class="col">
                            <div class="m-l-10">
                                <h6 class="card-title m-0"><a class="text-dark">{{$producto->nombre}}</a></h6>
                                <small class="card-text"></small>{{$producto->cantidad}} <br>
                                <a href="#">  <small class="text-muted"><span class="badge badge-pill badge-secondary"><i class="font-size-22 v-align-middle zmdi zmdi-plus-circle zmdi-hc-fw text-white"></i>Añadir</span></small> </a> <br>
    
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
@endsection