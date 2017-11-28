//exec 方法可以使用命令行解释器(subshell)

var cp=require("child_process");

cp.exec('cat messy.txt | sort | uniq',function(err,stdout,stderr){
    console.log(stdout);
});

//即 调用子进程去执行 cat messy.txt | sort | uniq 因为exec可以使用命令行解释器 
//所以 很轻松就完成了该命令 然后把结果(输出流)放入stdout中 父进程调用打印

// 功能虽然强大，但缺点也很大 会有安全漏洞 比如讲exec的第一个参数改为命令行输入的话 会很随意的获取任何文件(模仿命令行命令)

