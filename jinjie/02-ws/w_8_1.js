//发起http post请求

//要请求的信息放在请求的http消息主体中
//而get方法的请求信息放在了url的查询字符串中  5.30

var http=require("http");
var url=require("url");

var msg=process.argv[2] || "你好！";

var options=url.parse("http://localhost:8080");

options.method="POST";

console.log(options);

var req=http.request(options,function(res){
    console.log(res.statusCode);
    console.log(res.headers);

    res.setEncoding("utf-8");
    res.on('data',function(data){
        console.log(data);
    });
}).on('error',function(err){
    console.log(err.message);
});

req.write(msg+'\n');
req.end();  //post请求中必不可少