var c = new Array(8);
for (let ci = 0; ci < c.length; ci++) {
    c[ci] = Math.pow(10, 2*ci+1);
}
const n = {
    e: {
        u1: 1,
        u2: 0,
        u3: 1,
        u4: 1,
    },
    l: ["Level 1: Yuzuriha's Space-Time Fabric","Level 2: Chrome's Quarks"],
    r: {
        u1: 1.15,
        u2: 2,
        u3: 2,
        u4: 100
    }
}
var s = [false, false, false, false];
var r = [false];
let d = {
    l: 1,
    Num1: 0,
    Num1r: 0.05,
    Num2: 0,
    u1: 0,
    u1c: c[0],
    u1e: 1,
    u1r: 1.15,
    u2: 0,
    u2c: c[1],
    u2e: 0,
    u2r: 2,
    u2s: s[0],
    u3: 0,
    u3c: c[2],
    u3e: 1,
    u3r: 2,
    u3s: s[1],
    u4: 0,
    u4c: c[3],
    u4e: 1,
    u4r: 100,
    u4s: s[2],
    p: 0
}  
var effectloop = window.setInterval(function() {
    d.u1e = Math.pow(d.u2e + 1.1,d.u1);
    d.Num1r = Math.pow(d.u1e,Math.pow(d.u4e,d.u4));
    d.u1c = c[0]*Math.pow(d.u1r,d.u1);
    d.u2c = c[1]*Math.pow(d.u2r,d.u2);
    d.u3c = c[2]*Math.pow(d.u3r,d.u3);
    d.u4c = c[3]*Math.pow(d.u4r,d.u4);
}, 50);
function buyu1() {
    if(d.Num1 >= d.u1c) {
        d.Num1 -= d.u1c;
        d.u1 += 1;
        if(d.p <= 1) d.p = 1;
        if(d.u1 > 50) d.u1r *= 1.01;
    }
}
function buyu2() {
    if(d.Num1 >= d.u2c) {
        d.Num1 -= parseFloat(d.u2c.toFixed(3));
        d.u2 += 1;
        d.u2e += 0.004;
        if(d.p <= 2) d.p = 2;
        if(d.u2 > 12) d.u2r *= 1.015;
    }
}
function buyu3() {
    if(d.Num1 >= d.u3c) {
        d.Num1 -= parseFloat(d.u3c.toFixed(3));
        d.u3 += 1;
        d.u1r /= 1.01;
        d.u2r /= 1.01;
        d.u3e *= parseFloat(d.u3e.toFixed(3));
        if(d.p <= 3) d.p = 3;
        if(d.u3 > 10) d.u3r *= 1.02;
    }
}
function buyu4() {
    if(d.Num1 >= d.u4c) {
        d.Num1 -= parseFloat(d.u4c.toFixed(3));
        d.u4 += 1;
        d.u4e *= parseFloat(d.u4e.toFixed(3));
        if(d.p <= 4) d.p = 4;
        if(d.u4 > 5) d.u3r *= 1.02;
    }
}
function reset1() {
    if(d.Num1 >= 1000000) {
        d.Num2 = Math.pow(d.Num1/1000000,0.125);
        d.Num1 = 0;
        d.p = 0;
        for(let ri = 1; ri < 5; ri++) {
            s[ri-1] = false;
            eval("d.u" + ri + " = 0");
            eval("d.u" + ri + "r = n.r.u" + ri);
            eval("d.u" + ri + "e = n.e.u" + ri);
        }
        if(d.l<2) d.l = 2;
    }
}
var loop = window.setInterval(function() {
    d.Num1 += d.Num1r;
    document.getElementById("Num1").innerHTML = "You have " + parseFloat(d.Num1.toFixed(3)) + " Fabric";
    document.getElementById("u1a").innerHTML = "Level " + parseFloat(d.u1.toFixed(3));
    document.getElementById("u1").innerHTML = "Multiply Fabric gain by " + parseFloat((d.u2e + 1.1).toFixed(3)) + " (Currently " + parseFloat((d.Num1r*20).toFixed(3)) + "/sec) Cost: " + parseFloat(d.u1c.toFixed(3)) + " Fabric";
    document.getElementById("u2a").innerHTML = "Level " + parseFloat(d.u2.toFixed(3));
    document.getElementById("u2").innerHTML = "Add 0.004 to the base of the first upgrade (Currently +" + parseFloat(d.u2e.toFixed(3)) + ") Cost: " + parseFloat(d.u2c.toFixed(3)) + " Fabric";
    document.getElementById("u3a").innerHTML = "Level " + parseFloat(d.u3.toFixed(3));
    document.getElementById("u3").innerHTML = "Divide the scaling of all previous upgrades by 1.01 (Currently /" + parseFloat(d.u3e.toFixed(3)) + ") Cost: " + parseFloat(d.u3c.toFixed(3)) + " Fabric";
    document.getElementById("u4a").innerHTML = "Level " + parseFloat(d.u3.toFixed(3));
    document.getElementById("u4").innerHTML = "Raise Fabric gain to the power of 1.1 (Currently ^" + parseFloat(d.u4e.toFixed(3)) + ") Cost:" + parseFloat(d.u4c.toFixed(3)) + " Fabric";
    if(d.Num1 >= 1000000) document.getElementById("r1").innerHTML = "Reset your Fabric for " + parseFloat((Math.pow(d.Num1/1000000,0.125)).toFixed(3)) + "Quarks"; else document.getElementById("r1").innerHTML = "Reach 1000000 Quarks";
    document.getElementById("level").innerHTML = n.l[d.l-1];
}, 50);
var showloop = window.setInterval(function() {
    switch(d.p) {
        case 0: s[0] = false; break;
        case 1: s[0] = true; s[1] = false; break;
        case 2: s[1] = true; s[2] = false; break;
        case 3: s[2] = true; r[0] = false; break;
        case 4: r[0] = true; break;
    }
    for (let si = 0; si < s.length - 2; si++) {
        if (s[si] == true) {
            document.getElementById("u" + (si + 2)).style.display = "block";
            document.getElementById("u" + (si + 2) + "a").style.display = "block";
        } else {
            document.getElementById("u" + (si + 2)).style.display = "none";
            document.getElementById("u" + (si + 2) + "a").style.display = "none";
        }
    }
    for (let ri = 0; ri < r.length - 1; ri++) {
        if (r[ri] == true) {
            document.getElementById("r" + (ri + 1)).style.display = "block";
        } else {
            document.getElementById("r" + (ri + 1)).style.display = "none";
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