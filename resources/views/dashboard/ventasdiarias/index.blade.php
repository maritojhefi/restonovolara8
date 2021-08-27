@extends('dashboard.ventasdiarias.cabecera')
@section('section')

<button class="btn btn-secondary btn-block mt-2 mb-4 btn-lg btn-floating" data-toggle="modal" data-target="#crearcuentamodal">Abrir una nueva cuenta</button>

    
          
                 
               @livewire('mesas-activas')
  
    
    
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
    </div>
   
   <script>
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