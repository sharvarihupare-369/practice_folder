
let arr = [1,2,34,54]

let sum = arr.reduce((acc,curr)=>{
    acc += curr
    return acc
},0)
console.log(sum)

let oddNums = arr.filter((el)=>{
    if(el%2===1){
        return el
    }
})
console.log(oddNums)

// let ans =arr.reduce((acc,curr)=>{
//     if(curr > acc){
//         acc = curr
//     }
//     return acc
// },-Infinity)
// console.log(ans)

let ans =arr.reduce((acc,curr)=>{
    acc = Math.max(curr)
    return acc
},0)
console.log(ans)

let arr1 = [1,2,3,1,2,1,2]

let count = arr1.reduce((acc,curr)=>{
    if(curr == 1){
     acc++
    }
    return acc;
},0)
// console.log(count)

let removeDupes = arr1.filter((el,ind,arr)=>{
  if(arr.indexOf(el) == ind){
     return el
  }
})
// console.log(removeDupes)

// let removeDupesEl = Array.from(new Set(arr1))
// console.log(removeDupesEl)

// let arr3 = [1,2,3,-2,223]

// let res = arr3.every((el)=>el > 0)
// console.log(res)

let nestedArray  = [1,2,[3,4,[5,6]]]
// console.log(flatarr.flat(2))
function flatArray(arr){
    return arr.reduce((acc,curr)=>{
        return acc.concat(Array.isArray(curr) ? flatArray(curr) : curr)
    },[])
}

let result = flatArray(nestedArray)
console.log(result)

let randomArray = [2,45,56,234,554]
let sortArray  = randomArray.sort() //alphabetical order sort
// let sortArray = randomArray.sort((a,b)=>a-b)  //asc
// let sortArray = randomArray.sort((a,b)=>b-a)  //desc
// console.log(sortArray)


let squaredAraay = randomArray.map((el)=>{
    return el**2
})
console.log(squaredAraay)

let someElFindArray  = randomArray.some((el)=>el%5==0)
console.log(someElFindArray)

let someElFind = randomArray.every((el)=>el%2==0)
console.log(someElFind)