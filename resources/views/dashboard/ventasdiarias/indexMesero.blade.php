@extends('dashboard.ventasdiarias.cabecera')
@section('section')


@if (auth()->user()->rol->nombre=="mesero")
<button class="btn btn-secondary btn-block mt-2 mb-2 btn-lg btn-floating" data-toggle="modal" data-target="#crearcuentamodal">Abrir una nueva cuenta</button>

<div id="app">
    <div id="" class="row">
     
        
     @isset($cuentas)
     @foreach ($cuentas as $cuenta)
        <div class="col-sm-3 col-6">
    
            <div class="card ">
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
                <div class="text-center">
                    <ul class="list-reset">
                        
                    
                        <div class="form-body">
                            <div class="inputs">
                            <div class="form-group row">
                                <label class="control-label text-success col-md-4">Estado</label>
                                <div class="col-md-8">
                                    <span class="text-center">{{$cuenta->estado}}</span>                                        

                                </div>
                            </div>
                            
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
                            @if ($cuenta->estado!="finalizado")
                            <a class="btn btn-success btn-floating btn-block text-white btn-sm" href="{{route('cobrar',$cuenta->id)}}">Cobrar({{$cuenta->total}} Bs)</a>

                            @endif
                            @if ($cuenta->total==0)
                            <button class="btn btn-danger btn-floating btn-block text-white btn-sm"  data-toggle="modal" data-target="#deleteModal{{$cuenta->id}}" data-id="{{ $cuenta->id}}">
                                <span class="material-icons">delete_forever</span></button>
                            @endif
                          
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
        @endisset
        @empty($cuenta)
                    No tiene ninguna mesa activa

        @endempty

       
       
      
            
            
           
    </div>
</div>


<div class="modal fade" id="crearcuentamodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Creando Cuenta para {{auth()->user()->name}}</h5>
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
                                                <input type="number" placeholder="" min="0" class="form-control date" id="mesa" maxlength="10" name="mesa_id" >
                                                <span id="error_table"></span>

                                            </div>
                                        </div>
                                        

                                                <input type="hidden" value="{{auth()->user()->id}}" maxlength="19" name="mesero">
                                          
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
@else
<br>
<h1>Debe ser mesero para crear cuentas</h1>
@endif


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