
resultBox = document.querySelector('.result-box')

let currentResult = 0;
let currentNum = 0;
let postOperandClick = false;
let enteredNums = 0;
let lastOperand = ''

function operate(operand, num1, num2){


    if(operand === '+'){

        return(num1 + num2)

    } else if (operand === '-'){

        return(num1 - num2)

    } else if (operand === '*'){

        return(num1 * num2)
        
    } else if (operand === '/'){

        return(num1 / num2)
        
    }
}

function getNum(){
    
    currentNum = Number.parseInt(resultBox.innerHTML)
}

document.querySelectorAll('.button')
        .forEach( btn => {
            btn.addEventListener( 'click', event => {
                if(postOperandClick){
                    resultBox.innerHTML = ''
                    postOperandClick = false
                }
                    
            resultBox.innerHTML += event.target.innerHTML

            })
        })

document.querySelector('.clear-button')
        .addEventListener( 'click', event => {
            resultBox.innerHTML = ""
            liveCalc = false;
            enteredNums = 0;
            currentNum = 0;
            currentResult = 0;
        })

document.querySelectorAll('.op-button')
        .forEach( btn => {
            btn.addEventListener( 'click', event => {

                if(enteredNums === 0){
                    getNum()
                    currentResult = currentNum
                }

                if(enteredNums > 0){
                    getNum()
                    currentResult = operate(event.target.innerHTML, currentResult, currentNum)
                    resultBox.innerHTML = currentResult
                }
                enteredNums += 1
                postOperandClick = true;
                console.log('operator clicked')

                lastOperand = event.target.innerHTML
            })
        })

document.querySelector('.calc-button').addEventListener('click', event => {
        getNum()
        currentResult = operate(lastOperand, currentResult, currentNum)
        currentNum = 0;
        resultBox.innerHTML = currentResult
        enteredNums += 1
        postOperandClick = true;
        lastOperand = ''
    })