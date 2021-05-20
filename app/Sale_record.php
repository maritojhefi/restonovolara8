<?php

namespace App;

use App\User;
use App\Table;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Sale_record extends Model
{
    protected $fillable = [
        'comprador_id','mesa_id','usuario_id','estado','total','observacion','caja_id'
     ];
      public function products()
    {
        return $this->belongsToMany(Product::class);
    }
    public function table()
    {
        return $this->belongsTo(Table::class,'mesa_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class,'usuario_id');
    }
}
