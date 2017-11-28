//可用buffer对字符串进行编码转换

//用Buffer将字符串的编码格式从一种格式转换成另一种格式

//模拟客户端 用户输入用户名和密码后拼接成一个字符串然后转成buffer对象 然后在进行转换(比如base64)传到服务器

var name=process.argv[2];
var passwd=process.argv[3];

console.log("name:",name);
console.log("passwd",passwd);

var buf=new Buffer(name+':'+passwd,'utf-8');

console.log(buf);
console.log(buf.toString());
console.log(buf.toString('base64'));


//b_2_2.js 模拟服务器对收到的数据进行转换成utf-8编码 然后拆分出用户名和密码