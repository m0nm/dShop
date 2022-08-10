<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\ResetPasswordMail;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{
    public function forgot(Request $request)
    {
        $this->validate($request, ['email' => 'required|email']);

        $email = $request->email;

        if (User::where('email', $email)->doesntExist()) {
            return response()->json(['message' => 'user does not exists'], 404);
        }

        $token = Str::random(10);

        try {
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token
            ]);

            Mail::to($email)->send(new ResetPasswordMail($token));

            return response()->json(['message' => 'Check your email'], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
    // <-------- END --------->


    public function reset(Request $request)
    {
        $this->validate($request, [
            'token' => 'required',
            'password' => 'required|confirmed'
        ]);

        $token = $request->input('token');

        if (!$passwordReset = DB::table('password_resets')->where('token', $token)->first()) {
            return response()->json(['message' => 'invalid token'], 400);
        }

        $user = User::where('email', $passwordReset->email)->first();

        if (!$user) {
            return response()->json(['message' => 'user does not exist'], 404);
        }

        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json(['message' => 'password changed successfully'], 200);
    }
}