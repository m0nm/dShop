<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;


class SocialController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->stateless()->redirect()->getTargetUrl();
    }

    public function callback($provider)
    {
        $providerUser = Socialite::driver($provider)->stateless()->user();

        $user = User::firstOrCreate(
            ['email' => $providerUser->email],
            [
                'name' => $providerUser->name,
                'email' => $providerUser->email,
                'oauth_id' => $providerUser->id,
                'oauth_type' => $provider,
                'email_verified_at' => now(),
            ]
        );

        $token = $user->createToken('dShop_token')->accessToken;

        Auth::login($user, true);

        $cookie = cookie('token', $token, 0, null, null, null, false);

        return redirect(env('CLIENT_WEBSITE'))->withCookie($cookie);
    }
}
