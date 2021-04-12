@extends('dashboard.ventasdiarias.cabecera')
@section('section')

<button type="button" class="btn btn-accent btn-rounded btn-block btn-floating m-2  text-white showlist" data-toggle="modal"  data-target="#exampleModalFixedHeight">
  Ver Lista del Pedido(mesa : {{$cuenta->table->numero}})
</button>

      <ul class="nav nav-pills nav-pills-primary mb-3" id="pills-demo-1" role="tablist">
          <li class="nav-item">
              <a class="nav-link  active show" id="pills-1-tab" data-toggle="pill" href="#pills-1" role="tab" aria-controls="pills-1" aria-selected="false">Comida</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" id="pills-2-tab" data-toggle="pill" href="#pills-2" role="tab" aria-controls="pills-2" aria-selected="true">Bebida</a>
          </li>
          
      </ul>
      <div class="tab-content" id="pills-tabContent-1">
          <div class="tab-pane active show" id="pills-1" role="tabpanel" aria-labelledby="pills-1">
            <div class="col-md-6">
              <div class="card">
                  <h5 class="card-header">Comida</h5>
                  <div class="card-body">
                      <div class="row">
                          <div class="col-4">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                              @foreach ($catcomidas as $comida)
                              @if ($loop->first)
                              <a class="nav-link  active" id="v-pills-home-tab" data-toggle="pill" href="#{{$comida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$comida->nombre}}</a>
                              @else
                              <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#{{$comida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$comida->nombre}}</a>
      
                          @endif
      
      
                              @endforeach
                               </div>
                          </div>
                          <div class="col-8">
                            <div class="tab-content" id="v-pills-tabContent">
                              @foreach ($catcomidas as $comida)
                              @if ($loop->first)
      
                              <div class="tab-pane fade show active" id="{{$comida->id}}" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="row">
      
                                
                               @foreach ($productos as $producto)
                               @if ($producto->category_id==$comida->id)
      
                               <div class="col-6">
      
                               
                               <div class="card text-dark">
                                <p class="text-small">{{$producto->nombre}}-{{$producto->precioventa}}Bs</p> 
                                <img class="card-img" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
                                <div class="card-img-overlay">
                                    <button type="submit" data-id="{{$producto->id}}" data-nombre="{{$producto->nombre}}" class="btn btn-secondary btn-rounded btn-floating btn-sm addtolist" style="position:absolute;bottom:30px;right:15px;">
                                      <span class="material-icons">
                                        add_task
                                        </span>
                                    </button>
      
                                </div>
      
                            </div>
                          </div>
                          
                               @endif
      
                               @endforeach
                              </div>
                              </div>
                              @else
                              <div class="tab-pane fade show" id="{{$comida->id}}" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="row">
      
                                
                               @foreach ($productos as $producto)
                               @if ($producto->category_id==$comida->id)
                             
                               <div class="col-6">
      
                               
                               <div class="card text-dark ">
                                <p class="text-small">{{$producto->nombre}}-{{$producto->precioventa}}Bs</p> 
                                <img class="card-img" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
                                <div class="card-img-overlay">
                                    <button type="submit" data-id="{{$producto->id}}" data-nombre="{{$producto->nombre}}" class="btn btn-secondary btn-rounded btn-floating btn-sm addtolist" style="position:absolute;bottom:30px;right:15px;">
                                      <span class="material-icons">
                                        add_task
                                        </span>
                                    </button>
      
                                </div>
      
                            </div>
                          </div>
                               @endif
      
                               @endforeach
                              </div>
                              </div>
                              @endif
                             @endforeach
                            </div>
                          </div>
                        </div>
                  </div>
              </div>
          </div>
              
              
          </div>
           <div class="tab-pane " id="pills-2" role="tabpanel" aria-labelledby="pills-2">
                 
            <div class="col-md-6">
              <div class="card">
                  <h5 class="card-header">Bebida</h5>
                  <div class="card-body">
                      <div class="row">
                          <div class="col-4">
                            
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                              @foreach ($catbebidas as $bebida)
                              @if ($loop->first)
                              <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#{{$bebida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$bebida->nombre}}</a>
                              @else
                              <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#{{$bebida->id}}" role="tab" aria-controls="v-pills-home" aria-selected="true">{{$bebida->nombre}}</a>
      
                          @endif
      
                              @endforeach
                            </div>
                          </div>
                          <div class="col-8">
                            <div class="tab-content" id="v-pills-tabContent">
                              @foreach ($catbebidas as $bebida)
                              @if ($loop->first)
      
                              <div class="tab-pane fade show active" id="{{$bebida->id}}" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="row">
      
                                
                               @foreach ($productos as $producto)
                               @if ($producto->category_id==$bebida->id)
                               <div class="col-6">
      
                               
                               <div class="card text-dark">
                                <p class="text-small">{{$producto->nombre}}-{{$producto->precioventa}}Bs</p> 
                                <img class="card-img" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
                                <div class="card-img-overlay">
                                    <button type="submit" data-id="{{$producto->id}}" data-nombre="{{$producto->nombre}}" class="btn btn-secondary btn-rounded btn-floating btn-sm addtolist" style="position:absolute;bottom:30px;right:15px;">
                                      <span class="material-icons">
                                        add_task
                                        </span>
                                    </button>
      
                                </div>
      
                            </div>
                          </div>
                               @endif
      
                               @endforeach
                              </div>
                              </div>
                              @else
                              <div class="tab-pane fade show" id="{{$bebida->id}}" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="row">
      
                                
                               @foreach ($productos as $producto)
                               @if ($producto->category_id==$bebida->id)
                               <div class="col-6">
      
                               
                               <div class="card text-dark">
                                <p class="text-small">{{$producto->nombre}}-{{$producto->precioventa}}Bs</p> 
                                <img class="card-img" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
                                <div class="card-img-overlay">
                                    <button type="submit" data-id="{{$producto->id}}" data-nombre="{{$producto->nombre}}" class="btn btn-secondary btn-rounded btn-floating btn-sm addtolist" style="position:absolute;bottom:30px;right:15px;">
                                      <span class="material-icons">
                                        add_task
                                        </span>
                                    </button>
      
                                </div>
      
                            </div>
                          </div>
                               @endif
      
                               @endforeach
                              </div>
                              </div>
                              @endif
                             @endforeach
                            </div>
                          </div>
                        </div>
                  </div>
              </div>
          </div>
                
      </div>

