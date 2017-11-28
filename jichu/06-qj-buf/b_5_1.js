// 写入二进制位图文件

var fs=require('fs');

var width=16;
var height=16;
var pixelByteSize=width*height*4; //颜色部分总字节数
var totalSize=pixelByteSize+54; //总字节数(头部信息+颜色部分)

// 设定头部
var buf=new Buffer(totalSize);
buf.fill(0);
buf.writeUInt32LE(totalSize,0x02);
buf.writeUInt32LE(54,0x0a);
buf.writeUInt32LE(40,0x0e);
buf.writeUInt16LE(1,0x1a);
buf.writeInt32LE(32,0x1c);
buf.writeInt32LE(pixelByteSize,0x22);
buf.writeInt32LE(width,0x12);
buf.writeInt32LE(height,0x16);

// 设定数据部分(颜色)
for(var i=54;i<totalSize;i+=4){
    buf.writeUInt32LE(0xff0000ff,i);
}
// i totalSize等 单位均为字节


// 导出文件
fs.writeFile('./out.bmp',buf,function(err){
    if(err!=null){
        console.error(err);
        process.exit(1);
    }
});

//api：http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback