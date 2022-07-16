const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorKeys');
const display = document.querySelector('.calculatorDisplay');
let currentOperation = 'none';
let num1 = 0;
let num2 = 0;
let result = null;

const operation = (a,b,t) => {
    switch (t) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        default:
            break;
    }
}

const setNumber = (number, i) => {
    display.textContent = '0';
    number = parseFloat(number);
    i===1? num1 = number : num2=number;
    result==null;
}

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const displayed = display.textContent;

        if(!action) {
            const key_content = key.textContent;
        console.log(result)
            if(displayed.trim()==='0' || result!==null) {
                display.textContent = key_content;
            } else {
                display.append(key_content);
            }
        } else {
            switch (action) {
                case "add":
                    currentOperation = '+';
                    setNumber(display.textContent, 1);
                    console.log(num1);
                    break;
                case "substract":
                    currentOperation = '-';
                    setNumber(display.textContent, 1);
                    break;
                case "multiply":
                    currentOperation = '*';
                    setNumber(display.textContent, 1);
                    break;
                case "divide":
                    currentOperation = '/';
                    setNumber(display.textContent, 1);
                    break;
                case "dot":
                    result=null;
                    display.textContent = '.'
                    break;
                case "equal":
                    setNumber(display.textContent, 2);
                    currentOperation!=='none'? result = operation(num1, num2, currentOperation): result='0';
                    display.textContent = result;
                    break;
                case "reset":
                    num1= '';
                    num2 = '';
                    display.textContent = '0';
                    break;
                default:
                    break;
            }
        }
    }
});