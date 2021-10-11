@extends('frontend.dashboardcliente.master')
@section('content')
@if(session()->has('tokenmesa'))
<section class="page-content container-fluid">
  @include('frontend.dashboardcliente.partials.session-flash-status')

  @include('frontend.dashboardcliente.partials.validation-error')
<div class="row m-3">
  <div class="card card-elevate text-center col-6 ">
    <a href="{{route('detallecuenta')}}" class="smooth-scroll">
      <div class="card-body">
        <i class="zmdi zmdi-assignment-check zmdi-hc-fw font-size-80 text-primary"></i>
        <h5 class="card-title m-t-20">Tu cuenta!</h5>
       
      </div>
    </a>
  </div>
  <div class="card card-elevate text-center col-6">
    <a href="{{route('vistamusica')}}" class="smooth-scroll">
      <div class="card-body">
        <i class="la la-music zmdi-hc-fw font-size-80 text-primary"></i>
        <h5 class="card-title m-t-20">Reproduce Musica!</h5>
       
      </div>
    </a>
  </div>
  <div class="card card-elevate text-center col-6">
    <a href="{{route('menuplatos')}}" class="smooth-scroll">
      <div class="card-body">
        <i class="zmdi zmdi-cutlery zmdi-hc-fw font-size-80 text-primary"></i>
        <h5 class="card-title m-t-20">Nuestro Menu!</h5>
        
      </div>
    </a>
  </div>
  <div class="card card-elevate text-center col-6">
    <a href="{{route('pagaronline')}}" class="smooth-scroll">
      <div class="card-body">
        <i class="la la-credit-card font-size-80 text-primary"></i>
        <h5 class="card-title m-t-20">Paga Online!</h5>
       
      </div>
    </a>
  </div>
 
</div>
</section>
@else

<section class="page-content container-fluid">
  @include('frontend.dashboardcliente.partials.session-flash-status')

  @include('frontend.dashboardcliente.partials.validation-error')
  <header class="text-center m-b-30 m-t-30">
      <h2>Ingresa tu clave.</h2>
  </header>
  <div class="row">
      <div class="col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
          <form action="{{route('verificartoken')}}" method="POST">
              @csrf
              <div class="search-wrapper page-search">
                  <button class="search-button-submit" type="submit"><i class="icon dripicons-search"></i></button>
                  <input type="number" class="search-input" name="clave" placeholder="Clave de 5 digitos">
                 
              </div>
          </form>
          <p class="text-center m-t-50 m-b-50">
             Descubre funciones en el  <strong>menu lateral!</strong> 
             <br>
             <span class="badge badge-pill badge-secondary" data-toggle-state="aside-left-open">Tu cuenta</span>
             <span class="badge badge-pill badge-primary" data-toggle-state="aside-left-open">Musica </span>
             <span class="badge badge-pill badge-accent" data-toggle-state="aside-left-open">Pagos Online</span>
             <span class="badge badge-pill badge-success" data-toggle-state="aside-left-open">Mucho mas!</span>
             <div class="row mx-auto">

          </div>
          </p>
          
      </div>
  </div>

  <!-- Messenger plugin de chat Code -->
  <div id="fb-root"></div>

  <!-- Your plugin de chat code -->
  <div id="fb-customer-chat" class="fb-customerchat">
  </div>

  <script>
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "2109985345740506");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v10.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>
</section>
@endif


@endsection