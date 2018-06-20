
function isLogin () {
    // 发送ajax 判断是否登录
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
    })

}
