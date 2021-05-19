@extends('layouts.app')
@section('content')
<body class="content-menu">
	<div class="container">
		<form method="POST" action="{{ route('login') }}" class="sign-in-form">
			@csrf
			<div class="card">
				<div class="card-body">
					<a href="#" class="brand text-center d-block m-b-20">
						<img src="{{asset('restaurant/images/logo.png')}}" alt="Rincon Tomateno Logo" />
					</a>
					<h5 class="sign-in-heading text-center m-b-20">Bienvenid@!</h5>
					<div class="form-group">
						<label for="inputEmail" class="sr-only">Email</label>
						<input type="email" id="inputEmail" class="form-control @error('email') is-invalid @enderror" placeholder="Email" name="email" value="{{ old('email') }}" required autocomplete="email"  autofocus>
						@error('email')
						<span class="invalid-feedback" role="alert">
							<strong>{{ $message }}</strong>
						</span>
					@enderror
					</div>

					<div class="form-group">
						<label for="inputPassword" class="sr-only">Contraseña</label>
						<input id="password" type="password" placeholder="Contraseña" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

						@error('password')
							<span class="invalid-feedback" role="alert">
								<strong>{{ $message }}</strong>
							</span>
						@enderror					</div>
					
					<button type="submit" class="btn btn-primary btn-rounded btn-floating btn-block" style="background-color: rgb(226, 66, 66)" type="submit">Inicia Sesion</button>
					<div class="row mx-auto"><small class="text-center mx-auto">Alternativas</small></div>
					<div class="row">
					
						<div class="col-6">
							<a href="{{route('social_auth',['driver'=>'facebook'])}}" class="btn btn-rounded btn-floating btn-dark btn-block text-white" style="border-radius: 50px;
								padding: 8px 5px; background-color:rgb(62, 129, 230)"> <i class="zmdi zmdi-facebook-box zmdi-hc-fw" style="color: white"></i><small>Facebook</small></a>
						</div>
						<div class="col-6">
							<a href="{{route('social_auth',['driver'=>'google'])}}" class="btn btn-rounded btn-floating btn-secondary  btn-block " style="border-radius: 50px;
								padding: 8px 5px;"> <i class="zmdi zmdi-google zmdi-hc-fw" style="color: rgb(231, 71, 71)"></i><small>Google</small></a>
						</div>

					</div>

				 <p class="text-muted m-t-25 m-b-0 p-0"><small> Aun sin una cuenta?</small><a href="{{route('register')}}"><small> Crea una nueva</small></a></p>
				 
				</div>

			</div>
		</form>
	</div>

@endsection

	