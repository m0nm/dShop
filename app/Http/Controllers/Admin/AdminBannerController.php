<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;


use App\Models\Banner;
use Illuminate\Http\Request;

class AdminBannerController extends Controller
{
    public function index()
    {
        $banners = Banner::latest()->get();

        return view('admin.content.banners.banners', compact('banners'));
    }
    // <--------- END  -------->


    public function create()
    {
        return view('admin.content.banners.banners_add');
    }
    // <--------- END  -------->

    public function store(Request $request)
    {
        $request->validate(['image' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048']);

        $image = $request->image->getClientOriginalName();

        Banner::create(['banner_image' => "$image"]);

        $request->image->storeAs('public/images/banners', $image);

        return redirect(route('admin.banners.index'));
    }
    // <--------- END  -------->

    public function destroy($id)
    {
        Banner::find($id)->delete();

        return redirect(route('admin.banners.index'));
    }
    // <--------- END  -------->

}