@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="Banners" subtitle="View banners" />
                 
    <a href="{{ route('admin.banners.create') }}" class="btn btn-primary my-3">Add New Banner</a>        
    
    {{-- table --}}
    <div class="card">
        <div class="card-body">
            <table class="table mb-0 table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($banners as $banner)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            <td>
                                <img src="{{ asset('/storage/images/banners/' . $banner->banner_image) }}" alt="" height="80px">
                            </td>
                            <td>
                                <button type="button" class="btn btn-sm btn-danger" id="delete-btn" data-bs-toggle="modal" data-bs-target="#delete" data-id={{ $banner->id }}>
                                    <i class='bx bxs-trash me-0'></i>
									</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    
    {{-- delete banner modal --}}
    <x-delete-modal route="banners" />    
@endsection