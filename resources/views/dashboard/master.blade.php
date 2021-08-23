
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>RESTONOVO</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="{{asset("css/cssquantum.css")}}">
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500" rel="stylesheet">
	<link rel="stylesheet" href="{{asset("dashboard/css/icons/dripicons.min.css")}}">
	<link rel="stylesheet" href="{{asset("dashboard/css/icons/line-awesome.min.css")}}">
	<link rel="stylesheet" href="{{asset("dashboard/css/icons/material-design-iconic-font.min.css")}}">
	<script>
		window.PUSHER_APP_KEY = '{{ config('broadcasting.connections.pusher.key') }}';
		window.APP_DEBUG = {{ config('app.debug') ? 'true' : 'false' }};
	</script>
	<script type="text/javascript" src="{{asset("dashboard/vendor/jquery/dist/jquery.min.js")}}"></script>
	@laravelPWA
	<script type="text/javascript" src="{{asset("js/app.js")}}"></script>
	@livewireStyles
</head>
<style>


	#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}

}

.text-small {
  font-size: 12px;
  font-weight: bold;
}

a.disabled {
  pointer-events: none;
  cursor: default;
}
.opaco{
  opacity: 0.3;
    filter: blur(1px); /* msie */
    background-color: rgb(211, 65, 65);
}
</style>

<body class="content-menu  {{auth()->user()->rol->nombre=='mesero'? 'content-menu-close' : ''}}">
	<!-- CONTENT WRAPPER -->
	<div id="">
		<!-- TOP TOOLBAR WRAPPER -->
		@include('dashboard.partials.navmobile')
		@include('dashboard.partials.nav')

		<!-- END TOP TOOLBAR WRAPPER -->
			<div class="content-wrapper">
				<!-- MENU SIDEBAR WRAPPER -->
				@include('dashboard.partials.sidebar')
				<div class="content container-fluid">
					@include('dashboard.partials.session-flash-status')
				@yield('content')
				</div>
			
				<!-- SIDEBAR QUICK PANNEL WRAPPER -->
					<aside class="sidebar sidebar-right">
						    <div class="sidebar-content">
								<div class="tab-panel m-b-30" id="sidebar-tabs">
																				
							   </div>
						</div>
					</aside>
			</div>
		</div>
		@livewireScripts
		<script src="{{asset('js/jsquantum.js')}}"></script>

	</body>
</html>
