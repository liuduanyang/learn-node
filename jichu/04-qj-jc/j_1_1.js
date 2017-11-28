//全局 进程对象 process
//获取进程的信息

//process对象代表当前运行的进程

//childprocess让当前进程启动和管理其它程序
//所有启动的进程都是当前进程的子进程

console.log('获取运行的处理器架构',process.arch);
console.log('获取运行的操作系统',process.platform);

console.log('\n获取进程的ID',process.pid);
console.log('获取启动Node.js进程的可执行文件所在的绝对路径',process.execPath);

console.log('\n获取Node.js的版本',process.version);
console.log('获取Node.js进程的数字标记的用户身份 此函数在Windows或Android平台无效','process.getuid()');
console.log('获取Node.js进程的数字标记的组身份 此函数在Windows或Android平台无效','process.getgid()');
console.log('获取Node.js 进程当前工作的目录',process.cwd());

//process.memoryUsage()方法返回Node.js进程的内存使用情况的对象，该对象每个属性值的单位为字节
console.log('获取常驻内存大小',process.memoryUsage().rss);//process.memoryUsage()返回一个对象
console.log('获取V8的内存使用情况',process.memoryUsage().heapTotal);//heapTotal 和 heapUsed 代表V8的内存使用情况
console.log('获取V8的内存使用情况',process.memoryUsage().heapUsed);
console.log('获取绑定到Javascript的C++对象的内存使用情况',process.memoryUsage().external);//代表V8管理的，绑定到Javascript的C++对象的内存使用情况

//process.env属性返回一个包含用户环境信息的对象
console.log('获取用户环境信息',process.env);

//process.stdin.perssume..
