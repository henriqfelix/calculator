//captura elementos prioritários
const on = document.querySelector('#on')
const calculator = document.querySelector('.off')
let newNumber = true
let operator
let lastNumber
//captura elementos que serão necessários no decorrer do processo
function getElements(){
    const buttons = document.querySelectorAll('.button')
    const visor = document.querySelector('#visor')
    const brand = document.querySelector('#brand')
    //valida se a calculadora está desligada ou ligada
    function turnOnOrTurnOff(){
        //verifica se calculator contém a classe off
        if(calculator.classList.contains('off')){
            //remove classe off
            calculator.classList.remove('off')
            //adiciona claasse on
            calculator.classList.add('on')
            //chama a função que liga a calculadora
            turnOnCalculator()
        }//verifica se calculator contém a classe on
        else if(calculator.classList.contains('on')){
            //remove classe on
            calculator.classList.remove('on')
            //adiciona claasse off
            calculator.classList.add('off')
            //chama a função que desliga a calculadora
            turnOffCalculator()
        }
    }
    //liga a calculadora
    function turnOnCalculator(){
        
        //acende borda do visor
        visor.style.border = '2px solid #0fa7a7'
        //acende a tecla ON
        on.style.color = '#0fa7a7'
        //percorre por cada botão do array buttons
        buttons.forEach(button => {
            //acende as luzes das teclas
            button.style.boxShadow = '#0fa7a7 0px 0px 7px'
            //ativa os botões
            button.disabled = false
        });
        //acende nome no visor
        brand.style.opacity = '1'
    }
    //desliga a calculadora
    function turnOffCalculator(){
    
        //acende borda do visor
        visor.style.border = '2px solid rgb(0, 0, 0)'
        visor.value = ''
        //acende a tecla ON
        on.style.color = 'white'
        //percorre por cada botão do array buttons
        buttons.forEach(button => {
            //apaga as luzes das teclas
            button.style.boxShadow = ''
            //desativa os botões
            button.disabled = true
        });
        //ativa botão on para que seja possível religar a calculadora
        on.disabled = false
        //acende nome no visor
        brand.style.opacity = '0'
    }
    //chama a função que desliga a calculadora
    turnOnOrTurnOff()
}

/*************************** operações *****************************/
const pendingOperation = () => operator !== undefined

const addInDisplay = (num) => {

    brand.style.opacity = '.1'

    if(newNumber){
        visor.value = num
        newNumber = false
    }
    else{
        visor.value += num
    }
}

const selectOperator = (op) => {

    if(!newNumber){
        calculate()
        newNumber = true
        operator = op
        lastNumber = Number(visor.value)
    }
}

const calculate = () => {
    if(pendingOperation()){
        const actualNumber = Number(visor.value)
        newNumber = true

        if(operator === '+'){
            addInDisplay(lastNumber + actualNumber)
        }
        else if(operator === '-'){
            addInDisplay(lastNumber - actualNumber)
        }
        else if(operator === '*'){
            addInDisplay(lastNumber * actualNumber)
        }
        else if(operator === '/'){
            addInDisplay(lastNumber / actualNumber)
        }
    }
}

/*********************** outros botoões ***************************/

calculator.querySelector('#equal').addEventListener('click', () =>{
    
    calculate()
    operator = undefined
})

calculator.querySelector('#ce').addEventListener('click', () => {
    visor.value = ''
    brand.style.opacity = '1'
})

calculator.querySelector('#c').addEventListener('click', () => {
    visor.value = ''
    newNumber = true
    lastNumber = undefined
    actualNumber = undefined
    brand.style.opacity = '1'
})

calculator.querySelector('#invert').addEventListener('click', () => {
    visor.value *= -1
})

/***************************** lógica ******************************/

calculator.addEventListener('click', e =>{

    const target = e.target

    if(target.classList.contains('off')){
        getElements()
    }

    if(target.classList.contains('number')){
        addInDisplay(target.value)
    }

    if(target.classList.contains('operator')){
        selectOperator(target.value)
    }
})
