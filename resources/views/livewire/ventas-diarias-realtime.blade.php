<div>
    <div class="row mt-2 mb-4">
        <div class="col-md-9 col-xs-12"><button class="btn btn-secondary btn-block m-2 btn-lg btn-floating btn-rounded"
                data-toggle="modal" data-target="#crearcuentamodal">Abrir una nueva mesa</button></div>
        <div class="col-md-3 col-xs-12">
            <button class="btn btn-accent btn-block m-2  btn-floating btn-rounded" data-toggle="modal"
                data-target="#anadirGastoModal">Añadir gasto</button>
        </div>

    </div>

    <div class="row">
        @foreach ($cuentas as $cuenta)
            <div class="col-sm-3 col-6 col-md-4 col-lg-3">
                <div class="card  border "
                    style="box-shadow: 0px -1px 7px 5px {{ $cuenta->pendientes->where('genero', 'comida')->count() != 0 ? 'rgb(255, 160, 160)' : 'rgb(241, 233, 233)' }} ; border: 2px solid rgb(250, 250, 250);border-radius: 15px;">
                    @if ($cuenta->estado == 'finalizado')
                        <a href="javascript:void(0)">
                        @else
                            <a href="{{ route('editarCuenta', $cuenta->id) }}">
                    @endif

                    <div class="d-flex "
                        style="background-color: {{ $cuenta->table->color }}; border-radius:15px 15px 0px 0px">

                        <div class="col p-t-15 p-b-15">
                            @if ($cuenta->estado == 'finalizado')
                                <del style="color:red;">
                                    <h2 for="" class="text-white text-center">mesa {{ $cuenta->table->numero }}
                                    </h2>
                                </del>
                            @else
                                <h2 for="" class="text-white text-center">mesa {{ $cuenta->table->numero }}</h2>
                            @endif
                        </div>

                    </div>
                    </a>
                    <div class="p-20 text-center">
                        <ul class="list-reset text-left ">

                            @if ($cuenta->user)
                                <li class="text-muted"><strong>Mesero:</strong> <strong
                                        class="text-accent m-l-15">{{ $cuenta->user->name }}</strong></li>
                            @endif

                            <li class="text-muted"><strong>Subtotal:</strong> <span
                                    class="m-l-15"><strong>{{ $cuenta->total }} Bs</strong></span></li>


                            <div class="row d-flex justify-content-between align-items-center pl-3 pr-3">
                                @if ($cuenta->estado != 'finalizado')
                                    <a class="btn btn-success btn-rounded btn-floating   btn-sm text-white"
                                        href="{{ route('cobrar', $cuenta->id) }}">Cobrar</a>
                                    <button class="btn btn-info btn-rounded btn-floating  btn-sm" data-toggle="modal"
                                        data-target="#modalLista" wire:click="mostrarLista({{ $cuenta->id }})">
                                        <span class="material-icons">fact_check</span></button>
                                    <button class="btn btn-warning btn-rounded btn-floating  btn-sm" data-toggle="modal"
                                        data-target="#modalClave{{ $cuenta->id }}">
                                        <span class="material-icons">
                                            vpn_key
                                        </span></button>
                                @endif

                                <button class="btn btn-accent btn-rounded btn-floating   btn-sm" data-toggle="modal"
                                    data-target="#modalGuardar" wire:click="porEliminar({{ $cuenta->id }})">
                                    <span class="material-icons">save</span></button>
                                @if ($cuenta->estado == 'finalizado')
                                    <a class="btn btn-success btn-rounded btn-floating   btn-sm text-white"
                                        href="#"><span class="material-icons">
                                            lock_open
                                        </span></a>
                                @endif
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div wire:ignore.self class="modal modal-top-left-corner fade" data-backdrop="static" tabindex="-1"
                role="dialog" id="modalClave{{ $cuenta->id }}" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Generar clave Token para la mesa :
                                {{ $cuenta->table->numero }}?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="zmdi zmdi-close"></span>
                            </button>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class=" btn btn-secondary btn-rounded btn-floating"
                                data-dismiss="modal">Cerrar</button>
                            <a href="{{ route('creartokenmesa', $cuenta->id) }}"
                                class=" btn btn-success btn-rounded btn-floating text-white">Confirmar</a>

                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    <div wire:ignore.self class="modal fade bd-example-modal-lg" id="crearcuentamodal" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="col-4"> <select class="form-control" wire:model='meseroSeleccionado'>
                            <option>Seleccione un mesero</option>
                            @foreach ($meseros as $mesero)
                                <option value="{{ $mesero->id }}">{{ $mesero->name }}</option>
                            @endforeach
                        </select></div>
                    <div class="col-4"> @error('meseroSeleccionado')
                            <span class="badge badge-danger">Seleccione un mesero!</span>
                        @enderror
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="zmdi zmdi-close"></span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>

                        @foreach ($mesas as $mesa)
                            <button
                                class="btn btn-success btn-rounded m-2 @if ($mesa->sales != '[]') btn-danger @endif"
                                @if ($mesa->sales != '[]') disabled @endif
                                wire:click='crearMesa({{ $mesa->id }})'>
                                <h1 class="card-title text-white">{{ $mesa->numero }}
                                </h1>
                            </button>
                        @endforeach
                    </p>

                </div>

            </div>
        </div>
    </div>
    <div wire:ignore.self class="modal fade bd-example-modal-lg" id="modalLista" tabindex="-1" role="dialog"
        aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row">
                        @isset($this->cuenta)
                            <div class="col">
                                <h3><span class="badge badge-pill badge-success">Mesa #{{ $this->cuenta->mesa_id }}</span>
                                </h3>
                            </div>
                        @endisset
                        <div class="col"><a wire:loading href="#"
                                class="badge badge-dark">Actualizando...</a></div>
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
                                        
                                        <td><strong>{{ $lista['nombre'] }}</strong></td>
                                        <td>
                                            <a href="#" wire:click="aumentarCantidad({{$lista['id']}})"><i
                                                    class="zmdi zmdi-plus-circle zmdi-hc-fw  font-size-22 v-align-middle text-success"></i></a>
                                            <strong
                                                class="card-title secondary-type m-b-0 m-l-10">{{ $lista['cantidad'] }}
                                            </strong> <a href="#" wire:click="reducirCantidad({{$lista['id']}})"><i
                                                    class="zmdi zmdi-minus-circle zmdi-hc-fw font-size-22 v-align-middle text-danger"></i></a>


                                        </td>
                                        <td>#{{ $lista['id'] }}</td>
                                        <td>{{ $lista['subtotal'] }} Bs</td>
                                        <td> <i class="la la-trash font-size-22 v-align-middle text-danger"></i></td>

                                    </tr>
                                @endforeach
                                <tr>
                                    <th>TOTAL</th>
                                    <td></td>
                                    <td></td>
                                    <td><span class="badge badge-primary">
                                            <h3 class="text-white">{{ $total }} Bs</h3>
                                        </span></td>
                                </tr>
                            @endisset


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>

    <div wire:ignore.self class="modal fade" id="modalGuardar" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            @isset($this->cuenta)
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel"><strong>Atencion!
                                Mesa:{{ $this->cuenta->mesa_id }}</strong>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Esta por archivar y borrar de cuentas activas la mesa # {{ $this->cuenta->mesa_id }}</p>
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-primary"
                            wire:click="guardarMesa({{ $this->cuenta->id }})">Confirmar</button>
                    </div>
                </div>
            @endisset

        </div>
    </div>

    <div wire:ignore.self class="modal fade" id="anadirGastoModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel"><strong>Añadir nuevo gasto</strong>
                    </h5>
                    @if ($historialGastos)
                        <button class="btn btn-sm btn-secondary ml-4" wire:click="borrarHistorialGastos">Crear nuevo
                            gasto</button>
                    @else
                        <button class="btn btn-sm btn-accent ml-4" wire:click="verHistorialGastos">Ver
                            historial</button>
                    @endif

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    @if ($historialGastos)
                        <table class="table table-light">
                            <thead>
                                <th>Asunto</th>
                                <th>Monto</th>
                            </thead>
                            <tbody>
                                @foreach ($historialGastos as $item)
                                    <tr>
                                        <td>{{ $item->asunto }}</td>
                                        <td>{{ $item->monto }}</td>
                                    </tr>
                                @endforeach

                            </tbody>
                        </table>
                    @else
                        <form wire:submit.prevent="crearGasto">

                            <div class="form-group">
                                <label for="asunto">Asunto</label>
                                <textarea class="form-control" name="asunto" id="asunto" wire:model.lazy="asuntoGasto"></textarea>
                                @error('asuntoGasto')
                                    <small id="asunto"
                                        class="form-text text-muted text-danger">{{ $message }}</small>
                                @enderror

                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Bs</span>
                                </div>
                                <input type="number" step="any" wire:model.lazy="montoGasto"
                                    class="form-control">

                            </div>
                            @error('montoGasto')
                                <small id="asunto"
                                    class="form-text text-muted text-danger">{{ $message }}</small>
                            @enderror
                </div>
                <div class="card-footer bg-light">
                    <button type="submit" class="btn btn-primary">Guardar</button>

                </div>
                </form>
                @endif


            </div>

            <div class="modal-footer">

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
