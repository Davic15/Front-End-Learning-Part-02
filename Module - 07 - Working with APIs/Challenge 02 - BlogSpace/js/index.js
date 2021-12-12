window.addEventListener("load", function() {
    console.log("hi")
})

const btnEl = document.querySelectorAll(".box");
console.log(btnEl)

btnEl.forEach(value => {
    value.addEventListener("click", e => {
        console.log(e.target.value)
        if(e.target.value === "one") {
            console.log("wow")
        }
        else {
            console.log("lol")
        }
    })
    
});