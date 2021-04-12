

       
                    @csrf
                    <div class="card-body">
                       
                        <div class="form-row">
                            <div class="col-md-6 mb-6">
                                <label for="validationCustom03">Nombre</label>
                                <input type="text" class="form-control  @error('nombre') is-invalid @enderror"  placeholder="Rol" required="" name="nombre" value="{{old('nombre',$rol->nombre)}}" autofocus>
                                
                            </div>
                          
                            
                        </div>
                        <div class="row">
                            <div class="form-group ml-3  mb-3">
                                <label for="exampleFormControlTextarea1">Descripcion</label>
                                <textarea class="form-control   @error('descripcion') is-invalid @enderror" name="descripcion" rows="3" >{{old('descripcion',$rol->descripcion)}}</textarea>
                            </div>
                        </div>
                    
                        
                    </div>
                    <div class="card-footer bg-light">
                        <button class="btn btn-success btn-rounded btn-floating" type="submit">Guardar rol</button>

                    </div>
            
       
   
