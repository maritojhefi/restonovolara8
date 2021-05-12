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
                    <input type="text" class="search-input" name="clave" placeholder="Clave de 6 digitos">
                   
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
                    <small class="text-muted">Puedes dejar comentarios y valoraciones sobre tu experiencia</small>
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
                       <strong>Restonovo</strong> es una plataforma para restaurantes que otorga varias funciones
                        interactivas para los usuarios,

                        </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Installation Guides
                            </button>
                        </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Additional Options and Services
                            </button>
                        </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
                                General Description
                            </button>
                        </h5>
                </div>
                <div id="collapseFaqOne" class="collapse show" aria-labelledby="headingFaqOne" data-parent="#accordion-faq">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFaqTwo">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFaqTwo" aria-expanded="false" aria-controls="collapseFaqTwo">
                                Installation Guides
                            </button>
                        </h5>
                </div>
                <div id="collapseFaqTwo" class="collapse" aria-labelledby="headingFaqTwo" data-parent="#accordion-faq">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFaqThree">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFaqThree" aria-expanded="false" aria-controls="collapseFaqThree">
                                Additional Options and Services
                            </button>
                        </h5>
                </div>
                <div id="collapseFaqThree" class="collapse" aria-labelledby="headingFaqThree" data-parent="#accordion-faq">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="text-center m-b-30">
        <h4 id="communityTitle">Community</h4>
        <p>Craft beer labore wes anderson cred nesciunt.</p>
    </header>
    <div class="col-12">
        <div class="accordion" id="accordion-community">
            <div class="card">
                <div class="card-header" id="headingcommunityOne">
                    <h5 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsecommunityOne" aria-expanded="true" aria-controls="collapsecommunityOne">
                                General Description
                            </button>
                        </h5>
                </div>
                <div id="collapsecommunityOne" class="collapse show" aria-labelledby="headingcommunityOne" data-parent="#accordion-community">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingcommunityTwo">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsecommunityTwo" aria-expanded="false" aria-controls="collapsecommunityTwo">
                                Installation Guides
                            </button>
                        </h5>
                </div>
                <div id="collapsecommunityTwo" class="collapse" aria-labelledby="headingcommunityTwo" data-parent="#accordion-community">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingcommunityThree">
                    <h5 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsecommunityThree" aria-expanded="false" aria-controls="collapsecommunityThree">
                                Additional Options and Services
                            </button>
                        </h5>
                </div>
                <div id="collapsecommunityThree" class="collapse" aria-labelledby="headingcommunityThree" data-parent="#accordion-community">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection