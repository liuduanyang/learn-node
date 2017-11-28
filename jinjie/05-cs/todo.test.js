var assert=require("assert");
var Todo=require("./todo");

var todo=new Todo();
var testCompleted=0; //测试案例执行的个数

//对todo.js的delete方法做单元测试
deleteTest();

function deleteTest(){
    console.log("测试delete函数");
    todo.add('Delete Me');  //向实例中添加数据 为了测试删除嘛
    assert.equal(todo.getCount(),1,'false length');    // //相当于使用相等运算符（==）测试 actual 参数与 expected 参数是否不相等
    todo.deleteAll();
    assert.equal(todo.getCount(),0,'false length');
    testCompleted++;
}

//直接运行该文件即可完成测试 不报错即说明无错


//对todo.js的add方法做单元测试
addTest();

function addTest(){
    console.log("测试add函数");  
    todo.deleteAll();
    todo.add('added');
    assert.notEqual(todo.getCount(),10,'false length');   //相当于使用不等运算符（!=）测试 actual 参数与 expected 参数是否不相等
    assert.equal(todo.getCount(),1,'false length');  
    testCompleted++;
}

//对todo.js的add方法做单元测试 用throws方法
throwTest();
function throwTest(){
    console.log("用throw方法测试add");
    assert.throws(todo.add,/require/);  //即参数一为要测试的函数 该函数会报错 断言的作用：报错信息(实际异常)与第二个参数(预期异常)匹配时不会报错 否则报错
    //api: http://nodejs.cn/api/assert.html#assert_assert_throws_block_error_message
    testCompleted++;
}

//对todo.js的doAsync方法做单元测试 用assert方法
doAsyncTest(function(){console.log("我只是个回调函数...")});
function doAsyncTest(cb){
    console.log("对doAsync方法测试");
    todo.doAsync(function(){
        assert(true,"第一参数为false时 报错");
        //assert()是assert.ok()的别名 api: http://nodejs.cn/api/assert.html#assert_assert_ok_value_message
        testCompleted++;
        cb();
    });
}

