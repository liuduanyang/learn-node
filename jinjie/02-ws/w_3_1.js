//用dgram模块实现UDP协议的服务器程序

//UDP的客户端和服务端是单工流 只能由客户端向服务端发送数据

//可在UDP的服务端的另一个端口实现UDP发送数据的客户端逻辑

var dgram=require("dgram");
var socket=dgram.createSocket("udp4");
socket.bind(8080);

socket.on("message",function(msg,rinfo){           //客户端发来数据时触发
    var line=msg.toString("utf-8");

    process.stdout.write(line.length);
    process.stdout.write(line);
}); 

socket.on("listening",function(){      //当socket创建后触发
    console.log("服务器已开启",socket.address());
});