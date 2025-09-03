const t = ["Fabric", "Quarks"];
var u;
function close(n) {
    u = document.getElementsByClassName(t[n]);
    for(let v = 0; v < u.length; v++) u[v].style.display = 'none';
    u = [];
}
function open(n) {
    u = document.getElementsByClassName(t[n]);
    for(let v = 0; v < u.length; v++) u[v].style.display = 'block';
    u = [];
}