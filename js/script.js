//captura elementos prioritários
const on = document.querySelector('#on')
const calculator = document.querySelector('.off')
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


function calculate(){
    console.log('oi');
}

