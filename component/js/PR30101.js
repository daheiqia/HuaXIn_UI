$(function () {
	var date1 = new Date();
	var date = new Date(date1.getTime() + 1000 * 60 * 60 * 24);
	var year = date.getFullYear();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var nowDate = year + "年" + month + "月" + day + "日"
	layui.use('laydate', function () {
		var laydate = layui.laydate;
		//初始赋值
		laydate.render({
			elem: '#delivery',
			value: nowDate,
			isInitValue: true,
			format: 'yyyy年MM月dd日',
			min: 0
		});
	});
	function checkAllBox() {
		var isTrue = false;
		console.log($("input[type=checkbox]"));
		$("input[type=checkbox]").each(function (index, ele) {
			if ($(ele).is(":checked")) {
				isTrue = true;
				return isTrue;
			}
		})
		return isTrue;
	}
	$("#checkAllBox").click(function () {
		var a = checkAllBox();
		if (!a) {
			//配置一个透明的询问框
			layer.msg('请选择一个商品后再发行', {
				time: 20000, //20s后自动关闭
				btn: ['明白了']
			});
		} else {
			// 页面跳转测试
			console.log("我到这了");
			$("#changePage1").click();
		}
	})
})