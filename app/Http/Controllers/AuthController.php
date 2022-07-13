<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{


    public function welcome()
    {
        return "hello";
    }

    public function register(RegisterRequest $request)
    {

        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        $token  = $user->createToken('dShop_token')->accessToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function login(Request $request)
    {

        $credentials = $request->validate(['email' => 'required', 'password' => 'required']);

        $remember_me = $request->has('remember_me');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('dShop_token')->accessToken;


            return response()->json(['user' => $user, 'token' => $token, 'remember_me' => $remember_me], 200);
        }

        return response()->json([
            'errors' => ['credentials' => 'Invalid credentials']
        ], 400);
    }

    public function logout()
    {
        if (Auth::user()) Auth::user()->token()->revoke();

        return response()->json([
            'message' => 'User logged out successfully'
        ], 200);
    }
}