var currentInput = "";
var previousInput = "";
var operation = null;
function calculateResult() {
    if (!isValidNumber(currentInput) || !isValidNumber(previousInput) || operation === null) {
        return;
    }
    var num1 = parseFloat(previousInput);
    var num2 = parseFloat(currentInput);
    var result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    previousInput = "";
    operation = null;
    updateDisplay();
}
function inputNumber(num) {
    if (operation === null) {
        currentInput += num.toString();
        updateDisplay();
    }
    else {
        previousInput = currentInput;
        currentInput = num.toString();
        updateDisplay();
    }
}
function inputOperator(op) {
    if (isValidNumber(currentInput)) {
        if (operation !== null) {
            calculateResult();
        }
        operation = op;
        updateDisplay();
    }
}
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateDisplay();
}
function updateDisplay() {
    var display = document.getElementById("display");
    if (display) {
        display.value = currentInput;
    }
}
function isValidNumber(input) {
    return !isNaN(parseFloat(input));
}
// Initialize the display with the current input value.
updateDisplay();
