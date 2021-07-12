@extends('frontend.dashboardcliente.master')
@section('content2')
<br>
<div class="col-12">
    <div class="accordion" id="accordion">
        @foreach ($categorias as $cat)
        <div class="card">
            <div class="card-header" id="heading{{$cat->id}}">
                <h5 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse{{$cat->id}}" aria-expanded="false" aria-controls="collapse{{$cat->id}}">
                           <img  src="{{asset('asset-cliente/food.gif')}}" style="width:30px" /> {{$cat->nombre}}
                        </button>
                    </h5>
            </div>
            <div id="collapse{{$cat->id}}" class="collapse" aria-labelledby="heading{{$cat->id}}" data-parent="#accordion{{$cat->id}}" style="">
                <div class="card-body">
                    @foreach ($productos as $prod)
                    @if ($prod->categoria->nombre==$cat->nombre)
                    <div class="row no-gutters m-b-30">
                        <div class="col-auto">
                            
                            @if ($prod->image)
                            <img class="img-thumbnail max-w-100" src="{{asset('images')}}/{{$prod->image->imagen}}">

                            @else
                            <img class="img-thumbnail max-w-100" src="{{asset('images/food.png')}}">

                            @endif
                        </div>
                        <div class="col">
                            <div class="m-l-10">
                                @if ($prod->cantidad>0)
                                <h6 class="card-title m-0"><a href="javascriptvoid(0)">{{$prod->nombre}}</a></h6>
                                @else
                                <h6 class="card-title m-0"><a href="javascriptvoid(0)"><del>{{$prod->nombre}}</del></a></h6>
                                @endif
                                <small class="text-muted">{{$prod->cantidad>0?'Actualmente disponible':'Agotado' }}</small>
                                <p class="card-text"><strong>{{$prod->precioventa}} Bs</strong></p>
                            </div>
                        </div>
                    </div>
                    @endif
                  
                    @endforeach
                   
                </div>
            </div>
        </div>
        @endforeach
        
       
       
        
    </div>
</div>
@endsection