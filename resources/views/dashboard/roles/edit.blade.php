@extends('dashboard.master')
@section('content')
    



    <header class="page-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h1 class="separator">Editando</h1>
                <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{route('principal')}}"><i class="icon dripicons-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">RestoNovo</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{Request::path()}}</li>
                        <ul class="actions top-right">
                            <li class="dropdown">
                                <a href="{{ url()->previous() }}" class="btn btn-fab" >
                                    <i class="la la-long-arrow-left"></i>
                                </a>
                                
                            </li>
                        </ul>
                    </ol>
                </nav>
            </div>
        </div>
    </header>
    @include('dashboard.partials.validation-error')
    <section class="page-content container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <h5 class="card-header"> Formulario de rol: {{$rol->nombre}}</h5>
                    <form class="needs-validation" novalidate="" action="{{route("rol.update",$rol->id)}}" method="POST">
                        @method('PUT')
                         @include('dashboard.roles.form')
                   </form>
                </div>
            </div>

    
    
    
</div>
</section>


@endsection