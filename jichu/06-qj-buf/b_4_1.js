// 读取二进制位图文件 (图片和视频等二进制文件相通 以图片为例)

var fs=require("fs");

fs.readFile('./tx5.bmp',function(err,buf){
    if(err){
        console.error(err);
        process.exit(1);
    }
    if(buf){
        console.log('位图的宽度',buf.readInt32LE(0x12));
        console.log('位图的高度',buf.readInt32LE(0x16));
        console.log('位图的颜色深度',buf.readUInt16LE(0x1c));
    }
}); 