{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level instance를 생성할 때마다 나타나게되는 메모리낭비를 막아준다.
    private coffeeBeans: number = 0; // instance (object) level

    // 인스턴스를 생성할 때마다 호출된다.
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

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMachine.makeMachine(32);
  console.log(maker.makeCoffee(2));
  const maker2 = CoffeeMachine.makeMachine(3); // constructor를 호출하지 않고 machine 생성
  console.log(maker2);
  maker.fillCoffeeBeans(15);
  console.log(maker);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(public firstName: string, public lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName);

  // firstName을 변경해도 fullName은 이미 정해져있으므로 수정되지 않는다.  get, set 필요
  user.firstName = "Ellie";
  console.log(user.fullName); // Steve Jobs

  user.age = 13;
  console.log(user.age);
}
