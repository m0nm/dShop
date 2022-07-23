<?php

use App\Http\Controllers\Admin\AdminController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        // dashboard
        Route::get('/dashboard', 'dashboard')->name('dashboard');

        // logout
        Route::get('/logout', 'logout')->name('logout');

        // settings
        Route::get('/settings', 'settingsPage')->name('settings');
        Route::post('/settings/change-email', 'changeEmail')->name('changeEmail');
        Route::post('/settings/reset-password', 'resetPassword')->name('resetPassword');

        // categories
        Route::get('/categories', 'categoriesPage')->name('categories');

        Route::get('/categories/new', 'newCategoryPage')->name('categories.new');
        Route::post('/categories/new', 'storeCategory')->name('storeCategory');

        Route::post('/categories/edit', 'editCategory')->name('editCategory');

        Route::delete('/categories', 'deleteCategory')->name('deleteCategory');
    });

Route::fallback(function () {
    return redirect('/admin/dashboard');
})->middleware('auth');