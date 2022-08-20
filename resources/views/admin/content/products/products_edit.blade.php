@extends('admin.master')

@section('content')

    <x-breadcrump title="Products" subtitle="Edit product" />

    <div class="card">
        <div class="card-body p-4">
            <h5 class="card-title">Edit Product</h5>

            <hr>

            <form method="post" action="{{ route('admin.products.update', $product->id) }}" class="form-body mt-4" enctype="multipart/form-data" >
                @csrf @method('put')
           
            <div class="row">
                
                <div class="col-lg-8">
                    
                    <div class="border border-3 p-4 rounded">
                        
                            <div class="mb-3">
                                <label for="name" class="form-label">Product Name</label>
                                
                                @error('name')
                                    <p class="text-danger text-sm">{{ $message }}</p>
                                @enderror
                                
                                <input name="name" value="{{ $product->name }}" type="text" class="form-control" id="name" placeholder="Enter product name">
                            </div>
                            
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                               
                                @error('description')
                                    <p class="text-danger text-sm">{{ $message }}</p>
                                @enderror
                               
                                <textarea name="description" id="description" >{{ $product->description }}</textarea>
                            </div>
                            
                           <div class="my-5">
                                <label class="form-label">Product Image Gallery</label>
                                
                                @error('images')
                                    <p class="text-danger text-sm">{{ $message }}</p>
                                @enderror

                                <input type="file" name="images[]" id="image-input" accept="image/*" multiple>
                                
                                {{-- product images preview --}}
                                <div id="preview-container" class="d-flex flex-wrap gap-2 border mt-3">
                                    @foreach (explode(',', $product->images) as $image)
                                        <img src="{{asset('storage/images/products/' . $image) }}" alt="" height="140px">
                                    @endforeach
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                        {{-- end --}}
                        
                        
                        

                        <div class="col-lg-4">
                            <div class="border border-3 p-4 rounded">
                        
                                <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="price" class="form-label">Price</label>
                                    
                                    @error('price')
                                    <p class="text-danger text-sm">{{ $message }}</p>
                                    @enderror
                                    
                                    <input name="price" value="{{ $product->price }}" type="number" class="form-control" id="price" placeholder="00.00">
                                </div>
                    
                                <div class="col-md-6">
                                    <label for="sale-price" class="form-label">
                                        Sale Price 
                                        <span style="font-size: 12px">(optional)</span>
                                    </label>                              
                                       
                                    <input name="sale_price" value="{{ $product->sale_price }}" type="number" class="form-control" id="sale-price" placeholder="00.00">
                                </div>
                                
                                <div class="col-md-6">
                                    <label for="stocks" class="form-label">Stocks</label>
                                    
                                    @error('stock')
                                    <p class="text-danger text-sm">{{ $message }}</p>
                                    @enderror
                                    
                                    <input name="stock" value="{{ $product->stock }}" type="number" min="0" class="form-control" id="stocks" placeholder="10">
                                </div>
    
                                <div class="col-12">
                                    <label for="category_id" class="form-label">Category</label>
                                    
                                    @error('category_id')
                                    <p class="text-danger text-sm">{{ $message }}</p>
                                    @enderror
                                    
                                    <select name="category_id" class="form-select" id="category_id">
                                        <option value="">select category</option>
                                         
                                        @foreach ($categories as $category)
                                        <option {{ $product->category->name === $category->name ? 'selected' : '' }} value={{ $category->id }}>{{ $category->name }}</option>
                                        @endforeach
                                        </select>
                                </div>

                                <div class="col-12">
                                    <label for="subcategory" class="form-label">
                                        Subcategory
                                        <span style="font-size: 12px">(optional)</span>
                                        
                                    </label>
                                   
                                    <select name="subcategory" class="form-select" id="subcategory">
                                        <option value="">none</option>
                                        
                                        @foreach ($subcategories as $subcategory)
                                        <option {{ $product->subcategory->name === $subcategory->name ? 'selected' : '' }} value={{ $subcategory->id }}>{{ $subcategory->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                              
                                <div class="col-12">
                                    <label for="condtion" class="form-label">condition</label>
                                   
                                    @error('condition')
                                    <p class="text-danger text-sm">{{ $message }}</p>
                                    @enderror
                                    
                                    <select name="condition" class="form-select" id="condtion">
                                        <option  value="">select condition</option>
                                        <option {{ $product->condition === 'default' ? 'selected' : '' }} value="default">default</option>
                                        <option {{ $product->condition === 'new' ? 'selected' : '' }} value="new">new</option>
                                        <option {{ $product->condition === 'featured' ? 'selected' : '' }} value="featured">featured</option>
                                    </select>
                                </div>
                               
                                <div class="col-12">
                                    <label for="status" class="form-label">Status</label>
                                   
                                    <select name="status" class="form-select" id="status">
                                        <option {{ $product->status === 'active' ? 'selected' : '' }} value="active">active</option>
                                        <option {{ $product->status === 'inactive' ? 'selected' : '' }} value="inactive">inactive</option>
                                    </select>
                                </div>
                        
                            </div> 
                            </div>
                        </div>
                        {{-- end --}}
                        
                        
                        
                        
                        <div class="col-lg-12">
                            <div class="border border-3 p-4 rounded mt-3">
                                <label for="" class="form-label">Product attributes (optional)</label>
                              
                                @error('attributes')
                                    <p class="text-danger text-sm">{{ $message }}</p>
                                @enderror
                                
                                <table class="table table-bordered" id="dynamicTable">  
                                    <tr>
                                        <th>Name</th>
                                        <th class="col-lg-6">Value (seperate with column)</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>  
                                        <td>
                                            <select class="form-select" id="attribute_name">
                                                @foreach ($attributes as $attribute)
                                                    <option value="{{ $attribute->name }}">{{ $attribute->name }}</option>
                                                @endforeach
                                            </select>
                                        </td>  
                                        
                                        <td>
                                            <input id="attribute_value" data-role="tagsinput" style="widows: 100%">
                                        </td>  
                                        
                                        <td>
                                            <button type="button" name="add" id="add-attribute" class="btn btn-success">Add</button>
                                        </td>  
                                    </tr>  
                                    
                                    @php
                                        // its 100 so javascript array indexes do not override php array indexes
                                        $i = 100
                                    @endphp
                                    @foreach ($product->attributes as $product_attribute)
                                    {{ $i++ }}
                                        <tr class="my-2">
                                            <td>
                                            <input type="text" name="attributes[{{ $i }}][name]" value="{{ $product_attribute->name }}" class="form-control" readonly />
                                            </td>
                                            
                                            <td>
                                            <input type="text" name="attributes[{{ $i }}][value]" value="{{ $product_attribute->pivot->value }}" class="form-control" readonly />
                                            </td>
                                            
                                            <td>
                                            <button type="button" class="btn btn-danger remove-tr bg-danger">Remove</button>
                                            </td>
                                        </tr>
                                    @endforeach
                                </table> 
                            </div>
                        </div>
                        {{-- end --}}
                        
                        
                        
                        <div class="col-12">
                                    <div class="text-end">
                                        <button class="btn btn-primary">Edit Product</button>
                                    </div>
                                </div>
                    </div><!--end row-->
            </form>
        </div>
    </div>
    
    
    {{-- previw image --}}
    <script type="text/javascript">

        window.addEventListener('load', function () {
        
        const input = document.getElementById('image-input')
        const previewContainer = document.getElementById('preview-container')
        const submit = document.getElementById('submit')
        
        input.addEventListener('change', (event) => {
        
         previewContainer.innerHTML = ""            
            
         const {files} = event.target
         
         files.forEach(file => {
            const image = document.createElement('img') 
                          
            image.style.height = "140px"; 
            image.src = URL.createObjectURL(file);
            
            previewContainer.appendChild(image) 
                       
            file.onload = function() {
                    URL.revokeObjectURL(image.src) // free memory
            }
         })
        })
    })
    </script>
    
    {{-- description editor --}}
    <script src="https://cdn.tiny.cloud/1/vdqx2klew412up5bcbpwivg1th6nrh3murc6maz8bukgos4v/tinymce/5/tinymce.min.js" referrerpolicy="origin">
	</script>
    <script>
		tinymce.init({
		  selector: '#description'
		});
	</script>

@endsection

@section('scripts') 
    {{-- input tags --}}
    <script src="{{ asset('admin/assets/plugins/input-tags/js/tagsinput.js') }}"></script>

    {{-- add product attribute field --}}
    <script type="text/javascript">
    
        let i = 0;
        
        $("#add-attribute").click(function(){
            if($('#attribute_value').val()) {
            
                i++
        
                $("#dynamicTable").append(
                `
                <tr class="my-2">
                <td>
                <input type="text" name="attributes[${i}][name]" value="${$('#attribute_name').val()}" class="form-control" readonly />
                </td>
                
                <td>
                <input type="text" name="attributes[${i}][value]" value="${$('#attribute_value').val()}" class="form-control" readonly />
                </td>
                
                <td>
                <button type="button" class="btn btn-danger remove-tr bg-danger">Remove</button>
                </td>
                </tr>`)
            }
                
            });
    
        $(document).on('click', '.remove-tr', function(){  
            $(this).parents('tr').remove();
        });  
    
    </script>
@endsection