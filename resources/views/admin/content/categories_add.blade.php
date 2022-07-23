@extends('admin.master')

@section('content')

    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Categories</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Add new categories</li>
                    </ol>
                </nav>
            </div>
        </div>

    <div class="card">
        <form method="post" action="{{ route('admin.storeCategory') }}" class="card-body">
            @csrf
            
            <h5 class="my-3">Enter Category Name</h5>
            
             @error('category_name')
                <p class="text-danger">{{ $message }}</p>
                @enderror
            
            <input class="form-control mb-3" type="text" name="name" placeholder="Enter category name" aria-label="Enter category name">
            
            <button class="btn btn-primary mt-2">Add Category</button>
        </form>
    </div>
@endsection