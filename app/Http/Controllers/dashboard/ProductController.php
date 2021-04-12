<?php

namespace App\Http\Controllers\dashboard;

use App\Product;
use App\Categoria;
use App\UserImage;
use App\ProductImage;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\EditProductRequest;
use App\Http\Requests\CreateProductRequest;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(Request $request)
    {

       if($request->filtro)
       {
        $productos=Product::where('nombre','like','%'.$request->filtro.'%')->get();
       }
       else
       {
        $productos=Product::all();

       }
      $total=$productos->count();
      return view('dashboard.productos.index',compact('productos','total'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response 
     */
    public function create()
    {
        $categorias=Categoria::pluck('id','nombre');
        return view("dashboard.productos.create",['producto'=>new Product(),'categorias'=>$categorias]);
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateProductRequest $request)
    {
        $generos=Categoria::all();
        $genero= $generos->find($request->category_id);
      $validado= Arr::add($request->validated(), 'genero', $genero->tipo);
      
      $extension= $request->imagen->extension();
       
     
       $filename= time().".". $extension;
       $request->imagen->move(public_path('images'),$filename);
       //comprimir la foto
       $img = Image::make('images/'.$filename);
       $img->resize(320, null, function ($constraint) {
        $constraint->aspectRatio();
    });
    $img->rotate(0);
       $img->save('images/'.$filename);

       $producto= Product::create($validado);
       
       ProductImage::create(['imagen'=>$filename,'product_id'=>$producto->id]);
    

      
      return back()->with('success','Producto  Registrado!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $producto)
    {
        $foto="food.png";
        if($producto->image!=null)
        {
            $foto=$producto->image->imagen;
        }
       
        $categorias=Categoria::pluck('id','nombre');
       
        return view('dashboard.productos.show',["producto"=>$producto,'foto'=>$foto,'categorias'=>$categorias]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $producto)
    {
       
        $foto="food.png";
        if($producto->image!=null)
        {
            $foto=$producto->image->imagen;
        }
       
        $categorias=Categoria::pluck('id','nombre');
       
        return view('dashboard.productos.edit',["producto"=>$producto,'foto'=>$foto,'categorias'=>$categorias]);
    }
    public function estadoproducto(Product $id)
    {
        if($id->estado=="inactivo")
        {
            $id->estado='activo';
            $id->save();
        }
        else if($id->estado=='activo')
        {
            $id->estado='inactivo';
            $id->save();
        }
        return back()->with('success','El producto '.$id->nombre. ' ahora esta '.$id->estado);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EditProductRequest $request, Product $producto)
    {
        $generos=Categoria::all();
        $genero= $generos->find($request->category_id);
      $validado= Arr::add($request->validated(), 'genero', $genero->tipo);
        $producto->update($validado);
        return back()->with('info','Producto actualizado!');
    }
   
    public function imagedelete(ProductImage $imagen)
    {
       
       Storage::disk('public_images')->delete($imagen->imagen);
        $imagen->delete();
        return back()->with('info','Imagen eliminada con exito!');
    }
    public function subirimagen(Request $request, Product $producto)
    {
        
        
       $request->validate([
           'imagen'=>'required|mimes:jpeg,bmp,png,gif|max:10240'
       ]);
       $filename= time().".". $request->imagen->extension();
       $request->imagen->move(public_path('images'),$filename);
         //comprimir la foto
       $img = Image::make('images/'.$filename);
       $img->resize(320, null, function ($constraint) {
        $constraint->aspectRatio();
    });
    $img->rotate(0);
       $img->save('images/'.$filename);
       ProductImage::create(['imagen'=>$filename,'product_id'=>$producto->id]);
       return back()->with('success','Imagen cargada con exito!');
    }
    public function eliminarfoto(UserImage $imagen)
    {
       
       Storage::disk('public_images')->delete($imagen->imagen);
        $imagen->delete();
        return back()->with('info','Imagen eliminada con exito!');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $producto)
    {
        foreach($producto->images as $fotos)
        {
            
            Storage::disk('public_images')->delete($fotos->imagen);
            $fotos->delete();
        }
        $producto->delete();
        return back()->with('info','El producto: '. $producto->nombre.' fue eliminado!');
    }
}
