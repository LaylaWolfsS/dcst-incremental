const t = ["Fabric", "Quarks"];
function close(n) {
    eval("document.getElementsByClassName(" + t[n] + ").style.display = 'none'");
}
function open(n) {
    eval("document.getElementsByClassName(" + t[n] + ").style.display = 'block'");
}
