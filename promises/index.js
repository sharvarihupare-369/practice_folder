//Example 1

//Present
document.addEventListener("click",function(e){
    //Future
   console.log(e.target)
})

//Example 2 
let xhr = new XMLHttpRequest(); // ==> Present
xhr.open("GET","https://api.github.com/users/sharvarihupare-369") // ==> Present
xhr.onload = function () {  // ===> Future
   console.log(xhr.response)
}
xhr.send()

//Example 3
const array = [1,2,3,4,5,6,7,8]  // ==> Present
array.map(function(num){ 
    // Future
    console.log(num)  
})

//Example 4 
// setTimeout is called present and console.log() this is going to be called in present    
setTimeout(()=>{
    console.log('Logging from setTimeout!')
},2000)  