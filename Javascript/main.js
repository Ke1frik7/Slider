let page = 10
let search = "man"
let API_KEY = "896aab32"
fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}`)
.then((response) => response.json())
.then((data) => handle(data))
let template = renderElement("template").content
let parent = renderElement(".images")
function handle(data){
    let array = data.Search
    for(let i = 0; i<array.length; i++){
        let cloun = template.cloneNode(true)
        let img = cloun.querySelector("img")
        img.src = array[i].Poster
        parent.appendChild(cloun)
    }
    let images = renderElementAll(".images img")
    imaging(images)
}
let imagesContainer = renderElement(".images")
function imaging(img){
    let index = 0
    let changes = () => {
        if(index == img.length-1){
            index = 0
        }else if(index <0){
            index = img.length-1
        }
        imagesContainer.style.transform = `translateX(${index*-300}px)`
        imagesContainer.style.transition = '0.5s ease'
    }
    setInterval(() => {
        index++
        changes()
    }, 1000)
}    
