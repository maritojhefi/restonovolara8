<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Printer_device extends Model
{
    protected $fillable = [
        'nombre','id_impresora','estado'
    ];
}
