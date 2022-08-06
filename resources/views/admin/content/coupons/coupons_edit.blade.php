@extends('admin.master')

@section('content')
    
    <x-breadcrump title="Coupons" subtitle="Add new coupons" />
            
    <div class="card">
        <div class="card-body">
            <form method="post" action="{{ route('admin.coupons.update', $coupon->id) }}">
                @csrf @method('put')
                
                <h5 class="my-3">Add New Coupon</h5>
                
                <div class="mt-2">
                    @error('code')
                    <p class="text-danger">{{ $message }}</p>
                    @enderror
                    
                    <label for="code" class="form-label">Code</label>
                    
                    <input value="{{ $coupon->code }}" type="text" name="code" id="code" class="form-control" oninput="this.value = this.value.toUpperCase()" />
                </div>
             
                <div class="mt-2">
                    @error('value')
                    <p class="text-danger">{{ $message }}</p>
                    @enderror
                    
                    <label for="value" class="form-label">Value</label>
                    
                    <input value="{{ $coupon->value }}" type="text" name="value" id="value" class="form-control" />
                </div>
           
           
                <div class="mt-2">
                    @error('type')
                    <p class="text-danger">{{ $message }}</p>
                    @enderror
                    
                    <label for="type" class="form-label">Type</label>
                    
                     <select name="type" id="type" class="form-select">
                        <option {{ $coupon->type === 'fixed' ? 'selected' : '' }} value="fixed">fixed</option>
                        <option {{ $coupon->type === 'percenet' ? 'selected' : '' }} value="percent">percent</option>
                    </select>
                </div>
                
                 <div class="mt-2"v>
                    @error('status')
                    <p class="text-danger">{{ $message }}</p>
                    @enderror
                    
                    <label for="status" class="form-label">Status</label>
                    
                    <select name="status" id="status" class="form-select">
                        <option {{ $coupon->type === 'active' ? 'selected' : '' }}  value="active">active</option>
                        <option {{ $coupon->type === 'inactive' ? 'selected' : '' }}  value="inactive">inactive</option>
                    </select>
                </div>
                
                
                <div class="mt-3 text-end">
                    <button id="submit" class="btn btn-primary ms-auto me-4 my-4">Save</button>
                </div>
            </form>
        </div>
    </div>
    
@endsection