@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="Products" subtitle="View products" />
                 
    <a href="{{ route('admin.products.create') }}" class="btn btn-primary my-3">Add New Product</a>        
    
    {{-- table --}}
    <div class="card">
        <div class="card-body">
            <table class="table mb-0 table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sales Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Subcategory</th>
                        <th scope="col">Stocks</th>
                        <th scope="col">Condition</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($products as $product)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            <td>
                                <img src="{{ asset('/storage/images/products/' . explode(',', $product->images)[0]) }}" alt="" height="80px">
                            </td>
                            
                            <td>
                                {{ $product->name }}
                            </td>
                           
                            <td>
                                {{ $product->price }}
                            </td>
                            
                            <td>
                                {{ $product->sales_price }}
                            </td>
                            
                            <td>
                                {{ $product->category->name }}
                            </td>
                            
                            <td>
                                {{ $product->subcategory->name ?? 'none' }}
                            </td>
                            
                            <td>
                                {{ $product->stock }}
                            </td>
                            <td>
                                {{ $product->condition }}
                            </td>
                            <td>
                                {{ $product->status }}
                            </td>
                            
                            <td>
                                 <a href="{{ route('admin.products.edit', $product->id) }}" class="btn btn-primary btn-sm" >
                                    <i class='bx bxs-pencil me-0'></i>
                                </a>
                                
                                <button type="button" class="btn btn-sm btn-danger" id="delete-btn" data-bs-toggle="modal" data-bs-target="#delete" data-id={{ $product->id }}>
                                    <i class='bx bxs-trash me-0'></i>
								</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    
     {!! $products->links('vendor.pagination.custom') !!}
    
    {{-- delete product modal --}}
    <x-delete-modal route="products" />    
@endsection