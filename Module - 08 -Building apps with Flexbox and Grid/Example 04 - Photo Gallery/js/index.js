async function getPhotos() {
    let response = await fetch("../json/photos.json")
    let data = await response.json()
    console.log(data)
}

getPhotos()