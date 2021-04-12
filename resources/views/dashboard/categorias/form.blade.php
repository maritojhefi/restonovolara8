

       
                    @csrf
                    <div class="card-body">
                       
                        <div class="form-row">
                            <div class="col-md-6 mb-6">
                                <label for="validationCustom03">Nombre</label>
                                <input type="text" class="form-control  @error('nombre') is-invalid @enderror"  placeholder="categoria" required="" name="nombre" value="{{old('nombre',$categoria->nombre)}}">
                                
                            </div>
                          
                            
                        </div>
                        <div class="row">
                            <div class="form-group ml-3  mb-3">
                                <label for="exampleFormControlTextarea1">Detalle</label>
                                <textarea class="form-control   @error('detalle') is-invalid @enderror" name="detalle" rows="3" >{{old('detalle',$categoria->detalle)}}</textarea>
                            </div>
                        </div>
                        <div class="row">
                            <select class="form-control  @error('tipo') is-invalid @enderror form-control-lg" name="tipo">
                              
                                <option selected value="">Seleccione uno</option>
                                <option value="bebida">bebida</option>
                                <option value="comida">comida</option>
                                
                            </select>
                        </div>
                    
                        
                    </div>
                    <div class="card-footer bg-light">
                        <button class="btn btn-success btn-rounded btn-floating" type="submit">Guardar categoria</button>

                    </div>
            
       
   
