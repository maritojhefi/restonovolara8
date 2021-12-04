<?php


use App\Product;
use App\ProductImage;
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
        $comida=[
            "Sopa de mani"=>[8,"activo","Nada","comida","Plato rapido","20",1],
            "Sopa de arroz"=>[8,"activo","Nada","comida","Plato rapido","20",1],
            "Saice"=>[9,"activo","Nada","comida","Plato rapido","20",1],
            "Picante de Pollo"=>[18,"activo","Nada","comida","Plato rapido","20",1],
            "Picante de Lengua"=>[20,"activo","Nada","comida","Plato rapido","20",1],
            "Picante Mixto"=>[25,"activo","Nada","comida","Plato rapido","20",1],
            "Costillitas de chancho"=>[35,"activo","Nada","comida","Plato rapido","20",1],
            "Cangrejos"=>[35,"activo","Nada","comida","Plato rapido","20",4],
            "Doraditos"=>[33,"activo","Nada","comida","Plato rapido","20",4],
            "Misquinchos"=>[33,"activo","Nada","comida","Plato rapido","20",4],
            "Pejerrey"=>[32,"activo","Nada","comida","Plato rapido","20",4],
            "Sabalo"=>[30,"activo","Nada","comida","Plato rapido","20",3],
            "Pacu"=>[35,"activo","Nada","comida","Plato rapido","20",3],
            "Mixto Pescaditos"=>[38,"activo","Nada","comida","Plato rapido","20",4],
            "Pique a lo macho"=>[67,"activo","Nada","comida","Plato rapido","20",2],
            "Medio Pique"=>[37,"activo","Nada","comida","Plato rapido","20",2],
            "Charke Crocante"=>[50,"activo","Nada","comida","Plato rapido","20",2],
            "Lomo Borracho"=>[32,"activo","Nada","comida","Plato rapido","20",2],
            "Lomito"=>[26,"activo","Nada","comida","Plato rapido","20",6],
            "Lomo con chorrellana"=>[28,"activo","Nada","comida","Plato rapido","20",6],
            "Milaneza de carne"=>[26,"activo","Nada","comida","Plato rapido","20",6],
            "Milaneza de pollo"=>[26,"activo","Nada","comida","Plato rapido","20",5],
            "Chicharron de pollo"=>[26,"activo","Nada","comida","Plato rapido","20",5],
            "Pollo a la plancha"=>[26,"activo","Nada","comida","Plato rapido","20",5],
            "Pollo dorado"=>[26,"activo","Nada","comida","Plato rapido","20",5],
            "Tortilla de pollo"=>[28,"activo","Nada","comida","Plato rapido","20",5],

            "Almuerzo"=>[15,"activo","Nada","comida","Plato rapido","20",1],
          
        ];

        $bebida=[
            'Pacena litro'=>[25,7],
            'Potosina litro y cuarto'=>[24,7],
            'Huari 600 ml'=>[19,7],
            'Linaza'=>[15,8],
            'Frut All'=>[14,8],
            'Jugo en Jarra litro'=>[10,8],
            'Jugo en Jarra 2 litros'=>[15,8],
            'Jugo en Vaso'=>[3,8],
            'Agua 2 litros'=>[10,8],
            'Agua 500 ml'=>[5,8],
            'Agua carbonatada'=>[6,8],
            'Coca Cola 600ml'=>[6,9],
            'Coca Cola litro'=>[8,9],
            'Coca Cola 1.5 litros'=>[10,9],
            'Coca Cola 2 litros'=>[14,9],
            'Fanta 600ml'=>[6,10],
            'Fanta litro'=>[8,10],
            'Fanta 1.5 litros'=>[10,10],
            'Fanta 2 litros'=>[14,10],
            'Sprite 600ml'=>[6,11],
            'Sprite litro'=>[8,11],
            'Sprite 1.5 litros'=>[10,11],
            'Sprite 2 litros'=>[14,11],
            'Vino terruno blanco'=>[25,12],
            'Vino terruno tinto'=>[25,12],
            'Vino comun blanco'=>[20,12],
            'Vino Patero en jarra'=>[40,12],
            'Vino Patero botella'=>[22,12],
            'Vino patero copa'=>[6,12],
            
        ];

        Product::truncate();
        foreach($comida as $nombre=>$lista)
        {
            Product::create([
                'nombre'=>$nombre,
                'precioventa'=>$lista[0],
                'genero'=>$lista[3],
                'estado'=>$lista[1],
                'cantidad'=>$lista[5],
                'category_id'=>$lista[6]
            ]);
        }
        foreach($bebida as $nombre=>$lista)
        {
            Product::create([
                'nombre'=>$nombre,
                'precioventa'=>$lista[0],
                'genero'=>'bebida',
                'estado'=>'activo',
                'cantidad'=>20,
                'category_id'=>$lista[1]
            ]);
        }

        $imagenes=[
            'sopitamani','sopitaarroz','saice','picantepollo','picantelengua','picantemixto','chancho',
            'cangrejo','doradito','misquincho','','sabalo','','mixto',
            'piqueentero','pique','charke','lomoborracho',
            'lomito','lomochorrellana','milanezacarne','milanezapollo',
            'chicharron','polloplancha','pollodorado','tortilla','',

            '','','',
            '','','','','','','','', //jugos
            'coca600','cocalitro','','coca2litros',
            'fantapopular','','','fanta2litros',
            'spritepopular','spritelitro','spritepansona','',
            'terruno','terrunotinto','aranjuezcomun','','',''

        ];
     
        foreach($imagenes as $numero=>$foto)
        {
           if($foto!="")
           {
            if($numero>27)
            {
                ProductImage::create([
                    'imagen'=>'images/bebidas/'.$foto.'.jpg',
                    'product_id'=>$numero+1
                ]);
            }
            else
            {
                ProductImage::create([
                    'imagen'=>'images/'.$foto.'.jpg',
                    'product_id'=>$numero+1
                ]);
            }
           }
           
            
        }
       
        
      
    }
}
