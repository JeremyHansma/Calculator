let firstVar = '';
let secondVar = '';
let shouldResetScreen = false
let operand = null
let suspendOperation = '';

const digitButtons = document.querySelectorAll('[data-number]')
const operandButtons = document.querySelectorAll('[data-operand]')
const equalsButton = document.querySelector('#equals')
const pointButton = document.querySelector('#point')
const clearButton = document.querySelector('#clear')
const display = document.querySelector('.display')



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

clearButton.addEventListener('click', () => clear())
equalsButton.addEventListener('click', () => evaluate())

digitButtons.forEach((button) => {
    button.addEventListener('click', () => appendDigit(button.textContent))
})

operandButtons.forEach((button) => {
    button.addEventListener('click', () => operation(button.textContent))
})

function appendDigit(number) {
    if(display.textContent === '0' || shouldResetScreen){
        resetScreen()
    }display.textContent += number
}



function resetScreen() {
    display.textContent = '';
    shouldResetScreen = false;
}

function clear() {
    display.textContent = '0'
    firstVar = ''
    secondVar = ''
    operand = null;
}

function operation(operator) {
    if(operand !== null) evaluate();
    firstVar = display.textContent;
    operand = operator;
    suspendOperation =  `${firstVar} ${operand}`
    shouldResetScreen = true
}

function evaluate() {
    if(operand === null || shouldResetScreen) return;
    if(operand === '/' && display.textContent === '0'){
        return alert("Everyone knows you can't divide by 0!");
    }
    secondVar = display.textContent;
    display.textContent = rounded(result(operand,firstVar,secondVar))
    suspendOperation.textContent = `${firstVar} ${operand} ${secondVar}`
    operand = null
}

function rounded(number) {
    return Math.round(number * 1000) / 1000;
}

function result(operand, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operand){
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}