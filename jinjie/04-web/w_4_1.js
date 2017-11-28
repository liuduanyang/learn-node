//从表单接收用户输入
var http=require("http");
var items=[]; //用来接收用户输入的数据
var qs=require("querystring");

http.createServer(function(req,res){
    if(req.url!='/'){
        err(res);
        return;
    }

    console.log(req.headers);
    console.log("");

    switch(req.method){
        case 'GET':
            show(res);
            break;
        case 'POST':
            add(req,res);
            break;
        default:
            err(res);
            break;
    }
}).listen(8080);

function show(res){
    var html="<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Document</title></head><body><h1>记事本</h1><ul>"
            +items.map(function(item){return '<li>'+item+'</li>';}).join('\n')
            +"</ul><form action='/' method='post'><input type='text' name='item'><br><input type='submit' value='提交'></form></body></html>";

    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html));
    res.statusCode=200;
    res.end(html);
}

function add(req,res){
    var body='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        console.log(body);

        if(body != ''){
            items.push(qs.parse(body).item);
        }
        show(res);
    });
}

function err(res){
    var msg="Not found!";
    res.statusCode=404;
    res.setHeader('Content-Length',Buffer.byteLength(msg));
    res.setHeader('Content-Type','text/plain');
    res.end(msg);
}
