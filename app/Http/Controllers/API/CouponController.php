<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    public function check(Request $request)
    {
        $coupon = Coupon::whereRaw("BINARY `code`= ?", [$request->code])->where('status', 'active')->first();

        if (!$coupon) {
            return response()->json(['errors' => ['message' => ['Coupon is invalid']]], 404);
        }

        return response()->json($coupon);
    }
}