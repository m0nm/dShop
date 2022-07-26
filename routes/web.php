<?php

use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminSettingsController;
use App\Http\Controllers\Admin\AdminSubCategoryController;
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
    ->controller(AdminController::class)
    ->group(function () {
        Route::get('/dashboard', 'dashboard')->name('dashboard');
        Route::get('/logout', 'logout')->name('logout');

        // settings
        Route::name('settings.')->controller(AdminSettingsController::class)->group(function () {
            Route::get('/settings', 'settingsPage')->name('view');
            Route::post('/settings/change-email', 'changeEmail')->name('email');
            Route::post('/settings/reset-password', 'resetPassword')->name('password');
        });

        // categories
        Route::resource('categories', AdminCategoryController::class);

        // subcategories
        Route::resource('subcategories', AdminSubCategoryController::class);
    });

Route::fallback(function () {
    return redirect('/admin/dashboard');
})->middleware('auth');