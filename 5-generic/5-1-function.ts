{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  // 타입이 없어서 안좋아
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // generic 통상적인, 일괄적인
  // 유연하면서 타입을 보장받을 수 있다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
