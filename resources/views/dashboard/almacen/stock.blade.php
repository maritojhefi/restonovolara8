@extends('dashboard.almacen.cabecera')
@section('section')
<section class="page-content container-fluid">
    <div class="row">
        <div class="col-12">
           
            <div class="card ">
               
                <div class="card-body   ">
                    <div  class="dataTables_wrapper container-fluid dt-bootstrap4 ">
                        <form action="" method="" >
                        <div class="row">
                            
                        <div class="col-sm-12 col-md-4">
                            
                            <div class="dataTables_length" >
                                <label>Mostrar 
                                    <select  aria-controls="bs4-table" class="form-control form-control-sm" name="resultados">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select> resultados</label>
                                </div>
                            </div>
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
                    </form>
                        <div class="row  table-responsive-md table-responsive-xs">
                            <div class="col-sm-12">
                                <table id="bs4-table" class="table table-striped table-bordered dataTable" style="width: 100%;" role="grid" aria-describedby="bs4-table_info">
                        <thead>
                            <tr role="row ">
                                <th class="sorting_asc" style="width: auto;">Foto</th>

                                <th class="sorting_asc" style="width: 25%;">Nombre</th>
                                <th class="sorting_asc" style="width: 20%;">Apellido</th>
                                <th class="sorting_asc" style="width: 10%;">Rol</th>
                                <th class="sorting_asc" style="width: 10%;">Cedula</th>
                                <th class="sorting_asc" style="width: 20%;">Telefono</th>
                                <th style="width: 5px;"> <i class="icon dripicons-gear text-success"></i></th>
                            </tr>
                                  </thead>
                        <tbody>
                            
                           
                                
                          
                            <tr role="row" class="odd  ">
                                <td>
                                   
                                   
                                    <img class=" mr-3 rounded-circle" src="{{asset('images')}}/person.png"  style="width:50px;height:50px" alt=" ">

                                 
                                </td>
                                <td class="sorting_1"><div class="media">
                                   
                                    <div class="media-body">
                                      <p class="mb-0"><strong class=""></strong></p>
                                      
                                    </div>
                                  </div></td>
                                <td></td>
                              
                                <td>No asignado</td>
                               
                              
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="col">
                                        <div class="dropdown">
                                            <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="la la-ellipsis-v"></i>
                                                </a>
                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink" x-placement="bottom-end" style="">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <a class="dropdown-item" href="" data-toggle="tooltip" data-placement="top" data-original-title="Ver detalle"><span class="material-icons">
                                                            remove_red_eye
                                                            </span></a>
                                                    </div>
                                                    <div class="col-4">
                                                        <a class="dropdown-item" href="" data-toggle="tooltip" data-placement="bottom" data-original-title="Editar"><span class="material-icons">
                                                            mode
                                                            </span></a>

                                                    </div>
                                                    <div class="col-4">
                                                        <button class="dropdown-item"  type="submit"  data-toggle="modal" data-target="#deleteModal" data-id="" ><span class="material-icons">
                                                            delete_forever
                                                            </span></button>

                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="modalLabel">Borrar Registro</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                    <p>Seguro que desea borrar el usuario ?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <form id="formDelete" method="POST" action="" >
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                      
                                        @method('DELETE')
                                    
                                        @csrf
                                        <button type="submit" class="btn btn-primary">Confirmar</button>
                                    </div>
                                    </form>
                                      
                                  </div>
                                </div>
                              </div>
                         
                           
                        </tbody>
                       
                    </table>
                </div>
            </div>
            <div class="row"><div class="col-sm-12 col-md-5">
                <div class="dataTables_info" id="bs4-table_info" role="status" aria-live="polite">Mostrando  usuarios</div>
            </div>
            <div class="row"><div class="btn btn-sm">
                
            </div>
        </div>
    </div>


                </div>
            </div>
        </div>
    </div>
</section>
@endsection