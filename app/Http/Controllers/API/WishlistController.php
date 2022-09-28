<?php

namespace App\Http\Controllers\API;

use App\Actions\ProductApiResponse;
use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    public function index(ProductApiResponse $res_action)
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized request'], 401);
        }

        $wishlist = Auth::user()->wishlist;

        $res = [];
        foreach ($wishlist->products as $product) {
            array_push($res, $res_action->handle($product));
        }

        return response()->json($res);
    }

    public function store(Request $request)
    {

        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized request'], 401);
        }

        $product_id = $request->input('product_id');

        $wishlist = Wishlist::where('user_id', Auth::user()->id)->first();

        $wishlist->products()->attach($product_id);

        return response()->json(['message' => 'Added product to wishlist successfully']);
    }

    public function destroy(Request $request)
    {

        $wishlist = Wishlist::where('user_id', Auth::user()->id)->first();

        $product_id = $request->input('product_id');

        $wishlist->products()->detach($product_id);

        return response()->json(['message' => 'Removed product from wishlist successfully']);
    }
}