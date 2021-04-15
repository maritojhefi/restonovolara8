
    @if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong><span class="material-icons">
            done
            </span> 
            Notificacion:</strong> {{session('success')}} 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="material-icons">
            close
            </span>
        </button>
    </div>
    @endif
    @if (session('info'))
    <div class="alert alert-info alert-dismissible fade show" role="alert">
        <strong><span class="material-icons">
            info
            </span> 
            Notificacion:</strong> {{session('info')}} 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="material-icons">
            close
            </span>
        </button>
    </div>
@endif
@if (session('danger'))
<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong> <span class="material-icons">
        new_releases
        </span> 
        Advertencia:</strong> {{session('danger')}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span class="material-icons">
        close
        </span>
    </button>
</div>
@endif