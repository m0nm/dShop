@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="Coupons" subtitle="View coupons" />
                 
    <a href="{{ route('admin.coupons.create') }}" class="btn btn-primary my-3">Add New Coupon</a>        
    
    {{-- table --}}
    <div class="card">
        <div class="card-body">
            <table class="table mb-0 table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Code</th>
                        <th scope="col">Value</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($coupons as $coupon)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>

                           <td>{{ $coupon->code }}</td>
                           <td>{{ $coupon->value }}</td>
                           <td>{{ $coupon->type }}</td>
                           <td>{{ $coupon->status }}</td>

                           <td>
                                 <a href="{{ route('admin.coupons.edit', $coupon->id) }}" type="button" class="btn btn-primary btn-sm" >
                                    <i class='bx bxs-pencil me-0'></i>
                                </a>   
                            
                                <button type="button" class="btn btn-sm btn-danger" id="delete-btn" data-bs-toggle="modal" data-bs-target="#delete" data-id={{ $coupon->id }}>
                                    <i class='bx bxs-trash me-0'></i>
                                </button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    
    {{-- delete coupon modal --}}
    <x-delete-modal route="coupons" />    
@endsection