@extends('dashboard.master')
@section('content')
<div class="row">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="invoice-wrapper">
            <div class="invoice-header border-bottom">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  
                </div>
                
              </div>
                <div class="invoice-summary">
           
              </div>
            </div>
            <div class="invoice-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      
                      <th class="text-right">Nombre</th>
                      
                      <th class="text-right">Precio Unitario</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                   
                      @foreach ($lista as $array)
                      <tr>
                        <th class="text-right">{{$array->nombre}}</th>
                        <th class="text-right">{{$array->precioventa}} Bs</th>
                       <th><input type="checkbox" name="seleccionado" ></th>
                    
                    </tr>
                      @endforeach
                     
                   
                   
                  </tbody>
                </table>
              </div>
            </div>
           
          </div>
        </div>
        <div class="card-footer bg-light">
      
         <a href="" class="btn btn-success btn-rounded text-white  pull-right">Pagar</a>
        </div>
        
      </div>
    </div>
  </div>
@endsection