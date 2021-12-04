@extends('dashboard.ventasdiarias.cabecera')
@section('section')
<div class="row">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="invoice-wrapper">
            <div class="invoice-header border-bottom">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <h1>RECIBO MESA #{{$numeromesa}}</h1>
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
                      <th class="text-right">Cant.</th>
                      <th>Nombre</th>
                      
                      <th class="text-right">Precio Unitario</th>
                      <th class="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                      @foreach ($personalizado as $lista)
                      <tr>
                        <th class="text-right">{{$lista['cantidad']}}</th>
                      <td>{{$lista['nombre']}}</td>
                    
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
                    @if ($canciones!=null)
                    <p>Rockola: Bs {{$canciones}}</p>

                    @endif
                    <p class="total">Total A Pagar: <span class="text-danger">{{$total+$canciones}} Bs</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer bg-light">
      
         
            
         
         
            <a href="{{route('imprimir',$idcuenta)}}" class="btn btn-primary pull-right m-t-20 m-b-20  {{session('borrar')? 'disabled':''}} " >Imprimir cuenta</a>
           <!-- <a href="{{route('pagoparcial',$idcuenta)}}" class="btn btn-accent pull-right m-t-20 m-b-20 m-r-20  {{session('borrar')? 'disabled':''}} " >Pago Parcial</a>-->

            @if (auth()->user()->rol_id==5)
            <a href="{{route('cuentasActivas')}}" class="btn btn-secondary pull-right m-t-20 m-b-20 mr-3 ml-3 " ><span class="material-icons">
              settings_backup_restore
              </span></a>
            @else
            <a href="{{route('listarmesasMesero')}}" class="btn btn-secondary pull-right m-t-20 m-b-20 mr-3 ml-3 " ><span class="material-icons">
              settings_backup_restore
              </span></a>
            @endif
           
          
      
        </div>
        
      </div>
    </div>
  </div>
@endsection