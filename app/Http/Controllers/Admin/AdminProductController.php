<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\SubCategory;

use Illuminate\Http\Request;
use Illuminate\Support\Str;


class AdminProductController extends Controller
{
    public function index()
    {
        $products = Product::latest()->paginate(10);

        return view('admin.content.products.products', compact('products'));
    }
    // <--------- END  -------->

    public function create()
    {
        $categories = Category::latest()->get();
        $subcategories = SubCategory::latest()->get();

        return view('admin.content.products.products_add', compact(['categories', 'subcategories']));
    }
    // <--------- END  -------->

    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['name']);

        $images = [];

        if ($request->hasFile('images')) {

            foreach ($data['images'] as $image) {
                $name = time() . '-' . $image->getClientOriginalName();
                $image->storeAs('public/images/products', $name);
                array_push($images, $name);
            }

            $data['images'] = implode(',', $images);
        }

        Product::create($data);

        return redirect(route('admin.products.index'));
    }
    // <--------- END  -------->

    public function edit(Product $product)
    {
        $categories = Category::latest()->get();
        $subcategories = SubCategory::latest()->get();

        return view('admin.content.products.products_edit', compact(['product', 'categories', 'subcategories']));
    }

    // <--------- END  -------->

    public function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->validated();

        if ($request->has('name')) {
            $data['slug'] = Str::slug($data['name']);
        }

        $images = [];

        if ($request->hasFile('images')) {

            foreach ($data['images'] as $image) {
                $name = time() . '-' . $image->getClientOriginalName();
                $image->storeAs('public/images/products', $name);
                array_push($images, $name);
            }

            $data['images'] = implode(',', $images);
        }

        $product->update($data);

        return redirect(route('admin.products.index'));
    }
    // <--------- END  -------->

    public function destroy(Product $product)
    {
        $product->delete();

        return redirect(route('admin.products.index'));
    }
    // <--------- END  -------->

}