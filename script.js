let firstVar = '';
let secondVar = '';
let shouldResetScreen = false
let operand = null

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

digitButtons.forEach((button) => {
    button.addEventListener('click', () => appendDigit(button.textContent))
})

operandButtons.forEach((button) => {
    button.addEventListener('click', () => operation(button.textContent))
})

appendDigit = (number) => {
    if(display.textContent === '0' || shouldResetScreen){
        resetScreen()
    }display.textContent += number
}

resetScreen = () => {
    display.textContent = '';
    shouldResetScreen = false;
}

clear = () => {
    display.textContent = '0'
    firstVar = ''
    secondVar = ''
    operand = null;
}