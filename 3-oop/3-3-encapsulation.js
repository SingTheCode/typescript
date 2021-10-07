{
    // public
    // private
    // protected
    var CoffeeMaker_1 = /** @class */ (function () {
        // 인스턴스를 생성할 때마다 호출된다.
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMaker.makeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        }; // 누군가가 생성자를 이용해 인스턴스를 생성하는 것을 방지하기 위해
        CoffeeMaker.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
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
    var maker = CoffeeMaker_1.makeMachine(10);
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -34; // invalid
    maker.fillCoffeeBeans(3);
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.internalAge = 4;
        }
        Object.defineProperty(User.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "age", {
            get: function () {
                return this.internalAge;
            },
            set: function (num) {
                if (num < 0) {
                    throw new Error("age should be greater than 0!");
                }
                this.internalAge = num;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var user = new User("Steve", "Jobs");
    user.age = 6;
    console.log(user.fullName);
}
