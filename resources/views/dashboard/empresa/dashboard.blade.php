@extends('dashboard.master')
@section('content')
    @livewire('prueba')
@if ($ventas !=null && $totalvendido!=null && $coleccion!=null)
    



    <header class="page-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
@if (auth()->user()->rol_id==3)
<h1 class="separator">Resumen de {{auth()->user()->name}}</h1>

@else
<h1 class="separator">Resumen general de hoy</h1>

@endif
               
            </div>
        </div>
    </header>
  
  <div class="row">
    <div class="col-12">
        <div class="card">
            <div class="row m-0 col-border-xl">
                <div class="col-md-12 col-lg-6 col-xl-3">
                    <div class="card-body">
                        <div class="icon-rounded icon-rounded-primary float-left m-r-20">
                            <i class="la la-dollar f-w-600"></i>
                        </div>
                        <h5 class="card-title m-b-5 counter" >{{$totalvendido}} Bs</h5>
                        <h6 class="text-muted m-t-10">
                            Ventas finalizadas de hoy
                        </h6>
                        
                    </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-3">
                    <div class="card-body">
                        <div class="icon-rounded icon-rounded-accent float-left m-r-20">
                            <i class="la la-money"></i>
                        </div>
                        <h5 class="card-title m-b-5 " >{{$totalvendidoabierto}} Bs</h5>
                        <h6 class="text-muted m-t-10">
                           Ventas pendientes
                        </h6>
                        
                    </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-3">
                    <div class="card-body">
                        <div class="icon-rounded icon-rounded-info float-left m-r-20">
                            <i class="zmdi zmdi-badge-check zmdi-hc-fw"></i>
                        </div>
                        <h5 class="card-title m-b-5 counter" >{{$numeroventas}}</h5>
                        <h6 class="text-muted m-t-10">
                            Mesas Finalizadas
                        </h6>
                       
                    </div>
                </div>
                <div class="col-md-12 col-lg-6 col-xl-3">
                    <div class="card-body">
                        <div class="icon-rounded icon-rounded-success float-left m-r-20">
                            <i class="zmdi zmdi-local-dining zmdi-hc-fw"></i>
                        </div>
                        <h5 class="card-title m-b-5  counter" >{{$numeroventasabiertas}}</h5>
                        <h6 class="text-muted m-t-10">
                            Mesas abiertas pendientes
                        </h6>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   
   


<div class="row">
    <div class="col-lg-12 col-xl-7">
        <div class="card">
            <div class="card-header">Transacciones Recientes
                
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <div id="" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                      
                    <div class="row"><div class="col-sm-12">
                        <table id="" class="table table-striped table-bordered dataTable no-footer" style="width: 100%;" role="grid" aria-describedby="recent-transaction-table_info">
                        <thead>
                            <th>#Mesa</th>
                            <th>Mesero</th>
                            <th>Total</th>
                            <th>Estado</th>
                            <th>Hora</th>
                            
                        </thead>
                        <tbody>
                            @foreach ($ventas as $venta)
                            <tr role="row">
                                <td>{{$venta->table->numero}}</td>
                                <td>{{$venta->user->name}}</td>
                                <td>{{$venta->total}}</td>
                                <td><span class="badge badge-pill badge-{{$venta->estado=='pendiente'?'warning':'success'}}">{{$venta->estado}}</span></td>
                                <td>{{$venta->created_at->format('H:i:s')}}</td>
                        </tr>  
                            @endforeach
                        
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    </div>
    @if (auth()->user()->rol_id==5)
    <div class="col-lg-12 col-xl-5">
        <div class="card">
            <div class="card-header"><span class="m-t-10 d-inline-block">Reporte de meseros</span>
                <ul class="nav nav-pills nav-pills-primary float-right" id="pills-demo-sales" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-month-tab" data-toggle="tab" href="#sales-month-tab" role="tab">Hoy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-year-tab" data-toggle="tab" href="#sales-year-tab" role="tab">Year</a>
                    </li>
                </ul>
            </div>
            <div class="card-body p-0">
                <div class="tab-content" id="pills-tabContent-sales">
                    <div class="tab-pane fade show active" id="sales-month-tab" role="tabpanel" aria-labelledby="sales-month-tab">
                        <table class="table v-align-middle">
                            <thead class="bg-light">
                                <tr>
                                    <th class="p-l-20">Mesero</th>
                                    <th>Mesas</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($coleccion as $lista)
                                <tr>
                                    <th>{{$lista['mesero']}}</th>
                                    <td>{{$lista['mesas']}}</td>
  
                                    <td>{{$lista['total']}} Bs</td>
  
                                  </tr>
                                @endforeach
                               
                                
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane fade" id="sales-year-tab" role="tabpanel" aria-labelledby="sales-year-tab">
                                                    <table class="table v-align-middle">
                                                        <thead class="bg-light">
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Earnings</th>
                                                                <th>Quota</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><img class="align-self-center mr-3 ml-2 w-50 rounded-circle" src="../assets/img/avatars/02.jpg" alt="">
                                                                    <strong class="nowrap">Mike Jones </strong>
                                                                </td>
                                                                <td>$587,000</td>
                                                                <td><span class="badge badge-pill badge-success">Above</span></td>
                                                            </tr>
                                                           
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



@endif
@else
Aun no se tienen registros de ventas
@endif

@endsection