<?php

namespace App\Http\Controllers\API;

use App\Actions\ProductApiResponse;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function index(ProductApiResponse $res_action)
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized request'], 401);
        }

        $cart = Auth::user()->cart;

        $products = $res_action->handle($cart->products);

        return response()->json($products);
    }

    public function store(Request $request)
    {

        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized request'], 401);
        }

        $product_id = $request->input('product_id');

        $cart = Cart::where('user_id', Auth::user()->id)->first();

        $cart->products()->attach($product_id);

        return response()->json(['message' => 'Added product to cart successfully']);
    }

    public function destroy(Request $request)
    {

        $cart = Cart::where('user_id', Auth::user()->id)->first();

        $product_id = $request->input('product_id');

        $cart->products()->detach($product_id);

        return response()->json(['message' => 'Removed product from cart successfully']);
    }
}