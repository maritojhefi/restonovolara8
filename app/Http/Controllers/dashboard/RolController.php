<?php

namespace App\Http\Controllers\dashboard;

use App\Rol;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateRolRequest;

class RolController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(Request $request)
    {
       
        $resultados=5;
        $roles=Rol::orderBy('id','desc');
       $roles=$roles->paginate($resultados);
      $lista=$roles->count();
      return view('dashboard.roles.index',['roles'=>$roles,"lista"=>$lista]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("dashboard.roles.create",['rol'=>new Rol()]);
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateRolRequest $request)
    {
        Rol::create($request->validated());

      
      return back()->with('success','Rol  Registrado!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Rol $usuario)
    {
        return view ('dashboard.roles.show',["usuario"=>$usuario]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Rol $rol)
    {
      
        return view('dashboard.roles.edit',["rol"=>$rol]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CreateRolRequest $request, Rol $rol)
    {
        $rol->update($request->validated());
        return back()->with('info','rol actualizado!');
    }
 
   
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rol $rol)
    {
       
        $rol->delete();
        return back()->with('info','El rol: '. $rol->nombre.' fue eliminado!');
    }
}
