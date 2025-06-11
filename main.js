var c = new Array(8);
for (let ci = 0; ci < c.length; ci++) {
    c[ci] = Math.pow(10, 3*ci+1);
}
// TODO: Rewire this so u1e is its own effect and not the base of u1
let d = {
    Num1: 0,
    Num1pc: 1,
    u1: 0,
    u1c: c[0],
    u1e: 1.1,
    u2: 0,
    u2c: c[1],
    u2e: 0
}  
function incNum1() {
    d.Num1 = parseFloat((d.Num1 + d.Num1pc).toFixed(3));
    document.getElementById("Num1").innerHTML = d.Num1 + " Num1";
}
function buyu1() {
    if(d.Num1 >= d.u1c) {
        d.Num1 -= parseFloat(d.u1c.toFixed(3));
        d.u1c = parseFloat((d.u1c*1.15).toFixed(3));
        d.u1 = parseFloat((d.u1 + 1).toFixed(3));
        document.getElementById("u1a").innerHTML = "Level " + d.u1;
        document.getElementById("Num1").innerHTML = d.Num1 + " Num1";
        document.getElementById("u1").innerHTML = "Multiply Num1 gain by " + d.u1e + " (Currently " + d.Num1pc + "/click) Cost:" + d.u1c + "Num1";
    }
}
function buyu2() {
    if(d.Num1 >= d.u2c) {
        d.Num1 -= parseFloat(d.u2c.toFixed(3));
        d.u1 = parseFloat((d.u1 + 2).toFixed(3));
        d.u2c = parseFloat((d.u2c*2).toFixed(3));
        d.u2 = parseFloat((d.u2 + 1).toFixed(3));
        d.u1e = parseFloat((d.u1e + 0.001).toFixed(3));
        d.u2e = parseFloat((d.u2e + 0.001).toFixed(3));
        document.getElementById("u2a").innerHTML = "Level " + d.u2;
        document.getElementById("u2").innerHTML = "Add 0.001 to the base of the first upgrade (Currently +" + d.u2e + ") Cost:" + d.u2c + "Num1";
    }
}
var loop = window.setInterval(function() {
    incNum1();
}, 1000);
var saveloop = window.setInterval(function() {
    localStorage.setItem("Data", JSON.stringify(d));
}, 10000);
var save = JSON.parse(localStorage.getItem("Data"));
if(save !== null) {
    d = save;
}
