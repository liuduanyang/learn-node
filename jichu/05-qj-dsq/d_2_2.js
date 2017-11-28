var a=setInterval(function(){
    console.log("每隔一秒打印一次");
},1000);

setTimeout(function(){
    a.unref();
},5000);