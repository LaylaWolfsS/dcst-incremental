let d = {
    Num1: 0,
    Num1pc: 0,
    u1: 0,
    u1c: 0,
}  
function incNum1() {
    d.Num1 += d.Num1pc;
    document.getElementById("Num1").innerHTML = Num1 + "Num1";
}
function buyu1() {
    if(Num1 >= u1c) {
        d.Num1 = d.Num1.minus(u1c).toFixed(2);
        d.Num1pc = d.Num1pc.times(1.1).toFixed(2);
        d.u1c = d.u1c.times(1.2).toFixed(2);
        d.u1 = d.u1.plus(1).toFixed(2);
        document.getElementById("u1a").innerHTML = "Level " + d.u1;
        document.getElementById("Num1").innerHTML = d.Num1 + "Num1";
        document.getElementById("u1").innerHTML = "Accelerate Num1 (Currently " + d.Num1pc + "/click) Cost:" + d.u1c + "Num1";
    }
}
var loop = window.setInterval(function() {
    incNum1();
}, 1000);
var saveloop = window.setInterval(function() {
    localStorage.setItem("Data", JSON.stringify(Data));
}, 20000);
var save = JSON.parse(localStorage.getItem("Data"));
if(save !== null) {
    Data = save;
}