/*
To Do List

- allow b to be negative
- only one decimal point 
- round 
- fix floating point 
- link to keyboard
- style

*/



function add (a,b){
    return Number(a) + Number(b);
};

function subtract (a,b){
    return a - b;
};

function multiply (a,b) {
    return a * b;
};

function divide (a,b) {
    return a / b;
};

function operate (operator, a, b) {
    if (operator === "/" && b === "0") {
        displayValue = "NO WAY BUDDY!"
        displayNow (displayValue)
        b = '';
    } else 
    switch (true) {
        case operator === "/":
            displayValue = divide (a, b);
            displayNow (displayValue);
            break;

        case operator === "x":
            displayValue = multiply (a, b);
            displayNow (displayValue);
            break;
           
        case operator === "-":
            displayValue = subtract (a, b);
            displayNow (displayValue);
            break;
            
        case operator === "+":
            displayValue = add (a, b);
            displayNow (displayValue);
            break;
    }
};

let displayValue = "";
let operator = "";
let a = "";
let b = "";

function displayNow(content) {
    const display = document.querySelector(".display") 
    display.textContent = content;  
};

const numButt = document.querySelectorAll(".number-buttons button")
    numButt.forEach((button) => {
    button.addEventListener ('click', ()=> {    
        if (a != ""){
            b += button.id;
            displayValue = b;
            displayNow(displayValue);
            console.log ("b=",b)
        } else displayValue += button.id;
        displayNow (displayValue);
    });
});

const opButt = document.querySelectorAll(".operator-buttons button")
    opButt.forEach((button) => {
    button.addEventListener ('click', ()=> {    
        if (operator != "") {
            operate (operator, a, b);
        }
        if (displayValue === "" && button.id === "-") {
            displayValue = button.id;
            displayNow (displayValue);
        } else if (displayValue != "") {
            b = "";
            a = displayValue;
            operator = button.id;
            console.log ("a=", a)
            console.log ("op=", operator)
        }
    });
});

const clear = document.querySelector("#clear")
    clear.addEventListener ('click', () => {
        displayValue = "";
        displayNow("");  
        a = "";
        b = "";
        operator = "";
    });

const backspace = document.querySelector("#delete")
    backspace.addEventListener ('click', () => {
        displayValue = displayValue.slice(0, -1);
        if (b != '') {
            b = displayValue;
        }
        displayNow(displayValue);
    });

const equals = document.querySelector("#equals")
    equals.addEventListener ('click', () => {
        operate (operator, a, b);
    });

