@extends('admin.master')

@section('content') 
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Categories</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">View subcategories</li>
                        </ol>
                    </nav>
                </div>
			</div>

            
    <a href="{{ route('admin.subcategories.create') }}" class="btn btn-primary my-3">Add New Subcategory</a>        
    
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
                    @foreach ($subcategories as $subcategory)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            <td>{{ $subcategory->name }}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-sm" id="edit-btn" data-bs-toggle="modal" data-bs-target="#edit" data-id={{ $subcategory->id }} data-name="{{ $subcategory->name }}">
                                    <i class='bx bxs-pencil me-0'></i>
                                </button>
                                
                                <button type="button" class="btn btn-sm btn-danger" id="delete-btn" data-bs-toggle="modal" data-bs-target="#delete" data-id={{ $subcategory->id }}>
                                    <i class='bx bxs-trash me-0'></i>
								</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    
    {{-- delete a subcategory modal --}}
    @include('components.subcategories.edit-modal')
    
    {{-- delete a subcategory modal --}}
    @include('components.subcategories.delete-modal')
   
@endsection