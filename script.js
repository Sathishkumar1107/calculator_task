
let currentInput = "";
let previousInput = "";
let operator = null;



// updating the display value

function appendDom(value) {
    currentInput += value;
    updateDisplay(currentInput);
    // console.log(currentInput);
}

function setOperator(op) {
        if (currentInput === "") return; // Avoid setting operator without a number
        if (previousInput !== "") calculateResult(); // Auto calculate if there was a previous operation
        
        operator = op;
        previousInput = currentInput;
        currentInput = "";
}

function calculateResult() {
        if (previousInput === "" || currentInput === "" || operator === null) return;

        let num1 = parseFloat(previousInput);
        let num2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
            case "^": result = num1 * num2; break;
        }

        // console.log("hey");

        updateDisplay(result);
        previousInput = result.toString();
        currentInput = "";
        operator = null;
}

//removing the last charcter

function backspace(){
	currentInput = currentInput.slice(0, -1)
	updateDisplay(currentInput);
}



//resetting the display
function clearDisplay() {
	document.getElementById("display").innerHTML = "0";
        currentInput = "";
        previousInput = "";
        operator = null;
        // updateDisplay("");
}

function updateDisplay(value) {
        document.getElementById("display").innerHTML = value;
        console.log(value);
}







