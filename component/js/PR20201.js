$(function () {
	layui.use('laydate', function () {
		var laydate = layui.laydate;
		//自定义格式
		laydate.render({
			elem: '#payDate',
			format: 'yyyy年MM月dd日',
			min: 0
		});
	});
	// 点击制作按钮触发函数，如果时间没有选择那么就会弹出提示框
	$("#toMake").click(function () {
		if (!$("#payDate").val()) {
			console.log(123);
			//配置一个透明的询问框
			layer.msg('日期选择不能为空，请选择请求付款日期', {
				time: 20000, //20s后自动关闭
				btn: ['明白了', '知道了', '哦']
			});
		} else {
			console.log("到这了");
			// 测试页面跳转
			$("#changePage")[0].click();
			console.log(12);
			// 提交表单
			// $("#toPayOrder").submit();
		}
	});
})
