@extends('admin.master')

@section('content') 
    
     <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Categories</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">View categories</li>
                        </ol>
                    </nav>
                </div>
			</div>

            
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
                                
                                <button type="button" class="btn btn-sm btn-danger" id="delete-btn" data-bs-toggle="modal" data-bs-target="#delete" data-id={{ $category->id }}>
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
    @include('components.categories.edit-modal')
    
    {{-- delete category modal --}}
    @include('components.categories.delete-modal')
    

@endsection