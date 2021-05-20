<?php

namespace App;

use App\Sale;
use App\Sale_record;
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
    public function sale_records()
    {
        return $this->hasMany(Sale_record::class);
    }
}
