@extends('dashboard.master')
@section('content')
    



    <header class="page-header">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h1 class="separator">Editando</h1>
                <nav class="breadcrumb-wrapper" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{route('principal')}}"><i class="icon dripicons-home"></i></a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">RestoNovo</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{Request::path()}}</li>
                        <ul class="actions top-right">
                            <li class="dropdown">
                                <a href="{{ url()->previous() }}" class="btn btn-fab" >
                                    <i class="la la-long-arrow-left"></i>
                                </a>
                                
                            </li>
                        </ul>
                    </ol>
                </nav>
            </div>
        </div>
    </header>
    @include('dashboard.partials.validation-error')
    <section class="page-content container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <h5 class="card-header"> Formulario del Usuario: {{$usuario->name}}</h5>
                    <form class="needs-validation" novalidate="" action="{{route("usuario.update",$usuario->id)}}" method="POST">
                        @method('PUT')
                         @include('dashboard.user.form')
                   </form>
                </div>
            </div>

    <div class="col-md-6">
        <div class="card">
            <h5 class="card-header">Permisos y caracteristicas </h5>
                <form class="needs-validation" novalidate="" action="{{route("usuario.updateinfo",$usuario->id)}}" method="post">
                    @csrf
                    

            <div class="card-body">
                    <div class="">
                        <input type="hidden" name="empleado" value="no">
                        <input class="switch-primary"  type="checkbox" {{$usuario->empleado=='si'? 'checked' :''}} data-switchery="true" style="display: none;" name="empleado" value="si">
                        

                        <label class="" >Empleado</label>
                        <br>
                   
                        <input type="hidden" name="sueldofijo" value="no">
                        <input class="switch-primary"  type="checkbox"  {{$usuario->sueldofijo=='si'? 'checked' :''}} data-switchery="true" style="display: none;" name="sueldofijo" value="si">
                      

                        <label class="" >Sueldo Fijo</label>
                       <br>
                       <input type="hidden" name="entrevista" value="no">
                       <input class="switch-primary"  type="checkbox"  {{$usuario->entrevista=='si'? 'checked' :''}} data-switchery="true" style="display: none;" name="entrevista" value="si">
                       
                       <label class="">Entrevista realizada</label>
                      
                    </div>
                    <br>

                    <div class="form-group">
                        <select class="custom-select @error('rol_id') is-invalid @enderror" required="" name="rol_id">
                            <option value="">Selecciona el rol que se le asignara</option>
                            @foreach ($roles  as $nombre=>$id)
                            <option {{$usuario->rol_id==$id ?'selected="selected"':''}} class="dropdown-item" aria-labelledby="dropdownMenuButton" value="{{$id}}">{{$nombre}}</option>
                            
                                @endforeach
                            
                        </select>
                       
                            <label class="custom-control-label" for="customControlValidation2">Su rol actual es: {{$usuario->rol_id==""? 'Ninguno': $usuario->rol->nombre}}</label>
                     
                    </div>
                                
                   
                 
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="customControlValidation2" name="tiposueldo" required="" value="semanal" {{$usuario->tiposueldo=="semanal"? 'checked':''}}>
                        <label class="custom-control-label" for="customControlValidation2">Sueldo Semanal</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="customControlValidation3" name="tiposueldo" required="" value="quincenal" {{$usuario->tiposueldo=="quincenal"? 'checked':''}} >
                        <label class="custom-control-label" for="customControlValidation3">Sueldo Quincenal</label>
                    </div>
                    <div class="custom-control custom-radio mb-3">
                        <input type="radio" class="custom-control-input" id="customControlValidation4" name="tiposueldo" required="" value="mensual" {{$usuario->tiposueldo=="mensual"? 'checked':''}}>
                        <label class="custom-control-label" for="customControlValidation4">Sueldo Mensual</label>
                    </div>
            </div>
            <div class="card-footer bg-light">
                <button class="btn btn-info btn-rounded btn-floating" type="submit">Actualizar Informacion</button>
               
            </div>
        </form>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card">
          
            <h5 class="card-header">Imagen del Usuario {{$usuario->image?'':'(sin foto aun)'}}</h5>
                <div class="card-footer bg-light">
                    <form action="{{route("usuario.imagen",$usuario)}}" method="POST" enctype="multipart/form-data">
                        @csrf
                     
                        <div class="form-group">
                            <div class="row">
                                <div class=" ml-2">
                                    <img src="{{asset('images')}}/{{$foto}}" class="w-50 rounded-circle" style="width:50px; height:50px;" >
                                </div>
                                <div class="">
                                    <div class="file-upload">
                                        <label for="upload" class="btn btn-success m-b-0 m-l-5 m-r-5 btn-rounded btn-outline"  data-toggle="tooltip" data-placement="top" data-original-title="Subir una nueva foto"><span class="material-icons">file_upload</span></label>
                                        <input id="upload" class="file-upload__input" type="file" name="imagen">
                                    </div>
                                </div>
                                <div class="">
                                    <button class="btn btn-primary m-b-0 m-l-5 m-r-5 btn-rounded btn-outline"  data-toggle="tooltip" data-placement="bottom" data-original-title="Guardar nueva foto" type="submit"><span class="material-icons">save</span></button>
    
                                </div>
                            </form> 
                            
                            @if ($usuario->image)
                            <div class="">
                                <form action="{{route("usuario.imageneliminada",$usuario->image->id)}}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                <button class="btn btn-danger m-b-0 m-l-5 m-r-5 btn-rounded btn-outline"  data-toggle="tooltip" data-placement="right" data-original-title="Eliminar la foto" type="submit"><span class="material-icons">delete</span></button>
                                </form>
                            </div>
                            @endif
                              
                                <div id="preview" class=" card-img img-fluid mb-4" style="width:100px"></div>
                            </div>
                            
                           
                        </div>
                     
                     
                </div>
        </div>
    </div>
    
</div>
</section>

<script>
    document.getElementById("upload").onchange = function(e) {
  // Creamos el objeto de la clase FileReader
  let reader = new FileReader();

  // Leemos el archivo subido y se lo pasamos a nuestro fileReader
  reader.readAsDataURL(e.target.files[0]);

  // Le decimos que cuando este listo ejecute el código interno
  reader.onload = function(){
    let preview = document.getElementById('preview'),
            image = document.createElement('img');

    image.src = reader.result;

    preview.innerHTML = '';
    preview.append(image);
  };
}
</script>
@endsection