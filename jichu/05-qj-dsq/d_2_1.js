// setInterval

console.log('start...');

var d=setInterval(loop,1000);

function loop(){
    console.log('循环执行我五次...');
}

setTimeout(function(){
    clearInterval(d);
},6000);
//这种方式不好 可通过设置变量 当变量达到一定值停止定时器

//调用timeout(interval)函数返回的对象的unref方法也可终止回调函数执行(timeout/interval的回调函数都可以)
//详情见 d_2_2.js