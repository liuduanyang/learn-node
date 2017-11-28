//创建http协议的服务端

//createServer的参数为request事件的监听器

var server=require("http").createServer();

server.on("request",function(req,res){
    console.log(JSON.stringify(req.headers)); //JSON.stringify() 将JSON数据转换为字符串
    req.pipe(process.stdout);
    res.end("你好");
});

server.listen(8080,function(){
    console.log("正在监听8080端口");
});
