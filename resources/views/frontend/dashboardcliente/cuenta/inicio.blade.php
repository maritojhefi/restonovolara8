@extends('frontend.dashboardcliente.master')
@section('content')
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
                    <input type="text" class="search-input" name="clave" placeholder="Clave de 5 digitos">
                   
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
                <img class="mx-auto rounded-circle" src="{{asset('restaurant/images/loader-animation.gif')}}" alt="">

            </div>
            </p>
            
        </div>
    </div>
    <script>
        let installButton = document.createElement('button');
        let prompt;
window.addEventListener('beforeinstallprompt', function(e){
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  prompt = e;
});

installButton.addEventListener('click', function(){
   prompt.prompt();
})
    </script>
</section>


@endsection