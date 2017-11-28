//对目录(文件夹)的递归操作

//删除目录时 如果目录非空是删除不了的 会报错
// 解决办法 递归删除 先删除目录内的文件再删除该目录

var fs=require("fs");
var join=require("path").join;  //用于合并路径

var pack=process.argv[2];   //目录或文件

if(fs.statSync(pack).isFile()){   //如果参数是文件
    fs.unlinkSync(pack);          //直接删除
}
else if(fs.statSync(pack).isDirectory()){  //如果是目录
    deleteDir(pack);                       //调用deleteDir 该方法是自定义的
}

function deleteDir(pack){               
    var files=fs.readdirSync(pack);        //读取该目录下的文件或目录 返回的是数组
    for(var i=0;i<files.length;i++){       //遍历数组
        var file=join(pack,files[i]);      //在循环中 合并目录+文件名  即获取文件路径

        if(fs.statSync(file).isFile()){    //如果合并后的路径是文件
            fs.unlinkSync(file);           //则直接删除
        }
        else if(fs.statSync(file).isDirectory){   //如果合并后的路径是目录
            deleteDir(file);                      //则再次调用deleteDir方法 实现递归
        }
    }
    fs.rmdirSync(pack);                   //把该路径下的文件删除后 删除该目录    
}