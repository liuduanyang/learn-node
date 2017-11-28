//网络系统：分布式应用基础

//nodejs利于开发快速而稳定的网络应用

//net模块用来实现tcp协议的服务器程序和客户端程序
//dgram模块用来实现udp协议的服务器程序和客户端程序
//http模块用来实现http协议的服务器程序和客户端程序
//dns模块用来实现域名解析查询

//http是高级协议 基于tcp的api
//http模块中的类继承自net模块


//用net模块实现tcp协议的服务器程序
var server=require("net").createServer(); // 返回一个netSever对象
server.on('connection',function(socket){           //connetction：连接事件 当有客户端连接到服务器上时触发 返回netsocket对象给回调函数 socket是双工流(可读 可写)
    //remote是远程的意思  在服务器端中 socket 代表的是客户端
    console.log("客户端的ip为：",socket.remoteAddress);

    socket.setEncoding("utf-8");

    socket.on("data",function(data){       //收到数据后触发
        console.log(data.length-1); //去掉回车
        console.log(data);
        
        //实现查看目录下的文件的功能
        var cmd=data.slice(0,data.length-1); //切片操作是为了去掉回车(占一个字符)
        if(cmd==="ls"){
            var fs=require("fs");
            var files=fs.readdirSync(__dirname);
            files.forEach(function(f){
                socket.write(f+"\n");
            });
        }        
        else if(cmd==="close"){
            server.close();
            process.exit();
        }
    });

    socket.on("end",function(){
        console.log("end");
    });
}).listen(8080,function(){
    console.log("TCP 服务器已启动 监听端口为8080");
});

//远程连接服务器：telnet(基于tcp)协议因为使用明文不安全    使用ssh协议
//telnet现在经常用测试网络服务是否正常工作(模拟客户端连接到服务器)



