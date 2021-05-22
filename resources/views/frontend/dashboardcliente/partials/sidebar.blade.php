@if(auth()->user()->rol->nombre!='mesero')
<aside class="sidebar sidebar-left">
    <div class="sidebar-content">
        <nav class="main-menu">
            <ul class="nav metismenu">
                <li class="sidebar-header"><span>MENU</span></li>
                
             
                <li class="nav-dropdown">
                    <a class="has-arrow" href="#" aria-expanded="false"><i class="zmdi zmdi-assignment-check zmdi-hc-fw"></i><span>Tu cuenta</span></a>
                    <ul class="collapse nav-sub" aria-expanded="true">
                        <li><a href="{{route('detallecuenta')}}"><span>Mi cuenta actual<span class="badge badge-danger">Nuevo!</span></span></a></li>
                        <li><a href="{{route('prepedido')}}"><span>Crear pre-pedido<span class="badge badge-secondary">Beta</span></span></a></li>
                        <li><a href="{{route('propina')}}"><span>Agregar Propina<span class="badge badge-secondary">Beta</span></span></a></li>
                        <li><a href="{{route('pagaronline')}}"><span>Pagar Online<span class="badge badge-secondary">Beta</span></span></a></li>


                    </ul>
                </li>
                <li class="nav-dropdown {{ Request::path()=='menuCliente' ? 'active':''}}">
                    <a href="{{route('vistamusica')}}" aria-expanded="false"><i class="la la-music"></i><span><strong>RestoMusic!</strong> <span class="badge badge-danger">Nuevo!</span></span></a>
                </li>
                <li class="nav-dropdown {{ Request::path()=='cliente/menuplatos' ? 'active':''}}">
                    <a href="{{route('menuplatos')}}" aria-expanded="false"><i class="zmdi zmdi-cutlery zmdi-hc-fw"></i><span>Nuestro Menu<span class="badge badge-success">Ir!</span></span></a>
                </li>
                <li class="nav-dropdown {{ Request::path()=='cliente/valoracion' ? 'active':''}}">
                    <a href="{{route('valoracion')}}" aria-expanded="false"><i class="la la-star-half-full"></i><span>Valora tu experiencia</span></a>
                </li>
                <li class="nav-dropdown {{ Request::path()=='cliente/calificamesero' ? 'active':''}}">
                    <a href="{{route('calificamesero')}}" aria-expanded="false"><i class="la la-thumbs-o-up"></i><span>Califica a tu mesero</span></a>
                </li>
                <li class="nav-dropdown {{ Request::path()=='cliente/quienessomos' ? 'active':''}}">
                    <a href="{{route('quienessomos')}}" aria-expanded="false"><i class="la la-building"></i><span>Quienes Somos?</span></a>
                </li>
                <li class="nav-dropdown {{ Request::path()=='cliente/politicasdeuso' ? 'active':''}}">
                    <a href="{{route('politicasdeuso')}}" aria-expanded="false"><i class="la la-file-text-o"></i><span>Politicas de uso</span></a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
      @endif

    