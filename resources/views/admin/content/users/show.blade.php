@extends('admin.master')

@section('content') 
    
    <x-breadcrump title="User Details" subtitle="View user details" />
                 
    
    <div class="card">
        <div class="card-body">   
            <a href="admin/users" class="btn btn-primary btn-sm float-end">Back</a>
            
            <div class="row mt-4">
                <div class="col-lg-6">
                    
                    <div class="my-2">
                        <strong>First Name: </strong>
                        <span>{{ $user->account->first_name }}</span>
                    </div>
                    
                    <div class="my-2">
                        <strong>Last Name: </strong>
                        <span>{{ $user->account->last_name }}</span>
                    </div>
                    
                    <div class="my-2">
                        <strong>Email: </strong>
                        <span>{{ $user->email }}</span>
                    </div>
                    
                    <div class="my-2">
                        <strong>Phone number: </strong>
                        <span>{{ $user->account->phone_number }}</span>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="my-2">
                        <strong>Street address: </strong>
                        <span>{{ $user->account->street_address }}</span>
                    </div>
                    
                    <div class="my-2">
                        <strong>City: </strong>
                        <span>{{ $user->account->city }}</span>
                    </div>
                    
                    <div class="my-2">
                        <strong>State: </strong>
                        <span>{{ $user->account->state }}</span>
                    </div>
                    
                    <div class="my-2">
                        <strong>Country: </strong>
                        <span>{{ json_decode($user->account->country, true)['label'] ?? $user->account->country }}</span>
                    </div>
                    
                    <div class="my-2">
                        <strong>Zip Code: </strong>
                        <span>{{ $user->account->zip_code }}</span>
                    </div>
                </div>
        
            </div>
        </div>  
    </div>
  
@endsection