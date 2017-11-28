//二 连接到真实的dns服务器上进行域名解析，需要网络进行dns查询 除dns.lookup()都是

var dns=require("dns");

var ns=process.argv[2];   //参数为域名

dns.resolve(ns,function(err,addr){
    console.log(addr);
});