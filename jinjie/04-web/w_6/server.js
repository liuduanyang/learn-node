var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    var fileName=__dirname+req.url;
    console.log(fileName);
    fs.createReadStream(fileName).pipe(res);
}).listen(80);