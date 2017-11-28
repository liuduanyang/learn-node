//创建RESTful web服务

//模仿 get post delete put 对资源进行操作(增删改查(获取))

var http=require("http");
var items=[];

http.createServer(function(req,res){
    console.log(req.headers);
    console.log("");

    switch(req.method){
        case 'GET':
            get(req,res);
            break;
        
        case 'POST':
            insert(req,res);
            break;

        case 'DELETE':
            del(req,res);
            break;

        case 'PUT':
            change(req,res);       //更新 修改
            break;

        default:
            break;
    }
}).listen(8080);

function get(req,res){
    // console.log("GET");
    var body=JSON.stringify(items);
    res.setHeader('Content-Length',Buffer.byteLength(body));
    res.setHeader('Content-Type','text/plain;charset="utf-8"');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(body);
}

function insert(req,res){
    // console.log("POST");
    var item='';
    req.on('data',function(data){
        item+=data;
    });
    req.on('end',function(){
        items.push(item);
    });
    res.end();
}

function del(req,res){
    // console.log("DELETE");
    console.log(req.url);
    console.log(req.url.split('/'));   //通过url来传递删除哪个文件 http://www.a.com/1 则表示删除下标为1的文件
            
    var arg=req.url.split('/');        //arg数组中 第一个元素为''(空)
    if(arg[1]===''){
        items=[];
    }

    var i=parseInt(arg[1]);    //将参数转换为整数

    if(!items[i]){               //判断数组中是否存在该下标(即是否在items范围内)如果不存在则
        res.statusCode=404;
        res.end('Not found');
    }else{
        items.splice(i,1);          //删除数组中下标为i的数据
        res.end('Delete OK');
    }
}

function change(req,res){              //linux下 命令形如 curl -X PUT -d '111' http://localhost:8080/1    111为要更新的数据 1表示要修改的元素在数组中的位置
    // console.log("PUT");
    var arg=req.url.split('/');
    if(arg[1]===''){
        ; //不操作
    }

    var item="";
    req.on('data',function(chunk){
        item+=chunk;
    });
    req.on('end',function(){
        if(!items[i]){
            res.statusCode=404;
            res.end('Not found');
        }else{
            items[i]=item;
            res.end("Change OK");
        }
    });
}