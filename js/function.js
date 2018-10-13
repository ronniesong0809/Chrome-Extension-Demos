function clock(el){
    var today=new Date();
    var s=today.getSeconds();
    var m=today.getMinutes();
    var h=today.getHours();
    
    if(s < 10)
        s = '0' + sec;
    if(m < 10)
        m ='0' + m;
    
    el.innerHTML = h+":"+m+":"+s;
    setTimeout(function(){clock(el)}, 1000);
}

var clock_div = document.getElementById('clock_div');
clock(clock_div);
