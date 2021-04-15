<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Caja extends Model
{
    protected $fillable = [
        'entrada','estado','monto_acumulado'
     ];
     protected $casts = [
        'created_at'  => 'date:d-m-Y',
        // 'updated_at' => 'datetime:Y-m-d H:00',
    ];
}
