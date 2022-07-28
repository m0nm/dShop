@extends('admin.master')

@section('content')

    <x-breadcrump title="Subcategories" subtitle="Add new subcategories" />
    

    <div class="card">
        <form method="post" action="{{ route('admin.subcategories.store') }}" class="card-body">
            @csrf
            
            <h5 class="my-3">Parent Category</h5>
            
            @error('parent_id')
               <p class="text-danger">{{ $message }}</p>
               @enderror
               
            <select class="form-select mb-3" name="category_id" aria-label="select parent category">
                <option selected="" value="">Select Parent Category</option>
                @foreach ($categories as $category)
                    <option value={{ $category->id }}>{{ $category->name }}</option>
                @endforeach
            </select>
            
            <h5 class="my-3">Enter Subcategory Name</h5>
            
             @error('name')
                <p class="text-danger">{{ $message }}</p>
                @enderror
            
            <input class="form-control mb-3" type="text" name="name" placeholder="Enter category name" aria-label="Enter category name">
            
            <button class="btn btn-primary mt-2">Add Category</button>
        </form>
    </div>
@endsection