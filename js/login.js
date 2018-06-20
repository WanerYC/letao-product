$(function() {

    /* 
        1 为登录按钮添加点击事件
        2 获取用户输入的用户名和密码
        3 对用户提交的信息格式进行处理
        4 处理完成后发送ajax
    
    */
    //  alert(1);
    // 点击事件
    $('#loginBtn').on('click', function() {

        var result = $('#loginForm').serializeToJson();
        console.log(result);

        if (!$.trim(result.username)){
            alert('请输入用户名');
            return;
        }
        if (!$.trim(result.password)){
            alert('请输入密码');
            return;
        }

        $.ajax({
            type: 'post',
            url : `${APP.baseUrl}/employee/employeeLogin`,
            data: result,
            success: function(response) {
                // console.log(response);
                if(response.success) {
                    alert('登录成功');
                    location.href = 'user.html';
                }else {
                    alert(response.message);
                }
            }
        })
    });


});