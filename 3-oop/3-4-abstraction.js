{
    var CoffeeMachine_1 = /** @class */ (function () {
        // 인스턴스를 생성할 때마다 호출된다.
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMachine.makeMachine = function (coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        }; // 누군가가 생성자를 이용해 인스턴스를 생성하는 것을 방지하기 위해
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.clean = function () {
            console.log("cleaning the machine...");
        };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grinding beans for " + shots);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log("heating up...");
        };
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("Pulling " + shots + " shots...");
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level instance를 생성할 때마다 나타나게되는 메모리낭비를 막아준다.
        return CoffeeMachine;
    }());
    var maker = CoffeeMachine_1.makeMachine(10);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2);
    var maker2 = CoffeeMachine_1.makeMachine(10);
    maker2.fillCoffeeBeans(32); // CoffeeMaker라는 interface에는 fillCoffeeBeans메서드를 허락하지 않았다.
    maker2.makeCoffee(2);
    // interface : 얼만큼의 행동을 약속, 보장, 허용할껀지 정할 수 있다.
    var maker3 = CoffeeMachine_1.makeMachine(10);
    maker3.fillCoffeeBeans(32);
    maker3.makeCoffee(2);
    maker3.clean();
    var AmateurUser = /** @class */ (function () {
        function AmateurUser(machine) {
            this.machine = machine;
        }
        AmateurUser.prototype.makeCoffee = function () {
            var coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        };
        return AmateurUser;
    }());
    var ProBarista = /** @class */ (function () {
        function ProBarista(machine) {
            this.machine = machine;
        }
        ProBarista.prototype.makeCoffee = function () {
            var coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        };
        return ProBarista;
    }());
    var maker4 = CoffeeMachine_1.makeMachine(32);
    var amateur = new AmateurUser(maker4);
    var pro = new ProBarista(maker4);
    amateur.makeCoffee();
}
