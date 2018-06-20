/* // 发送ajax 判断是否登录
$.ajax({
    type: 'get',
    async: false,
    url:  `${APP.baseUrl}/employee/checkRootLogin`,
    success: function(response) {
        // console.log(response);
        if (response.message) {
            alert(response.message);
            location.href = 'login.html';
        }
    }
}) */

isLogin();

$(function() {
    /* 
        查询用户 展示用户

    */
    // alert(1);
    var page = 1;
    var pageSize = 50;

    $.ajax({
        type: 'get',
        url: `${APP.baseUrl}/user/queryUser`,
        data: {
            page : page,
            pageSize : pageSize
        },
        success: function (response) {
            // console.log(response);
            var html = template('userTpl', response);
            $('#userBox').html(html);
        }
    })

    $('#userBox').on('click','#statusBtn', function () {
        // alert(1);
        var id = $(this).data('user-id');
        console.log(id);
        var isDelete = $(this).data('uesr-isdelete');
        console.log(isDelete);

        $.ajax({
            type: 'post',
            url: `${APP.baseUrl}/user/updateUser`,
            data: {
                id: id,
                isDelete : isDelete == 1 ? 0 : 1
            },
            success: function (response) {
                console.log(response);
                if (response.success) {
                    alert('状态修改成功');
                    location.reload();
                }else {
                    alert(response.message);
                }
            }
        })
    });

})

