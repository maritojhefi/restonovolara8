@extends('frontend.dashboardcliente.master')
@section('content2')
<div class="col-lg-6 mt-3">
    <div class="card card-dark">
        <div class="card-header">Tu cuenta
            <ul class="actions top-right">
              <li><label for="">Mesa #{{$mesa->table->numero}}</label></li>
                <li><a href="{{route('detallecuenta')}}" data-qt-block=".block-el"><i class="icon dripicons-clockwise"></i></a></li>
               
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
                                <th>Nombre</th>
                                <th class="text-right">Unidad(bs)</th>
                                <th class="text-right">Total(bs)</th>
                              </tr>
                            </thead>
                            <tbody class="text-white">
                             @foreach ($personalizado as $lista)
                             <tr>
                              <th scope="row">{{$lista['cantidad']}}</th>
                              
                              <td class="text-right">{{$lista['nombre']}}</td>
                              <td class="text-right">{{$lista['precio']}}</td>
                              <td class="text-right"><strong>{{$lista['subtotal']}}</strong></td>
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
                              <p>Sub Total:{{$total}} Bs</p>
                              <p>Musica: {{$rockola}} Bs</p>
                             
                              <p class="total">Total: <span class="text-danger">{{$total+$rockola}} Bs</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
        
    
</div>

@endsection