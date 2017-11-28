var http=require("http");
var cp=require("child_process");

console.log("我是父进程，ID：",process.pid);

http.createServer(function(req,res){
    var child=cp.spawn("waibu.js");

    child.stdout.pipe(res);
}).listen(8080);  

// 流及管道的应用实例 见 z_3_3.js