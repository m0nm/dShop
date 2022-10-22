<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function index()
    {
        $account = Auth::user()->account;
        $account['email'] = Auth::user()->email;

        return response()->json($account);
    }

    public function update(Request $request)
    {
        $account = Auth::user()->account;

        try {

            if ($request->email) {
                $account->user()->update(['email' => $request->email]);
            }

            $account->update($request->all());

            return response()->json(['message' => 'Account updated successfully']);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }

    public function changePassword(Request $request)
    {

        /** @var \App\Models\User $user */
        $user = Auth::user();

        $fields = $request->validate([
            'password' => 'required',
            'new_password' => 'required|min:6|confirmed',
        ]);

        // wrong password
        if (!Hash::check($fields['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 400);
        }

        try {
            $password = Hash::make($fields['new_password']);
            $user->password = $password;
            $user->save();
            $user->token()->revoke();

            return response()->json(['message' => 'Password updated successfully']);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }

    public function destroy()
    {
        try {
            /** @var User $user **/
            $user = Auth::user();

            $user->token()->revoke();
            $user->delete();

            return response()->json(['message' => 'User deleted successfully']);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
}