// 引入模块
var express = require("express");
var mongodb = require("mongodb");
var body_parser = require("body-parser");
var session = require("express-session");

// 搭建应用程序
var app = express();
// 静态化
app.use(express.static("static"));
// 将请求数据转换成json格式
app.use(body_parser.json());
// 设置session
app.use(session({
	secret: "asdfghjklasdsfarvfduk",
	resave: true,
	saveUninitialized: false
}))

// 获取连接客户端
var MongoClient = mongodb.MongoClient;
// 数据库地址
var mongoUrl = "mongodb://localhost:27017/";

// 创建路由
// app.get("/", function(req, res) {
// 	// 如果有用户名称，显示首页，否则显示登录页
// 	if(req.session.username) {
// 		res.render("index.html", {
// 			username: req.session.username
// 		})
// 	} else {
// 		res.redirect("/login")
// 	} 
// })

// 登录页面
// app.get('/login', function(req, res) {
// 	res.render('login.ejs');
// })

// 配置/regist路由
app.post('/regist', function(req, res) {
	// console.log(req.body);
	// 获取用户提交的数据
	var infoMap = {
		username: req.body.username,
		password: req.body.password,
		tel: req.body.tel
	}
	// console.log(username);

	//连接数据库
	MongoClient.connect(mongoUrl, function(err, client) {
		// 判断err
		if(err) {
			res.json({
				errno: 1,
				mag: "连接数据库失败"
			})
			// 终止函数执行
			return;
		}
		// 表示连接数据库成功
		// 操作数据库
		var db = client.db("ickt_13");
		// 选择集合
		db.collection("users")
			// 查询用户
			.findOne(infoMap, function(err, result) {
				// 判断err
				if(err) {
					res.json({
						errno: 2,
						msg: "查询用户失败"
					})
					// 关闭数据库连接
					client.close();
					// 终止函数执行
					return;
				}
				// 判断result
				// console.log(111, result);
				if(result) {
					res.json({
						errno: 3,
						msg: "用户已存在"
					})
					// 关闭数据库连接
					client.close();
					// 终止函数执行
					return;

				} 
				db.collection("users").insertOne(infoMap, function(err, result) {
					// 判断err
					if (err) {
						res.json({
							errno: 4,
							msg: "注册失败"
						})
						return;
					}

					res.json({
						errno: 0,
						msg: "注册成功",
						data: result
						
					})
				})
				// 关闭数据库连接
				client.close();
				
			})
		
	})
})

// 配置/login路由
app.post("/login", function(req, res) {
	console.log(req.body);
	// 连接数据库
	MongoClient.connect(mongoUrl, function(err, client) {
		// 判断
		if(err) {
			res.josn({
				errno: 1,
				msg: "连接数据库失败"
			})
			return;
		}
		// 数据库
		var db = client.db("ickt_13");
		// 选择集合
		db.collection("users").findOne(req.body, function(err, result) {
			// 判断
			if(err) {
				res.json({
					errno: 2,
					msg: "查询失败"
				})
				console.log(1223);
				// 关闭数据库连接
				client.close();
				// 终止函数执行
				return;
			}
			console.log(1234);
			// 判断result
			if(result) {

				// 将用户存在session中
				req.session.username = result.username
				// 返回数据
				res.json({
					errno: 0,
					data: {
						username: result.username
					},
					msg: "登录成功"
				})
				return;

			}
			res.json({
					errno: 3,
					msg: "查询失败"
			})
			// 关闭数据库连接
			client.close();
		})
	})
});

//检查用户名
app.get("/checkname", (req,res) => {
	console.log(req.session);
	res.json({
		err : 0,
		data : req.session
	})
});
// 监听端口号
app.listen(3000)