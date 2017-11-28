var http=require("http");

const { URL } = require('url');

var city=process.argv[2] || "石家庄";

var addr="http://api.jisuapi.com/weather/query?appkey=6b8a2c92b1fe5208&city="+city;

http.get(new URL(addr),function(res){
    var result='';

    res.on('data',function(data){
        console.log(data.toString("utf-8"));
    });
});
