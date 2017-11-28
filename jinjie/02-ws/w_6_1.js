//发起HTTP GET请求

//创建http客户端程序

//两种方式：get方法 request方法

//get方法
var http=require("http");

var url=process.argv[2];

http.get(url,function(res){
    console.log("状态码：",res.statusCode);
    console.log("状态信息：",res.statusMessage);
    console.log("http版本：",res.httpVersion);
    console.log("");
    res.pipe(process.stdout);
});


//request方法(可实现 get请求和post请求) 见 w_8_1.js
