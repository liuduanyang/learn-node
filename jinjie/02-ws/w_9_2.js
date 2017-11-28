//处理HTTP重定向

/*
状态码3XX 表示重定向相关的状态码

状态码       状态信息
300         多重选择
301         永久移动到新位置
302         找到重定向跳转
303         参与其他信息
304         没有改动
305         使用代理
307         临时重定向
*/

//重定向位置在响应的头部信息的localtion字段内

var http=require("http");
var url=require("url");

var addr=process.argv[2] || "http://www.sian.com";

function opt(addr){
    var options=url.parse(addr);
    options.method="GET";
    options.headers={"User-Agent":"who are you"};
    return options;
}

function get(options){
    http.get(options,function(res){
    console.log("一些响应信息：");
    console.log(res.statusCode);
    console.log("");

    console.log("响应的头信息：");
    console.log(res.headers);
    console.log("");

    console.log("响应的内容：");
    res.pipe(process.stdout);
    console.log("");

    if(res.statusCode<400 && res.statusCode>=300){
        get(opt(res.headers.location));
    }
    });
}


get(opt(addr));
