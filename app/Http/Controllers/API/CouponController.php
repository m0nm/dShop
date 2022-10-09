<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    public function check(Request $request)
    {
        $coupon = Coupon::where('code', $request->code)->where('status', 'active')->first();

        if ($coupon->doesntExist()) {
            return response()->json(['errors' => ['message' => 'Invalid coupon']], 404);
        }

        return response()->json($coupon);
    }
}