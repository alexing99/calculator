/*
To Do List

- make sure delete works on a and b
- if you hit equals it should repeat the last operation (op and b stay the same but a becomes ans)
- click and unclick operators
- link to keyboard
- style
- comment everything
- cant start on a negative number without clearing?

-

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
    ans = displayValue;
    console.log ("ans=", ans);
    b = '';
};

let displayValue = "";
let operator = "";
let a = "";
let b = "";
let ans = "";

function displayNow(content) {
    const display = document.querySelector(".display") 
    display.textContent = content;  
};

const numButt = document.querySelectorAll(".number-buttons button")
    numButt.forEach((button) => {
    button.addEventListener ('click', ()=> {    
        if (ans != "") { //clears calc if already answer and no new op
            a = "";
            b = "";
            operator = "";
            ans = "";
            displayValue = button.id;
            displayNow(displayValue);
            console.log('yea')
        } else if (a != "" && b === ""){ // establishes b value when a is set
            displayValue = button.id;
            b = displayValue; 
            displayNow(displayValue);
            console.log ("b=",b)
            console.log("on")
        }else if (a != "" && b != "") { // allows you to add to b value if a is set and b is started
            displayValue += button.id;
            b = displayValue;
            displayNow(displayValue);
            console.log ("b=",b)
            
        } else displayValue += button.id; // otherwise it adds the number to display
        displayNow (displayValue);
    });
});

const opButt = document.querySelectorAll(".operator-buttons button")
    opButt.forEach((button) => {
    button.addEventListener ('click', ()=> {    
        if (displayValue === "" && button.id === "-") {
             if (a != "") {
                displayValue = button.id;
                displayNow (displayValue);
                b = displayValue;
             }else {
                displayValue = button.id;
                displayNow (displayValue);
             }
             
        } else if (ans != "" && operator === "") { // allows you to operate on answers after equals
            a = ans;
            b = "";
            ans = "";
            operator = button.id;
            console.log("new a=", a)
        } else if (a != "" && b != "") { // allows you to string operations without pressing equals
            operate (operator, a, b);
            a = ans;
            b = "";
            ans='';
            operator = button.id;
            displayValue = '';
        } else if (operator != "") {
            operate (operator, a, b);
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

// function makeSubOrMinus (){
//      checkForNeg = displayValue.split('');
//      checkForNeg.includes("-")
//     switch (true) {
//         case displayValue === "": //lets you make a value negative
//             return "negative";
//             break;
//         case displayValue != "" && operator === "": //lets you use minus as operator if 
//             return "minus";
//             break;
//         case displayValue != "" && operator != "": //lets you make b value negative
//             return "minus";
//             break;
// }
// }

// const neg = document.querySelector("#minus");
//     neg.addEventListener ('click', () => {
//        if (makeSubOrMinus === "negative") {
//             displayValue = "-";
//             displayNow(displayValue);
//        } else if (makeSubOrMinus === "minus")
//             operator = "-";
//      });


const decimal = document.querySelector("#point")
    decimal.addEventListener ('click', () => {
        checkForDeci = displayValue.split('');
        if (checkForDeci.includes (".")){
            displayValue = displayValue;
        } else if (displayValue === '' || displayValue === "-") {
            displayValue += "0."
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
        ans = "";
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
        b = displayValue;
        operate (operator, a, b);
        operator = '';
    });

