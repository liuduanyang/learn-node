// 暴露一个函数

console.log("我在m_4_2.js里");

myName="liuduanyang";

module.exports=function(a){
    var c=eval(a);
    console.log("结果为：",c);
}