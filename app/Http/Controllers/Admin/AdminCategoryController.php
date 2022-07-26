<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class AdminCategoryController extends Controller
{
    public function view()
    {
        $categories = Category::latest()->get();

        return view('admin.content.categories', compact('categories'));
    }
    // <--------- END  -------->

    public function create()
    {
        return view('admin.content.categories_add');
    }
    // <--------- END  -------->
    public function store(Request $request)
    {

        $category = $request->validate(['name' => 'required']);

        Category::create($category);

        return redirect(route('admin.categories'));
    }
    // <--------- END  -------->

    public function edit(Request $request)
    {

        $new_category = $request->validate(['name' => 'required']);

        $category = Category::find($request->id);

        $category->name = $new_category['name'];
        $category->save();

        return redirect(route('admin.categories'));
    }
    // <--------- END  -------->

    public function delete(Request $request)
    {
        $category = Category::find($request->id);

        $category->delete();

        return redirect(route('admin.categories'));
    }
    // <--------- END  -------->


}