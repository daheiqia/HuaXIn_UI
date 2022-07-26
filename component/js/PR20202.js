$(function(){
	layui.use('table', function(){
	  var table = layui.table;
	    table.render({
	      elem: '#test'
	      ,url:'/static/json/table/user.json'
	      ,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
	        layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
	        //,curr: 5 //设定初始在第 5 页
	        ,groups: 1 //只显示 1 个连续页码
	        ,first: false //不显示首页
	        ,last: false //不显示尾页
	        
	      },
		  })
	});
	$("#goBack").click(function(){
		window.history.go(-1);
	});
})