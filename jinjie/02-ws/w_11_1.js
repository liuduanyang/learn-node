//使用dns模块执行DNS查询  dns:域名系统
//分为两类

//一 使用底层的系统工具进行域名解析 无需进行网络通信 只有dns.lookup()

var dns=require("dns");

var ns=process.argv[2];   //参数为域名

dns.lookup(ns,function(err,addr){
    console.log(addr);
});

//二 连接到真实的dns服务器上进行域名解析，需要网络进行dns查询 除dns.lookup()都是

//二 见w_11_2.js