@extends('dashboard.master')
@section('content')
    <div class="row">
        <div class="col-md-6 col-lg-3 col-xxl-3 col-6">
            <div class="card contact-item border shadow-on-hover">
                <div class="card-header border-none">
                    <ul class="actions top-right">
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="btn btn-fab" data-toggle="modal" data-target=".modal-bottom-frame">
                                <i class="icon dripicons-dots-3 rotate-90 font-size-24"></i>
                            </a>
                            
                           
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="col p-t-15 p-b-15" style="background-color: red;border-radius: 20px;">
                                <h2 for="" class="text-white text-center">mesa 7</h2>

                            </div>
                        </div>
                      
                    </div>
                </div>
                <div class="card-footer text-center p-0">
                    <div class="row m-0">
                        <div class="col-4 p-0">
                            <div class="contact">
                                <a href="apps.mail.html" class="d-block p-20">
                                    <i class="icon dripicons-mail"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-4 p-0">
                            <div class="contact">
                                <a href="apps.messages.html" class="d-block p-20">
                                    <i class="icon dripicons-message"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-4 p-0">
                            <div class="contact">
                                <a href="pages.profile.html" class="d-block p-20">
                                    <i class="icon dripicons-user-id"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal modal-bottom-frame fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="zmdi zmdi-close"></span>
                    </button>
                </div>
                <div class="modal-body">
                   
                    <button class="btn btn-secondary btn-outline btn-rounded btn-block">Generar Token</button>
                    <button class="btn btn-secondary btn-rounded btn-outline btn-block">Cambiar de #</button>
                    <button class="btn btn-secondary btn-rounded btn-block btn-outline">Cambiar de mesero</button>
                    <button class="btn btn-danger btn-rounded btn-block ">Eliminar mesa</button>
                </div>
               
            </div>
        </div>
    </div>
@endsection