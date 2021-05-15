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
            'nombre'=>"Sopa de Arroz ",
            'precioventa'=>8,
            'estado'=>"activo",
            'ingredientes'=>"Arroz, pollo, papa frita y especias",
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
            'nombre'=>"Picante de Pollo",
            'precioventa'=>18,
            'estado'=>"activo",
            'ingredientes'=>"Arroz, ensalada, papa hervida, chuño, pollo de granja",
            'genero'=>"comida",
            'detalle'=>"Plato Rapido",
            'cantidad'=>"10",
            'category_id'=>1,
        ]);
        Product::create([
            'nombre'=>"Picante de Lengua",
            'precioventa'=>20,
            'estado'=>"activo",
            'ingredientes'=>"Arroz, ensalada, papa hervida, lengua de res, chuño",
            'genero'=>"comida",
            'detalle'=>"Plato Rapido",
            'cantidad'=>"10",
            'category_id'=>1,
        ]);
        Product::create([
            'nombre'=>"Picante Mixto",
            'precioventa'=>25,
            'estado'=>"activo",
            'ingredientes'=>"Arroz, ensalada, papa hervida, lengua de res, pollo de granja, chuño",
            'genero'=>"comida",
            'detalle'=>"Plato Rapido",
            'cantidad'=>"10",
            'category_id'=>1,
        ]);
        Product::create([
            'nombre'=>"Costillitas de chancho",
            'precioventa'=>35,
            'estado'=>"activo",
            'ingredientes'=>"Mote(maiz hervido), papa hervida, costillas y blando de cerdo",
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
            'nombre'=>"Medio pique",
            'precioventa'=>37,
            'estado'=>"activo",
            'ingredientes'=>"Papa frita, salchicha, huevo duro, carne de res, tomate, cebolla y especias",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
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
            'nombre'=>"Lomo borracho",
            'precioventa'=>32,
            'estado'=>"activo",
            'ingredientes'=>"Carne de res, huevo frito, papas fritas, chorrellana, ahogado en base a cerveza",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
            'cantidad'=>10,
            'category_id'=>2,
        ]);
        Product::create([
            'nombre'=>"Sabalo",
            'precioventa'=>30,
            'estado'=>"activo",
            'ingredientes'=>"Mote, papa hervida y limon",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
            'cantidad'=>10,
            'category_id'=>3,
        ]);
        Product::create([
            'nombre'=>"Pacu",
            'precioventa'=>35,
            'estado'=>"activo",
            'ingredientes'=>"Mote, papa hervida y limon",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
            'cantidad'=>10,
            'category_id'=>3,
        ]);
        Product::create([
            'nombre'=>"Cangrejo",
            'precioventa'=>35,
            'estado'=>"activo",
            'ingredientes'=>"Mote, papa hervida y limon",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
            'cantidad'=>10,
            'category_id'=>4,
        ]);
        Product::create([
            'nombre'=>"Misquincho",
            'precioventa'=>33,
            'estado'=>"activo",
            'ingredientes'=>"Mote, papa hervida y limon",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
            'cantidad'=>10,
            'category_id'=>4,
        ]);
        Product::create([
            'nombre'=>"Doradito",
            'precioventa'=>32,
            'estado'=>"activo",
            'ingredientes'=>"Mote, papa hervida y limon",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
            'cantidad'=>10,
            'category_id'=>4,
        ]);
        Product::create([
            'nombre'=>"Pejerrey",
            'precioventa'=>32,
            'estado'=>"activo",
            'ingredientes'=>"Mote, papa hervida y limon",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
            'cantidad'=>10,
            'category_id'=>4,
        ]);
        Product::create([
            'nombre'=>"Mixto pescados",
            'precioventa'=>38,
            'estado'=>"activo",
            'ingredientes'=>"Mote, papa hervida y limon con 3 variedades de pescados",
            'genero'=>"comida",
            'detalle'=>"Para 1 persona",
            'cantidad'=>10,
            'category_id'=>4,
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
            'precioventa'=>28,
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
            'nombre'=>"Pollo Dorado",
            'precioventa'=>26,
            'estado'=>"activo",
            'ingredientes'=>"Papa frita, arroz, ensalada",
            'genero'=>"comida",
            'detalle'=>"Plato extra de preparacion estimada en 12 min.",
            'cantidad'=>10,
            'category_id'=>5,
        ]);
        Product::create([
            'nombre'=>"Chicharron de pollo",
            'precioventa'=>26,
            'estado'=>"activo",
            'ingredientes'=>"Papa frita, arroz, ensalada",
            'genero'=>"comida",
            'detalle'=>"Plato extra de preparacion estimada en 12 min.",
            'cantidad'=>10,
            'category_id'=>5,
        ]);
        Product::create([
            'nombre'=>"Lomito",
            'precioventa'=>26,
            'estado'=>"activo",
            'ingredientes'=>"Papa frita, huevo frito, arroz, ensalada",
            'genero'=>"comida",
            'detalle'=>"Plato extra de preparacion estimada en 12 min.",
            'cantidad'=>10,
            'category_id'=>6,
        ]);
        Product::create([
            'nombre'=>"Lomo con chorrellana",
            'precioventa'=>28,
            'estado'=>"activo",
            'ingredientes'=>"Papa frita, huevo frito, arroz, chorrellana",
            'genero'=>"comida",
            'detalle'=>"Plato extra de preparacion estimada en 12 min.",
            'cantidad'=>10,
            'category_id'=>6,
        ]);
        Product::create([
            'nombre'=>"Milaneza de carne",
            'precioventa'=>26,
            'estado'=>"activo",
            'ingredientes'=>"Papa frita, arroz, ensalada",
            'genero'=>"comida",
            'detalle'=>"Plato extra de preparacion estimada en 12 min.",
            'cantidad'=>10,
            'category_id'=>6,
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
            'nombre'=>"Fanta litro",
            'precioventa'=>8,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Fanta de litro",
            'cantidad'=>10,
            'category_id'=>10,
        ]);
        Product::create([
            'nombre'=>"Fanta 600ml",
            'precioventa'=>6,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Fanta popular",
            'cantidad'=>10,
            'category_id'=>10,
        ]);
        Product::create([
            'nombre'=>"Fanta 2 litros",
            'precioventa'=>14,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Fanta 2 litros",
            'cantidad'=>10,
            'category_id'=>10,
        ]);
        Product::create([
            'nombre'=>"Fanta 1.5 lts.",
            'precioventa'=>10,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Fanta pansona",
            'cantidad'=>10,
            'category_id'=>10,
        ]);
        Product::create([
            'nombre'=>"Sprite litro",
            'precioventa'=>8,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Sprite de litro",
            'cantidad'=>10,
            'category_id'=>11,
        ]);
        Product::create([
            'nombre'=>"Sprite 600ml",
            'precioventa'=>6,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Sprite popular",
            'cantidad'=>10,
            'category_id'=>11,
        ]);
        Product::create([
            'nombre'=>"Sprite 2 litros",
            'precioventa'=>14,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Sprite 2 litros",
            'cantidad'=>10,
            'category_id'=>11,
        ]);
        Product::create([
            'nombre'=>"Sprite 1.5 lts.",
            'precioventa'=>10,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Sprite pansona",
            'cantidad'=>10,
            'category_id'=>11,
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
        Product::create([
            'nombre'=>"Huari 600ml",
            'precioventa'=>19,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Huari mediana",
            'cantidad'=>10,
            'category_id'=>7,
        ]);
        Product::create([
            'nombre'=>"Potosina litro",
            'precioventa'=>24,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Potosina de litro",
            'cantidad'=>10,
            'category_id'=>7,
        ]);
        Product::create([
            'nombre'=>"Aranjuez Comun blanco",
            'precioventa'=>20,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Potosina de litro",
            'cantidad'=>10,
            'category_id'=>12,
        ]);
        Product::create([
            'nombre'=>"Terruño tinto",
            'precioventa'=>24,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Potosina de litro",
            'cantidad'=>10,
            'category_id'=>12,
        ]);
        Product::create([
            'nombre'=>"Terruño blanco",
            'precioventa'=>24,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Potosina de litro",
            'cantidad'=>10,
            'category_id'=>12,
        ]);
        Product::create([
            'nombre'=>"Vino Patero",
            'precioventa'=>22,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Vino artesanal",
            'cantidad'=>10,
            'category_id'=>12,
        ]);
        Product::create([
            'nombre'=>"Jugo en Jarra Litro",
            'precioventa'=>10,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Jugo natural de la casa",
            'cantidad'=>10,
            'category_id'=>8,
        ]);
        Product::create([
            'nombre'=>"Jugo en Jarra 2 Litros",
            'precioventa'=>15,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Jugo natural de la casa",
            'cantidad'=>10,
            'category_id'=>8,
        ]);
        Product::create([
            'nombre'=>"Jugo en Vaso",
            'precioventa'=>3,
            'estado'=>"activo",
            'ingredientes'=>"",
            'genero'=>"bebida",
            'detalle'=>"Jugo natural de la casa",
            'cantidad'=>10,
            'category_id'=>8,
        ]);
    }
}
