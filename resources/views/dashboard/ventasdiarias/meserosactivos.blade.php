@extends('dashboard.ventasdiarias.cabecera')
@section('content')
<div class="page-content container-fluid">
    <div class="contact-list">
        <div class="container-fluid">
            <div class="row">
                <!-- .col -->
                @foreach ($usuarios as $usuario)
                <div class="col-md-6 col-lg-4 col-xxl-3">
                    <div class="card contact-item">
                        <div class="card-header border-none">
                            <ul class="actions top-right">
                                <li class="dropdown">
                                    <a href="javascript:void(0)" class="btn btn-fab" data-toggle="dropdown" aria-expanded="false">
                                        <i class="icon dripicons-dots-3 rotate-90 font-size-24"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <div class="dropdown-header">
                                            Opciones
                                        </div>
                                        <a href="{{route('usuario.show',$usuario->id)}}" class="dropdown-item">
                                            <i class="zmdi zmdi-eye zmdi-hc-fw"></i> Ver
                                        </a>
                                        <a href="{{route('usuario.edit',$usuario->id)}}" class="dropdown-item">
                                            <i class="icon dripicons-pencil"></i> Editar
                                        </a>
                                       
                                        <a href="{{route('usuario.index')}}" class="dropdown-item">
                                            <i class="icon dripicons-list"></i> Ver todos los usuarios
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                @isset($usuario->image)
                                <div class="col-md-12 text-center">
                                    <img src="{{asset('images')}}/{{$usuario->image->imagen}}" alt="user" class="rounded-circle max-w-100 m-t-20">
                                </div> 
                                @endisset
                                @empty($usuario->image)
                                <div class="col-md-12 text-center">
                                    <img src="{{asset('images/person.png')}}" alt="user" class="rounded-circle max-w-100 m-t-20">
                                </div>
                                @endempty
                               
                                
                                <div class="col-md-12 text-center">
                                    <h5 class="card-title">{{$usuario->name}}

                                    </h5>
                                    <small class="text-muted d-block">Rol: {{$usuario->rol->nombre}}</small>
                                    <small class="text-muted d-block">
                                        <i class="zmdi zmdi-thumb-up zmdi-hc-fw"></i>
                                       Mesas activas: {{$usuario->sales->count()}}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-center p-0">
                            <div class="row m-0">
                                <div class="col-4 p-0">
                                    <div class="contact">
                                        <a href="javascript:void(0)" class="d-block p-20">
                                            <i class="icon dripicons-mail"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-4 p-0">
                                    <div class="contact">
                                        <a href="javascript:void(0)" class="d-block p-20">
                                            <i class="icon dripicons-message"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-4 p-0">
                                    <div class="contact">
                                        <a href="javascript:void(0)" class="d-block p-20">
                                            <i class="icon dripicons-user-id"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
                
                
               
            </div>
        </div>
    </div>
</div>
    
@endsection