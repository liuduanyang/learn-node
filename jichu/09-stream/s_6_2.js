// 创建一个自定义的可写流
var Writable=require('stream').Writable;
var util=require('util');

function GreenStream(options){
    Writable.call(this);
}

//_write api:  http://nodejs.cn/api/stream.html#stream_writable_write_chunk_encoding_callback_1
GreenStream.prototype._write=function(chunk,encoding,callback){  //chunk代表传入的数据
    process.stdout.write(chunk);
    callback;
}
util.inherits(GreenStream,Writable);

process.stdin.pipe(new GreenStream());