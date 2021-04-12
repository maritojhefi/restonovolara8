@extends('dashboard.master')
@section('content')
    



    <header class="page-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h1 class="separator">Detalle</h1>
                <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><i class="icon dripicons-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">RestoNovo</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{Request::path()}}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </header>
    
    <div class="col-xl-6 col-lg-6">
        <div class="card">
            <div class="card-body">
                <div class="profile-card text-center">
                    <div class="thumb-xl member-thumb m-b-10 center-block">
                        @if ($usuario->image)
                        <img src="{{asset('images')}}/{{$usuario->image->imagen}}" class="rounded-circle img-thumbnail" alt="profile-image" style="width:150px;height:150px">
                        @else
                        <img src="{{asset('images')}}/person.png" class="rounded-circle img-thumbnail" alt="profile-image" style="width:150px;height:150px">

                        @endif
                    </div>
                    <div class="">
                        <h5 class="m-b-5">{{$usuario->name}}</h5>
                        <p class="text-muted">{{$usuario->email}}</p>
                    </div>
                    <a class="btn btn-primary btn-rounded btn-floating" href="{{route('usuario.edit',$usuario->id)}}">Editar</a>
                    <a class="btn btn-secondary btn-rounded btn-floating" href="{{route('usuario.index')}}"><span class="material-icons">settings_backup_restore</span></a>

                        
                      
                  
                        
                    <ul class="list-reset text-left m-t-40">
                        <li class="text-muted"><strong>Apellidos:</strong><span class="m-l-15">{{$usuario->apellido}}</span></li>
                        <li class="text-muted"><strong>Cedula:</strong> <span class="m-l-15">{{$usuario->cedula}}</span></li>
                        <li class="text-muted"><strong>Nacimiento:</strong> <span class="m-l-15">{{$usuario->cumpleano}}</span></li>
                        <li class="text-muted"><strong>Sueldo Fijo?:</strong><span class="m-l-15">{{$usuario->sueldofijo}}</span></li>
                        <li class="text-muted"><strong>Tipo de Sueldo:</strong><span class="m-l-15">{{$usuario->tiposueldo}}</span></li>
                        <li class="text-muted"><strong>Telefono:</strong><span class="m-l-15">{{$usuario->telefono}}</span></li>

                    </ul>
                   
                </div>
            </div>
            <hr>
            
        </div>
    </div>


  
@endsection