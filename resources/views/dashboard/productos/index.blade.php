@extends('dashboard.productos.cabecera')
@section('section')

        <!-- PAGE SEARCH -->
        <form action="{{route('producto.index')}}" method="">
            @csrf
            <div class="search-wrapper page-search m-t-20">
                <button class="search-button-submit" type="submit"><i class="icon dripicons-search"></i></button>
                <input type="text" class="search-input" placeholder="Buscar producto" name="filtro" autofocus>
            </div>
        </form>
        <!-- PAGE TABS -->
      
 
<a href="{{route('producto.create')}}" class="btn btn-info  btn-block btn-floating text-white mt-2">Crear Nuevo Producto</a>
    <section class="page-content container-fluid">
        <label for="" class="mb-2">Mostrando {{$total}} resultados...</label> 
        <div class="row">
        @foreach ($productos as $producto)
       
        
      
        <div class="col-sm-12 col-md-6 col-xl-3">
            <div class="card">
                <div class="card-content">
                    <div class="card-header">
                        <h4 class="card-title">{{$producto->nombre}}</h4>
                        <h6 class="card-subtitle text-muted">{{$producto->precioventa}} Bs</h6>
                    </div>
                    @if ($producto->image)
                    <img class="img-fluid mx-auto d-block" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image cap" style="height:250px">
                    @else
                    <img class="img-fluid mx-auto d-block" src="{{asset('images/food.png')}}" alt="Card image cap">

                    @endif
                   
                    <div class="card-body">
                        <p class="card-text">{{$producto->genero}}/{{$producto->estado}}</p>
                        <div class="row mx-auto">
                            <a class="col-4 "  href="{{route('producto.show',$producto->id)}}" >
                                <span class="material-icons  text-success">remove_red_eye</span>
                            </a>
                            <a class="col-4"  href="{{route('producto.edit',$producto->id)}}">
                                <span class="material-icons text-info">edit</span>
                            </a>
                            <a class="col-4"  href="" data-toggle="modal" data-target="#deleteModal{{$producto->id}}" data-id="{{ $producto->id}}" >
                                <span class="material-icons  text-danger">close</span>
                            </a>
                           
                        </div>
                        
                        
                       
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deleteModal{{$producto->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalLabel">Borrar Registro</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <p>Seguro que desea borrar el producto: {{$producto->nombre}} ?</p>
                </div>
                <div class="modal-footer">
                    <form id="formDelete" method="POST" action="{{route('producto.destroy',$producto->id)}}" >
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  
                    @method('DELETE')
                
                    @csrf
                    <button type="submit" class="btn btn-primary">Confirmar</button>
                </div>
                </form>
                  
              </div>
            </div>
          </div>
       
       @endforeach
    </div>
    </section>

    
@endsection

