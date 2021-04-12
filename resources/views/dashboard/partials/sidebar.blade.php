<aside class="sidebar sidebar-left">
    <div class="sidebar-content">
        <nav class="main-menu">
            <ul class="nav metismenu">
                <li class="sidebar-header"><span>MENU</span></li>
                
                <li class="nav-dropdown">
                    <a class="has-arrow" href="#" aria-expanded="false" ><i class="zmdi zmdi-assignment-check zmdi-hc-fw"></i><span>Empresa</span></a>
                    <ul class="collapse  nav-sub" aria-expanded="false"  id="collapseExample">
                        <li><a href="{{route('inicio')}}"><span>Principal</span></a></li>
                        <li><a href="{{route('configuracion')}}"><span>Ajustes</span></a></li>
                    </ul>
                </li>
                <li class="nav-dropdown">
                    <a class="has-arrow" data-toggle="dropdown" href="#" aria-expanded="false"><i class="zmdi zmdi-assignment-check zmdi-hc-fw"></i><span>Administrador</span></a>
                    <ul class="collapse {{ Request::path()=='usuarios' ? 'in':''}} {{ Request::path()=='mesas' ? 'in':''}} nav-sub" aria-expanded="true">
                        <li class="{{ Request::path()=='usuarios' ? 'active':''}}"><a href="{{route('usuario.index')}}" ><span>Usuarios</span></a></li>
                        <li class="{{ Request::path()=='mesas' ? 'active':''}}"><a href="{{route('mesa.index')}}"><span>Mesas</span></a></li>
                        <li class="{{ Request::path()=='roles' ? 'active':''}}"><a href="{{route('rol.index')}}"><span>Roles</span></a></li>
                    </ul>
                </li>
                <li class="nav-dropdown ">
                    <a class="has-arrow" href="#" aria-expanded="false"><i class="icon dripicons-article"></i><span>Productos</span></a>
                    <ul class="collapse nav-sub" aria-expanded="false">
                        <li class=""><a href="{{route('producto.index')}}"><span>Bebidas y Platillos</span></a></li>
                        <li><a href="{{route('categoria.index')}}"><span>Categorias</span></a></li>
                        
                    </ul>
                </li>
               
                <li class="nav-dropdown">
                    <a class="has-arrow" href="#" aria-expanded="false"><i class="zmdi zmdi-assignment-check zmdi-hc-fw"></i><span>Venta Diaria</span></a>
                    <ul class="collapse nav-sub" aria-expanded="true">
                        <li><a href="{{route('cuentasActivas')}}"><span>Cuentas Activas</span></a></li>
                        <li><a href="dashboard.financials.html"><span>Meseros Activos</span></a></li>
                        <li><a href="dashboard.ecommerce.html"><span>Caja diaria</span></a></li>
                    </ul>
                </li>
                <li class="nav-dropdown">
                    <a class="has-arrow" href="#" aria-expanded="false"><i class="zmdi zmdi-assignment-check zmdi-hc-fw"></i><span>Almacen</span></a>
                    <ul class="collapse nav-sub" aria-expanded="true">
                        <li><a href="index.html"><span>Stock de productos</span></a></li>
                        <li><a href="dashboard.financials.html"><span>Meseros Activos</span></a></li>
                        <li><a href="dashboard.ecommerce.html"><span>Caja diaria</span></a></li>
                    </ul>
                </li>
                <li class="nav-dropdown">
                    <a class="has-arrow" href="#" aria-expanded="false"><i class="zmdi zmdi-assignment-check zmdi-hc-fw"></i><span>Reportes</span></a>
                    <ul class="collapse nav-sub" aria-expanded="true">
                        <li><a href="index.html"><span>Ventas</span></a></li>
                        <li><a href="dashboard.financials.html"><span>Compras</span></a></li>
                        <li><a href="dashboard.ecommerce.html"><span>Meseros</span></a></li>
                    </ul>
                </li>
                <li class="nav-dropdown">
                    <a href="{{route('listarmesasMesero')}}" aria-expanded="false"><i class="icon dripicons-mail"></i><span>Cuentas Activas</span></a>
                </li>
              
            </ul>
        </nav>
    </div>
</aside>
      

    