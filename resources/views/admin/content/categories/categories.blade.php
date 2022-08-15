@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="Categories" subtitle="View categories" />
            
    <a href="{{ route('admin.categories.create') }}" class="btn btn-primary my-3">Add New Category</a>        
    
    {{-- table --}}
    <div class="card">
        <div class="card-body">
            <table class="table mb-0 table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($categories as $category)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            <td>{{ $category->name }}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-sm" id="edit-btn" data-bs-toggle="modal" data-bs-target="#edit" data-id={{ $category->id }} data-name="{{ $category->name }}">
                                    <i class='bx bxs-pencil me-0'></i>
                                </button>
                                
                                <button type="button" class="btn btn-sm btn-danger" onclick="deleteItem({{ $category->id }})">
                                    <i class='bx bxs-trash me-0'></i>
								</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    
    {{-- edit a category modal --}}
    <x-edit-modal route="categories" />
    
    {{-- delete category modal --}}
    <x-delete-modal route="categories" />    

@endsection