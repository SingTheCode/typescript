{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
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
            super(beans);
        }
        private steamMilk() {
            console.log('Steaming some milk...');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots); // 부모 클래스의 함수를 호출하거나 접근할 수 있다.
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CafeLatteMachine(23, 'SSSS');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);
}
