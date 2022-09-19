<?php

namespace App\Actions;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class FilterProducts
{
    public function handle(Request $request, Builder $products_query)
    {
        $page_count = $request->query('page_count', 12);
        $subcategories = $request->query('subcategories');
        $size = $request->query('size');
        $price_range = $request->query('price_range');
        $sort = $request->query('sort');
        $search = $request->query('search');
        $category = $request->query('category');


        $products_query->when($price_range, function ($query, $price_range) {
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


        // find search query
        if ($search) {
            $products_query
                ->when($search, function ($query, $search) use ($category, $price_range) {
                    if ($category == (null || -1)) {
                        return $query->where('name', 'like', "%$search%")
                            ->when($price_range, function ($query, $price_range) {
                                $query->where(function ($q) use ($price_range) {
                                    $q->whereBetween('price', $price_range)
                                        ->orWhereBetween('sale_price', $price_range);
                                });
                            });
                    } else {
                        $query->whereRelation('category', function ($q) use ($category) {
                            return $q->where('id',  $category);
                        })->where('name', 'like', "%$search%")

                            ->when($price_range, function ($query, $price_range) {
                                $query->where(function ($q) use ($price_range) {
                                    $q->whereBetween('price', $price_range)
                                        ->orWhereBetween('sale_price', $price_range);
                                });
                            });
                    }
                });

            $products = $products_query->paginate((int) $page_count);

            return $products;
        } else {

            // or apply filters
            $products_query
                ->when($subcategories, function ($query, $subcategories) {
                    $query->whereRelation('subcategory', function ($q) use ($subcategories) {
                        return $q->whereIn('name',  $subcategories);
                    });
                })

                ->when($size, function ($query, $size) {
                    $query->whereRelation('attributes',  function ($q) use ($size) {
                        return $q->where('name', 'sizes')->where('value', 'like', "%$size%");
                    });
                });

            $products = $products_query->paginate((int) $page_count);
            return $products;
        }
    }
}