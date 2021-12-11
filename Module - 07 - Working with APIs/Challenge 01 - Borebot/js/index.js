const btn = document.querySelector(".btn");
const header4 = document.querySelector(".todo");
const header1 = document.getElementById("title");


btn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
        header4.textContent = data.activity;
        header1.textContent = "🦾 HappyBot 🦿";
        document.body.classList.add("fun")
    });
});


