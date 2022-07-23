@extends('admin.master')

@section('content') 
    
     <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Categories</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">View categories</li>
                        </ol>
                    </nav>
                </div>
			</div>

            
    <a href="{{ route('admin.categories.new') }}" class="btn btn-primary my-3">Add New Category</a>        
    
    {{-- form --}}
    <div class="card">
        <div class="card-body">
            <table class="table mb-0 table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($categories as $category)
                        <tr>
                            <th scope="row">{{ $loop->iteration }}</th>
                            <td>{{ $category->name }}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-sm" id="edit-btn" data-bs-toggle="modal" data-bs-target="#edit" data-id={{ $category->id }} data-name="{{ $category->name }}">
                                    <i class='bx bxs-pencil me-0'></i>
                                </button>
                                
                                <button type="button" class="btn btn-sm btn-danger" id="delete-btn" data-bs-toggle="modal" data-bs-target="#delete" data-id={{ $category->id }}>
                                    <i class='bx bxs-trash me-0'></i>
									</button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    
    {{-- edit a category modal --}}
    <div class="modal fade" id="edit" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        
            <form method="post" action={{ route('admin.editCategory') }} class="modal-content">
                @csrf
              
                <div class="modal-header">
                    <h5 class="modal-title">Edit category name</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <input style="display: none;" name="id" id="edit-id">
                    <input class="form-control mb-3" type="text" name="name" id="edit-name" placeholder="Enter category name" aria-label="Enter category name">
                </div>
               
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
    </div>
    
     <script>
       const editBtn = document.getElementById('edit-btn')
       
       const editId = editBtn.dataset.id
       const name = editBtn.dataset.name
       
       const editIdInput = document.getElementById('edit-id')
       const nameInput = document.getElementById('edit-name')
       
       editBtn.addEventListener('click', function () {
           editIdInput.value = editId;
           nameInput.value = name;
           
       })
    </script>
    
    {{-- delete category modal --}}
      <div class="modal fade" id="delete" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        
            <form method="post" action={{ route('admin.deleteCategory') }} class="modal-content">
                @csrf @method('delete')
              
                <div class="modal-header">
                    <h5 class="modal-title">Delete a category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    
                    <div class="text-center">
                        <i class='bx bx-error text-danger' style="font-size: 80px"></i>
                        
                        <p class="fs-5">Are you sure you want to delete this?</p>
                    </div>
                    
                    <input style="display: none;" name="id" id="delete-id">
                </div>
               
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-danger">Delete</button>
                </div>
            </form>
        </div>
    </div>
    
    <script>
       const deleteBtn = document.getElementById('delete-btn')
       
       const deleteId = deleteBtn.dataset.id
       
       const deleteIdInput = document.getElementById('delete-id')
      
       deleteBtn.addEventListener('click', function () {
           deleteIdInput.value = deleteId;
        })
    </script>

@endsection