<div>
   
        <div class="row">
           
    @foreach ($cuentas as $cuenta)
    <div class="col-sm-3 col-6 col-md-4 col-lg-3" >

            <div class="card  border " style="box-shadow: 0px -1px 7px 5px rgb(241, 233, 233); border: 2px solid rgb(250, 250, 250);border-radius: 15px;">
                @if ($cuenta->estado=="finalizado")
                <a href="javascript:void(0)">

                @else    
                <a href="{{route('editarCuenta',$cuenta->id)}}">

                @endif

                <div class="d-flex " style="background-color: {{$cuenta->table->color}}; border-radius:15px 15px 0px 0px">
                   
                    <div class="col p-t-15 p-b-15" >
                        @if ($cuenta->estado=="finalizado")
                        <del style="color:red;"><h2 for="" class="text-white text-center">mesa {{$cuenta->table->numero}}</h2></del>

                        @else
                        <h2 for="" class="text-white text-center">mesa {{$cuenta->table->numero}}</h2>

                        @endif
                    </div>
               
                </div>
            </a>
                <div class="p-20 text-center">
                    <ul class="list-reset text-left ">
                        <div class="progress ">
                      
                            <div class="progress-bar {{$cuenta->estado=='pendiente'? 'bg-danger':''}}{{ $cuenta->estado=='espera'? 'bg-accent': ''}}{{ $cuenta->estado=='despachado'? 'bg-info': ''}}{{ $cuenta->estado=='finalizado'? 'bg-success': ''}}" role="progressbar" style="width: {{$cuenta->estado=='pendiente'? '25%':''}}{{ $cuenta->estado=='espera'? '50%': ''}}{{ $cuenta->estado=='despachado'? '75%': ''}}{{ $cuenta->estado=='finalizado'? '100%': ''}};" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{$cuenta->estado=='pendiente'? '25%':''}}{{ $cuenta->estado=='espera'? '50%': ''}}{{ $cuenta->estado=='despachado'? '75%': ''}}{{ $cuenta->estado=='finalizado'? '100%': ''}}</div>
                        
                        </div>
                        @if ($cuenta->user)
                        <li class="text-muted"><strong>Mesero:</strong> <span class="m-l-15"><strong class="text-accent">{{$cuenta->user->name}}</strong></span></li>

                        @endif
                        <li class="text-muted"><strong>Estado:</strong><span class="m-l-15">{{$cuenta->estado}}</span></li>

                        <li class="text-muted"><strong>Subtotal:</strong> <span class="m-l-15"><strong>{{$cuenta->total}} Bs</strong></span></li>

                        <!--<order-progress status="{{$cuenta->estado}}" cuenta_id="{{$cuenta->id}}"></order-progress>-->

                        <div class="row d-flex justify-content-between align-items-center pl-3 pr-3">
                            @if ($cuenta->estado!="finalizado")
                            <a class="btn btn-success btn-rounded btn-floating   btn-sm text-white" href="{{route('cobrar',$cuenta->id)}}">Cobrar</a>
                            <button class="btn btn-info btn-rounded btn-floating  btn-sm showlist" wire:click="cuentatotal('{{$cuenta->id}}')">
                                <span class="material-icons">fact_check</span></button>
                                <button class="btn btn-warning btn-rounded btn-floating  btn-sm gettoken" data-id="{{ $cuenta->id}}"  data-toggle="modal" data-target="#exampleModalLabel{{$cuenta->id}}">
                                    <span class="material-icons">
                                        vpn_key
                                        </span></button>
                            @endif
                           
                            <button class="btn btn-accent btn-rounded btn-floating  btn-sm"  data-toggle="modal" data-target="#deleteModal{{$cuenta->id}}" data-id="{{ $cuenta->id}}">
                                <span class="material-icons">save</span></button>
                                @if ($cuenta->estado=='finalizado')
                                <a class="btn btn-success btn-rounded btn-floating   btn-sm text-white" href="{{route('reabrircuenta',$cuenta->id)}}"><span class="material-icons">
                                    lock_open
                                    </span></a>

                                @endif
                               
                        </div>
      
                        
                        


                    </ul>
                </div>
            </div>
     
        </div>

        <div class="modal modal-top-left-corner fade"  data-backdrop="false"  tabindex="-1" role="dialog" id="exampleModalLabel{{$cuenta->id}}" aria-labelledby="exampleModalLabel{{$cuenta->id}}" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Generar clave Token para la mesa : {{$cuenta->table->numero}}?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" class="zmdi zmdi-close"></span>
                        </button>
                    </div>
                   
                    <div class="modal-footer">
                        <button type="button" class=" btn btn-secondary btn-rounded btn-floating" data-dismiss="modal">Cerrar</button>
                        <a href="{{route('creartokenmesa',$cuenta->id)}}" class=" btn btn-success btn-rounded btn-floating text-white">Confirmar</a>
        
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deleteModal{{$cuenta->id}}" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalLabel">Atencion!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <p>Esta por archivar y borrar de cuentas activas la mesa # {{$cuenta->table->numero}}</p>
                </div>
                <div class="modal-footer">
                    <form id="formDelete" method="POST" action="{{route('archivarcuenta',$cuenta->id)}}" >
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
       @isset($cuentaactual)
       <div class="modal fade" id="modalcuenta" data-backdrop="false"  tabindex="-1" role="dialog" aria-labelledby="modalcuentaTitle" aria-hidden="true" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mr-3" id="modalcuentaTitle">Cuenta total mesa # {{$cuentaactual->table->numero}}</h5>
                    
                    <a href="{{route('imprimirpedidocompleto',$cuentaactual->id)}}" class="btn btn-sm btn-rounded btn-floating btn-danger">Imprimir pedido</a>

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
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  @isset($personalizado)
                  @foreach ($personalizado as $item)
                        
                 <tr>
                  <td>{{$item['nombre']}}</td>
                  <td>{{$item['cantidad']}}</td>
                  <td>{{$item['precio']}} Bs</td>
                  <td>{{$item['subtotal']}} Bs</td>
                  <td><a href="#" wire:click="deleteproductos('{{$item['id']}}','{{$item['cantidad']}}')"><span class="material-icons">delete</span></a></td>
                </tr>
                  @endforeach
                  @endisset
                
                </tbody>
              </table>

            </div>
          
        </div>
                </div>
            
            </div>
        </div>
    </div>
       @endisset
       
 
          
      
     
      <script type="text/javascript">
           
            Livewire.on('showmodal', () => {
              $('#modalcuenta').modal('show')
            })
            Livewire.on('hidemodal', () => {
              $('#modalcuenta').modal('hide')
            })
            
    </script>
     
      
      
  
      
       
</div>
