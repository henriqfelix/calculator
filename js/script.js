const on = document.querySelector('#on')
const calculator = document.querySelector('.off')

function getElements(){
    const buttons = document.querySelectorAll('.button')
    const visor = document.querySelector('#visor')
    const brand = document.querySelector('#brand')

    function turnOnOrTurnOff(){

        if(calculator.classList.contains('off')){
            calculator.classList.remove('off')
            calculator.classList.add('on')
            turnOnCalculator()
        }
        else if(calculator.classList.contains('on')){
            calculator.classList.remove('on')
            calculator.classList.add('off')
            turnOffCalculator()
        }
        console.log(calculator);
    }

    function turnOnCalculator(){
        console.log('ligou');
        //liga as luzes
        function turnOnLights(){
            //acende borda do visor
            visor.style.border = '2px solid #0fa7a7'
            //acende a tecla ON
            on.style.color = '#0fa7a7'
            //acende luzes dos botões
            buttons.forEach(button => {
                button.style.boxShadow = '#0fa7a7 0px 0px 7px'
                button.disabled = false
            });
            //acende nome no visor
            brand.style.opacity = '1'
        }
    
        turnOnLights()
    }

    function turnOffCalculator(){
        console.log('desligou');
    
        //acende borda do visor
        visor.style.border = '2px solid rgb(0, 0, 0)'
        //acende a tecla ON
        on.style.color = 'white'
        //acende luzes dos botões
        buttons.forEach(button => {
            button.style.boxShadow = ''
            button.disabled = true
        });
        on.disabled = false
        //acende nome no visor
        brand.style.opacity = '0'
    }

    turnOnOrTurnOff()
}


function calculate(){
    console.log('oi');
}

