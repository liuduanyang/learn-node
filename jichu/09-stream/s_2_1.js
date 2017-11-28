// 分别演示采用同步方式和流的方式创建一个服务器
// 本文件采用同步方式 s_2_2.js采用流方式

var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    console.log("欢迎来到我的服务器");
    console.log(req.headers);

    var filename=__dirname+req.url; //当前目录路径(node运行的路径)+请求的文件名(/后面的)
    fs.readFile(filename,function(err,data){
        // res.setHeader('content-type', 'text/html;charset=utf-8');
        if(err){
            //res.end()使用不标准 见下面else内的
            console.log(err.message);
            res.statusCode=500;
            res.end(err.message);
        }else{
            // res.setHeader(,);
            res.write(data,'utf-8');
            //res.write()用法 http://nodejs.cn/api/http.html#http_response_write_chunk_encoding_callback
            res.end();
            // res.end()用法 http://nodejs.cn/api/http.html#http_response_end_data_encoding_callback
        }
    });
}).listen(8080);