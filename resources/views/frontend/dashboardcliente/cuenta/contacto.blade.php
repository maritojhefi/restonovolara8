@extends('frontend.dashboardcliente.master')
@section('content2')
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Macrobyte Tarija</h5>
        <p class="card-text">Somos una empresa de desarrollo software que trabaja con lo ultimo en tecnologias de desarrollo web y aplicaciones moviles enfocados a negocios de cualquier rubro y empresas de todo tipo.</p>
        <p class="card-text"><small class="text-muted">Visita nuestra pagina web, <a href="https://macrobyte.site"> click aqui!</a></small></p>
    </div>
    <img class="card-img-bottom" src="{{asset('asset-cliente/portada3.png')}}" alt="Card image cap">
</div>
<div class="card text-white">
    <img class="card-img" src="{{asset('asset-cliente/logomacrobyte.png')}}" alt="Card image">
    <div class="card-img-overlay">
        <h5 class="card-title dark-text"><strong>Restonovo</strong>  fue desarrollado por:</h5>
        <p class="dark-text"></p>
        <a href="https://macrobyte.site" class="btn btn-primary btn-rounded " style="position:absolute;bottom:30px;right:15px;">
            Visitar Pagina
        </a>
    </div>

</div>
@endsection