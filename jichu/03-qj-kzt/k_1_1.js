//console控制台对象的用法

//打印日志信息 console.log(xxx);
var user={
    name:'liu',
    year:20
}
console.log('用户名: %s',user.name);
console.log('年  龄：%d',user.year);
console.log('用户对象：%j',user); //会将对象具体信息打印出来
//除了用户对象外上下效果相同  s% d% j%叫做格式占位符
console.log('用户名：'+user.name);
console.log('年  龄：'+user.year);
console.log('用户对象：'+user);//不会打印出具体信息

//打印错误信息 console.error(xxx);
console.error('Error,你错啦！');

/*
区别 
console.log 打印到标准输出流(stdout)
console.error 打印到标准错误流(stderr)
*/