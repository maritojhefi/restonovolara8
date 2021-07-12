@extends('frontend.dashboardcliente.master')
@section('content')
<section class="page-content container-fluid">
    <div class="row">
        <div class="col">
            <div class="card text-center" id="packages">

                <h5 class="card-header">Pagos Online!</h5>
                <div class="card-body">
                    <p>Revisa el detalle de tu cuenta y haz click en "Pagar ahora" para redirigirte a la plataforma de pagos seguros Banipay!.</p>
                    <div class="togglebutton m-t-20 ">
                        
                    </div>
                </div>

            </div>
        </div>
        <div class="col-sm-12">
            <div class="pricing-wrapper container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card-container">
                            <div class="card card-flip pricing-card">
                                <section class="card-front">
                                    <div class="card-heading">
                                        <div class="card-title">
                                            <h1><sup>Bs</sup>{{$total}}</h1>
                                            <span class="pricing-title text-primary">TOTAL</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-0">
                                        <ul class="list-group list-group-flush text-center">
                                            <li class="list-group-item">Metodos de pago habilitados:</li>
                                            <li class="list-group-item">Tigo Money</li>
                                            <li class="list-group-item">Tarjeta de pago</li>
                                        </ul>
                                    </div>
                                    
                                    <div class="card-footer text-center ">
                                        <a href="{{$linkpago}}" class="btn btn-primary btn-rounded btn-floating">Pagar ahora</a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</section>
@endsection