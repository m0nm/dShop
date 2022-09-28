<?php

namespace App\Actions;

use Illuminate\Database\Eloquent\Builder;

class ProductApiResponse
{
    public function handle($product)

    {

        $product['category'] = $product->category()->first('name')['name'];

        if ($product->subcategory()->exists()) {
            $product['subcategory'] = $product->subcategory()->first('name')['name'];
        }

        $images = [];
        foreach (explode(",", $product["images"]) as $image) {
            array_push($images, asset("storage/images/products/$image"));
        }

        $product['images'] = $images;

        $attributes = [];
        foreach ($product->attributes()->get() as $attribute) {
            array_push($attributes, [
                'id' => $attribute->id,
                'name' => $attribute->name,
                'value' => explode(',', $attribute->pivot->value),
            ]);
        }

        $product['attributes'] = $attributes;

        return $product;
    }
}