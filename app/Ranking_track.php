<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ranking_track extends Model
{
    protected $fillable = [
        'nombre','artista', 'uri', 'imagen','like','dislike','reproducido','foto'
    ];
}
