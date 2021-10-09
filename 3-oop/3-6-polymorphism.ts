{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSuger?: boolean;
  };

  interface CoffeeMaker {
    // 필수 규약
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
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

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // 부모의 생성자에 필요한 parameter 선언
      super(beans); // 부모의 생성자 호출 필수
    }

    private steamMilk() {
      console.log("Steaming some milk...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 부모 클래스의 함수를 호출하거나 접근할 수 있다.
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber?: string) {
      // 부모의 생성자에 필요한 parameter 선언
      super(beans); // 부모의 생성자 호출 필수
    }

    private putSugar() {
      console.log("put in suger...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 부모 클래스의 함수를 호출하거나 접근할 수 있다.
      this.putSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, "1"),
    new SweetCoffeeMachine(16),
    new CoffeeMachine(16),
    new CafeLatteMachine(16, "1"),
    new SweetCoffeeMachine(16),
  ];
  // 내부적으로 구현된 다양한 클래스들이 한가지 interface를 구현하거나
  // 동일한 부모 클래스를 상속했을 때 동일한 함수를 어떤 클래스인지
  // 구분하지 않고 공통된 api를 호출할 수 있는 것이 큰 장점이다.
  machines.forEach((machine) => {
    console.log("-----------------------");
    machine.makeCoffee(1);
  });
}
// 하나의 인터페이스나 부모의 클래스를 상속한 자식 클래스들이
// 인터페이스와 부모클래스에 있는 함수들을
// 다른 방식으로 다양하게 구성함으로써 좀 더 다양하게 구성하는 것을 말한다.
