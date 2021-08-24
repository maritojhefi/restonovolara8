<div>
    <button class="btn btn-secondary btn-block mt-2 mb-4 btn-lg btn-floating" data-toggle="modal" data-target="#crearcuentamodal">Abrir una nueva cuenta</button>

    <div id="app">
        <div id="" class="row">
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
                                    <button class="btn btn-info btn-rounded btn-floating  btn-sm showlist"  data-toggle="modal" data-target="#exampleModalFixedHeight{{$cuenta->id}}" data-id="{{ $cuenta->id}}">
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
    
                <div class="modal modal-top-left-corner fade" data-backdrop="static" tabindex="-1" role="dialog" id="exampleModalLabel{{$cuenta->id}}" aria-labelledby="exampleModalLabel{{$cuenta->id}}" aria-hidden="true">
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
                  <div class="modal fade" id="exampleModalFixedHeight{{$cuenta->id}}"  tabindex="-1" role="dialog" aria-labelledby="exampleModalFixedHeightTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mr-3" id="exampleModalFixedHeightTitle">Cuenta total mesa # {{$cuenta->table->numero}}</h5>
                                
                                <a href="{{route('imprimirpedidocompleto',$cuenta->id)}}" class="btn btn-sm btn-rounded btn-floating btn-danger">Imprimir pedido</a>
    
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
    @endisset</div>
