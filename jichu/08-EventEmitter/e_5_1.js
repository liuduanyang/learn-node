// 继续前面的话题 即 使自己的类具有EventEmitter类的方法

// 这次不用继承了

// 混合EventEmitter 把EventEmitter的方法复制到自己的类中

var EventEmitter=require('events').EventEmitter;

function MusicPlayer(geming){
    this.geming=geming;
    this.playing=false;

    for(var i in EventEmitter.prototype){
        this[i]=EventEmitter.prototype[i];
        console.log(i);
    }
}

MusicPlayer.prototype={
    toString:function(){
        if(this.playing){
            return "Now playing:"+this.geming;
        }else{
            return "stoped";
        }
    }
};

module.exports=MusicPlayer;