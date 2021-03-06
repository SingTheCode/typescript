{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    // 필수 규약
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(10);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  const maker2: CoffeeMachine = CoffeeMachine.makeMachine(10);
  maker2.fillCoffeeBeans(32); // hasSugar라는 interface에는 fillCoffeeBeans메서드를 허락하지 않았다.
  maker2.makeCoffee(2);
  // interface : 얼만큼의 행동을 약속, 보장, 허용할껀지 정할 수 있다.

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(10);
  maker3.fillCoffeeBeans(32);
  maker3.makeCoffee(2);
  maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  // 동일한 object의 instance일지라도 두가지의 interface를 구현하기 때문에
  // class 보다 조금 더 좁은 범위의 접근이 가능한 함수들만 접근 가능하다.
  const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker4);
  const pro = new ProBarista(maker4);
  amateur.makeCoffee();
}
