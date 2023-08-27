export const generateRandomColors = (num) => { 
   return `rgba(${colors(num)}, ${colors(num)}, ${colors(num)}, 0.5 )`
}

const colors = (num) => {
    return Math.floor(Math.random()*num);
}