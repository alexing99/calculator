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

displayValue = 0;

const numButt = document.querySelectorAll("button") 
    numButt.forEach((button) => {
        button.addEventListener ('click', ()=> {
        displayValue = button.id;
        console.log(button.id)

    const display = document.querySelector(".display") 
    display.textContent = displayValue;    
    });
});



