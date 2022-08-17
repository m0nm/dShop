@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="Products" subtitle="View Product attributes" />
                 
    <a href="{{ route('admin.product_attributes.create') }}" class="btn btn-primary my-3">Add New Product Attribute</a>        
    
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
                    @foreach ($attributes as $attribute)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            
                            <td>
                                {{ $attribute->name }}
                            </td>
                            
                            <td>
                                 <button type="button" class="btn btn-primary btn-sm" onclick="editItem({{ $attribute->id }}, '{{ $attribute->name }}')">
                                    <i class='bx bxs-pencil me-0'></i>
                                </button>
                                
                                <button type="button" class="btn btn-sm btn-danger" onclick="deleteItem({{ $attribute->id }})">
                                    <i class='bx bxs-trash me-0'></i>
								</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    
    {{-- delete attribute modal --}}
    <x-edit-modal route="product_attributes" />    
    
    {{-- delete attribute modal --}}
    <x-delete-modal route="product_attributes" />    
@endsection