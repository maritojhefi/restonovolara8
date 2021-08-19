@extends('frontend.dashboardcliente.master')
@section('content')
<section class="page-content container-fluid">
    <div class="row">
        
        <div class="col-sm-12">
            <div class="pricing-wrapper container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card-container">
                            <div class="card card-flip pricing-card">
                                <section class="card-front">
                                    <div class="card-heading">
                                        <div class="card-title">
                                            <h1><sup>Bs</sup><strong>{{$total}}</strong></h1>
                                            <span class="pricing-title text-primary">Total a pagar</span>
                                        </div>
                                    </div>
                                    <div class="card-body p-0">
                                        <ul class="list-group list-group-flush text-center">
                                            <li class="list-group-item">Metodos de pago habilitados:</li>
                                            <li class="list-group-item"><strong><i class="zmdi zmdi-phone-locked zmdi-hc-fw font-size-22 v-align-middle p-r-15 p-t-5"></i>Tigo Money</strong> </li>
                                            <li class="list-group-item"><strong> <i class="la la-credit-card font-size-22 v-align-middle p-r-15 p-t-5"></i>Tarjeta de credito o debito</strong></li>
                                        </ul>
                                    </div>
                                    
                                    <div class="card-footer text-center ">
                                        <a href="{{$linkpago}}" class="btn btn-success btn-rounded btn-floating btn-lg text-white"><i class="la la-expeditedssl text-white font-size-22 v-align-middle p-r-15 p-t-5"></i>Pagar ahora!</a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="alert alert-info alert-dismissible fade show" role="alert">
                            <small>Asegurate de tener habilitada las compras por internet en tu tarjeta de credito/debito en caso de seleccionar esa opcion.</small>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true" class="la la-close"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</section>
@endsection