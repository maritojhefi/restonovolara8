@extends('dashboard.perifericos.side')
@section('section')
<div class="card">
    <h5 class="card-header">Impresoras encontradas : {{$coleccion->count()}}</h5>
    @isset($impresoraactiva)
    <span class="badge badge-info">Impresora seleccionada:{{$impresoraactiva->nombre}}</span>

    @endisset
    @empty($impresoraactiva)
    <span class="badge badge-danger">Aun no se selecciono impresora</span>

    @endempty
    <div class="card-body">
        
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Impresora</th>
                        <th>ID</th>
                        <th>Estado</th>
                        
                        <th>Accion</th>

                    </tr>
                </thead>
                @isset($coleccion)
                    
                
                <tbody>
                    @foreach ($coleccion as $printer)
                    <tr>
                        <th>
                            @if ($impresoraactiva->nombre==$printer['nombre'])
                            <i class="la la-check-circle font-size-22 v-align-middle text-success"></i>
                            @endif
                            {{$printer['nombre']}}</th>
                        <td>{{$printer['idprinter']}}</td>
                        <td><span class="badge badge-pill badge-{{$printer['status']=='online'?'success':'danger'}}">{{$printer['status']}}</span></td>
                        <td> <form action="{{route('activarimpresora')}}" method="POST">
                            @csrf
                            <input type="hidden" name="nombre" value="{{$printer['nombre']}}">
                            <input type="hidden" name="idprinter" value="{{$printer['idprinter']}}">
                            <button type="submit" class="btn btn-rounded btn-info btn-sm">Activar
                            </button>
                        
                        </td>
                        </form>
                    </tr>
                    @endforeach
                   
                    
                </tbody>
                @endisset
                @empty($coleccion)
                   <strong>No se detectaron impresoras, revise el instalador</strong> 
                @endempty
            </table>
        </div>
    </div>
</div>
@endsection