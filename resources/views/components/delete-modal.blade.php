<div class="modal fade" id="modal-delete" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        
            <div class="modal-content" >
              
                <div class="modal-header">
                    <h5 class="modal-title">Delete item</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <input name="delete-token" value="{{ csrf_token() }}" type="text" style="display: none;">
                    
                    <div class="text-center">
                        <i class='bx bx-error text-danger' style="font-size: 80px"></i>
                        
                        <p class="fs-5">Are you sure you want to delete this?</p>
                    </div>
                </div>
               
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-danger delete-btn">Delete</button>
                </div>
            </div>
        </div>
    </div>
    
@section('delete-item-ajax-script')
    <script>
        function deleteItem(id) {
                $('#modal-delete').modal('show')

                var token = $("meta[name='csrf-token']").attr("content");
                const deleteRoute = `{{ $route }}`
                
                $('.delete-btn').click(() => {
                    $.ajax(
                    {
                        url: `${deleteRoute}/${id}`,
                        type: 'DELETE',
                        data: {
                            "id": id,
                            "_token": $('input[name=delete-token]').val(),
                        },
                        success: function (url){
                            window.location = url
                        }
                    });
                })
        }
    </script>
    @endsection
    