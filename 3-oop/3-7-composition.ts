{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface hasSugar {
    // 필수 규약
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements hasSugar {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level instance를 생성할 때마다 나타나게되는 메모리낭비를 막아준다.
    private coffeeBeans: number = 0; // instance (object) level

    // 인스턴스를 생성할 때마다 호출된다.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    } // 누군가가 생성자를 이용해 인스턴스를 생성하는 것을 방지하기 위해

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

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk() {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy");
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilkSteamer
    ) {
      // 부모의 생성자에 필요한 parameter 선언
      super(beans); // 부모의 생성자 호출 필수
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 부모 클래스의 함수를 호출하거나 접근할 수 있다.
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweethasSugar extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      // 부모의 생성자에 필요한 parameter 선언
      super(beans); // 부모의 생성자 호출 필수
    }

    private getSugar() {
      console.log("Getting some suger...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 부모 클래스의 함수를 호출하거나 접근할 수 있다.
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  const machines: hasSugar[] = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, "1"),
    new SweethasSugar(16),
    new CoffeeMachine(16),
    new CafeLatteMachine(16, "1"),
    new SweethasSugar(16),
  ];
  machines.forEach((machine) => {
    console.log("-----------------------");
    machine.makeCoffee(1);
  });
}
