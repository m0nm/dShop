<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminUserController extends Controller
{
    public function index()
    {
        $users = User::all()->except(Auth::id());

        return view('admin.content.users.index', compact('users'));
    }

    public function show($id)
    {
        $user = User::find($id);

        return view('admin.content.users.show', compact('user'));
    }
}