const divEl = document.querySelector(".container");
let htmlFragment = "";
fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
    .then(res => res.json())
    .then(data => {
        const postArray = data.slice(0, 5)
        for(const element of postArray){
            htmlFragment += `
                <h3>${element.title}</h3>
                <p>${element.body}</p>
                <hr />
            `
        }
        divEl.innerHTML = htmlFragment
    });