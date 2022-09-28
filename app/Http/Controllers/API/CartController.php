<?php

namespace App\Http\Controllers\API;

use App\Actions\ProductApiResponse;
use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function index(ProductApiResponse $res_action)
    {
        if (!Auth::check()) {
            return response()->json([
                'errors' => ['message' => ['Please login first']]
            ], 401);
        }

        try {

            $cart = Auth::user()->cart;
            $products = $cart->products()->withPivot("quantity")->get();

            $res = [];
            foreach ($products as $product) {

                array_push($res, [
                    'product' => $res_action->handle($product),
                    'quantity' => $product->pivot->quantity,
                ]);
            }

            return response()->json($res);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }

    public function store(Request $request)
    {

        if (!Auth::check()) {
            return response()->json([
                'errors' => ['message' => ['Please login first']]
            ], 401);
        }

        try {

            $product_id = $request->input('productId');
            $quantity = $request->input('quantity');

            $cart = Cart::where('user_id', Auth::user()->id)->first();

            // increase quantity if cart item already exists
            $record = $cart->products()->where('product_id', $product_id);
            if ($record->exists()) {
                $record->increment('quantity', $quantity);
            } else {
                $cart->products()->attach($product_id, ['quantity' => $quantity]);
            }

            return response()->json(['message' => 'Added product to cart successfully']);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }

    public function destroy(Request $request)
    {

        $cart = Cart::where('user_id', Auth::user()->id)->first();

        $product_id = $request->input('productId');

        $cart->products()->detach($product_id);

        return response()->json(['message' => 'Removed product from cart successfully']);
    }
}