<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function dashboard()
    {
        return view('admin.content.dashboard');
    }

    // <--------- ADMIN AUTH --------->

    public function login()
    {
        return view('admin.login');
    }

    public function auth(Request $request)
    {

        $admin = User::find(1);

        if ($request->email === $admin->email && $request->password === "password") {


            Auth::login($admin);

            return redirect('/admin/dashboard');
        };

        return back()->withErrors(['login' => 'Invalid Credentials']);
    }

    public function logout()
    {
        Auth::logout();

        return redirect('/login');
    }

    // <--------- END ADMIN AUTH -------->

    // <--------- sETTINGS PAGE -------->

    public function settingsPage()
    {
        $email = User::find(1)->email;

        return view('admin.content.settings', compact('email'));
    }

    public function changeEmail(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|email',
        ]);

        $admin = User::find(1);

        $admin->email = $fields['email'];

        $admin->save();

        return back()->with('message', 'Email changed successfully');
    }

    public function resetPassword(Request $request)
    {
        $fields = $request->validate([
            'old_password' => 'required',
            'password' => 'required|confirmed'
        ]);

        $admin = User::find(1);

        if (Hash::check($fields['old_password'], $admin->password)) {

            $newPassword = Hash::make($fields['password']);

            $admin->password = $newPassword;

            $admin->save();

            return back()->with('message', 'Password changed successfully');
        }
    }
    // <--------- END SETTINGS PAGE -------->

    // <--------- CATEGORIES PAGE -------->
    public function categoriesPage()
    {
        $categories = Category::latest()->get();

        return view('admin.content.categories', compact('categories'));
    }

    public function newCategoryPage()
    {
        return view('admin.content.categories_add');
    }

    public function storeCategory(Request $request)
    {

        $category = $request->validate(['name' => 'required']);

        Category::create($category);

        return redirect(route('admin.categories'));
    }

    public function editCategory(Request $request)
    {

        $new_category = $request->validate(['name' => 'required']);

        $category = Category::find($request->id);

        $category->name = $new_category['name'];
        $category->save();

        return redirect(route('admin.categories'));
    }

    public function deleteCategory(Request $request)
    {
        $category = Category::find($request->id);

        $category->delete();

        return redirect(route('admin.categories'));
    }

    // <--------- END CATEGORIES PAGE -------->


}