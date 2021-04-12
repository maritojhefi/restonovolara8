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
            'color'=>"red",
            'numero'=>"1",
            'observacion'=>"color rojo",    
        ]);
        Table::create([
            'color'=>"yellow",
            'numero'=>"2",
            'observacion'=>"color amarillo",    
        ]);
        Table::create([
            'color'=>"green",
            'numero'=>"3",
            'observacion'=>"color verde",    
        ]);
        Table::create([
            'color'=>"blue",
            'numero'=>"4",
            'observacion'=>"color azul",    
        ]);
        Table::create([
            'color'=>"pink",
            'numero'=>"5",
            'observacion'=>"color rosa",    
        ]);
        Table::create([
            'color'=>"black",
            'numero'=>"6",
            'observacion'=>"color negro",    
        ]);
       
    }
}
