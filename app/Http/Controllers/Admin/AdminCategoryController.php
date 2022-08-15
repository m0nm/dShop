<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class AdminCategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->get();

        return view('admin.content.categories.categories', compact('categories'));
    }
    // <--------- END  -------->

    public function create()
    {
        return view('admin.content.categories.categories_add');
    }
    // <--------- END  -------->
    public function store(Request $request)
    {

        $category = $request->validate(['name' => 'required']);

        Category::create($category);

        return redirect(route('admin.categories.index'));
    }
    // <--------- END  -------->

    public function update(Request $request, $id)
    {

        $new_category = $request->validate(['name' => 'required']);

        $category = Category::find($id);

        $category->name = $new_category['name'];
        $category->save();

        return redirect(route('admin.categories.index'));
    }
    // <--------- END  -------->

    public function destroy($id)
    {
        Category::find($id)->delete();

        return response()->json(route('admin.categories.index'));
    }
    // <--------- END  -------->
}