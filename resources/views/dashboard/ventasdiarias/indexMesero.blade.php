@extends('dashboard.ventasdiarias.cabecera')
@section('section')
@if (auth()->user()->rol->nombre=="mesero")
<button class="btn btn-secondary btn-block mt-2 mb-2 btn-lg btn-floating" data-toggle="modal" data-target="#crearcuentamodal">Abrir una nueva cuenta</button>


     
        

@livewire('mesas-activas-mesero')





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
     document.querySelectorAll(".showlist").
   forEach(link=>link.addEventListener("click", function(){
       var id=link.getAttribute("data-id");
   $.ajax({
     method: "POST",
     url: "{{route('mostrarListaCompleta')}}",
     data:{'_token': '{{csrf_token()}}','id_sale':id}
   })
     .done(function( approved ) {
        leerjson(approved,id)
       
       
      $('#exampleModalFixedHeight'+id).modal('show'); // abrir
    
     });
   }))

   function leerjson(approved,idtable){
    
  
    var tabla = document.getElementById("tablacuenta"+idtable);
    var total = document.getElementById("total"+idtable);
 
    //console.log(approved);
     var i=0;
     var string='';
     var sum=0;
     let id=0;
     var link='';
        for (var a in approved) {
          
            string= string+'<tr><td ><strong name="number" id="cantidad'+approved[i].id+'" >'+ approved[i].cantidad+'</strong></td><td><strong>'+ approved[i].nombre+'</strong></td><td>'+ approved[i].subtotal+' Bs</td><td></tr>'
          sum=sum+parseInt(approved[i].subtotal);
          i++;
      }
      string=string+ '<th></th><th></th><th>Total: '+sum+' Bs</th><th></th>';
      tabla.innerHTML=string;
  }

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