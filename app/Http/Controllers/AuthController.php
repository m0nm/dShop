<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{


    public function welcome()
    {
        return "hello";
    }

    public function register(RegisterRequest $request)
    {

        $user = $request->validated();

        $user['password'] = Hash::make($user['password']);

        User::create($user);

        return response()->json([
            "message" => 'User created successfully',
            'user' => $user,
            'token' => $user->createToken('dShop')->accessToken
        ], 201);
    }

    public function login(Request $request)
    {

        $credentials = $request->validate(['email' => 'required', 'password' => 'required']);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'errors' => ['credentials' => 'Invalid credentials']
            ], 400);
        }

        $user = Auth::user();
        $token = $user->createToken('dShop')->accessToken;

        return response()->json(['user' => $user, 'token' => $token]);
    }

    public function logout()
    {
        if (Auth::user()) Auth::user()->token()->revoke();

        return response()->json([
            'message' => 'User logged out successfully'
        ], 200);
    }
}