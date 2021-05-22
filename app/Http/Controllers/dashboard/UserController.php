<?php

namespace App\Http\Controllers\dashboard;

use App\Rol;
use App\User;
use App\UserImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use App\Http\Requests\EditUserRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\EditUserInfoRequest;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin')->except('show');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       
        $resultados=5;
        $usuarios=User::orderBy('id','desc');

        if($request->has('resultados')){
         $resultados=$request->resultados;
          
    
        }
        if($request->has('buscar')){
            $usuarios=$usuarios
           
            ->where('name','like','%'.request('buscar').'%')
            ->orWhere('apellido','like','%'.request('buscar').'%')
            ->orWhere('telefono','like','%'.request('buscar').'%')
            ->orWhere('cedula','like','%'.request('buscar').'%');
        }
        $usuarios=$usuarios->paginate($resultados);
      
      $lista=$usuarios->count();
      return view('dashboard.user.index',['usuarios'=>$usuarios,"lista"=>$lista]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("dashboard.user.create",['usuario'=>new User()]);
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserRequest $request)
    {
        User::create($request->validated());

      
      return back()->with('success','Usuario  Registrado!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $usuario)
    {
        return view ('dashboard.user.show',["usuario"=>$usuario]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $usuario)
    {
        $foto="person.png";
        if($usuario->image!=null)
        {
            $foto=$usuario->image->imagen;
        }
       
        $roles=Rol::pluck('id','nombre');
        $pass=$usuario->password;
        return view('dashboard.user.edit',["usuario"=>$usuario,"password"=>$pass,'foto'=>$foto,'roles'=>$roles]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EditUserRequest $request, User $usuario)
    {
        $usuario->update($request->validated());
        return back()->with('info','Usuario actualizado!');
    }
    public function updateinfo(EditUserInfoRequest $request, User $usuario)
    {
        $usuario->update($request->validated());
        return back()->with('info','Usuario actualizado!');
    }
    public function subirfoto(Request $request, User $imagen)
    {
        $request->validate([
            'imagen'=>'required|mimes:jpeg,bmp,png|max:10240'
        ]);
        if($imagen->image!=null)
        {
            Storage::disk('public_images')->delete($imagen->image->imagen);
            $imagen->image->delete();
        }
      
       $filename= time().".". $request->imagen->extension();
       $request->imagen->move(public_path('images'),$filename);

//comprimir la foto
        $img = Image::make('images/'.$filename);
        $img->resize(320, null, function ($constraint) {
            $constraint->aspectRatio();
        });
        $img->rotate(0);
        $img->save('images/'.$filename);

       UserImage::create(['imagen'=>$filename,'user_id'=>$imagen->id]);
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
    public function destroy(User $usuario)
    {
        if($usuario->image)
        {
            Storage::disk('public_images')->delete($usuario->image->imagen);
            $usuario->image->delete();
        }
      
        $usuario->delete();
        return back()->with('info','El usuario: '. $usuario->name.' '.$usuario->apellido.' fue eliminado!');
    }
}
