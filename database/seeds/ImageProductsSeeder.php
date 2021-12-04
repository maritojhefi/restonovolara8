<?php

namespace Database\Seeders;

use App\ProductImage;
use Illuminate\Database\Seeder;

class ImageProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        ProductImage::create([
            'imagen'=>'images/cangrejo.jpg',
            'product_id'=>1
        ]);
    }
}
