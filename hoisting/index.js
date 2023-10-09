const now = new Date()
// console.log(now)
console.log(now.toDateString())
console.log(now.toTimeString().split("G")[0])
console.log(now.toISOString().split("T")[0])


const today = Date.now()
// console.log(today)