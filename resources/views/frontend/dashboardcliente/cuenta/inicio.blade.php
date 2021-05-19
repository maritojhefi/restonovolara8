@extends('frontend.dashboardcliente.master')
@section('content')
<section class="page-content container-fluid">
    @include('frontend.dashboardcliente.partials.session-flash-status')

    @include('frontend.dashboardcliente.partials.validation-error')
    <header class="text-center m-b-30 m-t-30">
        <h2>Bienvenido! A continuacion ingresa tu clave.</h2>
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
                Informate de las funciones que brinda nuestra plataforma <strong>Restonovo!</strong> 
            </p>
        </div>
    </div>
        <div class="col-12">
    <div class="card-deck m-b-100">
        <div class="card card-elevate text-center">
            <a href="#gettingStartedTitle" class="smooth-scroll">
                <div class="card-body">
                    <img src="{{asset('asset-cliente/locateresto.gif')}}" alt="" width="100px">
                    <h5 class="card-title m-t-20">Tu cuenta</h5>
                    <small class="text-muted">Informacion detallada sobre tu cuenta actual.</small>
                </div>
            </a>
        </div>
        <div class="card card-elevate card-hover text-center">
            <a href="#faqTitle" class="smooth-scroll">
                <div class="card-body">
                    <img src="{{asset('asset-cliente/musicicon.gif')}}" alt="" width="100px">
                    <h5 class="card-title m-t-20">Reproduce musica en el restaurante!</h5>
                    <small class="text-muted">Añade la musica que quieras desde la comodidad de tu asiento...</small>
                </div>
            </a>
        </div>
        <div class="card card-elevate card-hover text-center">
            <a href="#communityTitle" class="smooth-scroll">
                <div class="card-body">
                    <img src="{{asset('asset-cliente/grow.gif')}}" alt="" width="150px">

                    <h5 class="card-title  m-t-20">Creciendo juntos!</h5>
                    <small class="text-muted">Mejoramos a traves de tu experiencia!</small>
                </div>
            </a>
        </div>
    </div>
                </div>

    <header class="text-center m-b-10">
        <h4 id="gettingStartedTitle">Tu cuenta</h4>
        <p>Informacion detallada sobre tu cuenta actual.</p>
    </header>
    <div class="col-12">
        <div class="accordion" id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Descripcion general
                            </button>
                        </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                       <strong>Restonovo</strong> es una plataforma nueva para restaurantes que otorga varias funciones
                        interactivas a los usuarios, entre ellas, verificar el estado actual de tu cuenta, con todos los detalles necesarios para no perderte de nada ademas de poder acceder al menu del dia con la disponibilidad en tiempo real de cada platillo, entre otras funciones.

                        </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Como funciona
                            </button>
                        </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                       
                        Para cada una de las funciones que brinda restonovo, se requiere la clave de acceso suministrada por el 
                        cajero o mesero de turno, no obstante, es imprescindible no compartir dicha clave con personas ajenas puesto que con ella tendrian acceso a tu cuenta para poder alterar el consumo total de distintas maneras.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Politicas de uso
                            </button>
                        </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        Al ingresar a esta plataforma concedes la autorizacion para manejar y alterar tu cuenta de acuerdo a las funciones disponibles y que se den uso dentro del sistema.
                        </div>
                </div>
            </div>
        </div>
    </div>
    <header class="text-center m-b-10 m-t-40">
        <h4 id="faqTitle">Reproduce musica en el restaurante!</h4>
        <p>Añade la musica que quieras desde la comodidad de tu asiento...</p>
    </header>
    <div class="col-12">
        <div class="accordion" id="accordion-faq">
            <div class="card">
                <div class="card-header" id="headingFaqOne">
                    <h5 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFaqOne" aria-expanded="true" aria-controls="collapseFaqOne">
                                Descripcion general
                            </button>
                        </h5>
                </div>
                <div id="collapseFaqOne" class="collapse show" aria-labelledby="headingFaqOne" data-parent="#accordion-faq">
                    <div class="card-body">
                        Restonovo te ofrece el nuevo servicio de musica para restaurantes <strong>RestoMusic!</strong> con el que de manera intuitiva el usuario puede agregar
                        canciones desde la comodida de su asiento por medio de nuestro buscador para ser reproducidas en el restaurante! Es un servicio nunca antes visto cambiando el paradigma de las rockolas que antiguamente se usaban dentro de bares y/o algunos restaurantes en todo el pais.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFaqTwo">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFaqTwo" aria-expanded="false" aria-controls="collapseFaqTwo">
                                Como funciona
                            </button>
                        </h5>
                </div>
                <div id="collapseFaqTwo" class="collapse" aria-labelledby="headingFaqTwo" data-parent="#accordion-faq">
                    <div class="card-body">
                        Ingresando al menu lateral, dentro de la opcion <strong> RestoMusic! </strong> tendras a tu disposicion nuestro servicio de musica para restaurantes, potenciado por Spotify, encontraras todas las canciones que requieras para que; con un costo de 1bs, puedas agregar una cancion a la cola de reproduccion, cada cancion que agregues se ira sumando a tu cuenta final junto a tu pedido. 
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFaqThree">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFaqThree" aria-expanded="false" aria-controls="collapseFaqThree">
                                Politicas de uso
                            </button>
                        </h5>
                </div>
                <div id="collapseFaqThree" class="collapse" aria-labelledby="headingFaqThree" data-parent="#accordion-faq">
                    <div class="card-body">
                        Al acceder al servicio <strong>RestoMusic!</strong> estas de acuerdo con alterar el monto de tu cuenta a pagar, segun la cantidad de canciones que hayas agregado.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="text-center m-b-30">
        <h4 id="communityTitle">Creciendo Juntos</h4>
        <p>Mejoramos a traves de tu experiencia!.</p>
    </header>
    <div class="col-12">
        <div class="accordion" id="accordion-community">
            <div class="card">
                <div class="card-header" id="headingcommunityOne">
                    <h5 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsecommunityOne" aria-expanded="true" aria-controls="collapsecommunityOne">
                                Nuevas funciones
                            </button>
                        </h5>
                </div>
                <div id="collapsecommunityOne" class="collapse show" aria-labelledby="headingcommunityOne" data-parent="#accordion-community">
                    <div class="card-body">
                        Restonovo es una plataforma joven, nacida de una nueva empresa de desarrollo software consolidada en Tarija, que tiene la mision de innovar con aplicaciones modernas destinados a rubros especificos, aportando funcionalidades nunca antes vistas con el objetivo principal de seguir mejorando y creciendo a traves de las opiniones y sugerencias de los clientes/usuarios que logran conocer nuestro ecosistema de aplicaciones.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingcommunityTwo">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsecommunityTwo" aria-expanded="false" aria-controls="collapsecommunityTwo">
                                Como puedes ayudarnos?
                            </button>
                        </h5>
                </div>
                <div id="collapsecommunityTwo" class="collapse" aria-labelledby="headingcommunityTwo" data-parent="#accordion-community">
                    <div class="card-body">
                        Dentro del menu lateral tienes opciones para dejar tus comentarios y valoraciones, sobre la atencion y experiencia que tuviste en el restaurante como tambien de la satisfaccion que conseguiste al usar nuestra plataforma. No existe la mala critica! Que esperas para contarnos tu experiencia?
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingcommunityThree">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsecommunityThree" aria-expanded="false" aria-controls="collapsecommunityThree">
                                Politicas de uso
                            </button>
                        </h5>
                </div>
                <div id="collapsecommunityThree" class="collapse" aria-labelledby="headingcommunityThree" data-parent="#accordion-community">
                    <div class="card-body">
                       Las funciones de valoracion y comentarios estan destinados solamente para fines de crecimiento y reparacion de servicios, por lo que toda esta informacion es privada y no sera publicada de ninguna forma, diciendolo de otra manera, tus comentarios y valoraciones son anonimos...
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection