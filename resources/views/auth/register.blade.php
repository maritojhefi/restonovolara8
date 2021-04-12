@extends('layouts.app')
@section('content')
<body class="content-menu pace-done"><div class="pace  pace-inactive"><div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">
    <div class="pace-progress-inner"></div>
  </div>
  <div class="pace-activity"></div></div>
      <div class="container">
          <form class="sign-in-form" method="POST" action="{{ route('register') }}">
            @csrf 
            <div class="card">
                  <div class="card-body">
                      <a href="index.html" class="brand text-center d-block m-b-20">
                          <img src="../assets/img/qt-logo@2x.png" alt="QuantumPro Logo">
                      </a>
                      <h5 class="sign-in-heading text-center m-b-20">Create an account</h5>
                      <div class="form-group">
                          <label for="inputEmail" class="sr-only">Your Name</label>
                          <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" placeholder="Nombre" value="{{ old('name') }}" required autocomplete="name" autofocus>
                          @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>
                      <div class="form-group">
                          <label for="inputEmail" class="sr-only">Email address</label>
                          <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" placeholder="Email" value="{{ old('email') }}" required autocomplete="email">
                          @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>
                      <div class="form-group">
                          <label for="inputPassword" class="sr-only">Password</label>
                          <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder="Contraseña" required autocomplete="new-password">
                          @error('password')
                          <span class="invalid-feedback" role="alert">
                              <strong>{{ $message }}</strong>
                          </span>
                      @enderror
                        </div>
                      <div class="form-group">
                          <label for="inputPassword" class="sr-only">Confirm Password</label>
                          <input type="password" id="inputConfirmPassword" class="form-control" placeholder="Confirmar contraseña" required="" name="password_confirmation">
                     
                        </div>
                      
                      <button class="btn btn-primary btn-rounded btn-floating btn-lg btn-block" type="submit">Crear Cuenta</button>
                       <p class="text-muted m-t-25 m-b-0 p-0">Ya tienes una cuenta? <a href="{{route('login')}}">Iniciar Sesion</a></p>
                  </div>
  
              </div>
          </form>
      </div>
  
@endsection