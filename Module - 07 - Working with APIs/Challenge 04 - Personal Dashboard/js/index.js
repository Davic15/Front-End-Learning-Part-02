
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(`Author: ${data.user.first_name} ${data.user.last_name}`)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").innerText = `By: ${data.user.first_name} ${data.user.last_name}`
    
})
.catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
})