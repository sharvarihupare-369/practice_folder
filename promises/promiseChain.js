function fetchData(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => setTimeout(() => res(JSON.parse(xhr.response)), 5000);
    xhr.onerror = () => rej("Something went wrong!");
    xhr.send();
  });
}

let dataPromise = fetchData("https://api.github.com/users/sharvarihupare-369")
  .then((userInfo) => {
    // console.log(userInfo)
    return userInfo.followers_url;
  }).catch((err) => console.log(err))
  .then((followersUrl) => {
    return fetchData(followersUrl);
  })
  .then((users) => console.log(users))
  .catch((err) => console.log(err));
