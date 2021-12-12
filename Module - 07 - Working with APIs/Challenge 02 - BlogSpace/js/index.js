const divEl = document.querySelector(".container");
const formEl = document.getElementById("new-post");

let htmlFragment = "";
fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(res => res.json())
    .then(data => {
        const postArray = data.slice(0, 5);
        for(const element of postArray){
            htmlFragment += `
                <h3>${element.title}</h3>
                <p>${element.body}</p>
                <hr />
            `;
        }
        divEl.innerHTML = htmlFragment;
    });

    formEl.addEventListener("submit", function(e) {
        e.preventDefault();
        const postTitle = document.getElementById("post-title").value;
        const bodyTitle = document.getElementById("post-body").value;
        const data = {
            title: postTitle,
            body: bodyTitle
        }
        
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(data => console.log(data))
    })