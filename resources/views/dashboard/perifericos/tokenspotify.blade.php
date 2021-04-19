@extends('dashboard.perifericos.side')
@section('section')
<div class="col-md-6">
    <div class="card">
        <h5 class="card-header">Guardando nuevo token</h5>
        <div class="card-body">
            <form action="{{route('guardartoken')}}" method="Post">
                @csrf
                <div class="form-group">
                    <label for="demoTextInput2">Pegue el token</label>
                    <textarea class="form-control input-rounded" id="exampleFormControlTextarea2" rows="3" name="token"></textarea>                </div>
                    <input type="submit" class="btn btn-rounded btn-success" value="Guardar">

            </form>
        </div>
    </div>
</div>
@endsection