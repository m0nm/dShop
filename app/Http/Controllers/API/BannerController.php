<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        $data = Banner::all();
        $banners = [];

        foreach ($data as $banner) {
            array_push($banners, [
                'url' => asset("storage/images/banners/$banner->banner_image"),
                'id' => $banner->id,
            ]);
        }

        return response()->json($banners);
    }
}