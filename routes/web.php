<?php

use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminSettingsController;
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
        Route::name('categories.')->controller(AdminCategoryController::class)->group(function () {

            Route::get('/categories', 'view')->name('view');

            Route::get(
                '/categories/create',
                'create'
            )->name('create');

            Route::post(
                '/categories/create',
                'store'
            )->name('store');

            Route::post('/categories/edit', 'edit')->name('edit');

            Route::delete(
                '/categories',
                'delete'
            )->name('delete');
        });
    });

Route::fallback(function () {
    return redirect('/admin/dashboard');
})->middleware('auth');