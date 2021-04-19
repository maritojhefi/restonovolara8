@if ($errors->any())
    
    <div class="alert alert-danger alert-rounded alert-dismissible fade show" role="alert" id="contenido">
       
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="material-icons">
                close
                </span>
        </button>
        @foreach ($errors->all() as $error)
        <span class="material-icons">
            error_outline
            </span> {{$error}}<br>
        @endforeach
        
    </div>
    
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

    @endif

    