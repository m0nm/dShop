<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register(RegisterRequest $request)
    {

        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        $token  = $user->createToken('dShop_token')->accessToken;

        return response()
            ->json(['token' => $token], 201);
    }

    public function login(Request $request)
    {

        $credentials = $request->validate(['email' => 'required', 'password' => 'required']);

        $remember_me = $request->has('remember_me');

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'errors' => ['credentials' => 'Invalid credentials']
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('dShop_token')->accessToken;

        return response()
            ->json([
                'token' => $token,
                'remember_me' => $remember_me
            ], 200);
    }

    public function logout()
    {
        if (Auth::user()) Auth::user()->token()->revoke();

        return response()->json([
            'message' => 'User logged out successfully'
        ], 200);
    }
};