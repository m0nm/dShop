<?php

namespace App\Actions;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class FilterProducts
{
    public function handle(Request $request, Builder $products_query)
    {
        $page_count = $request->query('page_count', 12);
        $subcategory = $request->query('subcategory');
        $size = $request->query('size');
        $price_range = $request->query('price_range');
        $sort = $request->query('sort');

        $products_query
            ->when($subcategory, function ($query, $subcategory) {
                $query->whereRelation('subcategory', 'name', $subcategory);
            })

            ->when($size, function ($query, $size) {
                $query->whereRelation('attributes',  function ($q) use ($size) {
                    return $q->where('name', 'sizes')->where('value', 'like', "%$size%");
                })->get();
            })

            ->when($price_range, function ($query, $price_range) {
                // dd($price_range[0]);
                $query->where(function ($q) use ($price_range) {
                    $q->whereBetween('price', $price_range)
                        ->orWhereBetween('sale_price', $price_range);
                });
            })
            ->when($sort, function ($query, $sort) {
                switch ($sort) {
                    case 'latest':
                        $query->latest()->get();
                        break;

                    case 'price-low-to-high':
                        $query->orderBy('price', 'asc')->get();
                        break;

                    case 'price-high-to-low':
                        $query->orderBy('price', 'desc')->get();
                        break;

                    default:
                        $query->get();
                        break;
                }
            });

        $products = $products_query->paginate((int) $page_count);

        return $products;
    }
}