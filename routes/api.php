<?php

use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\Auth\ForgotPasswordController;
use App\Http\Controllers\API\Auth\SocialController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\BannerController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\WishlistController;
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

// < ------ cart and wishlist ------- >
Route::group(['middleware' => 'auth:api'], function () {
    Route::get('user/cart', [CartController::class, 'index']);
    Route::post('user/cart', [CartController::class, 'store']);
    Route::delete('user/cart', [CartController::class, 'destroy']);

    Route::get('user/wishlist', [WishlistController::class, 'index']);
    Route::post('user/wishlist', [WishlistController::class, 'store']);
    Route::delete('user/wishlist', [WishlistController::class, 'destroy']);
});

// < ------ End ------- >