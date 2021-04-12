<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class UserImage extends Model
{
    protected $fillable = [
        'user_id','imagen',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
