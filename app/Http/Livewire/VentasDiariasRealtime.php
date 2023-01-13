<?php

namespace App\Http\Livewire;

use App\Caja;
use App\Sale;
use App\User;
use App\Gasto;
use App\Table;
use App\Product;
use Carbon\Carbon;
use App\Sale_record;
use App\Events\Mensaje;
use Livewire\Component;
use App\Events\CrearMesa;
use Mike42\Escpos\Printer;
use App\Events\EliminarMesa;
use App\Helpers\CustomPrint;
use App\Events\ActualizarLista;
use Illuminate\Support\Facades\DB;
use Mike42\Escpos\CapabilityProfile;
use Mike42\Escpos\PrintConnectors\WindowsPrintConnector;

class VentasDiariasRealtime extends Component
{
    public $meseroSeleccionado, $listaPersonalizada, $total, $cuenta;
    public $montoGasto, $asuntoGasto, $historialGastos;

    protected $listeners = [
        'echo:canal,ActualizarLista' => 'ecoActualizarListaMesa',
        'echo:canal,CrearMesa' => 'ecoCrearMesa',
        'echo:canal,EliminarMesa' => 'ecoEliminarMesa'
        //'echo:canal,Mensaje' => 'cerrarModal'
    ];
    public function aumentarCantidad(Product $producto)
    {
        DB::beginTransaction();
        DB::table('sales')->where('id', '=', $this->cuenta->id)->increment('total', $producto->precioventa);
        DB::table('products')->where('id', '=', $producto->id_producto)->decrement('cantidad', 1);
        $cuenta=Sale::find($this->cuenta->id);
        $cuenta->products()->attach($producto->id_producto);
        DB::commit();
        event(new ActualizarLista($cuenta->mesa_id,$cuenta->table->numero,$cuenta->id));
    }
    public function borrarHistorialGastos()
    {
        $this->reset('historialGastos');
    }
    public function verHistorialGastos()
    {
        $caja = Caja::whereDate('created_At', Carbon::today())->first();
        $this->historialGastos = Gasto::where('caja_id', $caja->id)->get();
    }
    public function crearGasto()
    {
        $this->validate([
            'montoGasto' => 'required|numeric|gt:0',
            'asuntoGasto' => 'required|string|min:10'
        ]);
        $caja = Caja::whereDate('created_At', Carbon::today())->first();
        Gasto::create([
            'asunto' => $this->asuntoGasto,
            'user_id' => auth()->user()->id,
            'monto' => $this->montoGasto,
            'caja_id' => $caja->id
        ]);
        $caja->gasto_acumulado = $caja->gasto_acumulado + $this->montoGasto;
        $caja->save();
        $this->dispatchBrowserEvent('alert', [
            'type' => 'warning',
            'message' => "Nuevo gasto creado!"
        ]);
        $this->reset('montoGasto', 'asuntoGasto');
    }
    public function ecoEliminarMesa($array)
    {
        if ($this->cuenta) {
            if ($this->cuenta->id == $array['idcuenta']) {
                $this->emit('cerrarModalLista', 'hola');
                $this->emit('cerrarModal2', 'hola');
                $this->reset();
            }
        }

        $this->dispatchBrowserEvent('alert', [
            'type' => 'warning',
            'message' => "Se elimino la mesa #" . $array['numeromesa'] . '!'
        ]);
        $cuenta = Sale::find($array['idcuenta']);
        try {
            if ($cuenta->total != 0) {
                $mesero = $cuenta->usuario_id;
                $mesa = $cuenta->mesa_id;
                $total = $cuenta->total;
                $observacion = $cuenta->observacion;
                $cliente = $cuenta->comprador_id;

                $caja = Caja::whereDate('created_At', Carbon::today())->get();

                $cuentaguardada = Sale_record::create([
                    'usuario_id' => $mesero,
                    'mesa_id' => $mesa,
                    'total' => $total,
                    'observacion' => $observacion,
                    'comprador_id' => $cliente,
                    'caja_id' => $caja[0]->id,
                    'estado' => $cuenta->estado
                ]);

                $productos = $cuenta->products;
                $sumaproductos = $productos->pluck('precioventa')->sum();
                foreach ($productos as $prod) {

                    $cuentaguardada->products()->attach($prod->id);
                }
                $this->dispatchBrowserEvent('alert', [
                    'type' => 'success',
                    'message' => "La mesa #" . $cuenta->table->numero . " fue archivada!"
                ]);
                $cuenta->delete();
                $cuenta->products()->detach();
                DB::table('cajas')->where('id', '=', $caja[0]->id)->increment('monto_acumulado', $sumaproductos);
                DB::table('cajas')->where('id', '=', $caja[0]->id)->increment('rockola_acumulado', $cuenta->rockola);
            } else {
                $this->dispatchBrowserEvent('alert', [
                    'type' => 'warning',
                    'message' => "La mesa #" . $cuenta->table->numero . " fue borrada sin registros!"
                ]);
                $cuenta->delete();
            }
        } catch (\Throwable $th) {
        }
    }
    public function ecoCrearMesa($array)
    {
        $this->dispatchBrowserEvent('alert', [
            'type' => 'success',
            'message' => "Se abrio la mesa #" . $array['numeromesa'] . '!'
        ]);
    }

