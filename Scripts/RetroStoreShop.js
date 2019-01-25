
$('#btnSubmit').on('click', this, function () {
    var productName = $('#productName').val();
    var description = $('#description').val();
    var quantity = $('#quantity').val();
    var price = $('#price').val();

    var files = $('#fileToUpload')[0].files;

    var data = new FormData();

    data.append("file", files[0]);
    data.append("productName", productName);
    data.append("description", description);
    data.append("quantity", quantity);
    data.append("price", price);

    $.ajax({
        type: 'POST',
        url: 'AddNewProduct',
        contentType: false,
        processData: false,
        data: data,
        success: function (redirect) {
            if (redirect != '') {
                window.location.href = redirect;
            }              
        },
        error: function (e) {
            
        }
    });
});
