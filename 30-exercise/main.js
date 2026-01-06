function operate (a,b,callback) {
    return callback(a,b)
}

function add(a,b) {
    return(a + b)
}

function substract(a,b) {
    return (a - b)
}
function multiply(a,b) {
    return(a * b)
}

function divide(a,b) {
    return(a / b)
}

console.log("Addition:", operate(20,40,add));
console.log("Substration:", operate(5,3,substract));
console.log("Multiplication:", operate(15,6,multiply));
console.log("Division:", operate(30,9,divide));