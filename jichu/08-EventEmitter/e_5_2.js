var MusicPlayer=require('./e_5_1');

var music=new MusicPlayer("尬歌");

music.on('play',function(){
    this.playing=true;
    console.log(this.toString());
});

music.on('stop',function(){
    this.playing=false;
    console.log(this.toString());
});

music.emit("play");

setTimeout(function(){
    music.emit("stop");
},3000);