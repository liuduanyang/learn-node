//data URL scheme应用

//允许将一些小的二进制数据(如图片)嵌入网页中 从而不用从外部文件载入
//<img src="data:[MIME-type][charset=<encoding>[,base64],<data>]'/>

var fs=require("fs");
var http=require('http');

var mime='image/jpg';
var data=fs.readFileSync('tx5.jpg').toString('base64');
var uri='data:'+mime+';base64,'+data;

console.log(uri);

http.createServer(function(req,res){
    res.end(
        '<!DOCTYPE html><html><body><img src="'+uri+'"/></body></html>'
    );
}).listen(8080);