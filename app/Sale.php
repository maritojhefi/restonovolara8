<?php

namespace App;

use App\Sale;
use App\User;
use App\Table;
use App\Product;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = [
        'comprador_id','mesa_id','usuario_id','estado','total','observacion','rockola','propina','idpago'
     ];
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class,'usuario_id');
    }
    public function table()
    {
        return $this->belongsTo(Table::class,'mesa_id');
    }
    public function pendientes()
    {
        return $this->belongsToMany('App\Product', 'product_sale')
        ->wherePivot('estado_actual', 'pendiente');
        

                   
    }
}
