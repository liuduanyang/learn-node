//第四章 web应用：更快、更轻

//web应用基础
//修改一个服务器的响应信息(res)

var http=require("http");

http.createServer(function(req,res){
    var body="你好，客户端！";

    res.statusCode=404;
    res.setHeader('Content-Length',Buffer.byteLength(body));
    res.setHeader('Content-Type','text/plain');
    // req.pipe(process.stdout);
    console.log(req.headers);
    res.end(body);
}).listen(8080);



/*
响应信息举例 
HTTP/1.1 OK
Date:Fir,06 Oct 2017 05:19:02 GMT
Connection:keep-alive
Content-Length:11

hello world
*/

/*
    响应信息:
    状态行     http版本 响应的状态码 响应的状态信息   例如HTTP/1.1 200 OK
    响应头部字段列表
    空行
    响应主体
*/

/*
    响应的状态码：
    1xx：基本信息
    2xx：成功信息
    3xx：重定向
    4xx：客户端错误
    5xx：服务器错误
    具体自行百度
*/

/*
响应头部字段列表
远远不止这三行
Date：服务器响应的时间
Connection：keep-alive表示长连接
Content-Length：响应主体内容的长度
*/


/*
    请求信息示例
    GET /web/one-div.html HTTP/1.1
    Host:sample.wangding.in

    hello
*/

/*
    请求信息详解
    
    请求行： 请求方式(GET POST...) 请求的文件路径 协议及版本
    请求的头部字段列表：  也是一堆键值对(有些键值对既可以放在请求中也可以放在响应中)   
    空行
    请求主体：   
*/