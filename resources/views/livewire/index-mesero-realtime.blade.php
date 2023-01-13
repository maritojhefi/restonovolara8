<div>
    <button class="btn btn-secondary btn-block mt-2 mb-4 btn-lg btn-floating btn-rounded" data-toggle="modal"
        data-target="#crearcuentamodal">Abrir una nueva cuenta</button>

    <div class="row">
        @foreach ($cuentas as $cuenta)
        <div class="col-md-6 col-lg-3 col-xxl-3 col-6">
            <div class="card contact-item border shadow-on-hover"
                style=";border-radius: 20px; box-shadow: 0px -1px 7px 5px {{$cuenta->pendientes->where('genero','comida')->count()!=0?'rgb(255, 160, 160)':'rgb(241, 233, 233)'}};">
                <div class="card-header border-none">

                    <ul class="actions top-right">
                        <li><strong><h4>{{$cuenta->total}} Bs</h4></strong></li>
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="btn btn-fab" data-toggle="modal"
                                data-target=".modal-bottom-frame">
                                <i class="icon dripicons-dots-3 rotate-90 font-size-24"></i>
                            </a>


                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="row">
                        <a class="col-md-12 text-center" href="{{route('editarCuenta',$cuenta->id)}}">
                            <div class="col p-t-15 p-b-15" style="background-color: {{$cuenta->table->color}};border-radius: 20px;">
                                <h2 for="" class="text-white text-center">{{$cuenta->table->numero}}</h2>

                            </div>
                        </a>

                    </div>
                </div>
                <div class="card-footer text-center p-0">
                    <div class="row m-0">
                        <div class="col-4 p-0">
                            <div class="contact">
                                <a href="{{route('cobrar',$cuenta->id)}}" class="d-block p-20">
                                    <i class="la la-money font-size-22 "></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-4 p-0">
                            <div class="contact">
                                <a href="#" data-toggle="modal"
                                data-target="#modalLista" wire:click="mostrarLista({{$cuenta->id}})"  class="d-block p-20">
                                    <i class="la la-list font-size-22 "></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-4 p-0">
                            <div class="contact">
                                <a href="#"  class="d-block p-20">
                                    <i class="la la-trash font-size-22 "></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @endforeach

    </div>

    <div wire:ignore.self class="modal fade bd-example-modal-lg" id="modalLista" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row">
                        @isset($this->cuenta)
                        <div class="col">
                            <h3><span class="badge badge-pill badge-success">Mesa #{{$this->cuenta->mesa_id}}</span>
                            </h3>
                        </div>
                        @endisset
                        <div class="col"><a wire:loading href="#" class="badge badge-dark">Actualizando...</a></div>
                    </div>



                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="zmdi zmdi-close"></span>
                    </button>
                </div>

                <div class="modal-body">

                    <table class="table table-striped">
                        <thead>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Ticket</th>
                            <th>Subtotal</th>

                        </thead>
                        <tbody>
                            @isset($listaPersonalizada)
                            @foreach ($listaPersonalizada as $lista)
                            <tr>
                                <td><strong>{{$lista['nombre']}}</strong></td>
                                <td>
                                    <h5 class="card-title secondary-type m-b-0 m-l-10">{{$lista['cantidad']}}</h5>
                                </td>
                                <td>#{{$lista['id']}}</td>
                                <td>{{$lista['subtotal']}} Bs</td>

                            </tr>

                            @endforeach
                            <tr>
                                <th>TOTAL</th>
                                <td></td>
                                <td></td>
                                <td><span class="badge badge-primary">
                                        <h3 class="text-white">{{$total}} Bs</h3>
                                    </span></td>
                            </tr>
                            @endisset


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
    <div wire:ignore.self class="modal modal-bottom-frame fade" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Opciones de mesa</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="zmdi zmdi-close"></span>
                    </button>
                </div>
                <div class="modal-body">

                    <button class="btn btn-secondary btn-outline btn-rounded btn-block">Generar Token</button>
                    <button class="btn btn-secondary btn-rounded btn-outline btn-block">Cambiar de #</button>
                    <button class="btn btn-secondary btn-rounded btn-block btn-outline">Cambiar de mesero</button>
                    <button class="btn btn-danger btn-rounded btn-block ">Eliminar mesa</button>
                </div>

            </div>
        </div>
    </div>


    <div wire:ignore.self class="modal fade bd-example-modal-lg" id="crearcuentamodal" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="zmdi zmdi-close"></span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>

                        @foreach ($mesas as $mesa)

                        <button class="btn btn-success btn-rounded m-2 @if($mesa->sales!='[]') btn-danger @endif"
                            @if($mesa->sales!='[]')disabled @endif wire:click='crearMesa({{$mesa->id}})'><h1
                                class="card-title text-white">{{$mesa->numero}}
                            </h1></button>
                        @endforeach
                    </p>

                </div>

            </div>
        </div>
    </div>


    <script>
        window.livewire.on('cerrarModal', (postId) => {
            $('#crearcuentamodal').modal('hide');
        })
        window.livewire.on('cerrarModal2', (idMesa) => {
            console.log('#modalGuardar' + idMesa);
            $('#modalGuardar').modal('hide');
        })
        window.livewire.on('cerrarModalLista', (idMesa) => {

            $('#modalLista').modal('hide');
        })

    </script>

</div>
