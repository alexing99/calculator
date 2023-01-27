function add (a,b){
    return a + b;
}

function subtract (a,b){
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (operator, a, b) {
    if (operator === "/") {
    displayValue = divide (a, b);
    }
}

let displayValue = "";
let operator = "";
let a = "";
let b = "";

function displayNow(content) {
    const display = document.querySelector(".display") 
    display.textContent = content;  
};

const numButt = document.querySelectorAll("button") 
    numButt.forEach((button) => {
        button.addEventListener ('click', ()=> {
        if (isNaN(Number(button.id))) {
        } else {
        }
    displayNow(displayValue);  
    });
});

/*const opButt = document.querySelectorAll("button")
    opButt.forEach((button) => {
        button.addEventListener ('click', ()=> {
        if (isNaN(Number(button.id))) {
            operator = button.id;
        } else {
    });
});
*/

const clear = document.querySelector("#clear")
    clear.addEventListener ('click', () => {
       displayValue = "";
       displayNow("");  
    });

const backspace = document.querySelector("#delete")
    backspace.addEventListener ('click', () => {
        displayValue = displayValue.slice(0, -1);
    displayNow(displayValue);
    });

const equals = document.querySelector("#equals")
    equals.addEventListener ('click', () => {
        operate (operator, a, b);
        console.log ();
    });

