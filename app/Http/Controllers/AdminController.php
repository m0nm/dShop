<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function dashboard()
    {
        return view('admin.master');
    }

    public function login()
    {
        return view('admin.login');
    }

    public function auth(Request $request)
    {
        if ($request->email === "admin@admin.com" && $request->password === "password") {

            $user = User::where('email', $request->email)->first();

            Auth::login($user);

            return redirect('/admin/dashboard');
        };

        return back()->withErrors(['login' => 'Invalid Credentials']);
    }

    public function logout()
    {
        Auth::logout();

        return redirect('/login');
    }
}