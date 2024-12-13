function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        // استبدال الدوال الرياضية بـ Math methods
        expression = expression.replace(/sin\(/g, 'Math.sin(')
                               .replace(/cos\(/g, 'Math.cos(')
                               .replace(/tan\(/g, 'Math.tan(');
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'خطأ';
    }
}
