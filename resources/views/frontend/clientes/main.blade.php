
<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">

    <!-- Site Metas -->
    <title>Rincon Tomateño</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Site Icons -->
    <link rel="shortcut icon" href="{{asset('restaurant/images/favicon.ico')}}" type="image/x-icon" />
    <link rel="apple-touch-icon" href="{{asset('restaurant/images/apple-touch-icon.png')}}">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{asset('restaurant/css/bootstrap.min.css')}}">
    <!-- Site CSS -->
    <link rel="stylesheet" href="{{asset('restaurant/css/style.css')}}">
    <!-- Responsive CSS -->
    <link rel="stylesheet" href="{{asset('restaurant/css/responsive.css')}}">
    <!-- color -->
    <link id="changeable-colors" rel="stylesheet" href="{{asset('restaurant/css/colors/orange.css')}}" />

    <!-- Modernizer -->
    <script src="{{asset('restaurant/js/modernizer.js')}}"></script>

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    @laravelPWA

</head>

<body>
 @include('frontend.clientes.nav')
 @include('frontend.clientes.inicio')
 @include('frontend.clientes.nosotros')
 @include('frontend.clientes.especialmenu')
 @include('frontend.clientes.menucliente')
 @include('frontend.clientes.blog')
 @include('frontend.clientes.galeria')
 
 @include('frontend.clientes.footer')
	

    <a href="#" class="scrollup" style="display: none;">Scroll</a>

    <!-- ALL JS FILES -->
    <script src="{{asset('restaurant/js/all.js')}}"></script>
    <script src="{{asset('restaurant/js/bootstrap.min.js')}}"></script>
    <!-- ALL PLUGINS -->
    <script src="{{asset('restaurant/js/custom.js')}}"></script>
</body>

</html>