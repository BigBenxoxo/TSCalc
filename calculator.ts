let currentInput: string = "";
let previousInput: string = "";
let operation: string | null = null;

function calculateResult(): void {
    if (!isValidNumber(currentInput) || !isValidNumber(previousInput) || operation === null) {
        return;
    }

    const num1: number = parseFloat(previousInput);
    const num2: number = parseFloat(currentInput);
    let result: number;

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

function inputNumber(num: number): void {
    if (operation === null) {
        currentInput += num.toString();
        updateDisplay();
    } else {
        previousInput = currentInput;
        currentInput = num.toString();
        updateDisplay();
    }
}

function inputOperator(op: string): void {
    if (isValidNumber(currentInput)) {
        if (operation !== null) {
            calculateResult();
        }
        operation = op;
        updateDisplay();
    }
}

function clearDisplay(): void {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateDisplay();
}

function updateDisplay(): void {
    const display: HTMLInputElement | null = document.getElementById("display") as HTMLInputElement;
    if (display) {
        display.value = currentInput;
    }
}

function isValidNumber(input: string): boolean {
    return !isNaN(parseFloat(input));
}

// Initialize the display with the current input value.
updateDisplay();

