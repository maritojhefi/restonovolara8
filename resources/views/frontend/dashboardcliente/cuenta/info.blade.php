@extends('frontend.dashboardcliente.master')
@section('content2')
<div class="col-lg-6 mt-3">
    <div class="card card-dark">
        <div class="card-header">Tu cuenta
            <ul class="actions top-right">
                <li><a href="javascript:void(0)" data-q-action="card-collapsed"><i class="icon dripicons-chevron-down"></i></a></li>
                <li><a href="javascript:void(0)" data-qt-block=".block-el"><i class="icon dripicons-clockwise"></i></a></li>
                <li><a href="javascript:void(0)" data-q-action="card-expand"><i class="icon dripicons-expand-2"></i></a></li>
                <li class="dropdown">
                    <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="la la-ellipsis-h"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right animation" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Agregar Propina</a>
                        <a class="dropdown-item" href="#">Agregar comentario</a>
                        <a class="dropdown-item" href="#">Pagar sin efectivo</a>
                    </div>
                </li>
            </ul>
        </div>
        
          <div class="card-body ">
                    <div class="invoice-wrapper">
                    
                      <div class="invoice-body">
                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Cant</th>
                                <th>Descripcion</th>
                                <th class="text-right">Unidad</th>
                                <th class="text-right">Total</th>
                              </tr>
                            </thead>
                            <tbody class="text-white">
                             @foreach ($personalizado as $lista)
                             <tr>
                              <th scope="row">{{$lista['cantidad']}}</th>
                              
                              <td class="text-right">{{$lista['nombre']}}</td>
                              <td class="text-right">{{$lista['precio']}} Bs</td>
                              <td class="text-right">{{$lista['subtotal']}} Bs</td>
                            </tr>
                             @endforeach
                             
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="invoice-footer">
                        <div class="invoice-total">
                          <div class="row">
                            <div class="col-12">
                              <p>Sub Total:{{$total}}</p>
                              <p>Rockola: $970</p>
                              <p>Propina: $970</p>
                              <p class="total">Total: <span class="text-danger">{{$total}}</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
        
    
</div>

@endsection