//#1 object literal ==> 
let user = {
    name : "John",
    age : 23
}

//#2 object constructor ==> 

let user1 = new Object({
    name  : "Jane",
    age : 20
})

// constructors are special functions that when used with new  keyword which creates  object

//#3 Object.create method to create new object
let user2 = Object.create({
    name : "Bob",
    age  : 40
})

console.log(user)
console.log(user1)
console.log(user2)
console.log(user === user1)
console.log(user === user2)
console.log(user1 === user2)

// console.log(user === user2)
// console.log(user === user1)