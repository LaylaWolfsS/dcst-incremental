const t = ["Fabric", "Quarks"];
function close(n) {
    eval("document.getElementByClassName(" + t[n] + ").style.display = 'none'");
}
function open(n) {
    eval("document.getElementByClassName(" + t[n] + ").style.display = 'block'");
}