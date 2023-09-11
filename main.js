// Function to display the result in the input field
function displayResult(result) {
    document.getElementById('inpt').value = result;
}

// Function to handle button clicks for numbers and operators
function calculate(value) {
    const inputField = document.getElementById('inpt');
    inputField.value += value;
}

// Function to handle the '=' button click
function Result() {
    try {
        const inputField = document.getElementById('inpt');
        const expression = inputField.value;

        // Check for invalid expressions
        if (!isValidExpression(expression)) {
            alert('Invalid Input');
        }
        else{
            const result = eval(expression); // Use eval to evaluate the expression
            if (!isNaN(result)) {
                displayResult(result);
            } else {
                alert('Invalid Input');
            }
        
        }

        

        // Check if the result is a valid number
     } catch (error) {
        alert(error.message);
    }
}

// Function to check if an expression is valid
function isValidExpression(expression) {
    // Check for consecutive operators or trailing operators
    if (expression.match(/[\+\-\*\/]{2,}|[\+\-\*\/]$/)) {
        return false;
    }

    // Check for division by zero
    if (expression.includes('/0')) {
        return false;
    }

    return true;
}

// Function to clear the input field
function clr() {
    document.getElementById('inpt').value = '';
}

// Function to delete the last character from the input field
function del() {
    const inputField = document.getElementById('inpt');
    inputField.value = inputField.value.slice(0, -1);
}

// Function to display an error message
function displayError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
}