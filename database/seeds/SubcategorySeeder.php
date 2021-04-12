<?php

use App\Categoria;
use Illuminate\Database\Seeder;

class SubcategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Categoria::truncate();
        Categoria::create([
            'nombre'=>"Criollos",
            'detalle'=>"Comida tipica de la region",
            'tipo'=>"comida",    
        ]);
        Categoria::create([
            'nombre'=>"Nacionales",
            'detalle'=>"Platos famosos del interior del pais",
            'tipo'=>"comida",    
        ]);
        Categoria::create([
            'nombre'=>"Pescados",
            'detalle'=>"Variedad de pescados",
            'tipo'=>"comida",    
        ]);
        Categoria::create([
            'nombre'=>"Pescaditos",
            'detalle'=>"Pescados pequeños de la region",
            'tipo'=>"comida",    
        ]);
        Categoria::create([
            'nombre'=>"Con Pollo",
            'detalle'=>"Platos extras con pollo",
            'tipo'=>"comida",    
        ]);
        Categoria::create([
            'nombre'=>"Con Carne",
            'detalle'=>"Platos extras con carne de res",
            'tipo'=>"comida",    
        ]);
        Categoria::create([
            'nombre'=>"Cervezas",
            'detalle'=>"Variedad de Cervezas",
            'tipo'=>"bebida",    
        ]);
        Categoria::create([
            'nombre'=>"Jugos",
            'detalle'=>"Variedad de Jugos envasados y naturales",
            'tipo'=>"bebida",    
        ]);
        Categoria::create([
            'nombre'=>"Coca Cola",
            'detalle'=>"Coca Cola en diferentes presentaciones",
            'tipo'=>"bebida",    
        ]);
        Categoria::create([
            'nombre'=>"Fanta",
            'detalle'=>"Fanta en diferentes presentaciones",
            'tipo'=>"bebida",    
        ]);
        Categoria::create([
            'nombre'=>"Sprite",
            'detalle'=>"Sprite en diferentes presentaciones",
            'tipo'=>"bebida",    
        ]);
        Categoria::create([
            'nombre'=>"Vinos",
            'detalle'=>"Variedad de vinos",
            'tipo'=>"bebida",    
        ]);
    }
}
