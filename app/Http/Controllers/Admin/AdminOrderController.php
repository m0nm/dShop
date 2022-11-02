<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class AdminOrderController extends Controller
{
    public function index()
    {
        $orders = Order::orderBy('id', 'desc')->get();

        return view('admin.content.orders.index', compact('orders'));
    }

    public function show($id)
    {
        $order = Order::find($id);

        return view('admin.content.orders.show', compact('order'));
    }

    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        $status = $request->input('order-status');

        $order->status = $status;
        $order->update();

        return redirect('admin/orders')->with(['message' => 'Order status updated successfully']);
    }
}