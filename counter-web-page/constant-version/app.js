let num = 0;
var number = document.getElementById("number");

document.getElementById("increment").addEventListener("click", function(e) {
    num++;
    document.getElementById("number").textContent = num;
})

document.getElementById("decrement").addEventListener("click", function(e) {
    num--;
    document.getElementById("number").textContent = num;
})

document.getElementById("reset").addEventListener("click", function(e) {
    num = 0;
    document.getElementById("number").textContent = num;
})
