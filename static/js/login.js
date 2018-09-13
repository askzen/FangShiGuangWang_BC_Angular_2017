// 获取应用程序 
var app = angular.module("login", []);
// 定义控制器regist
app.controller("regist", function($scope, $http) {
        // console.log($scope)
        // 提交数据
        $scope.regist_submitData = function() {
            // 发布异步请求post,检测用户名
            if ($scope.data.repassword === $scope.data.password) {
                $scope.show = false;
                $http.post('/regist', $scope.data)
                // 监听返回
                    .then(function(res) {
                        console.log(res.data);
                        // 如果成功，告知注册成功，可以进行登录
                        if(res.data.errno === 0) {
                            alert("恭喜，注册成功，请登录")
                        } else {
                            // 如果失败了，表示注册失败，告知用户重新注册
                            console.log("抱歉，注册失败，请重新注册")
                            alert(res.data.msg)
                        }
                    })
            }
        }
    })
    // 定义控制器login
    .controller("login", function($scope, $http)
    {
        // console.log($scope)
        $scope.login_submitData = function() {
            // 发送请求
            $http.post('/login', $scope.data)
            // 监听返回
                .then(function(res) {
                    // console.log(res.data);
                    // 如果成功，告知登录成功
                    if(res.data.errno === 0) {
                        window.username = res.data.data.username;
                        alert("恭喜，登录成功")
                        location.href= "./index.html"

                    } else {
                        // 如果失败了，表示登录失败，告知用户重新登录
                        console.log("抱歉，登录失败，请重新登录");
                        alert(res.data.msg)
                    }
                })
        }
    })





