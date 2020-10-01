const evaluate = (expression) => {
    let [left, operation, right] = expression.split("");
    left = parseInt(left);
    right = parseInt(right);
    switch (operation) {
        case "+":
            return () => left + right;
        case "-":
            return () => left - right;
        case "*":
            return () => left * right;
        case "/":
            return () => left / right;
        case "^":
            return () => Math.pow(left, right);
        case "%":
            return () => left % right;
        default:
            return () =>  console.log("Unsupported operand.");
    }
};

console.log(evaluate("1?1")());

module.exports = {evaluate};