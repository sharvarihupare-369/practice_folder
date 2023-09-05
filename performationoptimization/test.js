
const memoise = (func) => {
    const data = {};

    return (input) => {
          return data[input] || (data[input] = func(input))
    }
}

const fib = memoise((n) => {
    if(n <= 1){
        return n
    }

    return fib(n-1) + fib(n-2);
})

console.time("T1")
console.log(fib(4))
console.timeEnd("T1")