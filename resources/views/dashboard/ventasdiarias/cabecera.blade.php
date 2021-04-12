@extends('dashboard.master')
@section('content')

    <header class="page-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                @isset($cabecera)
                <h1 class="separator">{{$cabecera}}</h1>

                @endisset
                @empty($cabecera)
                <h1 class="separator">Cuentas Activas</h1>

                @endempty
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
   

@yield('section')
    
@endsection