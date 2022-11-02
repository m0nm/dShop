@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="Orders" subtitle="View orders" />
                 
    
    {{-- table --}}
    <div class="card">
        <div class="card-body">
            <table class="table mb-0 table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Tracking No</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($orders as $order)
                        <tr>
                            <td scope="row">{{ $loop->iteration }}</td>

                           <td>{{ date('d-m-y', strtotime($order->created_at)) }}</td>
                           <td>{{ $order->tracking_no }}</td>
                           <td>${{ $order->total_price }}</td>
                           <td><strong>{{ $order->status }}</strong></td>

                           <td>                 
                                <a href="{{ route('admin.orders.show', $order->id) }}" class="btn btn-sm btn-info">
                                    View
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
  
@endsection