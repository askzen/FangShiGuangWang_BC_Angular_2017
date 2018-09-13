app.controller("headerTpl",function($scope,$http,$timeout){
    //验证渲染，发送ajax
    $http.get("/checkname")
        .then(function(res){
            var data = res.data.data.username;
            //如果没有登录，那么渲染未注册，然后发送
            if(data) {
                $scope.unlog = false;
                $scope.loged = true;
                $scope.msg = data;
            } else {
                $timeout(SingleLogin, 1000);
                $scope.unlog = true;
                $scope.loged = false;
            }
        })
    //利用单例模式设置弹窗提醒登录
    var SingleLogin = (function(){
        var single = null;
        return function(){
            if(!single) {
                console.log(1);
                single = document.createElement("div");
                single.id = "single";
                //创建链接标签
                let aTag = document.createElement("a");
                aTag.setAttribute("href","/login.html");
                aTag.innerHTML = "登录查看使用更多功能";
                //创建关闭标签
                let xTage = document.createElement("span");
                xTage.id = "close";
                xTage.innerHTML = "&times;";
                xTage.onclick = function(e){
                    document.body.removeChild(single);
                };
                //组装
                single.appendChild(aTag);
                single.appendChild(xTage);
                document.body.appendChild(single);
            }
            return single;
        };
    })();
    $scope.local = window.localStorage;
    var $list = $("#navList");
    $list.children().eq($scope.local.index).addClass("cur").siblings("li").removeClass("cur");
    //点击改变本地储存
    $scope.navList = function(event) {
        var target = $(event.target).parent("li");
        var index = target.parent("ul").children("li").index(target);
        $scope.local.index = index;
    }
});