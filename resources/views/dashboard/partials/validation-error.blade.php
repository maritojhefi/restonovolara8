@if ($errors->any())
    
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        @if (count($errors) > 1)
        <strong>Errores en el formulario...</strong> 
        @else
        <strong>Casi listo! </strong> 

        @endif
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="material-icons">
                close
                </span>
        </button><br>
        @foreach ($errors->all() as $error)
        <span class="material-icons">
            error_outline
            </span> {{$error}}<br>
        @endforeach
        
    </div>
    
     

    @endif

    