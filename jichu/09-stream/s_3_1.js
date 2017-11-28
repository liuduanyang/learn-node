// readable 推送流

// 创建可读流
var Readable=require("stream").Readable;

var read=new Readable();
read.push("你好，"); //用push方法添加数据
read.push("stream");
read.push(null);  //表示添加结束 必须有不可省略

//在此之前readable流处于暂停状态 数据存在缓存内
read.pipe(process.stdout);

/* 让可读流内数据流动传输(转为流动状态)三种方法
1. stdout.resume()
2. pipe()
3. 添加data的监听器  .on('data',function(){...})
*/