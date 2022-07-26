<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function dashboard()
    {
        return view('admin.content.dashboard');
    }

    // <--------- END --------->

    public function login()
    {
        return view('admin.login');
    }
    // <--------- END --------->



    public function auth(Request $request)
    {

        $admin = User::find(1);

        if ($request->email === $admin->email && $request->password === "password") {

            Auth::login($admin);

            return redirect('/admin/dashboard');
        };

        return back()->withErrors(['login' => 'Invalid Credentials']);
    }
    // <--------- END --------->

    public function logout()
    {
        Auth::logout();

        return redirect('/login');
    }
    // <--------- END --------->

}