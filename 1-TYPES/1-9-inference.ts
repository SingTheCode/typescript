// Type Inference
let text = "hello";
text = 1;
// hello가 선언되는 순간 type은 string으로 고정

function print(message = "hello") {
  console.log(message);
}
print("hello");
print(1);
// Default parameter 선언 시에 해당 type으로 고정

function add(x: number, y: number) {
  return x + y;
}
// add 함수의 return type이 number로 자동 추론됨

const result = add(1, 2);
// 자동으로 number 타입으로 추론

// 왠만하면 타입을 정확하게 명시하는 것이 좋아!!
