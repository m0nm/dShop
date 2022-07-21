<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function dashboard()
    {
        return view('admin.sections.index');
    }

    public function login()
    {
        return view('admin.login');
    }

    public function auth(Request $request)
    {

        $admin = User::find(1);

        if ($request->email === $admin->email && $request->password === "password") {


            Auth::login($admin);

            return redirect('/admin/dashboard');
        };

        return back()->withErrors(['login' => 'Invalid Credentials']);
    }

    public function logout()
    {
        Auth::logout();

        return redirect('/login');
    }

    public function settings()
    {
        $email = User::find(1)->email;

        return view('admin.sections.settings', compact('email'));
    }

    public function changeEmail(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email',
        ]);

        $admin = User::find(1);

        $admin->email = $fields['email'];

        $admin->save();

        return back()->with('message', 'Email changed successfully');
    }

    public function resetPassword(Request $request)
    {
        $fields = $request->validate([
            'old_password' => 'required',
            'password' => 'required|confirmed'
        ]);

        $admin = User::find(1);

        if (Hash::check($fields['old_password'], $admin->password)) {

            $newPassword = Hash::make($fields['password']);

            $admin->password = $newPassword;

            $admin->save();

            return back()->with('message', 'Password changed successfully');
        }
    }
}