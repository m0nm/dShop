@extends('admin.master')

@section('content')
     <x-breadcrump title="Products" subtitle="Product details" />
     
     <h5>Product Details</h5>
     
     <div class="card">
         
         <div class="card-body">
             <label class="form-label">Product attributes</label>
             
             <table class="table table-hover">
                 <thead>
                     <tr>
                         <th scope="col">Name</th>
                         <th scope="col">Value</th>
                        </tr>
                 </thead>
                 
                 <tbody>
                     @foreach ($product->attributes as $attribute)
                         <tr>
                             <td>{{ $attribute->name }}</td>
                             <td>{{ $attribute->pivot->value }}</td>
                            </tr>
                     @endforeach
                 </tbody>
             </table>
             
             
         </div>
        </div>
        
    <div class="card">
        
        <div class="card-body">
            <label class="form-label">Product image gallery</label>
            
            <div class="row gap-3">
                @foreach (explode(',', $product->images) as $image)
                    <img src="{{ asset('storage/images/products/' . $image) }}" class="col-lg-3" alt="">
                @endforeach
            </div>
            
        </div>
     </div>
@endsection