isLogin();

$(function() {

    var page = 1;
    var pageSize = 10;
    // alert(1);
    $.ajax({
        type: 'get',
        url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
        data: {
            page : page,
            pageSize : pageSize
        },
        success: function(response) {
            console.log(response);
            var html = template('categTpl', response);
            $('#categBox').html(html);
        }
    });

});