interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!");
  }
  workFullTime() {}
}
class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {}
}
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💣💣
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 일반 제네릭에서는 모든 타입이 들어올 수 있기 때문에 pay같은 메서드는 사용할 수 없다.
// extends를 사용해 어디서 확장되는지를 명시하면 메서드도 사용가능하다.(여기서는 interface를 확장)
function payGood<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

// 지불하는 순간부터 ellie가 fulltime인지 parttime인지 잃어버림
const ellieAfterPay = payBad(ellie);
const bobAfterPay = payBad(bob);

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "dog",
};

// K는 T의 key들 중 하나
// T[K]의 value 값 return
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // dog
