//Callbacks vs Promises

//Right Now
function fetchData(url){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url)
    xhr.onload = function(){
        //Future
        console.log(JSON.parse(xhr.response))
    }
    xhr.send()
}

// fetchData('https://api.github.com/users/sharvarihupare-369')

function fetch(url){
    return new Promise((res,rej)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url)
        xhr.onload = () => setTimeout(() => res(JSON.parse(xhr.response)),5000)
        xhr.onerror = () => rej('Something went wrong!');
        xhr.send()
    })
}

let data = fetch('https://api.github.com/users/sharvarihupare-369').then((data)=>console.log(data.name)).catch((err)=>console.log(err))