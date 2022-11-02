<div class="modal fade" id="modal-edit" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        
            <div  class="modal-content" id="edit-form">
                <div class="modal-header">
                    <h5 class="modal-title">Edit item</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <input name="edit-token" value="{{ csrf_token() }}" type="text" style="display: none;">
                    <input class="form-control mb-3" type="text" name="name" id="edit-input">
                </div>
               
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary edit-btn">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    
@section('edit-item-ajax-script')
    <script>
        function editItem(id, name) {
                $('#modal-edit').modal('show')
                
                $('#edit-input').val(name)

                const editRoute = `{{ $route }}`
                
                $('.edit-btn').click(() => {
                    $.ajax(
                    {
                        url: `${editRoute}/${id}`,
                        type: 'put',
                        data: {
                            "id": id,
                            "name": $('#edit-input').val(),
                            "_token": $('input[name=edit-token]').val(),
                            "_method": "put"
                        },
                        success: function (url){
                            window.location = url
                            toastr.success('Success')
                        }
                    });
                })
        }
    </script>
    @endsection
    