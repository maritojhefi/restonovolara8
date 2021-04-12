

       
                    @csrf
                    <div class="card-body">
                       
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom03">Numero</label>
                                <input type="number" class="form-control  @error('numero') is-invalid @enderror"  placeholder="Mesa#" required="" name="numero" value="{{old('numero',$mesa->numero)}}">
                                
                            </div>
                          
                            <div class="col-md-3 mb-3">
                                <label for="validationCustom05">Color</label> <br>
                                <input type="color" class="  @error('color') is-invalid @enderror"  required="" name="color" value="{{old('color',$mesa->color)}}">
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group ml-3  mb-3">
                                <label for="exampleFormControlTextarea1">Observaciones</label>
                                <textarea class="form-control   @error('observacion') is-invalid @enderror" name="observacion" rows="3" >{{old('observacion',$mesa->observacion)}}</textarea>
                            </div>
                        </div>
                    
                        
                    </div>
                    <div class="card-footer bg-light">
                        <button class="btn btn-success btn-rounded btn-floating" type="submit">Guardar mesa</button>

                    </div>
            
       
   
