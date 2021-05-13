@extends('layouts.app')
@section('content')
<body class="content-menu">
	<div class="container">
		<form method="POST" action="{{ route('login') }}" class="sign-in-form">
			@csrf
			<div class="card">
				<div class="card-body">
					<a href="index.html" class="brand text-center d-block m-b-20">
						<img src="#" alt="Rincon Tomateno Logo" />
					</a>
					<h5 class="sign-in-heading text-center m-b-20">Inicia Sesion con tu cuenta</h5>
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
					
					<button type="submit" class="btn btn-primary btn-rounded btn-floating btn-lg btn-block" type="submit">Inicia Sesion</button>
					<a href="{{route('social_auth',['driver'=>'facebook'])}}" class="btn btn-rounded btn-floating  btn-block text-white" style="background-color: rgb(53, 119, 240)">Inicia con <i class="zmdi zmdi-facebook-box zmdi-hc-fw"></i></a>
				 <p class="text-muted m-t-25 m-b-0 p-0">Aun sin una cuenta?<a href="{{route('register')}}"> Crea una nueva</a></p>
				</div>

			</div>
		</form>
	</div>

@endsection

	