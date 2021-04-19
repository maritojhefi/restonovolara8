
    @if (session('success'))
    <div class="alert alert-success alert-rounded alert-dismissible fade show" role="alert" id="contenido">
        <strong><span class="material-icons">
            done
            </span> 
         </strong> {{session('success')}} 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" id="contenido">
            <span class="material-icons">
            close
            </span>
        </button>
    </div>
    @endif
    @if (session('info'))
    <div class="alert alert-info alert-rounded alert-dismissible fade show" role="alert" id="contenido">
        <strong><span class="material-icons">
            info
            </span> 
            </strong> {{session('info')}} 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" >
            <span class="material-icons">
            close
            </span>
        </button>
    </div>
@endif
@if (session('danger'))
<div class="alert alert-danger alert-rounded alert-dismissible fade show" role="alert" id="contenido">
    <strong> <span class="material-icons">
        new_releases
        </span> 
    </strong> {{session('danger')}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span class="material-icons">
        close
        </span>
    </button>
</div>
@endif

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