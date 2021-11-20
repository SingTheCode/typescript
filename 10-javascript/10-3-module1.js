// export default는 2번 사용 불가
// import에서 이름을 바꿔 사용할 수 있음
export default function add(a, b) {
  return a + b;
}

export const number = 10;
// import에서 이름을 그대로 사용
export function print() {
  console.log("print");
}
