//http协议的基本验证

var http=require("http");

http.createServer(function(req,res){
    if(req.headers.authorization){
        console.log(req.headers.authorization);
        res.end("重要信息");
    }
    else{
        res.writeHead(401,{"WWW-Authenticate":"Basic"});
        console.log("!!!!!!!!!");
        res.end("Who are you?");
    }
}).listen(8080);

/*
    当发起一次请求时 没有authorization字段 所以执行else 返回响应 401,{"WWW-Authenticate":"Basic"} 引起浏览器弹窗
    输入账号和密码后 有了authorization字段 执行if(true)内的语句
*/