<?php

namespace App\Http\Controllers\dashboard;

use App\Categoria;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCategoryRequest;

class CategoryController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
      $this->middleware('admin');

  }
    public function index(Request $request)
    {
       
        $resultados=5;
        $categorias=Categoria::orderBy('id','desc');
       $categorias=$categorias->get();
      $lista=$categorias->count();
      return view('dashboard.categorias.index',['categorias'=>$categorias,"lista"=>$lista]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("dashboard.categorias.create",['categoria'=>new Categoria()]);
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateCategoryRequest $request)
    {
        Categoria::create($request->validated());

      
      return back()->with('success','categoria  registrada!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Categoria $categoria)
    {
        return view ('dashboard.categorias.show',["categoria"=>$categoria]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Categoria $categoria)
    {
      dd($categoria);
        return view('dashboard.categorias.edit',["categoria"=>$categoria]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CreateCategoryRequest $request, Categoria $categoria)
    {
        $categoria->update($request->validated());
        return back()->with('info','categoria actualizada!');
    }
 
   
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categoria $categoria)
    {
      
        $categoria->delete();
        return back()->with('info','La categoria: '. $categoria->nombre.' fue eliminada!');
    }
}
