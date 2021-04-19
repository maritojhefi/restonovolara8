<?php

namespace App\Http\Controllers\dashboard;

use App\Table;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\EditTableRequest;
use App\Http\Requests\CreateTableRequest;

class TableController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(Request $request)
    {
       
        $resultados=5;
        $mesas=Table::orderBy('id','desc');
       $mesas=$mesas->simplePaginate($resultados);
      $lista=$mesas->count();
      return view('dashboard.mesas.index',['mesas'=>$mesas,"lista"=>$lista]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("dashboard.mesas.create",['mesa'=>new Table()]);
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateTableRequest $request)
    {
        Table::create($request->validated());
     $urlmesa= "localhost:8080/";
      
      return back()->with('success','Mesa  Registrada!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Table $usuario)
    {

        return view ('dashboard.mesas.show',["usuario"=>$usuario]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Table $mesa)
    {
      
      
        return view('dashboard.mesas.edit',["mesa"=>$mesa]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EditTableRequest $request, Table $mesa)
    {
        $mesa->update($request->validated());
        return back()->with('info','Mesa actualizada!');
    }
 
   
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Table $mesa)
    {
       
        $mesa->delete();
        return back()->with('info','La mesa: '. $mesa->numero.' fue eliminada!');
    }
}
