@extends('layouts.app')
@section('content')
<body class="content-menu">
	<div class="container">
		<form method="POST" action="{{ route('login') }}" class="sign-in-form" style="margin-top: 20px">
			@csrf
			<div class="card" style="border-radius: 25px;">
				<div class="card-body" style="box-shadow: 0px -1px 7px 5px rgb(218, 204, 204); border: 2px solid rgb(236, 124, 124);border-radius: 25px;">
					<a href="#" class="brand text-center d-block m-b-20">
						<img src="{{asset('restaurant/images/logo.png')}}" alt="Rincon Tomateno Logo" />
						<div class="row mx-auto" style="color: rgb(75, 73, 70)">
							<div class="mx-auto" ><img src="{{asset('restaurant/images/sound.gif')}}" style="width:20px" alt=""></div>
							<div class="mx-auto"><img src="{{asset('restaurant/images/google.gif')}}" style="width:20px"></div>
							<div class="mx-auto" ><img src="{{asset('restaurant/images/facebok.gif')}}" style="width:20px"></div>
							<div class="mx-auto"><img src="{{asset('restaurant/images/smart.gif')}}" style="width:20px"></div>
							<div class="mx-auto"><img src="{{asset('restaurant/images/key.gif')}}" style="width:20px"></div>
							<div class="mx-auto"><img src="{{asset('restaurant/images/debito.gif')}}" style="width:20px"></div>
							
						</div>
					</a>
					
					<h5 class=" text-center "><strong><small>Bienvenid@</small></strong> </h5>
					<div class="form-group">
						<label for="inputEmail" class="sr-only">Email</label>
						<input type="email" id="inputEmail" class="input-rounded form-control @error('email') is-invalid @enderror" placeholder="Email" name="email" value="{{ old('email') }}" required autocomplete="email"  autofocus>
						@error('email')
						<span class="invalid-feedback" role="alert">
							<strong>{{ $message }}</strong>
						</span>
					@enderror
					</div>

					<div class="form-group">
						<label for="inputPassword" class="sr-only">Contraseña</label>
						<input id="password" type="password" placeholder="Contraseña" class="input-rounded form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

						@error('password')
							<span class="invalid-feedback" role="alert">
								<strong>{{ $message }}</strong>
							</span>
						@enderror					</div>
					
					<button type="submit" class="btn btn-primary btn-rounded btn-floating btn-block" style="background-color: rgb(226, 66, 66);box-shadow: 0 5px 10px rgba(120,141,180,.4)!important;" type="submit">Inicia Sesion</button>
					<div><br></div>
					<div class="row mx-auto"><small class="text-center mx-auto ">otras opciones:</small></div>
					<div class="row">
					
						<div class="col-6">
							<a href="{{route('social_auth',['driver'=>'facebook'])}}" class="btn btn-rounded btn-floating btn-dark btn-block text-white" data-qt-block="body" style="border-radius: 50px;box-shadow: 0 5px 10px rgba(120,141,180,.4)!important;
								padding: 8px 5px; background-color:rgb(62, 129, 230)"> <i class="zmdi zmdi-facebook-box zmdi-hc-fw" style="color: white"></i><small>Facebook</small></a>
						</div>
						<div class="col-6">
							<a href="{{route('social_auth',['driver'=>'google'])}}" class="btn btn-rounded btn-floating btn-secondary  btn-block " data-qt-block="body" style="border-radius: 50px;
								padding: 8px 5px;"> <i class="zmdi zmdi-google zmdi-hc-fw" style="color: rgb(231, 71, 71)"></i><small>Google</small></a>
						</div>

					</div>

				 <p class="text-muted m-t-25 m-b-0 p-0"><small> Aun sin una cuenta?</small><a href="{{route('register')}}"><small> Crea una nueva</small></a></p>
				
				</div>

			</div>
		</form>
	</div>

@endsection

	