@extends('frontend.dashboardcliente.master')
@section('content')
<section class="page-content container-fluid">
    <header class="text-center m-b-30 m-t-30">
        <h1>Hello, how can we help you?</h1>
    </header>
    <div class="row">
        <div class="col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
            <form>
                <div class="search-wrapper page-search">
                    <button class="search-button-submit" type="submit"><i class="icon dripicons-search"></i></button>
                    <input type="text" class="search-input" placeholder="Search our knowledge base...">
                </div>
            </form>
            <p class="text-center m-t-50 m-b-50">
                Or choose a category below to find what you're looking for.
            </p>
        </div>
    </div>
        <div class="col-12">
    <div class="card-deck m-b-100">
        <div class="card card-elevate text-center">
            <a href="#gettingStartedTitle" class="smooth-scroll">
                <div class="card-body">
                    <i class="la la-compass font-size-80 text-primary"></i>
                    <h5 class="card-title m-t-20">Getting Started</h5>
                    <small class="text-muted">Leggings occaecat craft beer farm-to-table.</small>
                </div>
            </a>
        </div>
        <div class="card card-elevate card-hover text-center">
            <a href="#faqTitle" class="smooth-scroll">
                <div class="card-body">
                    <i class="la la-comments font-size-80 text-primary"></i>
                    <h5 class="card-title m-t-20">FAQ</h5>
                    <small class="text-muted">Ad vegan excepteur butcher vice lomo.</small>
                </div>
            </a>
        </div>
        <div class="card card-elevate card-hover text-center">
            <a href="#communityTitle" class="smooth-scroll">
                <div class="card-body">
                    <i class="la la-group font-size-80 text-primary"></i>
                    <h5 class="card-title  m-t-20">Community</h5>
                    <small class="text-muted">Craft beer labore wes anderson cred nesciunt.</small>
                </div>
            </a>
        </div>
    </div>
                </div>

    <header class="text-center m-b-10">
        <h4 id="gettingStartedTitle">Getting Started</h4>
        <p>Leggings occaecat craft beer farm-to-table.</p>
    </header>
    <div class="col-12">
        <div class="accordion" id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                General Description
                            </button>
                        </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
        <h4 id="faqTitle">FAQ</h4>
        <p>Ad vegan excepteur butcher vice lomo.</p>
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