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
    <div id="snackbar"></div>
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
    @isset($cuenta)
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
               
               string= string+'<tr><td><strong>'+ approved[i].nombre+'</strong></td><td ><button class="btn btn-sm btn-success" name="number" id="cantidad'+approved[i].id+'" >'+ approved[i].cantidad+'</button></td><td>'+ approved[i].precio+' Bs</td><td>'+ approved[i].subtotal+' Bs</td><td><a href="javascript:void(0)" id="delete'+approved[i].id+'" onclick="deleteproducto('+approved[i].id+','+approved[i].cantidad+','+approved[i].idmesa+');" data-id="'+approved[i].id+'"><span class="material-icons">delete</span></a></td></tr>'
               sum=sum+parseInt(approved[i].subtotal);
               i++;
           }
           string=string+ '<th></th><th></th><th></th><th>Total: '+sum+' Bs</th><th></th>';
           tabla.innerHTML=string;
       }
       
       
       function deleteproducto(id,cant,mesa){
       
       var idproducto= document.getElementById("delete"+id).getAttribute("data-id");
       console.log(mesa)
       $.ajax({
         method: "POST",
         url: "{{route('deleteproductocuentaCompleta')}}",
         data:{'_token': '{{csrf_token()}}','id_producto':idproducto,'id_sale':mesa,'cantidad':cant}
       })
         .done(function( approved ) {
           toastdelete()
           leerjson(approved,mesa)
           $('#exampleModalFixedHeight'+mesa).modal('show'); // abrir
         });
       }
       
       
       function toastdelete() {
         // Get the snackbar DIV
         var x = document.getElementById("snackbar");
         x.innerHTML='<div>Se elimino de la lista</div>'
         
         // Add the "show" class to DIV
         x.className = "show";
       
         // After 3 seconds, remove the show class from DIV
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
       }
       
       function toastagrego() {
         // Get the snackbar DIV
         var x = document.getElementById("snackbar");
         x.innerHTML='<div>Se agrego a la lista</div>'
         
         // Add the "show" class to DIV
         x.className = "show";
       
         // After 3 seconds, remove the show class from DIV
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
       }
       
       function toastresto() {
         // Get the snackbar DIV
         var x = document.getElementById("snackbar");
         x.innerHTML='<div>Se resto a la lista</div>'
         
         // Add the "show" class to DIV
         x.className = "show";
       
         // After 3 seconds, remove the show class from DIV
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
       }
       </script>
    @endisset
@livewire('mesas-activas')

@endsection