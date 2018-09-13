<script type="text/javascript">
		// 一般我们习惯将使用的对象提前保存在变量
		// 类数组对象保存也是元素对象


		// 第一步获取对象
		var $lis = $("#carousel ul li");
		var $leftBtn = $("#leftBtn");
		var $rightBtn = $("#rightBtn");
		var amount = $lis.length;
		// console.log(amount);

		// 信号量 表示Li序号0,1,2,3,4,5,6
		var index = 0;

		// 右按钮点击事件
		$rightBtn.click(function(){
			// 当前图片淡出
			$lis.eq(index).fadeOut(800);
			// 信号量改变
			index ++;
			// 验证信号量
			if(index > amount - 1){
				index = 0;
			}
			console.log(index);
			// 新图淡入
			$lis.eq(index).fadeIn(800);
		});

		// 左按钮点击事件
		$leftBtn.click(function(){
			// 当前图片消失
			$lis.eq(index).fadeOut(800);
			// 信号量改变
			index --;
			// 后验证
			if(index < 0){
				index = amount - 1;
			}
			// 新图淡入
			$lis.eq(index).fadeIn(800);
		});
		
	</script>