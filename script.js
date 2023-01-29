/*
To Do List

- allow b to be negative
- fix floating point 
- make it so when you type a number after equals it resets
- link to keyboard
- style

*/



function add (a,b){
    let fixed = Number(a) + Number(b);
    if (fixed % 1 === 0) { return fixed;
    } else return checkDecimals (fixed);
};

function subtract (a,b){
    let fixed = a - b;
    if (fixed % 1 === 0) { return fixed;
    } else return checkDecimals (fixed);
};

function multiply (a,b) {
    let fixed = a * b;
    if (fixed % 1 === 0) { return fixed;
    } else return checkDecimals (fixed);
};

function divide (a,b) {
    let fixed = a / b;
    if (fixed % 1 === 0) { return fixed;
    } else return checkDecimals (fixed);
};

function checkDecimals (value) {
    const deciPlaces = value.toString().split(".");
    if (deciPlaces[1].length > 10) {
        return value.toFixed(10);
    } else return value;
}

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
            displayValue += button.id;
            b = displayValue;
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
            displayValue = "";
            console.log ("a=", a)
            console.log ("op=", operator)
        }
    });
});

const decimal = document.querySelector("#point")
    decimal.addEventListener ('click', () => {
        checkForDeci = displayValue.split('');
        console.log (checkForDeci)
        if (checkForDeci.includes (".")){
            displayValue = displayValue;
        } else if (displayValue == "") {
            displayValue = "0."
            displayNow(displayValue);
        } else if (a != ""){
            b += ".";
            displayValue = b;
            displayNow(displayValue);
        } else {
            displayValue += ".";
            displayNow(displayValue);
        }
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
       // b = '';
    });

