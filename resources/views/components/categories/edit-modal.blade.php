<div class="modal fade" id="edit" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        
            <form method="post" action="" class="modal-content" id="edit-form">
                @csrf @method('put')
              
                <div class="modal-header">
                    <h5 class="modal-title">Edit category name</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
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
       
       const editForm = document.getElementById('edit-form')

       const editId = editBtn.dataset.id
       const name = editBtn.dataset.name
       
       const nameInput = document.getElementById('edit-name')
       
       editForm.action = `/admin/categories/${editId}`
       
       editBtn.addEventListener('click', function () {
           nameInput.value = name;
       })
    </script>