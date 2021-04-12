<?php

namespace App;

use App\Sale;
use Illuminate\Database\Eloquent\Model;

class Table extends Model
{
    protected $fillable = [
       'color','numero','observacion'
    ];
    public function sales()
    {
        return $this->hasMany(Sale::class);
    }
}
