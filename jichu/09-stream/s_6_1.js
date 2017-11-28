// 自定义可写流
// 只能流进不能流出 用来接收数据  .write()方法   .end()表示写入完毕
// 例

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data',function(data){
    process.stdout.write('这就是一个可写流：'+data);
    process.exit(0);
});

//res.write() 同理


// 创建一个自定义的可写流 s_6_2.js