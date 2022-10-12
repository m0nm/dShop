<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;

use App\Http\Requests\RegisterRequest;
use App\Models\Cart;
use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)
    {

        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);

        try {
            $user = User::create($data);

            Cart::create(['user_id' => $user->id]);
            Wishlist::create(['user_id' => $user->id]);

            $token  = $user->createToken('dShop_token')->accessToken;

            return response()
                ->json(['token' => $token], 201);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
    // <-------- END --------->

    public function login(Request $request)
    {

        $credentials = $request->validate(['email' => 'required', 'password' => 'required']);

        if (User::where('email', $credentials['email'])->doesntExist()) {
            return response()->json([
                'errors' => ['credentials' => ['User does not exist']]
            ], 404);
        }

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'errors' => ['credentials' => ['Invalid Credentials']]
            ], 401);
        }

        try {
            /** @var User $user */
            $user = Auth::user();
            $token = $user->createToken('dShop_token')->accessToken;

            return response()
                ->json([
                    'token' => $token,
                    "cartCount" => $user->cart->products->count(),
                    "wishlistCount" => $user->wishlist->products->count()
                ], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
    // <-------- END --------->

    public function logout()
    {
        if (Auth::user()) Auth::user()->token()->revoke();

        return response()->json([
            'message' => 'User logged out successfully'
        ], 200);
    }
    // <-------- END --------->

};