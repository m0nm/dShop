<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Coupon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AdminCouponController extends Controller
{
    public function index()
    {
        $coupons = Coupon::latest()->get();

        return view('admin.content.coupons.coupons', compact('coupons'));
    }
    // <--------- END  -------->


    public function create()
    {
        return view('admin.content.coupons.coupons_add');
    }
    // <--------- END  -------->

    public function store(Request $request)
    {
        $data = $request->validate([
            'code' => 'required|string|unique:coupons',
            'value' => 'required|string',
            'type' => 'required|string',
            'status' => 'required|string',
        ]);

        Coupon::create($data);

        return redirect(route('admin.coupons.index'))->with(['message' => 'Coupon added successfully', 'alert-type' => 'success']);
    }
    // <--------- END  -------->

    public function edit(Coupon $coupon)
    {
        return view('admin.content.coupons.coupons_edit', compact('coupon'));
    }
    // <--------- END  -------->

    public function update(Request $request, $id)
    {

        $data = $request->validate([
            'code' => ['required', 'string', Rule::unique('coupons')->ignore($id)],
            'value' => 'required|string',
            'type' => 'required|string',
            'status' => 'required|string',
        ]);;

        Coupon::find($id)->update($data);

        return redirect(route('admin.coupons.index'))->with(['message' => 'Coupon updated successfully', 'alert-type' => 'success']);
    }
    // <--------- END  -------->

    public function destroy($id)
    {
        Coupon::find($id)->delete();

        return redirect(route('admin.coupons.index'))->with(['message' => 'Coupon deleted', 'alert-type' => 'success']);
    }
    // <--------- END  -------->

}