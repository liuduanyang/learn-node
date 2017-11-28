// readable 拉取流

// 按需推送数据(需要的时再传输数据)  没明白这句话...

var Readable=require("stream").Readable;
var read=new Readable();
var c=97;
read._read=function(){
    read.push(String.fromCharCode(c++));
    if(c>'z'.charCodeAt(0)){
        read.push(null);
    }
}
read.pipe(process.stdout);



// pipe的操作会返回()的流(操作(读)之后的流)(可作为另一个pipe的可读流)
// pipe可链式调用 即a.pipe(b).pipe(c).pipe(d);
// 等同于 a.pipe(b)  b.pipe(c) c.pipe(d)


/*
    可读流可产生数据

    可读流.pipe(可写流、转换流、双工流  不能是可读流)
*/