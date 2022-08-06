<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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

        $admin = User::where('type', 'admin')->first();

        if ($request->email === $admin->email && Hash::check($request->password, $admin->password)) {

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