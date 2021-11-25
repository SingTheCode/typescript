// either: a or b
// class에 제네릭을 사용할 경우 implement하고 있는 interface도 제네릭을 써야 한다.
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}
// 컴파일될 때 타입이 결정된다.
const either = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
const best = new SimpleEither({ name: "ellie" }, "Hello");
