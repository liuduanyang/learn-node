// 全局 定时器
//使用setTimeout延迟执行任务

function Bomb(){
    this.message='Bomb';
}

Bomb.prototype.explode=function(){
    console.log(this.message);
}

var bomb=new Bomb();

//注意 如果没有定时器this指向调用者
//有定时器时this指向定时器返回的定时器对象即a(explode: this===a true)  所以需要通过bind方法 把this指向bomb对象
var a=setTimeout(bomb.explode.bind(bomb),5000);
