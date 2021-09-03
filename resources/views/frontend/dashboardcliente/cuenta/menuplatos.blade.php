@extends('frontend.dashboardcliente.master')
@section('content')
<br>
<div class="alert alert-secondary alert-rounded alert-dismissible fade show" id="contenido" role="alert">
    <strong>La funcion de realizar pedidos desde el movil a su mesa se habilitara pronto!</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" class="la la-close"></span>
            </button>
        </div>
@livewire('menu-real-time')
<script>
    $(document).ready(function() {
        //Ejecutamos método que oculta las cajas
        OcultarContenedores1();
      });
      
      //Método que oculta el primer contenedor para mostrar el otro
      function OcultarContenedores1() {
        setTimeout(function() {
          $("#contenido").hide(1000);
        }, 5000);
      }
     

</script>
@endsection