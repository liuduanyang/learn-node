// EventEmitter
//事件相关的类

//所有对象的事件响应都是on函数  例如process.stdin.on('data',function)
// 如果事件响应不止一次 则回调函数不要写成匿名回调 应该在外部事先声明 然后在on内写入函数的名字
