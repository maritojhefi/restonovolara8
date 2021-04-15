@if(auth()->user()->rol->nombre!='mesero')
<aside class="sidebar sidebar-left">
    <div class="sidebar-content">
        <nav class="main-menu">
            <ul class="nav metismenu">
                <li class="sidebar-header"><span>MENU</span></li>
                
             
                <li class="nav-dropdown">
                    <a class="has-arrow" href="#" aria-expanded="false"><i class="zmdi zmdi-assignment-check zmdi-hc-fw"></i><span>Tu cuenta</span></a>
                    <ul class="collapse nav-sub" aria-expanded="true">
                        <li><a href="dashboard.financials.html"><span>Detalle</span></a></li>
                        <li><a href="dashboard.ecommerce.html"><span>Crear nuevo pre-pedido</span></a></li>
                        <li><a href="dashboard.ecommerce.html"><span>Agregar Propina</span></a></li>

                    </ul>
                </li>
                <li class="nav-dropdown">
                    <a href="{{route('listarmesasMesero')}}" aria-expanded="false"><i class="la la-music"></i><span>Reproducir Musica!</span></a>
                </li>
                <li class="nav-dropdown">
                    <a href="{{route('listarmesasMesero')}}" aria-expanded="false"><i class="la la-star-half-full"></i><span>Valora tu experiencia</span></a>
                </li>
                <li class="nav-dropdown">
                    <a href="{{route('listarmesasMesero')}}" aria-expanded="false"><i class="la la-thumbs-o-up"></i><span>Califica a tu mesero</span></a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
      @endif

    