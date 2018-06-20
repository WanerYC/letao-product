isLogin();

$(function() {

    var page = 1;
    var pageSize = 5;
    var totalP = 0;

    // 渲染页面
    getData();

    // 分页效果
    // 上一页
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
    // 下一页
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

    // 获取数据
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

    // 添加一级分类
    $('#saveCateg').on('click', function() {
        // alert(3424);
        var categoryName = $('#categoryName').val();
        // console.log(categoryName);
        if (!categoryName) {
            alert('请输入分类名称');
            return;
        }

        // 发送ajax
        $.ajax({
            type: 'post',
            url: `${APP.baseUrl}/category/addTopCategory`,
            data: {
                categoryName: categoryName
            },
            success: function (response) {
                // console.log(response);
                if (response.success) {
                    location.reload();
                }else {
                    alert('新增失败');
                }
            }
        })
    });
});