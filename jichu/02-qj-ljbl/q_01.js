//使用全局路径变量和文件名变量

//node api分为全局对象和普通模块(需要 require('模块名' 如 fs os http等))两大类

//全局变量 __dirname ___filename 的用法

console.log('当前模块(文件)所在的文件夹地址:\n',__dirname); 
console.log('\n当前模块(文件)的绝对路径地址:\n',__filename);

//可用来拼接路径 来找到某个文件
var afilename=__dirname+'\\某个文件夹\\某个文件';
console.log('\nafilename的路径就拼接完成了\n',afilename);

//因为操作系统不同路径方式不同 所以先判断系统 再进行拼接
console.log('操作系统为：',process.platform);
//process.platform属性返回字符串，标识Node.js进程运行其上的操作系统平台 返回值如'linux' 'win32'
var anotherFileName;
switch(process.platform){
    case 'linux':
        anotherFileName=__dirname+'/文件夹/文件';
        break;
    case 'win32':
        anotherFileName=__dirname+'\\文件夹\\文件';
        break;
    default:
        anotherFileName="出错了！";
}
console.log('\nanotherFileName进过判断选择某种方式完成拼接：\n',anotherFileName);



//最佳方法： path.join(__dirname,'文件夹','文件');作用：进行路径拼接  path模块自动判断操作系统
var path=require('path');
console.log('\n',path.join(__dirname,'文件夹','目标文件'));

//path.join(path片段,path片段...)  path片段(参数必须是字符串
//path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。

console.log(path.join('a','','c'));  //长度为零的 path片段会被忽略
console.log(path.join('',''));  //如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录

