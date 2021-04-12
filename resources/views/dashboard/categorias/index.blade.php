@extends('dashboard.master')
@section('content')

    <header class="page-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h1 class="separator">Lista de categorias</h1>
                <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{route('principal')}}"><i class="icon dripicons-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">RestoNovo</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{Request::path()}}</li>
                        <ul class="actions top-right">
                            <li class="dropdown">
                                <a href="{{ url()->previous() }}" class="btn btn-fab" >
                                    <i class="la la-long-arrow-left"></i>
                                </a>
                                
                            </li>
                        </ul>
                    </ol>
                </nav>
            </div>
        </div>
    </header>
    
    <section class="page-content container-fluid">
        <div class="row">
            <div class="col-12">
                <a class="btn btn-primary   m-b-20" href="{{route('categoria.create')}}">Crear Nuevo</a>
                

                <div class="col">
                    <div class="card">
                        <h5 class="card-header">Categorias (total : {{$lista}})</h5>
                        <div class="card-body">
                            <ul class="nav nav-pills nav-pills-secondary mb-3" id="pills-demo-1" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active show" id="pills-1-tab" data-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="false">Comidas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-2-tab" data-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="true">Bebidas</a>
                                </li>
                               
                            </ul>
                            <div class="tab-content" id="pills-tabContent-1">
                                <div class="tab-pane fade active show" id="pills-1" role="tabpanel" aria-labelledby="pills-1">


                                    <div class="row  ">
                                        <div class="col-sm-12">
                                            <table id="bs4-table" class="table table-striped table-bordered dataTable" style="width: 100%;" role="grid" aria-describedby="bs4-table_info">
                                    <thead>
                                        <tr role="row ">
                                            <th class="sorting_asc">Nombre</th>
                                            <th class="sorting_asc">Detalle</th>
                                           
                                           
                                            <th style="width: 5px;"> <i class="icon dripicons-gear text-success"></i></th>
                                        </tr>
                                              </thead>
                                    <tbody>
                                        @foreach ($categorias as $categoria)
                                            
                                      @if ($categoria->tipo=="comida")
                                          
                                     
                                        <tr role="row" class="odd">
                                           
                                            <td>{{$categoria->nombre}}</td>
                                            
                                            <td>{{$categoria->detalle}}</td>
                                            <td>
                                                <div class="col">
                                                    <div class="dropdown">
                                                        <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="la la-ellipsis-v"></i>
                                                            </a>
                                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                            <div class="row mx-auto">
                                                                
                                                                <div class="col-6 ">
                                                                    <a class="dropdown-item" href="{{route('categoria.edit',$categoria->id)}}" data-toggle="tooltip" data-placement="bottom" data-original-title="Editar"><span class="material-icons mx-auto">
                                                                        mode
                                                                        </span></a>
        
                                                                </div>
                                                                <div class="col-6">
                                                                    <button class="dropdown-item"  type="submit"  data-toggle="modal" data-target="#deleteModals{{$categoria->id}}" data-id="{{$categoria->id}}" ><span class="material-icons">
                                                                        delete_forever
                                                                        </span></button>
        
                                                                </div>
                                                               
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <div class="modal fade" id="deleteModals{{$categoria->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5 class="modal-title" id="modalLabel">Borrar Registro</h5>
                                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                  </button>
                                                </div>
                                                <div class="modal-body">
                                                <p>Seguro que desea borrar la categoria {{$categoria->nombre}} ?</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <form method="POST" action="{{route('categoria.destroy',$categoria->id)}}" >
                                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                  
                                                    @method('DELETE')
                                                
                                                    @csrf
                                                    <button type="submit" class="btn btn-primary">Confirmar</button>
                                                </div>
                                                </form>
                                                  
                                              </div>
                                            </div>
                                          </div>
                                          @endif
                                        @endforeach
                                       
                                    </tbody>
                                   
                                </table>
                            </div>
                        </div>

                                    </div>


                                    <div class="tab-pane fade " id="pills-2" role="tabpanel" aria-labelledby="pills-2">
                                    
                                        <div class="row ">
                                            <div class="col-sm-12">
                                                <table id="bs4-table" class="table table-striped table-bordered dataTable" style="width: 100%;" role="grid" aria-describedby="bs4-table_info">
                                        <thead>
                                            <tr role="row ">
                                                <th class="sorting_asc">Nombre</th>
                                                <th class="sorting_asc" >Detalle</th>
                                               
                                               
                                                <th style="width: 5px;"> <i class="icon dripicons-gear text-success"></i></th>
                                            </tr>
                                                  </thead>
                                        <tbody>
                                            @foreach ($categorias as $categoria)
                                                
                                          @if ($categoria->tipo=="bebida")
                                              
                                        
                                            <tr role="row" class="odd">
                                               
                                                <td>{{$categoria->nombre}}</td>
                                                
                                                <td>{{$categoria->detalle}}</td>
                                                <td>
                                                    <div class="col">
                                                        <div class="dropdown">
                                                            <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i class="la la-ellipsis-v"></i>
                                                                </a>
                                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                                <div class="row mx-auto">
                                                                    
                                                                    <div class="col-6 ">
                                                                        <a class="dropdown-item" href="{{route('categoria.edit',$categoria->id)}}" data-toggle="tooltip" data-placement="bottom" data-original-title="Editar"><span class="material-icons mx-auto">
                                                                            mode
                                                                            </span></a>
            
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <button class="dropdown-item"  type="submit"  data-toggle="modal" data-target="#deleteModals{{$categoria->id}}" data-id="{{$categoria->id}}" ><span class="material-icons">
                                                                            delete_forever
                                                                            </span></button>
            
                                                                    </div>
                                                                   
                                                                </div>
                                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <div class="modal fade" id="deleteModals{{$categoria->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                  <div class="modal-content">
                                                    <div class="modal-header">
                                                      <h5 class="modal-title" id="modalLabel">Borrar Registro</h5>
                                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                      </button>
                                                    </div>
                                                    <div class="modal-body">
                                                    <p>Seguro que desea borrar  {{$categoria->nombre}} ?</p>
                                                    </div>
                                                    <div class="modal-footer">
                                                      
                                                        <form method="POST" action="{{route('categoria.destroy',$categoria->id)}}" >
                                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                      
                                                        @method('DELETE')
                                                    
                                                        @csrf
                                                        <button type="submit" class="btn btn-primary">Confirmar</button>
                                                    </div>
                                                    </form>
                                                      
                                                  </div>
                                                </div>
                                              </div>
                                              @endif
                                            @endforeach
                                           
                                        </tbody>
                                       
                                    </table>
                                </div>
                            </div>

                                    </div>
                                     
                                        </div>
                                    </div>
                                </div>
                            </div>

               
        </div>
    </section>

    
@endsection

