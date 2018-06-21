$(function() {
    // alert(1);

    // 发送ajax请求 将产品渲染到页面上
    $.ajax({
        type: 'get',
        url: `${APP.baseUrl}/product/queryProductDetailList`,
        data: {
            page: 1,
            pageSize: 5
        },
        success: function(response) {
            console.log(response);
            // 调模板
            var html = template('productTlp', response);
            // 渲染到页面
            $('#productBox').html(html);
        }
    });

    



})