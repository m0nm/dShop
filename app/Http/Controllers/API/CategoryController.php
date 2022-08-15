<?php

namespace App\Http\Controllers\API;

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
            $subcategories = $category->subcategories()->get(['id', 'name']);

            array_push($categoriesData, [
                'id' => $category->id,
                'name' => $category->name,
                'subcategories' => $subcategories
            ]);
        }

        return response()->json($categoriesData);
    }
}