@extends('admin.master')

@section('content')
    
    <x-breadcrump title="Banners" subtitle="Add new banners" />
            
    <div class="card">
        <div class="card-body">
            <form method="post" action="{{ route('admin.banners.store') }}" enctype="multipart/form-data">
                @csrf
                
                <h5 class="my-3">Add New Banner</h5>
            
                @error('image')
                    <p class="text-danger">{{ $message }}</p>
                @enderror
                
                <input  type="file" id="image" name="image" accept="image/*" style="display: none;" />
                
                <div class="imageuploadify well">
                    <div class="imageuploadify-overlay">
                        <i class="fa fa-picture-o"></i>
                    </div>
                    
                    <div class="imageuploadify-images-list text-center">
                        <i class="bx bxs-cloud-upload"></i>

                        <label for="image" class="btn btn-default" style="background: white; color: rgb(58, 160, 255); border: 1px solid;">
                            Upload Banner
                        </label>
                        </div>
                    </div>

                    <div class="border mt-3">
                            <img id="preview" src="" class="d-block" alt="preview image">
                            <button id="submit" class="btn btn-primary ms-auto me-4 my-4" style="display: none;">Upload</button>
                    </div>
                    
            </form>
        </div>
    </div>
    
    <script type="text/javascript">
        
        window.addEventListener('load', function () {
            
            const image = document.getElementById('image')
            const preview = document.getElementById('preview')
            const submit = document.getElementById('submit')
            
            image.addEventListener('change', () => {
                
               preview.style.display = "block"; 
               preview.style.maxHeight = "340px"; 
               preview.src = URL.createObjectURL(event.target.files[0]);
               
               submit.style.display = "block"

               preview.onload = function() {
                    URL.revokeObjectURL(preview.src) // free memory
                }
            })
            
        })
</script>
    
    @endsection