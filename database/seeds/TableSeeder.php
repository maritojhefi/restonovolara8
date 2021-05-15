<?php

use App\Table;
use Illuminate\Database\Seeder;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Table::truncate();
        Table::create([
            'color'=>"#FF0303",
            'numero'=>"1",
            'observacion'=>"color rojo",    
        ]);
        Table::create([
            'color'=>"#FF6403",
            'numero'=>"2",
            'observacion'=>"color naranja",    
        ]);
        Table::create([
            'color'=>"#FFDC03",
            'numero'=>"3",
            'observacion'=>"color amarillo",    
        ]);
        Table::create([
            'color'=>"#12A007",
            'numero'=>"4",
            'observacion'=>"color verde",    
        ]);
        Table::create([
            'color'=>"#0848E0",
            'numero'=>"5",
            'observacion'=>"color azul",    
        ]);
        Table::create([
            'color'=>"#994CF9",
            'numero'=>"6",
            'observacion'=>"color morado",    
        ]);
        Table::create([
            'color'=>"#85061D",
            'numero'=>"7",
            'observacion'=>"color guindo",    
        ]);
        Table::create([
            'color'=>"#F9A1F4",
            'numero'=>"8",
            'observacion'=>"color rosado",    
        ]);
        Table::create([
            'color'=>"#52CCFB",
            'numero'=>"9",
            'observacion'=>"color celeste",    
        ]);
        Table::create([
            'color'=>"#FEFEFE",
            'numero'=>"10",
            'observacion'=>"color blanco",    
        ]);
        Table::create([
            'color'=>"#0AFF1D",
            'numero'=>"11",
            'observacion'=>"color verde claro",    
        ]);
        Table::create([
            'color'=>"#000000",
            'numero'=>"12",
            'observacion'=>"color negro",    
        ]);
        Table::create([
            'color'=>"#7A7A7A",
            'numero'=>"13",
            'observacion'=>"color plomo",    
        ]);
        Table::create([
            'color'=>"#5C3D02",
            'numero'=>"14",
            'observacion'=>"color cafe",    
        ]);
        Table::create([
            'color'=>"#6BD8D0",
            'numero'=>"15",
            'observacion'=>"color cielo",    
        ]);
        Table::create([
            'color'=>"#F2E896",
            'numero'=>"16",
            'observacion'=>"color crema",    
        ]);
        Table::create([
            'color'=>"#78BAAB",
            'numero'=>"17",
            'observacion'=>"color celeste raro",    
        ]);
        Table::create([
            'color'=>"#FC9103",
            'numero'=>"18",
            'observacion'=>"color naranja vivo",    
        ]);
        Table::create([
            'color'=>"#B4A42C",
            'numero'=>"19",
            'observacion'=>"color mostaza",    
        ]);
        Table::create([
            'color'=>"#F728F7",
            'numero'=>"20",
            'observacion'=>"color palo de rosa",    
        ]);
       
    }
}
