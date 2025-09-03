const t = ["Fabric", "Quarks"];
var u;
function close(n) {
    eval("u = document.getElementsByClassName(" + t[n] + ");");
    eval("for(let v = 0; v < u.length; v++) u[v].style.display = 'none'");
    u = [];
}
function open(n) {
    eval("u = document.getElementsByClassName(" + t[n] + ");");
    eval("for(let v = 0; v < u.length; v++) u[v].style.display = 'block'");
    u = [];
}