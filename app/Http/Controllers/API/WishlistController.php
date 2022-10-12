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

        try {

            $wishlist = Auth::user()->wishlist;

            $res = [];
            foreach ($wishlist->products as $product) {
                array_push($res, $res_action->handle($product));
            }

            return response()->json($res);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }

    public function store(Request $request)
    {

        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized request'], 401);
        }

        try {

            $product_id = $request->input('productId');

            $wishlist = Wishlist::where('user_id', Auth::user()->id)->first();

            $record = $wishlist->products()->where('product_id', $product_id);
            if ($record->exists()) {

                return response()->json([
                    'message' => 'Already in the wishlist',
                ], 204);
            } else {
                $wishlist->products()->attach($product_id);
            }


            return response()->json([
                'message' => 'Added product to wishlist successfully',
                "wishlistCount" => $wishlist->products->count(),

            ]);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }

    public function destroy($product_id)
    {

        try {

            $wishlist = Wishlist::where('user_id', Auth::user()->id)->first();

            $wishlist->products()->detach($product_id);

            return response()->json([
                'message' => 'Removed product from wishlist successfully',
                'wishlistCount' => $wishlist->products->count()
            ]);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
}