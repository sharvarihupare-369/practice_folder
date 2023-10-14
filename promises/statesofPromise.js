//States of promise

let initialPr = new Promise((res,rej)=>{

})

let fulfilledPr = new Promise((res,rej)=>{
    res(10)
})

let rejectedPr = new Promise((res,rej)=>{
     rej("Something went wrong")
})

let five = new Promise((res,rej)=>{
    res(5)
})
