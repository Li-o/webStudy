// var comingdata = new Date();
var now = new Date();

// var y = document.getElementById("y");
var d = document.getElementById("d");
var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");

//计算时间
var x = setInterval(function(){
    // var des = comingdata.getTime() - now.getTime();
    // var days = Math.floor(des/(1000 * 60 * 60 * 24));
    // var hours = Math.floor(des%(1000 * 60 * 60 * 24)/ (1000 * 60 * 60));
    // var mins = Math.floor(des%(1000 * 60 * 60)/ (1000 * 60));
    // var secs = Math.floor(des%(1000 * 60)/ 1000);
    
    // var years = now.getFullYear();
    var days = now.getDate();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();

    // y.innerHTML = years;
    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(mins);
    s.innerHTML = getTrueNumber(secs);

},1000);

//看是不是个位数，如果是在前面加上零
function getTrueNumber(x) {
    if(x < 10){
        return "0"+x;
    }else{
        return x;
    }

}