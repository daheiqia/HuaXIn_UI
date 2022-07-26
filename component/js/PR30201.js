$(function(){
	$("#searchGoods").click(function(){
		if(!$("#goodId").val()){
			//配置一个透明的询问框
			layer.msg('商品编号不能为空', {
				time: 20000, //20s后自动关闭
				btn: ['明白了']
			});
		}
	})
	$("#reloadView").click(function(){
		window.location.reload();
	})
	$("#inputNumber").blur(function(){
		var inputNumber = $(this).val();
		//+表示至少一个数字，不限上限
		var reg = /^\d+$/;
		if (!inputNumber) {
			//配置一个透明的询问框
			layer.msg('请输入入库数量', {
				time: 20000, //20s后自动关闭
				btn: ['知道了']
			});
			$("#updateGood").addClass("layui-btn-disabled");
		} else if (!reg.test(inputNumber)) {
			//配置一个透明的询问框
			layer.msg('入库数量只能为半角数字', {
				time: 20000, //20s后自动关闭
				btn: ['知道了']
			});
				$("#updateGood").addClass("layui-btn-disabled");
		} else {
			var n = parseInt(inputNumber);
			if (n < 1 || n > 9999) {
				//配置一个透明的询问框
				layer.msg('入库数量必须是数字，且范围1-9999', {
					time: 20000, //20s后自动关闭
					btn: ['知道了']
				});
			$("#updateGood").addClass("layui-btn-disabled");
			}else{
				$("#updateGood").removeClass("layui-btn-disabled");
			}
		}
	})
})