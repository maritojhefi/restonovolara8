<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
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
            'email'=>'required|max:500|unique:users|email|string',
            'password'=>'required|min:5|confirmed',
           'telefono'=>'required|min:8',
           'cedula'=>'required|min:8',
           'cumpleano'=>'required',
            'rol_id'=>'',

        ];
    }
}
