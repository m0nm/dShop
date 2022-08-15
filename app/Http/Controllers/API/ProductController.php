<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::where('status', 'active')->get();

        foreach ($products as $product) {
            $product['category'] = $product->category()->first('name')['name'];

            if ($product->subcategory()->exists()) {
                $product['subcategory'] = $product->subcategory()->first('name')['name'];
            }
        }

        return response()->json($products);
    }
}