<div class="row">
  
    


   
    </div>
    <div class="alert alert-primary alert-dismissible fade" role="alert" id="alert">
      <strong>Brand Alert!</strong> You successfully <a href="#" class="alert-link">read this important alert</a> message.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true" class="la la-close"></span>
      </button>
    </div>
    <!-- Scrolling long content modal demo -->
		<div class="modal fade" id="exampleModalFixedHeight" tabindex="-1" role="dialog" aria-labelledby="exampleModalFixedHeightTitle" aria-hidden="true" data-modal="scroll">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalFixedHeightTitle">Lista del Pedido</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true" class="zmdi zmdi-close"></span>
						</button>
					</div>
					<div class="modal-body">
            <a class="btn btn-success btn-rounded text-white btn-sm" href="{{route('imprimirpedidomesero',$cuenta->id)}}">Imprimir Pedido</a>
            <a class="btn btn-info text-white btn-rounded btn-sm" href="{{route('cobrar',$cuenta->id)}}">Cuenta Total</a>

            <div class="card">
              <div class="card-body">
                Pedidos Pendientes:

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
                    <tbody id="tablacuenta">
                     <tr id="total"></tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
					</div>
				
				</div>
			</div>
		</div>
</div>


<!-- The actual snackbar -->
<div id="snackbar"></div>

<script type="application/javascript">



function toast(id,nombre) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  x.innerHTML='<div>Agrego '+nombre+' a la cuenta</div>'
  
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 800);
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
function toastagotado() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  x.innerHTML='<div><label class="text-danger">Producto agotado!</label></div>'
  
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}

function leerjson(approved){
  var tabla = document.getElementById("tablacuenta");
  var total = document.getElementById("total");

  //console.log(approved);
   var i=0;
   var string='';
   var sum=0;
   let id=0;
   var link='';
      for (var a in approved) {
        
        string= string+'<tr><td>'+ approved[i].nombre+'</td><td ><a href="javascript:void(0)" id="suma'+approved[i].id+'" onclick="sumarproducto('+approved[i].id+');" data-id="'+approved[i].id+'" class="tile-primary sumar"><i  class="zmdi zmdi-plus zmdi-hc-fw sumar"></i></a><button class="btn btn-sm btn-success" name="number" id="cantidad'+approved[i].id+'" >'+ approved[i].cantidad+'</button></td><td>'+ approved[i].precio+' Bs</td><td>'+ approved[i].subtotal+' Bs</td><td><a href="javascript:void(0)" id="delete'+approved[i].id+'" onclick="deleteproducto('+approved[i].id+','+approved[i].cantidad+');" data-id="'+approved[i].id+'"><span class="material-icons">delete</span></a></td></tr>'
        sum=sum+parseInt(approved[i].subtotal);
      
        i++;
        

    }
    
    string=string+ '<th></th><th></th><th></th><th>Total: '+sum+' Bs</th><th></th>';
    tabla.innerHTML=string;

   
}

document.querySelectorAll(".showlist").
forEach(link=>link.addEventListener("click", function(){
$.ajax({
  method: "POST",
  url: "{{route('mostrarLista')}}",
  data:{'_token': '{{csrf_token()}}','id_sale':'{{$cuenta->id}}'}
})
  .done(function( approved ) {
  
    leerjson(approved)
   $('#exampleModalFixedHeight').modal('show'); // abrir
 
  });
}))

function deleteproducto(id,cant){

var idproducto= document.getElementById("delete"+id).getAttribute("data-id");


$.ajax({
  method: "POST",
  url: "{{route('deleteproductocuenta')}}",
  data:{'_token': '{{csrf_token()}}','id_producto':idproducto,'id_sale':'{{$cuenta->id}}','cantidad':cant}
})
  .done(function( approved ) {
  
    toastdelete()
    leerjson(approved)
   $('#exampleModalFixedHeight').modal('show'); // abrir
 
  });
}


function sumarproducto(id){
var idproducto= document.getElementById("suma"+id).getAttribute("data-id");

$.ajax({
  method: "POST",
  url: "{{route('sumarproducto')}}",
  data:{'_token': '{{csrf_token()}}','id_producto':idproducto,'id_sale':'{{$cuenta->id}}'}
})
  .done(function( approved ) {
  if(approved=='agotado')
  {
    toastagotado()
  }
  else{
    toastagrego()
    leerjson(approved)
   $('#exampleModalFixedHeight').modal('show'); // abrir
  }
    
  
 
  });
}




document.querySelectorAll(".addtolist").
forEach(link=>link.addEventListener("click", function(){

var id=link.getAttribute("data-id");
var nombre=link.getAttribute("data-nombre");
$.ajax({
  method: "POST",
  url: "{{route('anadiralista')}}",
  data:{'_token': '{{csrf_token()}}','id':id,'id_sale':'{{$cuenta->id}}'}
})
  .done(function( approved ) {
  if(approved=="agotado")
  {
    toastagotado()
  }
  else
  {
    toast(id,nombre)

  }
  
 
  });
}))

</script>
@endsection