{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    protected constructor(coffeeBeans: number) {
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

    clean() {
      console.log("cleaning the machine...");
    }
  }

  class CheapMilkSteamer {
    private steamMilk(): void {
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

  class AutomaticSugarMixer {
    private getSugar(): boolean {
      console.log("Getting some sugar from jar");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    private constructor(
      beans: number,
      public readonly serialNumber: string,
      milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }

    static makeCaffeLatteMachine(
      coffeeBeans: number,
      serialNumber: string
    ): CaffeLatteMachine {
      return new CaffeLatteMachine(coffeeBeans, serialNumber);
    }
  }

  class SweetCaffeMachine extends CoffeeMachine {
    getSugar() {
      console.log("Getting some sugar");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(2);
      this.getSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }

    static makeSweetCoffeeMachine(coffeeBeans: number): SweetCaffeMachine {
      return new SweetCaffeMachine(coffeeBeans);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {}

  const machines: CoffeeMaker[] = [
    CoffeeMachine.makeMachine(16),
    CaffeLatteMachine.makeCaffeLatteMachine(16, "1"),
    SweetCaffeMachine.makeSweetCoffeeMachine(16),
    CoffeeMachine.makeMachine(16),
    CaffeLatteMachine.makeCaffeLatteMachine(16, "1"),
    SweetCaffeMachine.makeSweetCoffeeMachine(16),
  ];

  machines.forEach((machine) => {
    console.log("---------------");
    machine.makeCoffee(2);
  });
}
