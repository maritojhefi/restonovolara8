@extends('dashboard.productos.cabecera')
@section('section')
    
<br>
<div class="row">
  <div class="col">
      <div class="card">
          <h5 class="card-header">Creando Nuevo Producto
              <ul class="actions top-right">
                 
              </ul>
          </h5>
          <div class="card-body">
              <form action="{{route("producto.store")}}" method="POST"  enctype="multipart/form-data">
                  @csrf
@include('dashboard.productos.form')
<hr class="dashed ">
                        <div class="form-group row">
                            <label class="control-label text-right col-md-3">Imagen</label>
                            <div class="col-md-5">
                                <input type="file" class="custom-file-input   @error('imagen') is-invalid @enderror"  required="" name="imagen">
                                <label class="custom-file-label btn-icon" for="validatedCustomIconLabel">Selecciona una foto</label>
                                <div id="preview" class=" card-img img-fluid mb-4" style="width:100px"></div>
                               
                            </div>
                        </div>
                       
                          
                        </div>
                
                    
                
            </div>
        </div>
<div class="card-footer bg-light">
  <div class="form-actions">
      <div class="row">
          <div class="col-md-12">
              <div class="row">
                  <div class="offset-sm-3 col-md-5">
                      <button class="btn btn-success btn-rounded">Guardar</button>
                      <a class="btn btn-danger btn-rounded btn-outline" href="{{route('producto.index')}}">Cancelar</a>
                  </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

</div>
</div>
</div>

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