<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    protected $fillable = [
        'nombre','logo', 'estado_caja', 'telefono','nit','direccion','facebook','whatsapp'
    ];
}
