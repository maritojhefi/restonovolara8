@extends('dashboard.almacen.cabecera')
@section('section')
<section class="page-content container-fluid">
    <div class="row">
        <div class="col-12">
           
            <div class="card ">
               
                <div class="card-body   ">
                    <div  class="dataTables_wrapper container-fluid dt-bootstrap4 ">
                        <form action="{{route('stock')}}" method="GET" >
                            @csrf
                        <div class="row">
                            
                      
                        <div class="col-sm-12 col-md-4">
                            <div id="bs4-table_filter" class="dataTables_filter">
                                <label>Buscar:
                                    <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="bs4-table" name="buscar" value="{{old('buscar')}}"></label>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4  mb-3">
                                <button type="submit" class="btn btn-secondary btn-floating">Filtrar</button>
                                </div>
                          
                        </div>
                        <br>
                        Productos totales:{{$cantidad}}
                    </form>
                        <div class="row  table-responsive-md table-responsive-xs">
                            <div class="col-sm-12">
                                <table id="bs4-table" class="table table-striped table-bordered dataTable" style="width: 100%;" role="grid" aria-describedby="bs4-table_info">
                        <thead>
                            <tr role="row ">
                                <th class="sorting_asc" style="width: auto;">Imagen</th>

                                <th class="sorting_asc">Nombre</th>
                                <th class="sorting_asc">Cantidad</th>
                                <th class="sorting_asc">Estado</th>
                                <th class="sorting_asc">Acciones</th>
                               
                            </tr>
                                  </thead>
                        <tbody>
                            
                           @foreach ($productos as $prod)
                               
                           
                                
                          
                            <tr role="row" class="odd  ">
                                <td>
                                   
                                   @if ($prod->image)
                                   <img class=" mr-3 rounded-circle" src="{{asset('images')}}/{{$prod->image->imagen}}"  style="width:50px;height:50px" alt=" ">
                                    @else
                                    <img class=" mr-3 rounded-circle" src="{{asset('images')}}/person.png"  style="width:50px;height:50px" alt=" ">
                                   @endif
                                </td>
                                <td class="sorting_1"><div class="media">
                                    <div class="media-body">
                                      <p class="mb-0"><strong class="">{{$prod->nombre}}</strong></p>
                                    </div>
                                  </div></td>
                                  <td>{{$prod->cantidad}}</td>
                            <td><button class=" btn btn-sm btn-rounded badge badge-pill estado badge-{{$prod->estado=='activo'?'success':'danger'}}" data-id="{{$prod->id}}">{{$prod->estado}}</button></td>
                              
                                <td><button type="button" class="btn btn-accent btn-rounded btn-floating btn-outline" data-toggle="modal" data-target="#editarmodal{{$prod->id}}">
                                    Editar
                                </button> </td>
                               
                              
                             
                               
                            </tr>
                            <div class="modal fade" id="editarmodal{{$prod->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="modalLabel"><strong>{{$prod->nombre}}</strong> - Stock actual:{{$prod->cantidad}}</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                        <form id="formDelete" method="POST" action="{{route('cambiarstock')}}" >
                                            @csrf
                                        <div class="form-group">
                                            <label for="demoTextInput2">Introduzca el stock:</label>
                                            <input type="text" class="form-control input-rounded" required id="" placeholder="Nueva cantidad" name="nuevacantidad">
                                            <input type="hidden" name="idproducto" value="{{$prod->id}}">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                       
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                      
                                       
                                    
                                       
                                        <button type="submit" class="btn btn-primary">Confirmar</button>
                                    </div>
                                    </form>
                                      
                                  </div>
                                </div>
                              </div>
                         
                              @endforeach
                        </tbody>
                       
                    </table>
                </div>
            </div>
            <div class="row"><div class="col-sm-12 col-md-5">
            </div>
            <div class="row"><div class="btn btn-sm">
                {{$productos->links()}}
            </div>
        </div>
    </div>


                </div>
            </div>
        </div>
    </div>
</section>

<script>
     document.querySelectorAll(".estado").
forEach(link=>link.addEventListener("click", function(){

var id=link.getAttribute("data-id");
$.ajax({
  method: "POST",
  url: "{{route('cambiarestado')}}",
  data:{'_token': '{{csrf_token()}}','id':id}
})
  .done(function( approved ) {
   if(approved=="inactivo"){
     $(link).removeClass('badge-success');
     $(link).addClass('badge-danger');
     $( link).text("inactivo")
   }else{
    $(link).removeClass('badge-danger');
     $(link).addClass('badge-success');
     $( link).text("activo")
   }

  });
}))
</script>
@endsection