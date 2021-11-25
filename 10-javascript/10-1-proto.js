// prototype은 js에서 객체지향프로그래밍, 상속을 하기위해 쓰인다.
// 코드를 재사용하기 위해 사용된다.
{
  const x = {};
  const y = {};
  console.log(x);
  console.log(y);
  console.log(x.toString());
  // 모든 객체는 __proto__ 객체를 상속받기 때문에 같다
  console.log(x.__proto__ === y.__proto__);

  // array의 Prototype은 Object Prototype을 갖고 있다.
  // 변수 array -> array Prototype -> Object Prototype
  const array = [];
  console.log(array);

  console.clear();

  function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
    //   console.log("making...");
    // };
  }
  // Prototype member level
  CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log("making...");
  };

  // machine -> prototype CoffeeMachine -> prototype Object
  const machine1 = new CoffeeMachine(10);
  const machine2 = new CoffeeMachine(20);
  console.log(machine1);
  console.log(machine2);

  function LatteMachine(milk) {
    this.milk = milk;
  }
  LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

  const latteMachine = new LatteMachine(123);
  console.log(latteMachine);
  latteMachine.makeCoffee();
}
