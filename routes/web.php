<?php

use Illuminate\Support\Facades\Route;
use App\Events\OrderStatusChangedEvent;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'MainController@menu')->name('principal');



Route::get('/principal', 'dashboard\MainController@index')->name('dashboard')->middleware('cliente');





//rutas dashboard
Route::get('/inicio', 'dashboard\MainController@index')->name('inicio');
Route::get('/configuracion', 'dashboard\MainController@configuracion')->name('configuracion');
Route::get('/pruebaprint', 'dashboard\SaleController@impresoralaravel')->name('pruebaprint');





Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::resource('dashboard/usuario','dashboard\UserController');
Route::resource('dashboard/mesa','dashboard\TableController');
Route::resource('dashboard/rol','dashboard\RolController');
Route::resource('dashboard/categoria','dashboard\CategoryController');
Route::resource('dashboard/producto','dashboard\ProductController');



//rutas alternas para usuario
Route::post('/usuario/{usuario}', 'dashboard\UserController@updateinfo')->name('usuario.updateinfo');
Route::post('dashboard/usuario/{imagen}/imagen','dashboard\UserController@subirfoto')->name('usuario.imagen');
Route::delete('dashboard/usuario/eliminar/{imagen}','dashboard\UserController@eliminarfoto')->name('usuario.imageneliminada');

//rutas alternas para producto
Route::delete('dashboard/producto/eliminar/{imagen}','dashboard\ProductController@imagedelete')->name('producto.imagedelete');
Route::post('dashboard/producto/eliminar/{producto}','dashboard\ProductController@subirimagen')->name('producto.subirimagen');
Route::get('dashboard/producto/estadoproducto/{id}','dashboard\ProductController@estadoproducto')->name('estadoproducto');


//rutas para ventas
Route::get('/dashboard/cuentasActivas', 'dashboard\SaleController@cuentasActivas')->name('cuentasActivas');
Route::get('/dashboard/cuentasActivas/editar/{cuenta}', 'dashboard\SaleController@editarCuenta')->name('editarCuenta');
Route::post('/dashboard/revisarmesa', 'dashboard\SaleController@revisarMesaAjax')->name('revisarMesaAjax');
Route::post('/dashboard/crearmesa', 'dashboard\SaleController@crearMesaActiva')->name('crearMesaActiva');
Route::post('/dashboard/mostrarLista', 'dashboard\SaleController@mostrarLista')->name('mostrarLista');
Route::post('/dashboard/anadiralista', 'dashboard\SaleController@anadirALista')->name('anadiralista');
Route::post('/dashboard/restarproducto', 'dashboard\SaleController@restarproducto')->name('restarproducto');
Route::post('/dashboard/actualizarcantidad', 'dashboard\SaleController@actualizarcantidad')->name('actualizarcantidad');

Route::post('/dashboard/sumarproducto', 'dashboard\SaleController@sumarproducto')->name('sumarproducto');
Route::post('/dashboard/deleteproductocuenta', 'dashboard\SaleController@deleteproductocuenta')->name('deleteproductocuenta');
Route::delete('/dashboard/archivarcuenta/{cuenta}', 'dashboard\SaleController@archivarcuenta')->name('archivarcuenta');
Route::get('/dashboard/cobrar{cuenta}', 'dashboard\SaleController@cobrar')->name('cobrar');
Route::get('/dashboard/reabrir{cuenta}', 'dashboard\SaleController@reabrir')->name('reabrircuenta');


Route::get('/dashboard/imprimir/{cuenta}', 'dashboard\SaleController@imprimir')->name('imprimir');
Route::get('/dashboard/listarMesas', 'dashboard\SaleController@listarmesasMesero')->name('listarmesasMesero');
Route::get('/dashboard/pedidomesero{cuenta}', 'dashboard\SaleController@imprimirpedidomesero')->name('imprimirpedidomesero');
Route::get('/dashboard/meserosactivos', 'dashboard\SaleController@meserosactivos')->name('meserosactivos');
//Permisos de ventas solo para cajero y administrador:
Route::post('/dashboard/mostrarListaCompleta', 'dashboard\SaleController@mostrarListaCompleta')->name('mostrarListaCompleta');
Route::delete('/dashboard/deletecuenta/{cuenta}', 'dashboard\SaleController@deletecuenta')->name('deletecuenta');
Route::post('/dashboard/deleteproductocuentaCompleta', 'dashboard\SaleController@deleteproductocuentaCompleta')->name('deleteproductocuentaCompleta');
Route::get('/dashboard/creartokenmesa/{id}', 'dashboard\SaleController@creartokenmesa')->name('creartokenmesa');





