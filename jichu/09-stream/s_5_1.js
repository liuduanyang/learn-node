// 自定义可读流(readable)
var Readble=require("stream").Readable;
var MyReadable=function(){

};

MyReadable.prototype=new Readble();  //或用util.inherits
MyReadable.prototype._read=function(){
    //同s_4_1.js
};

//然后进行相关操作就行了
// 看视频吧..不太明白