
resultBox = document.querySelector('.result-box')
decimalButton = document.querySelector('.decimal-button')

let currentResult = {value: 0, valid: false}
let currentNum = {value: 0, valid: false}
let lastOperand = ''

function operate(operand, num1, num2){

    let result = 0;

    if(operand === '+'){

        result = num1 + num2

    } else if (operand === '-'){

        result = num1 - num2

    } else if (operand === '*'){

        result = num1 * num2
        
    } else if (operand === '/'){

        if(num2 === 0){
            return(":/ --- try again")
        }

        result =num1 / num2
        
    }

    return(Math.round(result * 100) / 100)

}

document.querySelectorAll('.button')
        .forEach( btn => {
            btn.addEventListener( 'click', event => { 
                
                if(!currentNum['valid']){
                    resultBox.innerHTML = event.target.innerHTML
                    decimalButton.removeAttribute('disabled')

                } else {

                    resultBox.innerHTML += event.target.innerHTML
                }
                
                currentNum = {value: Number.parseFloat(resultBox.innerHTML), valid: true}
            })
        })

document.querySelector('.clear-button')
        .addEventListener( 'click', event => {
            resultBox.innerHTML = ""
            currentNum = {value: 0, valid: false}
            currentResult = {value: 0, valid: false}
            decimalButton.removeAttribute('disabled')
        })

document.querySelectorAll('.op-button')
        .forEach( btn => {
            btn.addEventListener( 'click', event => {
                
    
               if(currentResult['valid'] && currentNum['valid']){
                
                    newNum = operate(lastOperand,  currentResult['value'], currentNum['value'])
                    currentResult = {value: newNum, valid: true}
                    currentNum    = {value: 0, valid: false}
                    resultBox.innerHTML = currentResult['value']
                    decimalButton.removeAttribute('disabled')

               } else if(currentResult['valid'] && !currentNum['valid']) {
                
                    resultBox.innerHTML = currentResult['value']
                    decimalButton.removeAttribute('disabled')

               } else if(!currentResult['valid'] && currentNum['valid']) {

                    currentResult = {value: currentNum['value'], valid: true}
                    currentNum    = {value: 0, valid: false}

               } else if(!currentResult['valid'] && !currentNum['valid']){

                    console.log("We shouldn't be here")

               }

               lastOperand = event.target.innerHTML

            })
        })

document.querySelector('.calc-button').addEventListener('click', event => {

    if( currentNum['valid'] && currentResult['valid']){

        currentResult = {value: operate(lastOperand, currentResult['value'], currentNum['value']), valid: true}

        currentNum = {value: 0, valid: false}
    
        resultBox.innerHTML = currentResult['value'];
    }
    })

document.querySelector('.decimal-button').addEventListener('click', event => {

    event.target.setAttribute('disabled', 'true')

    })