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

}

displayValue = "";

const numButt = document.querySelectorAll("button") 
    numButt.forEach((button) => {
        button.addEventListener ('click', ()=> {
        if (isNaN(Number(button.id))) {
            
        } else {
            displayValue += button.id;
        }

    const display = document.querySelector(".display") 
    display.textContent = displayValue;    
    });
});



