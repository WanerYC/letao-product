isLogin();
$(function() {
    // alert(1);
    var page = 1;
    var pageSize = 10;

    // 获取二级分类页面的数据
    $.ajax({
        url: `${APP.baseUrl}/category/querySecondCategoryPaging`,
        tyep: 'get',
        data: {
            page: page,
            pageSize: pageSize
        },
        success: function (response) {
            // console.log(response);
            var html = template('categsTlp', {
                list: response,
                api: APP.baseUrl
            })
            // console.log(list.rows);
            $('#categsBox').html(html);
        }
    })

    // 获取一级分类 渲染到弹出框
    $.ajax({
        url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
        tyep: 'get',
        data: {
            page: 1,
            pageSize: 99999
        },
        success: function(response) {
            // console.log(response);
            var html = template('addcategsTlp', response);
            $('#addcategsBox').html(html);
        }
    });
    
    // 添加二级分类
    // 1 上传图片
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            var imgUrl= data._response.result.picAddr;
            $("#showBrand").attr("src",imgUrl);
        }
    });

})