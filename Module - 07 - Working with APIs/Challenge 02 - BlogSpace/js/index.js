const divEl = document.querySelector(".container");
const formEl = document.getElementById("new-post");
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
let postsArray = [];

function renderPost() {
    let htmlFragment = "";
    for(const element of postsArray){
        htmlFragment += `
            <h3>${element.title}</h3>
            <p>${element.body}</p>
            <hr />
        `;
    }
    divEl.innerHTML = htmlFragment;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5);
        renderPost();
    });

formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    const postTitle = titleInput.value;
    const bodyTitle = bodyInput.value;
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
    .then(post => {
        postsArray.unshift(post);           
        renderPost();
        formEl.reset();
    });
});