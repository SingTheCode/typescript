{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected

  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level instance를 생성할 때마다 나타나게되는 메모리낭비를 막아준다.
    private coffeeBeans: number = 0; // instance (object) level

    // 인스턴스를 생성할 때마다 호출된다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class 내부에 있는 어떠한 속성값도 필요하지 않기 때문에 static 사용
    // coffeeMachine 생성은 class Level에서 이루어져야 자연스러움
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    } // 누군가가 생성자를 이용해 인스턴스를 생성하는 것을 방지하기 위해

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

  const maker = CoffeeMachine.makeMachine(10);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; // invalid

  maker.fillCoffeeBeans(3);

  // class User {
  //   fullName: string;
  //   constructor(public firstName: string, public lastName: string) {
  //     this.fullName = `${firstName} ${lastName}`;
  //   }
  // }
  //
  // const user = new User("Steve", "Jobs");
  // console.log(user.fullName);
  //
  // firstName을 변경해도 fullName은 이미 정해져있으므로 수정되지 않는다.  get, set 필요
  // user.firstName = "Ellie";
  // console.log(user.fullName); Steve Jobs

  class User {
    // fullName을 호출하는 시점에 firstName lastName을 결합할 수 있다.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("age should be greater than 0!");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName); // 함수가 아닌 멤버변수에 접근하는 것처럼 작성 user.fullName() X
}
