@extends('dashboard.ventasdiarias.cabecera')
@section('section')
<button class="btn btn-secondary btn-block mt-2 mb-2 btn-lg btn-floating" data-toggle="modal" data-target="#crearcuentamodal">Abrir una nueva cuenta</button>

<div id="app">
    <div id="" class="row">
        @foreach ($cuentas as $cuenta)
        <div class="col-sm-3 col-6">
    
                <div class="card  border ">
                    @if ($cuenta->estado=="finalizado")
                    <a href="javascript:void(0)">
    
                    @else    
                    <a href="{{route('editarCuenta',$cuenta->id)}}">
    
                    @endif
    
                    <div class="d-flex bg-primary">
                       
                        <div class="col p-t-30 p-b-30" style="background-color:{{$cuenta->table->color}}">
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
                            <li class="text-muted"><strong>Mesero:</strong> <span class="m-l-15">{{$cuenta->user->name}}</span></li>

                            @endif
                            <li class="text-muted"><strong>Estado:</strong><span class="m-l-15">{{$cuenta->estado}}</span></li>

                            <li class="text-muted"><strong>Subtotal:</strong> <span class="m-l-15">{{$cuenta->total}}</span></li>
    
                            <!--<order-progress status="{{$cuenta->estado}}" cuenta_id="{{$cuenta->id}}"></order-progress>-->
    
                            <div class="row d-flex justify-content-between align-items-center pl-3 pr-3">
                                @if ($cuenta->estado!="finalizado")
                                <a class="btn btn-info btn-rounded btn-floating btn-outline  btn-sm" href="{{route('cobrar',$cuenta->id)}}">Cobrar</a>
    
                                @endif
                                <button class="btn btn-danger btn-rounded btn-floating btn-outline  btn-sm"  data-toggle="modal" data-target="#deleteModal{{$cuenta->id}}" data-id="{{ $cuenta->id}}">
                                    <span class="material-icons">delete_forever</span></button>
                                   
                            </div>
          
                            
                            
    
    
                        </ul>
                    </div>
                </div>
         
            </div>
            <div class="modal fade" id="deleteModal{{$cuenta->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        @endforeach
      
            
            
           
    </div>
</div>


<div class="modal fade" id="crearcuentamodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Creando Cuenta</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="zmdi zmdi-close"></span>
                </button>
            </div>
            <div class="modal-body">
              
                   
                                <form action="{{route('crearMesaActiva')}}" method="POST" class="form-horizontal">
                                    @csrf
                                    <div class="form-body">
                                        <div class="inputs">
                                        <div class="form-group row">
                                            <label class="control-label text-right col-md-3">Nro. de Mesa</label>
                                            <div class="col-md-5">
                                                <input type="text" placeholder="" class="form-control date" id="mesa" maxlength="10" name="mesa_id" >
                                                <span id="error_table"></span>

                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label text-right col-md-3">Mesero</label>
                                            <div class="col-md-5">
                                                <select class="form-control" id="exampleFormControlSelect1" name="mesero">
                                                    <option value="">Seleccione:</option>
                                                    @foreach ($meseros as $mesero)
                                                    <option value="{{$mesero->id}}">{{$mesero->name}}</option>
                                                    @endforeach
                                                  
                                                </select>                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="control-label text-right col-md-3">Observacion</label>
                                            <div class="col-md-5">
                                                <input type="text" placeholder="" class="form-control date_time" id="date_time" maxlength="19" name="observacion">
                                            </div>
                                        </div>
                                        
                                       
                                
                            </div>
                    
                       

                  
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-outline" data-dismiss="modal">Cancelar</button>
                <button type="submit" id="crear" class="btn btn-success">Crear</button>
            </div>
        </form>
        </div>
    </div>
</div>
<script type="application/javascript">
 $('.modal').on('shown.bs.modal', function() {
  $(this).find('[autofocus]').focus();
});
    $('#mesa').blur(function(){
        var error_table='';
        var mesa= $('#mesa').val();
        var _token=$('input[name="_token"]').val();
        if(mesa=="")
        {
            
            $('#error_table').html('<label class="text-danger">Indique una mesa</label>');
            $('#crear').attr('disabled',true);
        }
        else{
            $.ajax({
               url:"{{route('revisarMesaAjax')}}" ,
               method:"POST",
               data:{mesa:mesa, _token: '{{csrf_token()}}'},
               success:function(result)
               {
                   
                   if(result=='mesaocupada')
                   {
                       $('#error_table').html('<label class="text-danger">Mesa En Uso</label>');
                       $('#mesa').addClass('has-error');

                       $('#crear').attr('disabled',true);
                   }
                   else if(result=='mesanoexiste')
                   {
                       $('#error_table').html('<label class="text-danger">No existe mesa</label>');
                       $('#mesa').addClass('has-error');

                       $('#crear').attr('disabled',true);
                   }
                   else if(result=="")
                   {
                    $('#error_table').html('<label class="text-success">Mesa disponible</label>');
                    $('#mesa').removeClass('has-error');
                       $('#crear').attr('disabled',false);
                   }
               }
            })
        }
            
        
    });
 
</script>
@endsection