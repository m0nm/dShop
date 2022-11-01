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

        // shop page products with query params filters
        if ($request->query('page')) {
            $shopProducts = $filter_action->handle($request, $products_query);

            foreach ($shopProducts as $product) {
                $product = $res_action->handle($product);
            }

            return response()->json($shopProducts);
        }

        // home page products
        $products = $products_query->get();

        foreach ($products as $product) {
            $product = $res_action->handle($product);
        }

        return response()->json($products);
    }

    public function show($slug, ProductApiResponse $res_action)
    {
        $product = Product::where('slug', $slug)->first();

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $related = Product::where('subcategory_id', $product->subcategory_id)
            ->where('slug', "!=", $product->slug)
            ->inRandomOrder()->take(10)->get();

        $res = [];

        $productRes = $res_action->handle($product);
        $res['product'] = $productRes;

        $res['relatedProducts'] = [];
        foreach ($related as $relatedProduct) {
            array_push($res['relatedProducts'], $res_action->handle($relatedProduct));
        }

        return response()->json($res);
    }
}