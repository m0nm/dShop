<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|unique:products',
            'description' => 'required|string',
            'images' => 'required',
            'images,*' => 'mimes:jpg,png,jpeg,gif,svg',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'condition' => 'required|string',
            'category_id' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'images.required' => 'At least one image is required',
            'category_id.required' => 'The category field is required',
        ];
    }
}