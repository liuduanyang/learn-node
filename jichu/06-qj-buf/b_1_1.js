// 全局 buffer类
//buffer处理二进制数据
//对buffer的操作基本上同对数组的操作

// 文件操作、网络操作 不指定编码类型 则都会返回buffer类型的对象
var buf=new Buffer(256); //参数表示 buffer缓冲区256的个字节 自定义
buf[0]=23;  //23是十进制

console.log('buf的长度',buf.length);
console.log('buf的内容',buf);

// 循环改变buf内每项的值
for(var i=0;i<buf.length;i++){
    buf[i]=i;
}

console.log(buf);


var end=buf.slice(250,256);
console.log(end);

//buffer对象.fill(xx)  表示为对buffer对象每一项进行初始化 初始化数据为xx
//可指定初始化的位置和范围 看api 查buf.fill
end.fill(0);
console.log(end);


//用数组来初始化buffer
var array=['a',0xba,0xdf,0x88,255,10];
var buf1=new Buffer(array);
console.log('buf1的长度：',buf1.length);
console.log('buf1的内容',buf1);


// 用字符窜来初始化buffer
var buf2=new Buffer('hello nodejs','utf-8');  //utf-8 指定编码格式
console.log('buf2的长度：',buf2.length);
console.log('buf2的内容',buf2);
console.log('buf2转换为字符串',buf2.toString());


// 将buf2的数据拷贝到buf3中
var buf3=new Buffer(buf2.length);
buf2.copy(buf3,0,0,buf2.length); //参数详情看api buf.copy
console.log(buf3.length,buf3.toString());