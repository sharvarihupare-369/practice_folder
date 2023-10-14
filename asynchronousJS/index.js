const image = document.querySelector("img")
const name = document.querySelector("h3")
const workingat = document.querySelector("p")
const followers = document.querySelector(".followers")
const followings = document.querySelector(".followings")


let xhr = new XMLHttpRequest()
xhr.open("GET","https://api.github.com/users/sharvarihupare-369")

xhr.onload = function(){
    // console.log("Data loaded")
    // console.log(JSON.parse(xhr.response))
    let userData = JSON.parse(xhr.response)
    image.src = userData.avatar_url;
    name.innerText = userData.name;
    workingat.innerText = userData.company;
    followers.innerText = `Followers : ${userData.followers}`
    followings.innerText = `Followings : ${userData.following}`
    console.log(userData.name)
}
xhr.onloadstart = function(){
    console.log('Data loading Started')
}

xhr.onloadend = function(){
    console.log('Data loading ended')
}

xhr.onloadprogress = function(){
    console.log("Data Loading ...")
}

xhr.onerror = function(){
    console.log('Something went wrong ...')
}

// xhr.addEventListener('load',()=>{
//     let userData = JSON.parse(xhr.response)
//     console.log(userData.name)
// })

xhr.send()