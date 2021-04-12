<?php

use App\Rol;
use Illuminate\Database\Seeder;

class RolsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rol::truncate();
        Rol::create([
            'nombre'=>"cliente",
            'descripcion'=>"Rol por defecto",
           
        ]);
        Rol::create([
           'nombre'=>"cajero",
           'descripcion'=>"Rol con privilegios de cobro y alteracion de cuentas",
          
       ]);
      
    Rol::create([
        'nombre'=>"mesero",
        'descripcion'=>"Rol con acceso a creacion de cuentas y agregar productos a las mismas",
       
    ]);
    Rol::create([
        'nombre'=>"supervisor",
        'descripcion'=>"Acceso a la mayoria de funciones con restriccion a alterar varios de ellos",
       
    ]);
    Rol::create([
        'nombre'=>"administrador",
        'descripcion'=>"Acceso total a todas las funciones",
       
    ]);
    }
}
