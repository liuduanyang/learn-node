// nodejs通过管道来连接各种流

// process.stdin.resume()表示输入流已启动 
process.stdin.resume();
process.stdin.setEncoding('utf-8');

// 等待输入数据来发出data事件后响应事件
process.stdin.on('data',function(data){
    process.stdout.write('您输入的是：'+data);
    process.exit(0);
});
