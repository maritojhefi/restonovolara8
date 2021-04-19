@extends('dashboard.master')
@section('content')

    <header class="page-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h1 class="separator">Lista de roles</h1>
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
                <a class="btn btn-primary   m-b-20" href="{{route('rol.create')}}">Crear Nuevo</a>
                <div class="card ">
                   
                    <div class="card-body   ">
                        <div  class="dataTables_wrapper container-fluid dt-bootstrap4 ">
                           
                           
                            <div class="row  table-responsive-md">
                                <div class="col-sm-12">
                                    <table id="bs4-table" class="table table-striped table-bordered dataTable" style="width: 100%;" role="grid" aria-describedby="bs4-table_info">
                            <thead>
                                <tr role="row ">
                                    <th class="sorting_asc" style="width: 50%;">Nombre</th>
                                    <th class="sorting_asc" style="width: 50%;">Descripcion</th>
                                   
                                    <th style="width: 5px;"> <i class="icon dripicons-gear text-success"></i></th>
                                </tr>
                                      </thead>
                            <tbody>
                                @foreach ($roles as $rol)
                                    
                              
                                <tr role="row" class="odd">
                                   
                                    <td>{{$rol->nombre}}</td>
                                    
                                    <td>{{$rol->descripcion}}</td>
                                    <td>
                                        <div class="col">
											<div class="dropdown">
												<a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														<i class="la la-ellipsis-v"></i>
													</a>
												<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                                    <div class="row mx-auto">
                                                        
                                                        <div class="col-6 ">
                                                            <a class="dropdown-item" href="{{route('rol.edit',$rol->id)}}" data-toggle="tooltip" data-placement="bottom" data-original-title="Editar"><span class="material-icons mx-auto">
                                                                mode
                                                                </span></a>

                                                        </div>
                                                        <div class="col-6">
                                                            <button class="dropdown-item"  type="submit"  data-toggle="modal" data-target="#deleteModals{{$rol->id}}" data-id="{{$rol->id}}" ><span class="material-icons">
                                                                delete_forever
                                                                </span></button>

                                                        </div>
                                                       
                                                    </div>
												
												</div>
											</div>
										</div>
                                    </td>
                                </tr>
                                <div class="modal fade" id="deleteModals{{$rol->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5 class="modal-title" id="modalLabel">Borrar Registro</h5>
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                          </button>
                                        </div>
                                        <div class="modal-body">
                                        <p>Seguro que desea borrar el rol {{$rol->nombre}} ?</p>
                                        </div>
                                        <div class="modal-footer">
                                            <form method="POST" action="{{route('rol.destroy',$rol->id)}}" >
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
                               
                            </tbody>
                           
                        </table>
                    </div>
                </div>
                <div class="row"><div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="bs4-table_info" role="status" aria-live="polite">Mostrando {{$lista}} roles</div>
                </div>
                <div class="row"><div class="btn btn-sm">
                    {{$roles->links()}}
                </div>
            </div>
        </div>
    
    
                    </div>
                </div>
            </div>
        </div>
    </section>

    
@endsection

