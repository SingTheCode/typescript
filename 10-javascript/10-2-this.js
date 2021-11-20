// 타 언어에서의 this는 인스턴스 본인을 지정할 때 쓰인다.
// Javascript에서의 this는 타 언어와는 다르게 부르는
// 주체, 문맥에 따라 지정하는 목표가 다르다.
console.log(this);

function simpleFunc() {
  console.log(this);
}
// this = window
simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
  // arrow function을 사용하면 선언될 당시 문맥의 this를 유지한다.
  // increase = () => {
  //   console.log(this);
  // };
}
const counter = new Counter();
// this = Counter
counter.increase(); // Counter
const caller = counter.increase;
caller(); // undefined => counter.increase의 this 포인터가 정보를 잃어버림
// const로 선언된 caller는 window 객체에 등록되지 않기 때문에 this는 아무것도 가리키지 않아 undefined

// object와 this를 변하지 않게 묶어주려면 bind 사용
const bindCaller = counter.increase.bind(counter);
bindCaller(); // Counter

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
// bob.run에 counter.increase가 할당되는 순간 this는 bob 인스턴스를 가리키므로 Bob이 출력

{
  // 함수를 정의하면 global 객체 window에서 접근이 가능하다.
  function helloworld() {
    console.log("hello");
  }
  window.helloworld(); // hello

  // const, let으로 선언되면 window에서 접근이 불가능하다.
  const ellie = "ellie";
  let bob = "bob";
  console.log(window.ellie); // undefined

  // var로 선언하면 window에서 접근이 가능하다. but 사용 X
  var badVar = "bad";
  console.log(window.badVar); // bad
}
