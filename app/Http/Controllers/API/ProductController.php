<?php

namespace App\Http\Controllers\API;

use App\Actions\FilterProducts;
use App\Actions\ProductApiResponse;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request, ProductApiResponse $res_action, FilterProducts $filter_action)
    {
        $products_query = Product::where('status', 'active');

        if ($request->query('page')) {
            // shop page products with query params filters
            $products = $filter_action->handle($request, $products_query);
        } else {
            // home page products
            $products = $products_query->get();
        }

        $products = $res_action->handle($products);

        return response()->json($products);
    }
}