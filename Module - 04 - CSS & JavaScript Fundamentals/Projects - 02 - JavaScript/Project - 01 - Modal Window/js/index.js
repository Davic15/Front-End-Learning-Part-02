const overlayEl = document.getElementById("overlay");
const openEl = document.getElementById("open-modal");
const closeEl = document.getElementById("close-modal");

openEl.addEventListener("click", function() {
    overlayEl.style.display = "block";
})


closeEl.addEventListener("click", function() {
    overlayEl.style.display = "none";
})