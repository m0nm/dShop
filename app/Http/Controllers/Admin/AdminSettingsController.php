<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminSettingsController extends Controller
{
    public function settingsPage()
    {
        $email = User::find(1)->email;

        return view('admin.content.settings', compact('email'));
    }
    // < -------- END --------- >


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
    // < -------- END --------- >


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
    // < -------- END --------- >



}