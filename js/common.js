$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});

// 运行发送cookie
$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});

// 全局配置
var  APP = {
	// 基础路径
	baseUrl: 'http://fullstack.net.cn:3000'
}

//  封装获取地址栏中的信息 -- 在编辑地址的页面中用来判断是否是编辑 取决于是否有id
function getUrl (name) {
	var search = location.search.slice(1);
	var ary1 = search.split('&');
  
	for(var i = 0; i < ary1.length; i++) {
	  var ary2 = ary1[i].split('=');
	  if(ary2[0] == name) {
		return ary2[1];
	  }
	}
	return -1;
  }

// $.fn 对象方法
// $.each 工具方法
// 将表单数据以json形式返回
$.fn.serializeToJson = function () {
	// serializeArray 这是一个方法
	var formAry = this.serializeArray();
	// console.log(formAry);
  
	var result = {};
  
	formAry.forEach(function (item) {
	  result[item.name] = item.value;
	})
  
	// console.log(result);
	return result;
  }