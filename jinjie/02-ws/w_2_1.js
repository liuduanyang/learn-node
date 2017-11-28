//用net模块实现TCP协议的客户端

//能够和服务程序的某个端口连接 发送明文消息 把从服务器上接收到的消息发送到屏幕上

var net=require("net");
if(process.argv.length<4){
    console.log("您输入的参数有点少 请输入两个参数");
}

var host=process.argv[2];
var port=process.argv[3];

var socket=net.connect({host:host,port:port},function(){
    console.log("连接到:",host,"端口号:",port);

    process.stdin.on("data",function(data){
        var line=data.toString("utf-8");
        line=line.slice(0,line.length-1);
        socket.write(line);   //向服务器发送
        //socket在客户端代表服务器 在服务器端代表客户端 且为双工流
    });

    socket.pipe(process.stdout);
});

socket.on("end",function(){
    console.log("失去连接，再见！");
    process.exit();
});


