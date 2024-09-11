// Stop watch using SetTimeOut
var c = 0;
const timer = () => {
    console.log(c);
    c++;
    setTimeout(timer,1000);
}

setTimeout(timer, 1000);