function clock(el){
    var today=new Date();
    var sec=today.getSeconds();
    var min=today.getMinutes();
    var hour=today.getHours();
    
    if(sec < 10)
        sec = '0' + sec;
    if(min < 10)
        min ='0' + min;
    
    el.innerHTML = hour+":"+min+":"+sec;
    setTimeout(function(){clock(el)}, 1000);
}

var clock_div = document.getElementById('clock_div');
clock(clock_div);
