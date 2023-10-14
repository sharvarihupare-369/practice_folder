//use fetch provided by browser

let ul  = document.querySelector("ul")



let dataPromise = fetch("https://api.github.com/users/sharvarihupare-369")
  .then((res) => res.json())
  .then((data) => data.followers_url)
  .then((followersUrl)=>{
    return fetch(followersUrl)
  })  .then((res)=>res.json())
  .then((users)=>{
    console.log(users)
    users.forEach((user)=>{
        let li = document.createElement("li")
        li.innerText = user.login;
        ul.append(li)
    })
  })
  .catch((err) => console.log(err));

