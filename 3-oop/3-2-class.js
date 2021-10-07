{
    var CoffeeMaker_1 = /** @class */ (function () {
        // 인스턴스를 생성할 때마다 호출된다.
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMaker.makeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        };
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7; // class level instance를 생성할 때마다 나타나게되는 메모리낭비를 막아준다.
        return CoffeeMaker;
    }());
    var maker = new CoffeeMaker_1(32);
    console.log(maker);
    var maker2 = CoffeeMaker_1.makeMachine(3); // constructor를 호출하지 않고 machine 생성
    console.log(maker2);
}
{
    // class level에 있어서 const math = new Math()이런 식이 존재하지 않는다.
    Math.abs;
    Math.PI;
}
