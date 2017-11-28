//第五章 测试：保证代码质量
//用assert模块编写测试脚本
//属于自动化测试

//单元测试：直接测试程序的代码逻辑，通常在函数层面内测试

//单元测试可分为两大类：测试驱动开发(TDD) 行为驱动开发(BDD)

//Mocha两类都支持 Mocha属于第三方测试框架
//node的assert模块属于TDD

//还有一种测试叫做验收测试(与单元测试同级) 用于测试程序界面和功能(重外在 而单元测试重逻辑)

//asert(断言)模块 ： 当预期结果与实际结果不一致抛出异常

//asert模块的api函数分为三类：肯定的断言 否定的断言 异常的断言

//函数参数一般有三个: 实际结果 预期结果 如果不匹配时抛出的错误信息(作为Error的message属性)

function Todo(){
    this.todos=[];
}
Todo.prototype.add=function(item){
    if(!item){
        throw new Error("Todo#add require an item");
    }  
        this.todos.push(item);
}
Todo.prototype.deleteAll=function(){
    this.todos=[];
}
Todo.prototype.getCount=function(){
    return this.todos.length;
}
Todo.prototype.doAsync=function(cb){    //一个异步的方法
    setTimeout(cb,2000,true);
}
module.exports=Todo;

//自动测试脚本见 todo.test.js        注意名称不能瞎写 .test.js为后缀 文件名与被测的脚本相同