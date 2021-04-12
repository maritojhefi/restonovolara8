
                    <div class="form-body">
                        <div class="inputs">
                       
                        <div class="form-group row">
                            <label class="control-label text-right col-md-3">Nombre</label>
                            <div class="col-md-5">
                                <input type="text" placeholder="" class="form-control date   @error('nombre') is-invalid @enderror" id="" maxlength="" name="nombre" value="{{old('nombre',$producto->nombre)}}">
                            </div>
                        </div>
                      
                        <div class="form-group row">
                            <label class="control-label text-right col-md-3">Sub-categoria</label>
                            <div class="col-md-5">
                                <select id="" class="form-control   @error('category_id') is-invalid @enderror" name="category_id">
                                    <option selected="">Selecciona una</option>
                                    @foreach ($categorias  as $nombre=>$id)
                                    <option {{$producto->category_id==$id ?'selected="selected"':''}} class="dropdown-item" aria-labelledby="dropdownMenuButton" value="{{$id}}">{{$nombre}}</option>
                                    
                                        @endforeach
                                   
                                  

                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label text-right col-md-3">Precio por Unidad</label>
                            <div class="col-md-5">
                                <div class="input-group">
                                    
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Bs</span>
                                        </div>
                                        <input type="number" name="precioventa" class="form-control   @error('precioventa') is-invalid @enderror" min="0" aria-label="Amount (to the nearest dollar)" value="{{old('precioventa',$producto->precioventa)}}">
                                        <div class="input-group-append">
                                            <span class="input-group-text">.00</span>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                        <hr class="dashed ">
                        <div class="form-group row">
                            <label class="control-label text-right col-md-3">Ingredientes</label>
                            <div class="col-md-5">
                                <textarea class="form-control   @error('ingredientes') is-invalid @enderror" id="exampleFormControlTextarea1" name="ingredientes" rows="1">{{old('ingredientes',$producto->ingredientes)}}</textarea>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label text-right col-md-3">Comentario</label>
                            <div class="col-md-5">
                                <textarea class="form-control   @error('detalle') is-invalid @enderror" name="detalle" id="exampleFormControlTextarea1" rows="1">{{old('detalle',$producto->detalle)}}</textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label text-right col-md-3">Stock</label>
                            <div class="col-md-5">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Disponible</span>
                                    </div>
                                    <input type="number" class="form-control   @error('cantidad') is-invalid @enderror" name="cantidad" aria-label="Default" min="0" aria-describedby="inputGroup-sizing-default" value="{{old('cantidad',$producto->cantidad)}}">
                                </div>
                            </div>
                        </div>
                      
                        
      