

       
                    @csrf
                    <div class="card-body">
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label for="validationCustom01">Nombre</label>
                                <input type="text" class="form-control  @error('name') is-invalid @enderror" placeholder="Primer y segundo nombre"  required="" name="name" value="{{old('name',$usuario->name)}}">
                             
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="validationCustom02">Apellido</label>
                                <input type="text" class="form-control  @error('apellido') is-invalid @enderror" placeholder="Paterno y Materno"  required="" name="apellido" value="{{old('apellido',$usuario->apellido)}}">

                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="validationCustomusuarioname">Correo</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    </div>
                                    <input type="text" class="form-control  @error('email') is-invalid @enderror"  placeholder="E-mail" aria-describedby="inputGroupPrepend" required="" name="email" value="{{old('email',$usuario->email)}}">
                                   
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom03">DNI</label>
                                <input type="text" class="form-control  @error('cedula') is-invalid @enderror"  placeholder="Carnet" required="" name="cedula" value="{{old('cedula',$usuario->cedula)}}">
                                
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="validationCustom04">Telefono</label>
                                <input type="text" class="form-control  @error('telefono') is-invalid @enderror"  placeholder="Personal" required="" name="telefono" value="{{old('telefono',$usuario->telefono)}}">
                               
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="validationCustom05">Cumpleaños</label>
                                <input type="date" class="form-control  @error('cumpleano') is-invalid @enderror"  required="" name="cumpleano" value="{{old('cumpleano',$usuario->cumpleano)}}">
                               
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom03">Contraseña</label>
                                <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" placeholder="Minimo 5 caracteres" required="" name="password" value="{{old('password')}}">
                                
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="validationCustom04">Confirmar contraseña</label>
                                <input type="password" class="form-control  @error('password_confirmation') is-invalid @enderror"  id="password-confirm" placeholder="Confirmar" required=""  name="password_confirmation">
                               
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="card-footer bg-light">
                        <button class="btn btn-success btn-rounded btn-floating" type="submit">Guardar Usuario</button>

                    </div>
            
       
   
