<div class="header" ng-controller="headerTpl">
	<div class="leftnav" ng-click="navClick($event)">
		<ul ng-click="navList($event)" id="navList">
			<li class="cur"><a href="/index.html">首页</a></li>
			<li><a href="/buy.html">购票</a></li>
			<li><a href="/shopping.html">正版商城</a></li>
			<li><a href="/news.html">新闻</a></li>
			<li class="top"><a href="">直播</a></li>
			<li><a href="">发现</a></li>
			<li><a href="">社区</a></li>
			<li><a href="">会员</a></li>
		</ul>
	</div>
	<div class="logo">
		<h1 class="pic">
			<a href="http://www.mtime.com/" title="Mtime时光网">Mtime时光网</a>
		</h1>
	</div>

	<div class="rightnav">
		<ul>
			<li class="upload">
				<i class="left"></i>
				<a href="">App下载</a>
				<i class="right"></i>
				<div class="uploadImg"><img src="/imgs/upload.jpg" alt=""></div>
			</li>
			<li class="login_regist">
				<a href="/login.html" class="login" ng-if="unlog">登录</a>
				<a class="login" ng-if="loged">欢迎您</a>
				<i></i>
				<a href="/login.html" class="regist" ng-if="unlog">注册</a>
				<a class="regist" ng-if="loged">{{msg}}</a>
			</li>
			<li class="shopping">
				<div class="gouwu"><b>您的购物车还是空的，赶快选购哦</b></div>
			</li>
		</ul>
	</div>
</div>