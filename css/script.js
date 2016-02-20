//页面加载后触发
window.onload = function(){
    var btn = document.getElementById('backTop');
    
    btn.onclick = function(){
        var osTop = document.documentElement.scrollTop;
        alert(osTop);
    }
}