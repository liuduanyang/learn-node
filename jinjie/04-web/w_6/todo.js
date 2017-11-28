//前端访问后端api的方法 即前端发起http请求的方法
//1.ajax
//2.fetch

var items;

get(show);  //主体函数 调用

function get(cb){
    document.getElementById("output").innerHTML="";
    fetch("http://localhost:8080").then(function(res){  //连接到w5_1写的api中
        res.text().then(function(data){
            items=JSON.parse(data);       //得到后端数据 数组
            cb();
        });
    });
}

function show(){
    var str="<ul>";
    for(var i=0;i<items.length;i++){
        str+='<li>'+items[i]+'</li>';
    }
    str+='</ul>';
    document.getElementById("output").innerHTML=str;
}

function add(){
    var item=document.getElementById("todo").value;
    if(item===""){return;}
    items.push(item);
    show();
    fetch("http://localhost:8080",{method:'POST',body:item});

}