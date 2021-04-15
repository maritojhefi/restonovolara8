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

Route::get('/', function () {
    return view('frontend.clientes.main');
})->name('cliente');


Route::get('/principal', function () {
    return view('dashboard.empresa.dashboard');
})->middleware('cliente');





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
Route::post('/dashboard/sumarproducto', 'dashboard\SaleController@sumarproducto')->name('sumarproducto');
Route::post('/dashboard/deleteproductocuenta', 'dashboard\SaleController@deleteproductocuenta')->name('deleteproductocuenta');
Route::delete('/dashboard/archivarcuenta/{cuenta}', 'dashboard\SaleController@archivarcuenta')->name('archivarcuenta');
Route::get('/dashboard/cobrar{cuenta}', 'dashboard\SaleController@cobrar')->name('cobrar');
Route::get('/dashboard/imprimir/{cuenta}', 'dashboard\SaleController@imprimir')->name('imprimir');
Route::get('/dashboard/listarMesas', 'dashboard\SaleController@listarmesasMesero')->name('listarmesasMesero');
Route::get('/dashboard/pedidomesero{cuenta}', 'dashboard\SaleController@imprimirpedidomesero')->name('imprimirpedidomesero');
Route::get('/dashboard/meserosactivos', 'dashboard\SaleController@meserosactivos')->name('meserosactivos');
//Permisos de ventas solo para cajero y administrador:
Route::post('/dashboard/mostrarListaCompleta', 'dashboard\SaleController@mostrarListaCompleta')->name('mostrarListaCompleta');
Route::delete('/dashboard/deletecuenta/{cuenta}', 'dashboard\SaleController@deletecuenta')->name('deletecuenta');
Route::post('/dashboard/deleteproductocuentaCompleta', 'dashboard\SaleController@deleteproductocuentaCompleta')->name('deleteproductocuentaCompleta');




//cajas rutas
Route::get('/dashboard/cajaactiva', 'dashboard\CajaController@cajaactiva')->name('cajaactiva');
Route::get('/dashboard/activarcaja', 'dashboard\CajaController@activarcaja')->name('activarcaja');
Route::get('/dashboard/finalizarcaja/{caja}', 'dashboard\CajaController@finalizarcaja')->name('finalizarcaja');






Route::get('/offline', function () {
    return view('frontend.clientes.main');
})->name('principal');



//Rutas para rockola
Route::get('/dashboard/rockola', 'dashboard\SpotifyController@buscarcanciones')->name('buscarcanciones');


//rutas para clientes dashboard
Route::get('/menuCliente', function () {
    return view('frontend.dashboardcliente.cuenta.inicio');
})->name('cliente');












