type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMaker {
  static COFFEE_BEANS_PER_ONE_SHOT: number = 10;
  static coffeeBeans: number = 0;

  constructor(coffeeBeans: number) {
    CoffeeMaker.coffeeBeans = coffeeBeans;
  }

  makeCoffee(shots: number): CoffeeCup {
    if (
      CoffeeMaker.coffeeBeans <
      shots * CoffeeMaker.COFFEE_BEANS_PER_ONE_SHOT
    ) {
      throw new Error("don't have enough coffeeBeans!");
    }
    CoffeeMaker.coffeeBeans -= shots * CoffeeMaker.COFFEE_BEANS_PER_ONE_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
}

const coffeeMachine = new CoffeeMaker(30);
console.log(coffeeMachine.makeCoffee(1));
console.log(CoffeeMaker.coffeeBeans);
