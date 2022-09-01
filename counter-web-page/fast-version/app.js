var number = document.getElementById("number");

document.getElementById("increment").addEventListener("click", function(e) {
    document.getElementById("number").textContent++;
})

document.getElementById("decrement").addEventListener("click", function(e) {
    document.getElementById("number").textContent--;
})

document.getElementById("reset").addEventListener("click", function(e) {
    document.getElementById("number").textContent = 0;
})
