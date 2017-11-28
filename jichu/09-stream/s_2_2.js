// 流方式
var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    console.log("欢迎来到我的服务器");
    console.log(req.headers);
    
    var filename=__dirname+req.url;
    fs.createReadStream(filename).pipe(res); 
    // 关键在此 创建一个可读流然后通过管道导入到res的流内
    // pipe自动监听了data事件和end事件
    // 而且 每当输入一小部分就会立刻传过来 不会等都输入完再传过来
    // 可根据服务器压力情况自动调节 使缓存最小
}).listen(8080);