//静态文件服务器

//无需依赖Apache  自己就能完成所有任务

var http=require("http");
var fs=require("fs");
var path=require("path");

http.createServer(function(req,res){
    console.log(req.headers);
    console.log("");

    var fileName=path.join(__dirname,req.url);

    res.write(fs.readFileSync(fileName).toString());
    res.end(fileName);
}).listen(8080);


//由于window下 fileName的拼接/ 为\ 所以改用linux查看效果
//path.join可以很好的解决这个问题

