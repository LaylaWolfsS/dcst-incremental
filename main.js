var Data = {
    Num1: new Decimal(0),
    Num1pc: new Decimal(1),
    u1: new Decimal(1),
    u1c: new Decimal(10)
}
function incNum1() {
    Data.Num1 += Data.Num1pc;
    document.getElementById("Num1").innerHTML = Data.Num1 + "Num1";
}
function buyu1() {
    if(Data.Num1 >= Data.u1c) {
        Data.Num1 -= Data.u1c;
        Data.Num1pc = Data.Num1pc.times(1.1);
        Data.u1c = Data.u1c.times(1.2);
        Data.u1 = Data.u1.plus(1);
        document.getElementById("u1a").innerHTML = "Level " + Data.u1;
        document.getElementById("Num1").innerHTML = Data.Num1 + "Num1";
        document.getElementById("u1").innerHTML = "Accelerate Num1 (Currently " + Data.Num1pc + "/click) Cost:" + Data.u1c + "Num1";
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