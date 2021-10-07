/**
 * Let's make a calculator 🧮
 */
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
function calculate(motion) {
    var answer = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        answer[_i - 1] = arguments[_i];
    }
    switch (motion) {
        case "add":
            return answer[0] + answer[1];
        case "substract":
            return answer[0] - answer[1];
        case "multiply":
            return answer[0] * answer[1];
        case "divide":
            return answer[0] / answer[1];
        case "remainder":
            return answer[0] % answer[1];
        default:
            throw new Error("unknown error");
    }
}
