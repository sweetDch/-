auto();
console.show();


//监听控制
events.setKeyInterceptionEnabled("volume_down", true);
threads.start(function(){
    events.observeKey();
events.on("key", function(volume_down, event){
    //处理按键事件
    toast("音量下键被按下了");
    toast("脚本已停止运行");
    log("脚本已停止运行");
    exit();
});
});

var b;
b = rawInput("请输入运行次数",200);
toast("等待5秒开始运行\n请进入刷题界面");
toast("你输入的运行次数是："+b);
sleep(5000);

var i = 0;

setInterval(function(){
    i++;
    log("脚本已运行："+i * 6 + "秒");
    代码();
        
    if(i == b){            
        toast("脚本已停止运行");
        log("脚本已停止运行");
        exit();
    }
}, 6000);

function 代码(){
                //点击位置((x1,y1),(x2,y2) 300), 每次用时300毫秒
                swipe(1044, 1440, 592, 1440, 300);
                log("脚本运行第 "+ i +" 次");
                log("脚本运行中...");
               // sleep(6000);
}