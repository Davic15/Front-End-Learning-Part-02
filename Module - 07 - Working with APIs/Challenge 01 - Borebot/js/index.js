const btn = document.querySelector(".btn");
const header4 = document.querySelector(".todo");


btn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            
        console.log(data.activity)
        header4.textContent = data.activity;
    });
});