//cajas rutas
Route::get('/dashboard/cajaactiva', 'dashboard\CajaController@cajaactiva')->name('cajaactiva');
Route::get('/dashboard/activarcaja', 'dashboard\CajaController@activarcaja')->name('activarcaja');
Route::get('/dashboard/finalizarcaja/{caja}', 'dashboard\CajaController@finalizarcaja')->name('finalizarcaja');

//rutas perifericos
Route::get('/dashboard/periferico', 'dashboard\PerifericoController@periferico')->name('periferico');
Route::get('/dashboard/nuevotoken', 'dashboard\PerifericoController@nuevotoken')->name('nuevotoken');
Route::post('/dashboard/guardartoken', 'dashboard\PerifericoController@guardartoken')->name('guardartoken');
Route::get('/dashboard/selecimpresora', 'dashboard\PerifericoController@selecimpresora')->name('selecimpresora');
Route::post('/dashboard/activarimpresora', 'dashboard\PerifericoController@activarimpresora')->name('activarimpresora');
Route::post('/dashboard/activarreproductor', 'dashboard\PerifericoController@activarreproductor')->name('activarreproductor');

Route::get('/dashboard/selecreproductor', 'dashboard\PerifericoController@selecreproductor')->name('selecreproductor');






Route::get('/offline', function () {
    return view('frontend.clientes.main');
})->name('offline');



//Rutas para rockola
Route::get('/dashboard/rockola', 'dashboard\SpotifyController@buscarcanciones')->name('buscarcanciones');


//rutas para clientes dashboard
Route::get('/menuCliente', function () {
    return view('frontend.dashboardcliente.cuenta.inicio');
})->name('cliente')->middleware('auth');

//rutas cliente rockola
Route::get('/cliente/musica', 'MusicController@buscarcanciones')->name('agregarmusica');
Route::get('/cliente/buscador', 'MusicController@vistamusica')->name('vistamusica');
Route::get('/cliente/agregaracola', 'MusicController@agregaracola')->name('agregaracola');
Route::get('/cliente/generartoken', 'MusicController@generartoken')->name('generartoken');
Route::get('/cliente/vercancionactual', 'MusicController@vercancionactual')->name('vercancionactual');
Route::get('/cliente/playresume', 'MusicController@playresume')->name('playresume');
Route::get('/cliente/gettoken', 'MusicController@gettoken')->name('gettoken');
Route::get('/cliente/listarranking', 'MusicController@listarranking')->name('listarranking');

//rutas cliente dashboard
Route::post('/cliente/verificartoken', 'ClientController@verificartoken')->name('verificartoken');
Route::get('/cliente/cuenta', 'ClientController@detallecuenta')->name('detallecuenta');
Route::get('/cliente/menuplatos', 'ClientController@menuplatos')->name('menuplatos');
Route::get('/cliente/prepedido', 'ClientController@prepedido')->name('prepedido');
Route::get('/cliente/pagaronline', 'ClientController@pagaronline')->name('pagaronline');
Route::get('/cliente/propina', 'ClientController@propina')->name('propina');
Route::get('/cliente/valoracion', 'ClientController@valoracion')->name('valoracion');
Route::get('/cliente/calificamesero', 'ClientController@calificamesero')->name('calificamesero');


//login face
Route::get('/login/{driver}', [App\Http\Controllers\Auth\LoginController::class, 'redirectToProvider'])->name('social_auth');
Route::get('/login/{driver}/callback', [App\Http\Controllers\Auth\LoginController::class, 'handleProviderCallback']);
















