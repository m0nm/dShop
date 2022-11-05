<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductReviewController extends Controller
{
    public function index($id)
    {
        $product = Product::find($id);
        $data = [];

        foreach ($product->reviews as $review) {
            $data[] = [
                'id' => $review->id,
                'name' => $review->name,
                'email' => $review->user->email,
                'rating' => $review->rating,
                'content' => $review->content,
                'date' => $review->created_at,
            ];
        }


        return response()->json($data);
    }

    public function store(Request $request, $product_id)
    {
        $data = $request->validate(['rating' => 'required', 'content' => 'required', 'name' => 'required']);
        $data['user_id'] = Auth::id();
        $data['product_id'] = $product_id;

        try {
            ProductReview::create($data);
            return response()->json(['message' => 'Review stored successfully'], 201);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
}