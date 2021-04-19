@extends('dashboard.perifericos.side')
@section('section')
<div class="card">
    <h5 class="card-header">Dispositivos encontrados : {{$coleccion->count()}}</h5>
    @isset($reproductoractivo)
    <span class="badge badge-info">Reproductor activo:{{$reproductoractivo->nombre}}</span>

    @endisset
    @empty($reproductoractivo)
    <span class="badge badge-danger">Aun no se selecciono reproductor</span>

    @endempty
    <div class="card-body">
        
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Dispositivo</th>
                        <th>ID</th>
                        <th>Tipo</th>

                    </tr>
                </thead>
                @isset($coleccion)
                    
                
                <tbody>
                    @foreach ($coleccion as $rep)
                    <tr>
                        <th>{{$rep['nombre']}}</th>
                        <td>{{$rep['id']}}</td>
                        <td>{{$rep['tipo']}}</td>
                      
                        <td> <form action="{{route('activarreproductor')}}" method="POST">
                            @csrf
                            <input type="hidden" name="nombre" value="{{$rep['nombre']}}">
                            <input type="hidden" name="idrep" value="{{$rep['id']}}">
                            <button type="submit" class="btn btn-rounded btn-success btn-sm">Activar
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