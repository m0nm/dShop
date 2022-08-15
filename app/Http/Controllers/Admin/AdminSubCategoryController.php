<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class AdminSubCategoryController extends Controller
{
    public function index()
    {
        $subcategories = SubCategory::latest()->get();

        return view('admin.content.subcategories.subcategories', compact('subcategories'));
    }
    // <--------- END  -------->

    public function create()
    {
        $categories = Category::latest()->get();

        return view('admin.content.subcategories.subcategories_add', compact('categories'));
    }
    // <--------- END  -------->
    public function store(Request $request)
    {

        $subcategory = $request->validate(['name' => 'required', 'category_id' => 'required'], [
            'category_id.required' => 'Please select the parent category'
        ]);

        SubCategory::create($subcategory);

        return redirect(route('admin.subcategories.index'));
    }
    // <--------- END  -------->

    public function update(Request $request, $id)
    {

        $new_category = $request->validate(['name' => 'required']);

        $subcategory = SubCategory::find($id);

        $subcategory->name = $new_category['name'];
        $subcategory->save();

        return redirect(route('admin.subcategories.index'));
    }
    // <--------- END  -------->

    public function destroy($id)
    {
        SubCategory::find($id)->delete();

        return response()->json(route('admin.subcategories.index'));
    }
    // <--------- END  -------->
}