<?php

namespace App;

use App\Product;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $fillable = [
        'nombre','detalle','tipo'
     ];
     public function product()
     {
         return $this->hasMany(Product::class);
     }
}
