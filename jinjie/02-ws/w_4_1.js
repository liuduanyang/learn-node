//用dgram模块实现UDP协议的客户端程序

var dgram=require("dgram");
var socket=dgram.createSocket("udp4");

var host=process.argv[2];
var port=process.argv[3];

process.stdin.on("data",function(data){
    var line=data.toString("utf-8");
    socket.send(line,0,line.length,port,host);
});