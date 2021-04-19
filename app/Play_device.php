<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Play_device extends Model
{
    protected $fillable = [
        'nombre','id_reproductor','estado'
    ];
}
