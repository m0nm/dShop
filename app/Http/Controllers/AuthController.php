<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
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
}