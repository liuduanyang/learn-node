//用HTTPS加强程序的安全性

//linux下 生成秘钥的命令 :openssl genrsa 1024 > key.pem    >为管道操作 将秘钥管道到key.pem文件
//linux下 生成证书的命令 :openssl req -x509 -new -key key.pem > key-cert.pem为管道操作 将证书管道到key-cert.pem文件

//实现https服务程序

var https=require("https");
var fs=require("fs");    //通过fs模块操作证书和秘钥的文件

var options={
    key:fs.readFileSync('./key-pem'),
    cert:fs.readFileSync('./key-cert.pem')
};

https.createServer(options,function(req,res){
    res.end("Hello world!");
}).listen(8080);


// https:localhost:8080