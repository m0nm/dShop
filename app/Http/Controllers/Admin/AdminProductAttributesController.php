<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use Illuminate\Http\Request;


class AdminProductAttributesController extends Controller
{
    public function index()
    {
        $attributes = Attribute::latest()->paginate(10);

        return view('admin.content.products_attributes.product_attributes', compact('attributes'));
    }
    // <--------- END  -------->

    public function create()
    {
        return view('admin.content.products_attributes.product_attributes_add');
    }
    // <--------- END  -------->

    public function store(Request $request)
    {
        $data = $request->validate(['name' => 'required|string|unique:attributes']);

        Attribute::create($data);

        return redirect(route('admin.product_attributes.index'));
    }
    // <--------- END  -------->

    public function update(Request $request, $id)
    {
        $data = $request->validate(['name' => 'required|string|unique:attributes']);

        Attribute::find($id)->update($data);

        return redirect(route('admin.product_attributes.index'));
    }
    // <--------- END  -------->

    public function destroy($id)
    {
        Attribute::find($id)->delete();

        return redirect(route('admin.product_attributes.index'));
    }
    // <--------- END  -------->

}