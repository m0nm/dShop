@extends('admin.master')

@section('content') 
     
    <x-breadcrump title="Subcategories" subtitle="View subcategories" />
                
    <a href="{{ route('admin.subcategories.create') }}" class="btn btn-primary my-3">Add New Subcategory</a>        
    
    {{-- table --}}
    <div class="card">
        <div class="card-body">
            <table class="table mb-0 table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Parent Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($subcategories as $subcategory)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            <td>{{ $subcategory->name }}</td>
                            <td>{{ $subcategory->category['name'] }}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-sm" onclick="editItem({{ $subcategory->id }}, '{{ $subcategory->name }}')">
                                    <i class='bx bxs-pencil me-0'></i>
                                </button>
                                
                                <button type="button" class="btn btn-sm btn-danger" onclick="deleteItem({{ $subcategory->id }})">
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
    <x-edit-modal route="subcategories" />
    
    {{-- delete a subcategory modal --}}
    <x-delete-modal route="subcategories" />
   
@endsection