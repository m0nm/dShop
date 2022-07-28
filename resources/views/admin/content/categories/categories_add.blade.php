@extends('admin.master')

@section('content')

    <x-breadcrump title="Categories" subtitle="Add new categories" />

    <div class="card">
        <form method="post" action="{{ route('admin.categories.store') }}" class="card-body">
            @csrf
            
            <h5 class="my-3">Enter Category Name</h5>
            
             @error('name')
                <p class="text-danger">{{ $message }}</p>
                @enderror
            
            <input class="form-control mb-3" type="text" name="name" placeholder="Enter category name" aria-label="Enter category name">
            
            <button class="btn btn-primary mt-2">Add Category</button>
        </form>
    </div>
@endsection