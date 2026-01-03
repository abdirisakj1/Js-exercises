// spread  Operator

let numbers = [1,2,3];
let allNumbers = [...numbers,4,5,6];
console.log(allNumbers);

// rest parameter Multiply

function Multiply (...numbers) {
    return numbers.reduce((result,num) => result * num,1)
}

console.log(Multiply(4,6,7,23));