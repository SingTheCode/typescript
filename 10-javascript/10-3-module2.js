// export를 사용시에도 as를 사용하면 이름 변경 가능
import sum, { print as printMessage, number } from "./10-3-module1.js";
console.log(sum(1, 2));
printMessage();

// import * as calculator from "./10-3-module1.js"
// console.log(calculator.add(1, 2));
// calculator.print();
