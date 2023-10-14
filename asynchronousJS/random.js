const image = document.querySelector("img")
const name = document.querySelector("h3")
const workingat = document.querySelector("p")
const followers = document.querySelector(".followers")
const followings = document.querySelector(".followings")
const input = document.querySelector("input")

function displayUI(data){
    image.src = data.avatar_url;
    name.innerText = data.name;
    workingat.innerText = data.company;
    followers.innerText = `Followers : ${data.followers}`
    followings.innerText = `Followings : ${data.following}`
    // console.log(data.name)
}

function handleChange(event){
    console.log(event.keyCode)
    if(event.keyCode === 13){
        let xhr = new XMLHttpRequest()
        xhr.open("GET",`https://api.github.com/users/${event.target.value}`);
        xhr.onload = function(){
            let userData = JSON.parse(xhr.response)
            displayUI(userData)
        };
        xhr.onerror = function(){
            console.log('Something went wrong ...')
        }; 
        
       xhr.send();
       event.target.value = ''
    }
}

input.addEventListener("keyup",handleChange);

