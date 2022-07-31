let firstVar = '';
let secondVar = '';


const digitButtons = document.querySelectorAll('[data-number]')
const operandButtons = document.querySelectorAll('[data-operand]')
const equalsButton = document.querySelector('#equals')
const pointButton = document.querySelector('#point')
const clearButton = document.querySelector('#clear')
const display = document.querySelector('display')


subtraction = (a,b) => {
    return a - b
}
addition = (a, b) => {
    return a + b
}
multiply = (a, b) => {
    return a * b
}
divide = (a, b) => {
    return a / b
}


