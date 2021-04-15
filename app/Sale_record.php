<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale_record extends Model
{
    protected $fillable = [
        'comprador_id','mesa_id','usuario_id','estado','total','observacion','caja_id'
     ];
      public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
