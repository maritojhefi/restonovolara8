<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required|min:5|max:500',
            'apellido'=>'required|min:5',
            'email'=>'required|min:5|max:255|email|string|unique:users,email,'.$this->route('usuario')->id,//especificamos el id del usuario que le haremos excepcion para que pueda editar su perfil sin modificar el email
            'password'=>'min:5|confirmed',
           'telefono'=>'required|min:8',
           'cedula'=>'required|min:8',
           'cumpleano'=>'required',
            'rol_id'=>'',

        ];
    }
}
