//页面加载后触发
window.onload = function(){
    var back = document.getElementById('backTop');
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;

    var back1 = document.getElementById('backIntro');
    var back2 = document.getElementById('backDemo');
    var back3 = document.getElementById('backWork')
    
    back.onclick = function(){
        startMove(0);
    }

    back1.onclick = function(){
        startMove(0);
    }
    
    back2.onclick = function(){
        startMove(1010);
    }

    back3.onclick = function(){
        startMove(2450);
    }

    // 滚动条滚动触发
    window.onscroll = function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight) {
            back.style.display = "block";
        }else {
            back.style.display = "none";
        }
        if (!isTop) {
            clearInterval(timer);
        };
        isTop = false;     
    }

    function startMove(iTarget){
        clearInterval(timer);
        timer = setInterval (function(){
            // 获取滚动条高度
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (osTop < iTarget) {
                    var speed = Math.ceil((iTarget-osTop)/10);
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                    isTop = true;
                    console.log(osTop+speed);
                    if(osTop == iTarget){
                        clearInterval(timer);
                    }  
                } else if (osTop >= iTarget) {
                    var speed = Math.floor(iTarget-osTop)/10;
                    document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                    isTop = true;
                    console.log(osTop);
                    if(osTop == iTarget){
                        clearInterval(timer);
                    }
                           
                };
                      
            },30);
    }
      
}



// 原返回顶部代码    
/*    function backMove(){
        // 设置定时器
        clearInterval(timer);
        timer = setInterval (function(){
            // 获取滚动条高度
                var osTop = document.documentElement.scrollTop||document.body.scrollTop;
                var speed = Math.floor(-osTop/8);
                document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                isTop = true;
                if(osTop == 0){
                    clearInterval(timer);
                }        
            },30);  
    }*/