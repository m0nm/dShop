  <div class="modal fade" id="delete" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        
            <form method="post" action="" class="modal-content" id="delete-form">
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
       
       const deleteForm = document.getElementById('delete-form')
       
       deleteForm.action = `/admin/categories/${deleteId}`
      
       deleteBtn.addEventListener('click', function () {
        })
    </script>