type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMachine {
  static COFFEE_BEANS_PER_ONE_SHOT: number = 10;
  static coffeeBeans: number = 0;

  constructor(coffeeBeans: number) {
    CoffeeMachine.coffeeBeans = coffeeBeans;
  }

  makeCoffee(shots: number): CoffeeCup {
    if (
      CoffeeMachine.coffeeBeans <
      shots * CoffeeMachine.COFFEE_BEANS_PER_ONE_SHOT
    ) {
      throw new Error("don't have enough coffeeBeans!");
    }
    CoffeeMachine.coffeeBeans -=
      shots * CoffeeMachine.COFFEE_BEANS_PER_ONE_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
}

const coffeeMachine = new CoffeeMachine(30);
console.log(coffeeMachine.makeCoffee(1));
console.log(CoffeeMachine.coffeeBeans);
