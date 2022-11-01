<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::where('user_id', Auth::id())->orderBy('id', 'desc')->get();

        return response()->json($orders);
    }

    public function show($id)
    {
        $order = Order::where('user_id', Auth::id())
            ->where('id', $id)
            ->first();
        $res = [];

        foreach ($order->orderItems as $item) {
            $res[] = [
                'product_name' => $item->product->name,
                'quantity' => $item->quantity,
                'price' => $item->price
            ];
        }

        return response()->json($res);
    }

    public function store(StoreOrderRequest $request)
    {

        $cart = Auth::user()->cart;

        $total_price = $cart->products->sum(function ($product) {
            return $product->pivot->quantity * $product->sale_price ?? $product->price;
        });


        $data = $request->validated();
        $data['user_id'] = Auth::id();
        $data['total_price'] = $total_price;
        $data['tracking_no'] = rand(1000, 9999);

        try {
            $order =  Order::create($data);

            foreach ($cart->products as $product) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'quantity' => $product->pivot->quantity,
                    'price' => $product->sale_price ?? $product->price,
                ]);
            }

            $cart->products()->sync([]);

            return response()->json(['message' => 'Order placed successfully'], 201);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
}