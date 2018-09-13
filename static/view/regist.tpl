<div class="inner">
	<div class="content form-horizontal">
		<!-- 注册 -->
		<div class="regist col-lg-6" ng-controller="regist">
			<h1>新会员注册</h1>
			<form class="form-horizontal" name="regist" ng-submit="regist_submitData()">
				<!-- 用户名 -->
				<div class="form-group">
					<div class="col-lg-12">
						<input 
						  type="text" 
			              class="form-control"
			              placeholder="请输入用户名"
			              autocomplete="off" 
			              ng-model="data.username"
			              name="username"
			              ng-pattern="/^[a-zA-Z]\w{5,7}$/"
			              ng-required="true"
							>
						 <!-- 输入过 并且 不合法 -->
    					<p ng-show="regist.username.$dirty && regist.username.$invalid">用户名字母开头6-8</p>
					</div>
				</div>

				<!-- 手机号 -->
				<div class="form-group">
					<div class="col-lg-12">
						<input 
							type="text" 
							autocomplete="off" 
							class="form-control"
							placeholder="常用手机号" 
							ng-model="data.tel"
							name="tel" 
							ng-required="true"
							ng-pattern="/^1[0-9]{10}$/"
							maxlength="11"
							>
							<!-- 输入过并且不合法 -->
						<p ng-show="regist.tel.$dirty && regist.tel.$invalid">请填写正确的手机号,1开头11位</p>
					</div>
				</div>

				<!-- 密码 -->
				<div class="form-group">
					<div class="col-lg-12">
						<input
						 	type="password"
				            class="form-control"
				            placeholder="请输入密码"
				            autocomplete="off"
				            ng-model="data.password"
				            name="password"
				            id="password"
				            ng-pattern="/[a-zA-Z].*\d|\d.*[a-zA-Z]/"
				            ng-required="true"
							>
             			<!-- 合法 或者 未输入 -->
    					<p ng-hide="regist.password.$pristine || regist.password.$valid">密码包含字母和数字</p>
					</div>
				</div>

				<!-- 确认密码 -->
				<div class="form-group">
					<div class="col-lg-12">
						<input
							type="password"
							class="form-control"
							placeholder="确认密码"
							name="repassword"
							id="repassword"
							ng-model="data.repassword"
							ng-required="true"
							ng-blur="suerPass($event)"
							>
							<!-- 输入过并且密码不等 -->
						<p ng-show=" data.password !== data.repassword && regist.repassword.$dirty">您的确认密码和密码不一致</p>
					</div>
				</div>


				<div class="agree">
					<a href="http://feature.mtime.com/help/policy.htm" target="_blank">已同意《Mtime时光网服务条款》</a>
				</div>

				<!-- 按钮 -->
				<div class="form-group">
					<div class="col-lg-4 col-lg-offset-2">
						<!-- 禁用: 不符合规范-->
						<button class="btn btn-success" ng-disabled="regist.$invalid">注册</button>
					</div>
				</div>

			</form>
		</div>

		<!-- ***************************************************** -->

		<!-- 登录 -->
		<div class="login col-lg-6" ng-controller="login" >
			<h1>会员登录</h1>
			<form name="login" class="form-horizontal" ng-submit="login_submitData()">
				<!-- 用户名 -->
				<div class="form-group">
					<div class="col-lg-12">
						<input
						  type="text"
			              class="form-control"
			              placeholder="请输入用户名"
			              autocomplete="off"
			              ng-model="data.username"
			              name="username"
			              ng-required="true"
			              ng-pattern="/^[a-zA-Z]\w{5,7}$/"

							>
						 <!-- 输入过 并且 不合法 -->
    					<p ng-show="login.username.$dirty && login.username.$invalid">用户名字母开头6-8</p>
					</div>
				</div>
				<div class="form-group">
					<div class="col-lg-12">
						<input
							type="text"
							autocomplete="off"
							class="form-control"
							placeholder="常用手机号"
							ng-model="data.tel"
							name="tel"
							ng-required="true"
							ng-pattern="/^1[0-9]{10}$/"
							maxlength="11"
							>
							<!-- 输入过并且不合法 -->
						<p ng-show="login.tel.$dirty && login.tel.$invalid">请填写正确的手机号,1开头11位</p>
					</div>
				</div>
				<!-- 密码 -->
				<div class="form-group">
					<div class="col-lg-12">
						<input 
							type="password" 
							ng-model="data.password"
							name="password"
							class="form-control"
							placeholder="请输入密码" 
							ng-pattern="/[a-zA-Z].*\d|\d.*[a-zA-Z]/"
				            ng-required="true"
							>
					</div>
					  <!-- 合法 或者 未输入 -->
    				<p ng-hide="login.password.$pristine || login.password.$valid">密码包含字母和数字</p>
				</div>
				<div class="other">
					<p class="one">短信验证码登录</p>
					<p class="two">忘记密码</p>
				</div>
				<div class="form-group">
					<div class="col-lg-4 col-lg-offset-2">
						<button class="btn btn-success" ng-disabled="login.$invalid">登录</button>
					</div>
				</div>
				<div class="form-group">
					<div class="col-lg-4 col-lg-offset-2">
						<div class="othermethod">
							<a href="" class="weixin"></a>
							<a href="" class="qq"></a>
							<a href="" class="weibo"></a>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>





