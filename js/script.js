const calculator = document.querySelector('#calculator')
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('#display')
const operator = document.querySelector('#op')

let newNumber = true;
let oldNumber = document.querySelector('#lastInsert')
let op 
let lastOp
let isEqual = false
let opp = 1

calculator.addEventListener('click', e => {

    let el = e.target

    if(el.classList.contains('button_off')){
        turnOnCalculator(el)
    }
    else if(el.classList.contains('button_on')){
        turnOffCalculator(el)
    }
    else{
        runCalculator(el)
    }
})

function turnOnCalculator(el){

    el.classList.remove('button_off')
    el.classList.add('button_on')

    display.style.border = '2px solid #0fa7a7'
    on.style.color = '#0fa7a7'

    buttons.forEach(button => {
        button.style.boxShadow = '#0fa7a7 0px 0px 7px'
        button.disabled = false
    });
    brand.style.opacity = '.8'
    isEqual = false
}

function turnOffCalculator(el){
    el.classList.remove('button_on')
    el.classList.add('button_off')

    display.style.border = '2px solid rgb(0, 0, 0)'
    display.value = ''
    on.style.color = 'white'
    
    buttons.forEach(button => {
        button.style.boxShadow = ''
        button.disabled = true
    });
    on.disabled = false
    oldNumber.innerHTML = ''
    operator.innerHTML = ''
    brand.style.opacity = '0'
    opp = 1
}

function runCalculator(el){

    if(el.classList.contains('number')){
        addNumOnDisplay(el.value)
    }
    else if(el.classList.contains('operator')){
        lastOp = el.value
        selectOperator(el.value)
    }
    else if(el.value === '='){
        equal(lastOp)
    }
}

const addNumOnDisplay = el => {
    brand.style.opacity = '.1'

    if(newNumber && opp === 1){
        oldNumber.innerHTML = display.value
        display.value = el
        newNumber = false
    }    
    else if(newNumber){
        oldNumber.innerHTML = display.value
        display.value = el
        newNumber = false
        isEqual = false
        addOpOnDisplay(lastOp)
    }
    else{
        display.value += el
    }
    opp++
}

const addOpOnDisplay = (el) => {

    if(isEqual === false){
        operator.innerHTML = el
        isEqual = true
    }
    else{
        operator.innerHTML = '='
    }
}

const addCountOnDisplay = (num1, num2, op) => {
    if(pendingOperation) oldNumber.innerHTML = `${num1} ${op} ${num2}`
}

const selectOperator = el => {
    if(!newNumber){
        newNumber = true
        op = el
        calculate()
        addOpOnDisplay(op)
    }
}

const pendingOperation = () => op !== undefined

const calculate = () => {

    if(pendingOperation()){
        newNumber = true
        let num1 = parseFloat(oldNumber.innerHTML)
        let num2 = parseFloat(display.value)
        if(!isNaN(num1) && !isNaN(num2)){
            if(op === '+'){
                addNumOnDisplay(num1 + num2)
                newNumber = true
                addCountOnDisplay(num1, num2, op)
                isEqual = true
            }
            if(op === '-'){
                addNumOnDisplay(num1 - num2)
                newNumber = true
                addCountOnDisplay(num1, num2, op)
                isEqual = true
            }
            if(op === '*'){
                addNumOnDisplay(num1 * num2)
                newNumber = true
                addCountOnDisplay(num1, num2, op)
                isEqual = true
            }
            if(op === '/'){
                addNumOnDisplay(num1 / num2)
                newNumber = true
                addCountOnDisplay(num1, num2, op)
                isEqual = true
            }
        }
    }
}

const equal = (lastOp) => {
    selectOperator(lastOp)
}