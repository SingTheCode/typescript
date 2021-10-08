// type CoffeeCup = {
//   shots: number;
//   hasMilk: boolean;
// };

const COFFEE_BEANS_PER_ONE_SHOT = 10;
let coffeeBeans = 0;

function makeCoffee(shots: number): CoffeeCup {
  if (coffeeBeans < shots * COFFEE_BEANS_PER_ONE_SHOT) {
    throw new Error("don't have enough coffeebeans!");
  }
  coffeeBeans -= shots * COFFEE_BEANS_PER_ONE_SHOT;
  return {
    shots,
    hasMilk: false,
  };
}
coffeeBeans += 10 * COFFEE_BEANS_PER_ONE_SHOT;
console.log(makeCoffee(4));
