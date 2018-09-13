//轮播图
      // 获取元素
        var $carousel = $("#carousel");
        var $imgLists = $("#imgList ul li");
        var $leftBtn = $("#leftBtn");
        var $rightBtn = $("#rightBtn");
        var $circles = $("#circles ol li");
        var amount = $imgLists.length;


        // 定时器
        var timer = setInterval(rightFun, 3000);
        // 鼠标进入大盒子关闭定时器
        $carousel.mouseenter(function(){
            clearInterval(timer);
        });
        // 鼠标离开重新开启定时器
        $carousel.mouseleave(function(){
            // 设表先关
            clearInterval(timer);
            timer = setInterval(rightFun, 3000);
        });


        // 信号量
        var index = 0;
        // 右按钮的点击事件
        $rightBtn.click(rightFun);
        // 右按钮的声明
        function rightFun(){
            // 防流氓
            if($imgLists.is(":animated")){
                return;
            }
            // 老图淡出
            $imgLists.eq(index).fadeOut(1500);

            // 信号量改变
            index ++;
            // 后验证
            if(index > amount - 1){
                index = 0;
            }

            // 新图淡入
            $imgLists.eq(index).fadeIn(1500);
            // 小圆点改变
            $circles.eq(index).addClass("cur").siblings().removeClass("cur");
        }



        // 左按钮点击事件
        $leftBtn.click(function(){
            // 当图片不运动时，执行内部函数
            if(!$imgLists.is(":animated")){
                // 老图淡出
                $imgLists.eq(index).fadeOut(1500);
                // 信号量改变
                index --;
                if(index < 0){
                    index = amount - 1;
                }
                // 新图淡入
                $imgLists.eq(index).fadeIn(1500);
                // 小圆点改变
                $circles.eq(index).addClass("cur").siblings().removeClass("cur");
            }
        });

        // 小圆点的事件
        $circles.mouseenter(function(){
            // 老图淡出
            $imgLists.eq(index).stop(true).fadeOut(1500);
            // 信号量改变
            index = $(this).index();
            // 新图淡入
            $imgLists.eq(index).stop(true).fadeIn(1500);
            // 小圆点改变
            $(this).addClass("cur").siblings().removeClass("cur");
        });


		//购票
		// 获取元素
		var $replace = $("#replace");
		var $placelist = $("#placelist");
		// 新图淡入
		$replace.mouseenter(function(){
			$placelist.css("display" ,"block");
			$placelist.stop(true).fadeIn(100);
		})
		$placelist.mouseleave(function(){
			$placelist.css("display" ,"block");
			$placelist.stop(true).fadeOut(100);
		})

		//选电影
		// 获取元素
		var $a = $("#a");
		var $filmlist = $("#filmlist");
		// 新图淡入
		$a.mouseenter(function(){
			$filmlist.css("display" ,"block");
			$filmlist.stop(true).fadeIn(100);
		})
		$a.mouseleave(function(){
			$filmlist.css("display" ,"block");
			$filmlist.stop(true).fadeOut(100);
		})

		// 选影院
		// 获取元素
		var $b = $("#b");
		var $beijinglist = $("#beijinglist");
		// 新图淡入
		$b.mouseenter(function(){
			$beijinglist.css("display" ,"block");
			$beijinglist.stop(true).fadeIn(100);
		})
		$b.mouseleave(function(){
			$beijinglist.css("display" ,"block");
			$beijinglist.stop(true).fadeOut(100);
		})


		


		