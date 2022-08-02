<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends FormRequest
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

    public function rules()
    {
        return [
            'name' => ['required', 'string', Rule::unique('products')->ignore($this->product->id)],
            'description' => 'required|string',
            'images' => 'nullable',
            'images,*' => 'mimes:jpg,png,jpeg,gif,svg',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'status' => 'string',
            'condition' => 'required|string',
            'category_id' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'category_id.required' => 'The category field is required',
        ];
    }
}