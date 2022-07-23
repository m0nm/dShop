@extends('admin.master')

@section('content')

        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
					<div class="breadcrumb-title pe-3">Settings</div>
					<div class="ps-3">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb mb-0 p-0">
								<li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="bx bx-home-alt"></i></a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">Change Settings</li>
							</ol>
						</nav>
					</div>
					
				</div>

                
         <div class="col-lg-8 mt-5 mx-auto">
         {{-- email --}}
        <h5 class="my-3">Change Email</h5>
         
        <div class="card">
            <form method="post" action={{ route('admin.changeEmail') }} class="card-body">
                @csrf
                
                @error('email') 
                <p class="text-danger">{{ $message }}</p>
                @enderror
            
                {{-- email --}}
                <div class="row mb-3 place-items-center">
                    <div class="col-sm-3 align-center">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="email" name="email" value="{{ $email }}" class="form-control">
                    </div>
                </div>
                
                <button class="btn btn-primary">Save Email</button> 
            </form>
        </div>
        
        
        {{-- password change --}}
                        
            <h5 class="mt-5 mb-3">Change Password</h5>
            
            <div class="card">
                <form method="post" action={{ route('admin.resetPassword') }} class="card-body">
                    @csrf
                    
                    
                    @error('old_password') 
                    <p class="text-danger">{{ $message }}</p>
                    @enderror
                    
                    {{-- current password --}}
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Current Password</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input type="password" name="old_password" class="form-control">
                        </div>
                    </div>
                    
                    @error('password') 
                    <p class="text-danger">{{ $message }}</p>
                    @enderror
                    
                    {{-- password --}}
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">New Password</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input type="password" name="password" class="form-control">
                        </div>
                    </div>
                    
                    {{-- condirm password --}}
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Confirm Password</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input type="password" name="password_confirmation" class="form-control">
                        </div>
                    </div>
                    
                    <button class="btn btn-primary">Save Password</button>
                    
                </form>
            </div>    
         </div>       
            
        </div>

@endsection
