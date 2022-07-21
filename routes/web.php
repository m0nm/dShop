<?php

use App\Http\Controllers\AdminController;
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

// dashboard
Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard')->middleware('auth');

// auth
Route::get('/login', [AdminController::class, 'login']);

Route::post('/login', [AdminController::class, 'auth'])->name('admin.login');

// logout
Route::get('/logout', [AdminController::class, 'logout'])->name('admin.logout')->middleware('auth');

// settings
Route::get('/admin/settings', [AdminController::class, 'settings']);
Route::post('/admin/settings/change-email', [AdminController::class, 'changeEmail'])->name('admin.changeEmail');
Route::post('/admin/settings/reset-password', [AdminController::class, 'resetPassword'])->name('admin.resetPassword');