//实现http代理  代理:proxy

var http=require("http");
var url=require("url");

http.createServer(function(req,res){
    console.log(req.headers);

    var options=url.parse(req.url);
    options.headers=req.headers;

    var proxyRequest=http.request(options,function(proxyResponse){
        proxyResponse.on('data',function(chunk){res.write(chunk,'binary');});
        proxyResponse.on("end",function(){res.end();});
        
        res.writeHead(proxyResponse.statusCode,proxyResponse.headers);
    });
    req.on('data',function(chunk){
        proxyRequest.write(chunk,'binary');
    });
    req.on('end',function(){
        proxyRequest.end();
    });
}).listen(8080);
