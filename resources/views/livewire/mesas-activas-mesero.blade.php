<div>
    
        <div id="" class="row">
     @isset($cuentas)
     @foreach ($cuentas as $cuenta)
        <div class="col-sm-3 col-6" >
    
            <div class="card " style="box-shadow: 0px -1px 7px 5px rgb(241, 233, 233);border-radius: 15px;">
                @if ($cuenta->estado=="finalizado")
                <a href="javascript:void(0)">

                @else    
                <a href="{{route('editarCuenta',$cuenta->id)}}">

                @endif

                <div class="d-flex" style="">
                   
                    <div class="col p-t-15 p-b-15" style="background-color:{{$cuenta->table->color}};border-radius: 15px 15px 0px 0px;">
                        @if ($cuenta->estado=="finalizado")
                        <del style="color:red;"><h2 for="" class="text-white text-center">mesa {{$cuenta->table->numero}}</h2></del>

                        @else
                        <h2 for="" class="text-white text-center">mesa {{$cuenta->table->numero}}</h2>

                        @endif
                    </div>
               
                </div>
            </a>
                <div class="text-center">
                    <ul class="list-reset">
                        
                    
                        <div class="form-body">
                            <div class="inputs">
                            <div class="form-group row">
                              
                                <label class="control-label text-info col-md-4">Detalle</label>
                                <div class="col-md-8">
                                    <span class="text-center">{{$cuenta->observacion}}</span>
                                </div>   
                            </div>
                            
                           
                                 
                              
                            </div>
                           
                            
                           
                    
                </div>
                        
                        <!--<order-progress status="{{$cuenta->estado}}" cuenta_id="{{$cuenta->id}}"></order-progress>-->

                        <div class="row d-flex justify-content-between align-items-center mx-auto pl-3 pr-3">
                            @if ($cuenta->estado!="finalizado" && $cuenta->total!=0)
                            <a class="btn btn-success btn-floating btn-block text-white btn-sm btn-rounded" href="{{route('cobrar',$cuenta->id)}}">Cobrar({{$cuenta->total}} Bs)</a>
                            <button class="btn btn-info btn-floating btn-block text-white btn-sm btn-rounded showlist"  data-toggle="modal" data-target="#exampleModalFixedHeight{{$cuenta->id}}" data-id="{{ $cuenta->id}}">
                                <span class="material-icons">fact_check</span></button>
                            @endif
                            @if ($cuenta->total==0)
                            <button class="btn btn-danger btn-floating btn-block text-white btn-sm btn-rounded"  data-toggle="modal" data-target="#deleteModal{{$cuenta->id}}" data-id="{{ $cuenta->id}}">
                                <span class="material-icons">delete_forever</span></button>
                            @endif
                          
                        </div>
      
                        
                        


                    </ul>
                </div>
            </div>
     
        </div>
        <div class="modal fade" id="deleteModal{{$cuenta->id}}" tabindex="-1" data-backdrop="false" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalLabel">Atencion!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <p>Seguro que desea borrar la mesa {{$cuenta->table->numero}} ?</p>
                </div>
                <div class="modal-footer">
                    <form id="formDelete" method="POST" action="{{route('deletecuenta',$cuenta->id)}}" >
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  
                    @method('DELETE')
                
                    @csrf
                    <button type="submit" class="btn btn-primary">Confirmar</button>
                </div>
                </form>
                  
              </div>
            </div>
          </div>
          <div class="modal fade" id="exampleModalFixedHeight{{$cuenta->id}}" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalFixedHeightTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalFixedHeightTitle">Cuenta total mesa # {{$cuenta->table->numero}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="zmdi zmdi-close"></span>
                        </button>
                    </div>
                    <div class="modal-body">
            
            <div class="card">
              
               

                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Cant</th>
                        <th>Nombre</th>
                        
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody id="tablacuenta{{$cuenta->id}}">
                     <tr id="total{{$cuenta->id}}"></tr>
                    </tbody>
                  </table>

                </div>
              
            </div>
                    </div>
                
                </div>
            </div>
        </div>
        @endforeach
        @endisset
        @empty($cuenta)
                    No tiene ninguna mesa activa

        @endempty

       
       
    
</div>
            
            
           
  
</div>
