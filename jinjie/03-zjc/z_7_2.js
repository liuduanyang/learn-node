//以下为同步版本
//注意比较与异步版本的输入(执行)顺序
var cp=require("child_process");

//本例参数不写也没事
cp.spawnSync('./waibu.js',[],{stdio:['ignore',1,2]});

console.log("我是父进程");

/*
    先输出子进程的执行结果 最后再输出"我是父进程"这个信息 因为子进程是同步执行的
*/