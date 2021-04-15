<?php


use App\Product;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::truncate();
        Product::create([
            'nombre'=>"Sopa de Mani ",
            'precioventa'=>8,
            'estado'=>"activo",
            'ingredientes'=>"Fideo, pollo, papa frita y especias",
            'genero'=>"comida",
            'detalle'=>"Plato Rapido",
            'cantidad'=>"10",
            'category_id'=>1,
        ]);
        Product::create([
            'nombre'=>"Saice",
            'precioventa'=>9,
            'estado'=>"activo",
            'ingredientes'=>"Arroz, ensalada, papa hervida, carne de res picada, chuño",
            'genero'=>"comida",
            'detalle'=>"Plato Rapido",
            'cantidad'=>"10",
            'category_id'=>1,
        ]);
        Product::create([
            'nombre'=>"Pique a lo macho",
            'precioventa'=>67,
            'estado'=>"activo",
            'ingredientes'=>"Papa frita, salchicha, huevo duro, carne de res, tomate, cebolla y especias",
            'genero'=>"comida",
            'detalle'=>"Para 2 personas",
            'cantidad'=>10,
            'category_id'=>2,
        ]);
        Product::create([
            'nombre'=>"Charke",
            'precioventa'=>50,
            'estado'=>"activo",
            'ingredientes'=>"Carne de res, huevo duro, papa hervida, mote(maiz hervido), queso",
            'genero'=>"comida",
            'detalle'=>"Para 2 personas",
            'cantidad'=>10,
            'category_id'=>2,
        ]);
        Product::create([
            'nombre'=>"Milaneza de Pollo",
            'precioventa'=>26,
            'estado'=>"activo",
            'ingredientes'=>"Papas fritas, arroz, ensalada",
            'genero'=>"comida",
            'detalle'=>"Plato extra de preparacion estimada en 12 min.",
            'cantidad'=>10,
            'category_id'=>5,
        ]);
        Product::create([
            'nombre'=>"Tortilla de Pollo",
            'precioventa'=>26,
            'estado'=>"activo",
            'ingredientes'=>"Papas fritas, arroz, ensalada",
            'genero'=>"comida",
            'detalle'=>"Plato extra de preparacion estimada en 12 min.",
            'cantidad'=>10,
            'category_id'=>5,
        ]);
        Product::create([
            'nombre'=>"Pollo a la plancha",
            'precioventa'=>26,
            'estado'=>"activo",
            'ingredientes'=>"Papa hervida, arroz, ensalada",
            'genero'=>"comida",
            'detalle'=>"Plato extra de preparacion estimada en 12 min.",
            'cantidad'=>10,
            'category_id'=>5,
        ]);
        Product::create([
            'nombre'=>"Coca Cola litro",
            'precioventa'=>8,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Coca cola de litro",
            'cantidad'=>10,
            'category_id'=>9,
        ]);
        Product::create([
            'nombre'=>"Coca Cola 600ml",
            'precioventa'=>6,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Coca cola popular",
            'cantidad'=>10,
            'category_id'=>9,
        ]);
        Product::create([
            'nombre'=>"Coca Cola 2 litros",
            'precioventa'=>14,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Coca cola 2 litros",
            'cantidad'=>10,
            'category_id'=>9,
        ]);
        Product::create([
            'nombre'=>"Coca Cola 1.5 lts.",
            'precioventa'=>10,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Coca cola pansona",
            'cantidad'=>10,
            'category_id'=>9,
        ]);
        Product::create([
            'nombre'=>"Pacena litro",
            'precioventa'=>25,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Pacena de litro",
            'cantidad'=>10,
            'category_id'=>7,
        ]);
       
    }
}
