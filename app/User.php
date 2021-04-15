<?php

namespace App;

use App\Rol;
use App\Sale;
use App\UserImage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','apellido', 'email', 'password','telefono','cedula','cumpleano','rol_id','empleado','sueldofijo','entrevista','imagen','tiposueldo'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function setPasswordAttribute($value)
    {
        $this->attributes["password"]=Hash::make($value);
    }
    public function image()
    {
        return $this->hasOne(UserImage::class);
    }
    public function sales()
    {
        return $this->hasMany(Sale::class,'usuario_id');
    }
   
    public function rol()
    {
        return $this->belongsTo(Rol::class);
    }
}
