<?php

namespace App;

use App\Sale;
use App\Product;
use App\Categoria;
use App\UserImage;
use App\Sale_record;
use App\ProductImage;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'nombre','precioventa', 'estado', 'ingredientes','genero','detalle','cantidad','category_id'
    ];
    public function image()
    {
        return $this->hasOne(ProductImage::class);
    }
    public function images(){
        return $this->hasMany(ProductImage::class);
    }
   
    public function categoria()
    {
        return $this->belongsTo(Categoria::class,'category_id');
    }
    
    public function sales()
    {
        return $this->belongsToMany(Sale::class);
    }
    public function salerecords()
    {
        return $this->belongsToMany(Sale_record::class);
    }
}
