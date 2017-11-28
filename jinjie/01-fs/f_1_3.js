//采用同步方式的高级操作

var fs=require("fs");
var file=process.argv[2];

console.log(fs.readFileSync(file).toString('utf-8'));
//fs.readFileSync(file) 执行完就是一个buffer 然后调用toString方法

// 但是同步是阻塞的 采用哪种方式根据情况而定

//底层方法可和高级高方法混合来用