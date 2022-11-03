<?php

use App\Http\Controllers\Admin\AdminBannerController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminCouponController;
use App\Http\Controllers\Admin\AdminOrderController;
use App\Http\Controllers\Admin\AdminProductAttributesController;
use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\AdminSettingsController;
use App\Http\Controllers\Admin\AdminSubCategoryController;
use App\Http\Controllers\Admin\AdminUserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// admin auth
Route::get('/login', [AdminController::class, 'login']);
Route::post('/login', [AdminController::class, 'auth'])->name('admin.login');

// admin routes
Route::prefix('admin')
    ->name('admin.')
    ->middleware('auth')
    ->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
        Route::get('/logout', [AdminController::class, 'logout'])->name('logout');

        // settings
        Route::name('settings.')->controller(AdminSettingsController::class)->group(function () {
            Route::get('/settings', 'settingsPage')->name('view');
            Route::post('/settings/change-email', 'changeEmail')->name('email');
            Route::post('/settings/reset-password', 'resetPassword')->name('password');
        });

        // banners
        Route::resource('banners', AdminBannerController::class)->except(['show', 'edit', 'update']);

        // categories
        Route::resource('categories', AdminCategoryController::class)->except(['show']);

        // subcategories
        Route::resource('subcategories', AdminSubCategoryController::class)->except(['show']);

        // products
        Route::resource('products', AdminProductController::class);

        // products attributes
        Route::resource('product_attributes', AdminProductAttributesController::class);

        // coupons
        Route::resource('coupons', AdminCouponController::class)->except('show');

        // orders
        Route::resource('orders', AdminOrderController::class)->except(['destroy', 'store', 'edit', 'create']);

        // users
        Route::resource('users', AdminUserController::class)->except(['destroy', 'store', 'edit', 'update', 'create']);
    });

Route::fallback(function () {
    return redirect('/admin/dashboard');
})->middleware('auth');