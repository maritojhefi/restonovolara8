<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    protected $fillable = [
        'nombre','descripcion'
     ];
     public function user()
     {
         return $this->hasMany(User::class);
     }
}
