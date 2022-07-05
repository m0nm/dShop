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

        return response("User created successfully", 201);
    }

    public function login(Request $request)
    {

        $credentials = $request->validate(['email' => 'required', 'password' => 'required']);

        if (!Auth::attempt($credentials)) {
            return response('Invalid Credentials', 400);
        }

        $user['user'] = Auth::user();
        $user['token'] = Auth::user()->createToken('dShop')->accessToken;

        return $user;
    }

    public function logout()
    {
        if (Auth::user()) Auth::user()->logout();

        return response('User logged out successfully', 200);
    }
}