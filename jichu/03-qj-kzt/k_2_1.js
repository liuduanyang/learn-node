//基准测试

//测量某段代码执行多少时间 (检测性能)
//console.time('xx') 表示xx(标签)开始计时 
//console.timeEnd('xx') 表示xx(标签)结束计时

console.time('我是标签');

for(var i=0;i<10;i++){
    !function name(i){
        setTimeout(function(){
            console.log(i);
            if(i===9){
                console.timeEnd('我是标签');
            };
        },1000); 
    }(i);
};
//1000ms后 显示：   我是标签:1020.768ms(值为1000左右)

//注意：一组基准测试的.time 和 .timeEnd 应该具有相同的标签 



