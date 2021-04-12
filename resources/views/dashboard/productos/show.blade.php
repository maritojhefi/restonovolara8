@extends('dashboard.productos.cabecera')
@section('section')

<section class="page-content container-fluid">
						<div class="row">
							<div class="col-xl-3 col-lg-4">
								<div class="card">
									<div class="card-body">
										<div class="profile-card text-center">
											<div class="thumb-xl member-thumb m-b-10 center-block">
												@if ($producto->image)
												<img class="card-img" src="{{asset('images')}}/{{$producto->image->imagen}}" alt="Card image">
												@else
												<img class="card-img" src="{{asset('images/food.png')}}" alt="Card image" style="width:100px">

												@endif
											</div>
											<div class="">
												<h5 class="m-b-5">{{$producto->nombre}}</h5>
												<p class="text-muted">creado: {{$producto->created_at->format('d-m-Y')}}</p>
											</div>
											<a href="{{route('producto.edit',$producto->id)}}" class="btn btn-info btn-rounded text-white">Editar</a>
											<a href="{{route('estadoproducto',$producto->id)}}" class="btn btn-light btn-rounded btn-floating">Estado</a>
											<ul class="list-reset text-left m-t-40">
												<li class="text-muted"><strong>Estado:</strong><span class="m-l-15">{{$producto->estado}}</span></li>
												<li class="text-muted"><strong>Stock existente:</strong> <span class="m-l-15">{{$producto->cantidad}}</span></li>
												<li class="text-muted"><strong>Precio Venta:</strong> <span class="m-l-15">{{$producto->precioventa}} Bs</span></li>
											</ul>
											
										</div>
									</div>
									<hr>
									
								</div>
							</div>
							<div class="col-xl-9 col-lg-8">
								<div class="card card-tabs">
									<div class="card-header p-0 no-border">
										<ul class="nav nav-tabs primary-tabs p-l-30 m-0">
											<li class="nav-item" role="presentation"><a href="#profile-about" class="nav-link active show" data-toggle="tab" aria-expanded="true">Acerca de</a></li>
											<li class="nav-item" role="presentation"><a href="#profile-photos" class="nav-link" data-toggle="tab" aria-expanded="true">Imagenes</a></li>
										</ul>
									</div>
									<div class="card-body">
										<div class="tab-content">
											<div class="tab-pane fadeIn active show" id="profile-about">
												<div class="profile-wrapper p-t-20">
													<h5 class="card-title">Ingredientes</h5>
													<p>{{$producto->ingredientes}}</p>
													</div>
													<div class="profile-wrapper">
														<h5 class="card-title">Informacion</h5>
														<ul class="list-reset p-t-10">
															<li class="p-b-10"><span class="w-150 d-inline-block">Genero</span><span>{{$producto->genero}}</span></li>
															<li class="p-b-10"><span class="w-150 d-inline-block">Stock</span><span>{{$producto->cantidad}}</span></li>
															<li class="p-b-10"><span class="w-150 d-inline-block">Detalle</span><span>{{$producto->detalle}}</span></li>
															<li class="p-b-10"><span class="w-150 d-inline-block">Categoria</span><span>{{$producto->categoria->nombre}}</span></li>

														</ul>
													</div>
												</div>
												<div class="tab-pane fadeIn" id="profile-photos">
													<div class="row custom-file">
														<form action="{{route("producto.subirimagen",$producto)}}" method="POST" enctype="multipart/form-data">
															@csrf
															   
														<div class="col">
															
																	 
																<input type="file" class="custom-file-input" multiple="" id="validatedCustomIconLabel" required="" name="imagen">
																<label class="custom-file-label btn-icon" for="validatedCustomIconLabel">Subir</label>
																
															
														</div>
														<div class="col">
															<button class="btn btn-secondary btn-rounded">Agregar Imagen</button>
													
														
														</div>
													
													</div>
												</form>
													<div class="card-columns mt-3">
														
                                                        @foreach ($producto->images as $image)
														<form action="{{route('producto.imagedelete',$image->id)}}" method="POST">
															@method("DELETE")
															@csrf
														 
														
                                                        <div class="card text-white">
                                                            <img class="card-img" src="{{asset('images')}}/{{$image->imagen}}" alt="Card image">
                                                            <div class="card-img-overlay">
                                                                <button type="submit" class="btn btn-secondary btn-rounded btn-floating" style="position:absolute;bottom:30px;right:15px;">
                                                                    Eliminar
                                                                </button>
																
                                                            </div>
														</form>
                                                        </div>
                                                        
                                                        @endforeach
													
														
													</div>
												</div>
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
@endsection