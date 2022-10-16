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
}