    public function ecoActualizarListaMesa($array)
    {
        if ($this->cuenta) {
            if ($this->cuenta->id == $array['idcuenta']) {
                $this->mostrarLista($this->cuenta);
                $this->dispatchBrowserEvent('alert', [
                    'type' => 'success',
                    'message' => "Se actualizo la lista de la mesa #" . $array['numeromesa'] . '!'
                ]);
            }
        }
    }


    public function mostrarLista(Sale $cuenta)
    {
        $this->cuenta = $cuenta;
        $listafiltrada = $cuenta->pendientes->pluck('nombre');

        $lista = $cuenta->products->all();
        $total = $cuenta->products->pluck('precioventa')->sum();
        $cuenta->total = $total;
        $cuenta->save();

        $contando = $listafiltrada->countBy();

        $coleccion = collect($contando);

        $personalizado = collect();

        foreach ($coleccion as $nombre => $cantidad) {
            $producto = Product::where('nombre', $nombre)->first();
            $subtotal = $producto->precioventa * $cantidad;
            $personalizado->prepend(['nombre' => $nombre, 'cantidad' => $cantidad, 'precio' => $producto->precioventa, 'subtotal' => $subtotal, 'id' => $producto->id]);
        }
        //dd($personalizado);
        $this->listaPersonalizada = $personalizado;
        $this->total = $cuenta->total;
    }
    public function porEliminar(Sale $cuenta)
    {

        $this->cuenta = $cuenta;
    }
    public function guardarMesa(Sale $cuenta)
    {

        $this->emit('cerrarModal2', 'hola');
        $this->reset();
        event(new EliminarMesa($cuenta->id, $cuenta->table->numero));
    }
    public function crearMesa($idMesa)
    {
        $this->validate(['meseroSeleccionado' => 'required']);
        $venta = Sale::create([
            'usuario_id' => $this->meseroSeleccionado,
            'mesa_id' => $idMesa,

        ]);
        $mesa = Table::find($idMesa);
        event(new CrearMesa($idMesa, $mesa->numero, $this->meseroSeleccionado));
        $this->reset('meseroSeleccionado');
        $this->emit('cerrarModal');
    }
    public function render()
    {
        $cuentas = Sale::orderBy('created_at', 'desc')->get();

        $meseros = User::where('rol_id', 3)->get();
        $mesas = Table::all();
        return view('livewire.ventas-diarias-realtime', compact('cuentas', 'meseros', 'mesas'));
    }
}
