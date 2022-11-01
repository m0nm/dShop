<?php

use App\Http\Controllers\API\AccountController;
use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\Auth\ForgotPasswordController;
use App\Http\Controllers\API\Auth\SocialController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\BannerController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\CouponController;
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

// < ------ Account ------- >
Route::group(['middleware' => 'auth:api'], function () {
    Route::controller(AccountController::class)->group(function () {
        Route::get('user/account', 'index');
        Route::put('user/account', 'update');
        Route::put('user/change-password', 'changePassword');
        Route::delete('user', 'destroy');
    });
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
Route::get('/products/{slug}', [ProductController::class, 'show']);
// < ------ End ------- >

// < ------ cart and wishlist ------- >
Route::group(['middleware' => 'auth:api'], function () {
    Route::controller(CartController::class)->group(function () {
        Route::get('user/cart', 'index');
        Route::post('user/cart', 'store');
        Route::put('user/cart', 'update');
        Route::delete('user/cart/{id}', 'destroy');
    });

    Route::controller(WishlistController::class)->group(function () {
        Route::get('user/wishlist',  'index');
        Route::post('user/wishlist',  'store');
        Route::delete('user/wishlist/{id}',  'destroy');
    });
});
// < ------ End ------- >

// < ------ Coupon ------- >
Route::post('coupons', [CouponController::class, 'check'])->middleware(('auth:api'));
// < ------ End ------- >

// < ------ Checkout ------- >
Route::group(['middleware' => 'auth:api'], function () {

    Route::get('user/orders', [OrderController::class, 'index']);
    Route::get('user/orders/{tracking_no}', [OrderController::class, 'show']);
    Route::post('user/orders', [OrderController::class, 'store']);
}); 
// < ------ End ------- >