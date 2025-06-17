var c = new Array(8);
for (let ci = 0; ci < c.length; ci++) {
    c[ci] = Math.pow(10, Math.pow(ci,2)+1);
}
var s = [false, false, false, false, false];
// TODO: Rewire this so u1e is its own effect and not the base of u1
let d = {
    Num1: 0,
    Num1pc: 1,
    u1: 0,
    u1c: c[0],
    u1e: 1.1,
    u1r: 1.15,
    u2: 0,
    u2c: c[1],
    u2e: 0,
    u2r: 2,
    u2s: s[0],
    u3: 0,
    u3c: c[2],
    u3e: 1,
    u3s: s[1],
    p: 0
}  
var effectloop = window.setInterval(function() {
    d.u1e = 1.1 + d.u2e;
    d.Num1pc = Math.pow(d.u1e,d.u1);
    d.u1c = c[0]*Math.pow(d.u1r,d.u1);
    if(d.u1 >= 50) d.u1c *= Math.pow(1.2,d.u1-50);
    d.u2c = c[1]*Math.pow(d.u2r,d.u2);
}, 50);
function incNum1() {
    d.Num1 += d.Num1pc;
}
function buyu1() {
    if(d.Num1 >= d.u1c) {
        d.Num1 -= d.u1c;
        d.u1c *= d.u1r;
        d.u1 += 1;
        if(d.p <= 1) d.p = 1;
    }
}
function buyu2() {
    if(d.Num1 >= d.u2c) {
        d.Num1 -= parseFloat(d.u2c.toFixed(3));
        d.u2c *= d.u2r;
        d.u2 += 1;
        d.u2e += 0.004;
        if(d.p <= 2) d.p = 2;
    }
}
function buyu3() {
    if(d.Num1 >= d.u3c) {
        d.Num1 -= parseFloat(d.u3c.toFixed(3));
        d.u3c *= 2;
        d.u3 += 1;
        d.u1r /= 1.01;
        d.u2r /= 1.01;
    }
}
var loop = window.setInterval(function() {
    incNum1();
    document.getElementById("Num1").innerHTML = "You have" + parseFloat(d.Num1.toFixed(3)) + " Fabric";
    document.getElementById("u1a").innerHTML = "Level " + parseFloat(d.u1.toFixed(3));
    document.getElementById("u1").innerHTML = "Multiply Fabric gain by " + parseFloat(d.u1e.toFixed(3)) + " (Currently " + parseFloat(d.Num1pc.toFixed(3)) + "/tick) Cost: " + parseFloat(d.u1c.toFixed(3)) + " Fabric";
    document.getElementById("u2a").innerHTML = "Level " + parseFloat(d.u2.toFixed(3));
    document.getElementById("u2").innerHTML = "Add 0.004 to the base of the first upgrade (Currently +" + parseFloat(d.u2e.toFixed(3)) + ") Cost: " + parseFloat(d.u2c.toFixed(3)) + " Fabric";
    document.getElementById("u3a").innerHTML = "Level " + parseFloat(d.u3.toFixed(3));
    document.getElementById("u3").innerHTML = "Divide the scaling of all previous upgrades by 1.01 (Currently /" + parseFloat(d.u3e.toFixed(3)) + ") Cost: " + parseFloat(d.u3c.toFixed(3)) + " Fabric";
}, 50);
var showloop = window.setInterval(function() {
    switch(d.p) {
        case 0: s[0] = false; break;
        case 1: s[0] = true; s[1] = false; break;
        case 2: s[0] = true; s[1] = true; break;
    }
    for (let si = 0; si < s.length; si++) {
        if (s[si] == true) {
            document.getElementById("u" + (si + 2)).style.display = "block";
            document.getElementById("u" + (si + 2) + "a").style.display = "block";
        } else {
            document.getElementById("u" + (si + 2)).style.display = "none";
            document.getElementById("u" + (si + 2) + "a").style.display = "none";
        }
    }
}, 50);
var saveloop = window.setInterval(function() {
    localStorage.setItem("Data", JSON.stringify(d));
}, 10000);
var save = JSON.parse(localStorage.getItem("Data"));
if(save !== null) {
    d = save;
}