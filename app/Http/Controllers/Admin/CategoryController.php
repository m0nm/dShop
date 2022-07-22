<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        $categoriesData = [];

        foreach ($categories as $category) {
            $subcategories = $category->subcategories()->get();

            array_push($categoriesData, ['category' => $category->name, 'subcategories' => $subcategories]);
        }

        return response()->json($categoriesData);
    }
}