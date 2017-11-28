var name=require('./m_4_1');

console.log("谁最帅:",name);

// 注意 子模块 内未暴露的代码也会在主模块内执行 暴露只是将一些子模块内的数据或函数传递给主模块的变量了

// 可通过console.log(module); 来打印一个模块的信息

// 因为缓存 加载一次就可以

var ex=require('./m_4_2');
ex('2+3+10');

console.log("嘿，我叫",myName);


var zl=require("./m_4_3");
console.log('年龄',zl.year);
console.log('性别',zl.sex);