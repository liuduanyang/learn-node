//程序退出码

//process.exit()方法以结束状态码code指令Node.js同步终止进程
//通过给process.exit()传参(参数为要指定的退出码) 在程序退出时 指定退出码

console.log('设置的退出码为：',process.argv[2]);
process.exit(process.argv[2]);

/*调用process.exit()会强制进程尽快结束，即使仍然有很多处于等待中的异步操作没有全部
执行完成， 包括输出到process.stdout和process.stderr的I/O操作*/

//在大多数情况下，显式调用process.exit()是没有必要的。如果在事件轮询队列中没有处于等待中的工作，Node.js进程会自行结束。 

//检查退出码 可以判断程序(或某个大程序的某个功能模块)是否执行成功 很重要

