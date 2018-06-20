isLogin();

$(function() {

    var page = 1;
    var pageSize = 5;
    var totalP = 0;

    // 渲染页面
    getData();

    // 分页效果
    $('#prv').on('click', function() {
        //  alert(1); 
        page--;
        if (page < 1) {
            page = 1;
            alert('已经到第一页了,亲');
            return;
        }
        getData();  
    });
    $('#next').on('click', function() {
        // alert(2);
        page++;
        if (page > totalP) {
            page = totalP;
            alert('已经到最后一页了,亲');
            return;
        }
        getData();
    });

    
    function getData () {
        $.ajax({
            type: 'get',
            url: `${APP.baseUrl}/category/queryTopCategoryPaging`,
            data: {
                page : page,
                pageSize : pageSize
            },
            success: function(response) {
                // console.log(response);
                /* if (response.success) { */
                    console.log(response);
                    var html = template('categTpl', response);
                    $('#categBox').html(html);
               /*  }else {
                    alert(response.message);
                } */
                totalP = Math.ceil(response.total / pageSize);
            }
        });
    }
});