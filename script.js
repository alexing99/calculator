/*
To Do List
- click and unclick operators and change color
- link to keyboard
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

function checkDecimals (value) { //checks to see if more than 10 decimal places then rounds
    const deciPlaces = value.toString().split(".");
    if (deciPlaces[1].length > 10) {
        return value.toFixed(10);
    } else return value;
}

function operate (operator, a, b) { 
    if (operator === "/" && b === "0") { // doesn't let you divide by 0
        displayValue = "NO WAY!"
        displayNow (displayValue) 
    } else 
    switch (true) { // chooses which operation to run based on what the current operator is
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
    ans = displayValue;
    console.log ("ans=", ans);
    b = '';  // resets b so you can string operations or operate on last answer
};

let displayValue = "";
let operator = "";
let a = "";
let b = "";
let ans = "";

function displayNow(content) { // displays whatever value is in parameter
    const display = document.querySelector(".display") 
    display.textContent = content;  
};

const numButt = document.querySelectorAll(".number-buttons button") // selects all number buttons
    numButt.forEach((button) => {
    button.addEventListener ('click', ()=> {    
        if (ans != "") { //clears calc if already answer and no new op
            a = "";
            b = "";
            operator = "";
            ans = "";
            displayValue = button.id; 
            displayNow(displayValue);
        } else if (a != "" && b === ""){ // establishes b value when a is set
            displayValue = button.id;
            b = displayValue; // sets b
            displayNow(displayValue);
            console.log ("b=",b)
            console.log("on")
        }else if (a != "" && b != "") { // allows you to add to b value if a is set and b is started
            displayValue += button.id; // cats digits to display
            b = displayValue; // cats b value as you type it
            displayNow(displayValue);
            console.log ("b=",b)
            
        } else displayValue += button.id; // otherwise it adds the number to display (like if first input)
        displayNow (displayValue);
    });
});

const opButt = document.querySelectorAll(".operator-buttons button") // selects for all operator buttons
    opButt.forEach((button) => {
    button.addEventListener ('click', ()=> {    
        if (displayValue === "" && button.id === "-") { // lets you use subtract button as a negative
             if (a != "") {  // lets you set b value as negative (bc a is set only after you select an operator)
                displayValue = button.id;
                displayNow (displayValue);
                b = displayValue;
             }else {
                displayValue = button.id; // lets you set a value as negative
                displayNow (displayValue);
             }
             
        } else if (ans != "" && operator === "") { // allows you to operate on answers after equals
            a = ans;
            b = ""; // b needs to be reset in order to make new b
            ans = ""; // not really sure but it doesnt work without this
            operator = button.id;
            console.log("new a=", a)
            console.log("op=",operator)
            displayValue = ''; // lets you make the new b value negative
        } else if (a != "" && b != "") { // allows you to string operations without pressing equals
            operate (operator, a, b); // operates before you add another operation
            a = ans; // same reason as above
            b = ""; // same reason as above
            ans=""; // ans needs to be reset bc 
            operator = button.id;
            displayValue = ''; // needs to be reset so u can make new b negative or 0. a decimal
        } else if (displayValue != "") { // normal scenario where by pressing an operator after inputting a number it sets a and operator
            b = "";
            a = displayValue;
            operator = button.id;
            displayValue = "";
            console.log ("a=", a)
            console.log ("op=", operator);
            button.id.style.backgroundColor = "red";
            
        }
    });
});

const decimal = document.querySelector("#point") // selects point button
    decimal.addEventListener ('click', () => {
        checkForDeci = displayValue.split(''); // creates array of all digits after a decimal
        if (checkForDeci.includes (".")){ // wont let you add more than one decimal
            displayValue = displayValue;
        } else if (displayValue === '' || displayValue === "-") {// lets you make a or b values 0. or -0.
            displayValue += "0."    
            displayNow(displayValue);
            if (a != "") b = displayValue; // updates b if b starts with decimal
        } else if (a != ""){ // lets you add a decimal in the middle of a b value
            b += ".";
            displayValue = b; // updates b with decimal
            displayNow(displayValue);
        } else { // lets you add a decimal in the middle of an a value
            displayValue += ".";
            displayNow(displayValue);
        }
    }); 

const clear = document.querySelector("#clear") // clears calc of all values and display
    clear.addEventListener ('click', () => {
        displayValue = "";
        displayNow("");  
        a = "";
        b = "";
        operator = "";
        ans = "";
    });

const backspace = document.querySelector("#delete") // deletes last digit from display
    backspace.addEventListener ('click', () => {
        displayValue = displayValue.slice(0, -1);
        if (b != '') { // lets you delete if on b value
            b = displayValue;
        }
        displayNow(displayValue);
    });

const equals = document.querySelector("#equals") // operates if a, b, and operator have values
    equals.addEventListener ('keydown', (event)=> {

    })
    equals.addEventListener ('click', () => {       
        b = displayValue; // sets b for operation
        operate (operator, a, b);
        operator = '';
    });

