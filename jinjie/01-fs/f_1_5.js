//更高级的方式 流的方式
var fs=require("fs");
var file=process.argv[2];

fs.createReadStream(file).pipe(process.stdout);

// 异步操作效率高 同步操作会阻塞 但需要读取配置文件信息必须用同步 因为不打开没办法读取
// 根据情况具体分析
// 一般都使用高级方式
