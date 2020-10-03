function calculate(num1, oper, num2) {
    switch (oper) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/': {
            if (num2 === 0) {
                console.error('Cannot divide by zero.');
                return Number.NEGATIVE_INFINITY;
            }
            else
                return num1 / num2;
        }
        default:
            console.error('Wrong operator.');
            return Number.NEGATIVE_INFINITY;
    }
}
console.log(calculate(500, '/', 2));
console.log(calculate(500, '/', 0));
console.log(calculate(2, '$', 2));
