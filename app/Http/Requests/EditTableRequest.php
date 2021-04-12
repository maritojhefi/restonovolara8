<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditTableRequest extends FormRequest
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
            'color'=>'required',
            'numero'=>'required|unique:tables,numero,'.$this->route('mesa')->id.'|integer|max:25',
            'observacion'=>'required',

        ];
    }
}
