var msg=process.argv[2];

var parseBasicAuth=function(encodeString){
    var buf=new Buffer(encodeString,'base64');  //base64表示 encodeString是base64编码
    var parts=buf.toString('utf-8').split(':');

    return{
        name:parts[0],
        passwd:parts[1]
    };
};

var credentials=parseBasicAuth(msg);

console.log(credentials);