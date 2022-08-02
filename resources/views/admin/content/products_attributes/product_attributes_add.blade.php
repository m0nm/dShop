@extends('admin.master')

@section('content')
    <x-breadcrump title="Products" subtitle="Add Product attributes" />

    <div class="card">
        <div class="card-body">
            <form method="post" action="{{ route('admin.product_attributes.store') }}">
                @csrf
                
                @error('name')
                    <p class="text-sm text-danger">{{ $message }}</p>
                @enderror
                
                <label for="attribute" class="form-label">Attribute Name</label>
                <input type="text" name="name" id="name" class="form-control">
                
                <button class="btn btn-primary mt-3">Save</button>
            </form>
        </div>
    </div>
@endsection