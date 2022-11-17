@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="Order Details" subtitle="View order details" />
                 
<div class="row gx-3">
    <div class="card col-lg-6">
        <div class="card-body">
            <h3 class="fs-3">Order:</h3>
            
                <table class="table mb-0 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col"></th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($order->orderItems as $item)
                        
                            <tr>
                            <td scope="row">
                                    <img src="{{ asset('storage/images/products/' . explode(',',$item->product->images)[0]) }}" width="60" height="60" >    
                            </td>
                            
                            <td>{{ $item->product->name }}</td>
                            <td>{{ $item->quantity}}</td>
                            <td>${{ $item->price }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            
                <div class="mt-5 ">
                    <h5>Total Price: 
                        <strong class="float-end">
                            ${{ $order->total_price }}
                        </strong>
                    </h5>
                </div>
        </div>
    </div>
    
    <div class="card col-lg-6">
        <div class="card-body">
            <h3 class="fs-3 mb-4">Shipping:</h3>
            
            
            <div class="my-2">
                <strong>First Name: </strong>
                <span>{{ $order->first_name }}</span>
            </div>
            
            <div class="my-2">
                <strong>Last Name: </strong>
                <span>{{ $order->last_name }}</span>
            </div>
            
            <div class="my-2">
                <strong>Email: </strong>
                <span>{{ $order->email }}</span>
            </div>
            
            <div class="my-2">
                <strong>Phone number: </strong>
                <span>{{ $order->phone_number }}</span>
            </div>
            
            <div class="my-2">
                <strong>Shipping address: </strong>
                <span>{{ $order->street_address }}</span>
                <span>{{ $order->city }}</span>
                <span>{{ $order->state }}</span>
                <span>{{ json_decode($order->country, true)['label'] ?? $order->country }}</span>
            </div>
            
            <div class="my-2">
                <strong>Zip Code: </strong>
                <span>{{ $order->zip_code }}</span>
            </div>
            
            
            <div class="mt-5">
                <form action="{{ route('admin.orders.update', $order->id) }}" method="post" >
                    @csrf @method('put')
                    
                    <label for="order-status" class="form-label" >Order Status</label>

                    <select name="order-status" id="order-status" class="form-select">
                        <option {{ $order->status === 'pending' ? 'selected' : '' }} value="pending">pending</option>
                        <option {{ $order->status === 'delivered' ? 'selected' : '' }} value="delivered">delivered</option>
                        <option {{ $order->status === 'cancelled' ? 'selected' : '' }} value="cancelled">cancelled</option>
                    </select>
                    
                    <button class="btn btn-primary mt-3 float-end">Update</button>
                </form>
            </div>
        </div>
    </div>
</div>    
  
@endsection