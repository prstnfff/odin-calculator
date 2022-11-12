
resultBox = document.querySelector('.result-box')

let currentResult = {value: 0, valid: false}
let currentNum = {value: 0, valid: false}
let liveCalc = false;

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

                } else {

                    resultBox.innerHTML += event.target.innerHTML
                }
                
                currentNum = {value: Number.parseDecimal(resultBox.innerHTML), valid: true}
            })
        })

document.querySelector('.clear-button')
        .addEventListener( 'click', event => {
            resultBox.innerHTML = ""
            currentNum = {value: 0, valid: false}
            currentResult = {value: 0, valid: false}
        })

document.querySelectorAll('.op-button')
        .forEach( btn => {
            btn.addEventListener( 'click', event => {
                
               lastOperand = event.target.innerHTML

               if(currentResult['valid'] && currentNum['valid']){
                
                    newNum = operate(lastOperand,  currentResult['value'], currentNum['value'])
                    currentResult = {value: newNum, valid: true}
                    currentNum    = {value: 0, valid: false}
                    resultBox.innerHTML = currentResult['value']

               } else if(currentResult['valid'] && !currentNum['valid']) {
                
                    resultBox.innerHTML = currentResult['value']

               } else if(!currentResult['valid'] && currentNum['valid']) {

                    currentResult = {value: currentNum['value'], valid: true}
                    currentNum    = {value: 0, valid: false}

               } else if(!currentResult['valid'] && !currentNum['valid']){

                    console.log("We shouldn't be here")

               }

            })
        })

document.querySelector('.calc-button').addEventListener('click', event => {

    if( currentNum['valid'] && currentResult['valid']){

        currentResult = {value: operate(lastOperand, currentResult['value'], currentNum['value']), valid: true}

        currentNum = {value: 0, valid: false}

        console.log(currentResult)
    
        resultBox.innerHTML = currentResult['value'];
    }
    })

document.querySelector('.calc-button').addEventListener('click', event => {

        if( currentNum['valid'] && currentResult['valid']){
    
            currentResult = {value: operate(lastOperand, currentResult['value'], currentNum['value']), valid: true}
    
            currentNum = {value: 0, valid: false}
    
            console.log(currentResult)
        
            resultBox.innerHTML = currentResult['value'];
        }
        })