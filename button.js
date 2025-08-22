const t = ["Fabric", "Quarks"];
function close(n) {
    eval("document.getElementById(" + t[n] + ").style.display = 'none'");
}
function open(n) {
    eval("document.getElementById(" + t[n] + ").style.display = 'block'");
}