// 加载一组相关模块
// 包：由好多模块的组成

// 创建一个文件将所有脚本文件加载(require) 然后再将该脚本文件导出
// 此时 该文件目录可作为模块(大的模块 包含好多模块 就是包)

// 详情见 shuoming.png

// 如果此文件起名为index.js(不可改) 并且子模块与该文件在同一目录 则用户只需引入该目录名即可(包)

module.exports={
    1:require('./m_5_2'),
    2:require('./m_5_3'),
    3:require('./m_5_4')
};

console.log(module);

