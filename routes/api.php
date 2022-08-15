<?php

use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\BannerController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ForgotPasswordController;
use App\Http\Controllers\API\SocialController;
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
        Route::get('/user/logout', 'logout');
    });
});

// social routes
Route::controller(SocialController::class)->group(function () {
    Route::get('/auth/{provider}/redirect', 'redirect');
    Route::get('/auth/{provider}/callback', 'callback');
});

// forgot password
Route::controller(ForgotPasswordController::class)->group(function () {
    Route::post('/user/forgot', 'forgot');
    Route::post('/user/reset', 'reset');
});

// < ------ End ------- >

// < ------ Categories ------- >
Route::get('/categories', [CategoryController::class, 'index']);

// < ------ End ------- >

// < ------ Banners ------- >
Route::get('/banners', [BannerController::class, 'index']);

// < ------ End ------- >

// < ------ productss ------- >
Route::get('/products', [ProductController::class, 'index']);

// < ------ End ------- >