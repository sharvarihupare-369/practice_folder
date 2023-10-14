
function wait(cb){
    setTimeout(cb,5000)
    setTimeout(cb,5000)
    setTimeout(cb,5000)
}

wait(()=>{
    console.log("Hello callback!")
})

function waitPr(){
    return new Promise((res,rej)=>{
        setTimeout(res,5000)
        setTimeout(res,5000)
        setTimeout(res,5000)
        setTimeout(res,5000)
        setTimeout(res,5000)
    })
}

let time = waitPr().then(()=>{console.log("Hello promise!")}).catch((err)=>{console.log(err)})