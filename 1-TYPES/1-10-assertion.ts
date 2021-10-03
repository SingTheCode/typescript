{
  // Type Assertions 별로 좋지 않아 피해보는 걸로!!
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  // result.length 사용불가
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // error

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // 무조건 배열인 것을 확신할 때 ! 사용 (좋지 않아)

  // 사용할만한 좋은 예
  const button = document.querySelector("class")!;
}
