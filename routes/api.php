<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\SocialController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// < ------ User ------- >

// auth
Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/register', 'register');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/logout', 'logout');
    });
});

// social routes
Route::controller(SocialController::class)->group(function () {
    Route::get('/auth/{provider}/redirect', 'redirect');
    Route::get('/auth/{provider}/callback', 'callback');
});

// < ------ End User ------- >

// < ------ Categories ------- >
Route::get('/categories', [CategoryController::class, 'index']);

// < ------ End Categories ------- >