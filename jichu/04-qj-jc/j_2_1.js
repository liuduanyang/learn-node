//使用命令行参数

//process.argv   是字符串数组 注意参数传进来后是字符串

/*
process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。第一个元素为process.execPath(执行程序的路径)
第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数
*/
console.log(process.argv[0]); 
console.log(process.argv[1]);

//实现类似计算器功能 注意参数传进来后是字符串
var expression=process.argv[2];
console.log(typeof expression);
console.log(expression,eval(expression));

//eval() 函数可计算某个字符串,并执行其中的的 JavaScript 代码

//执行时 例如:node j_2_1.js 5+3