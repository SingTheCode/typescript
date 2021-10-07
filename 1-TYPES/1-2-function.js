// // JavaScript
// function jsAdd(num1, num2) {
//   return num1 + num2;
// }
// // TypeScript
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// // JavaScript
// function jsFetchNum(id) {
//   // code ...
//   // code ...
//   // code ...
//   return new Promise((resolve, reject) => {
//     resolve(100);
//   });
// }
// // TypeScript
// function fetchNum(id: string): Promise<number> {
//   // code ...
//   // code ...
//   // code ...
//   return new Promise((resolve, reject) => {
//     resolve(100);
//   });
// }
// JavaScript => TypeScript
// Optional parameter
function printName(firstName, lastName) {
    console.log(firstName);
    console.log(lastName);
}
printName("Steve", "jobs");
printName("Ellie");
printName("Anna", undefined);
// Default parameter
function printMessage(message) {
    if (message === void 0) { message = "default message"; }
    console.log(message);
}
printMessage();
// Rest parameter
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(1, 2, 3, 4, 5, 0));
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (acc, cur) { return acc + cur; }, 0);
    return sum;
}
