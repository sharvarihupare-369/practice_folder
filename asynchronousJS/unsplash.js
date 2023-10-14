const image = document.querySelector("img")
const btn = document.querySelector("button")



btn.addEventListener("click",()=>{
let xhr = new XMLHttpRequest()

xhr.open('GET',`https://api.unsplash.com/photos/random?client_id=QbZklYRgY3PsOTsxLMmi08_2StuQrlUW5PmaXmZR1A8`)
xhr.onload = function (){
    let imageData  = JSON.parse(xhr.response)
    image.src = imageData.urls.small
    
}
xhr.onerror = function(){
    console.log('Something went wrong ...')
}; 

xhr.send();
})



// QbZklYRgY3PsOTsxLMmi08_2StuQrlUW5PmaXmZR1A8  -- apikey
// R8nmyZwOOiSew7JACFpwTdyJAGgLfytpvibXvGi1juU  -- secretKey
// https://api.unsplash.com/photos/random   -- apiurl