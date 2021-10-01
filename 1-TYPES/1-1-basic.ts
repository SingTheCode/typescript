{
  // JavaScript
  // Primitive: number, string, boolean, bigint, symbol, null, undefined
  // Object: function, array ...

  // number
  const num: number = 5;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined;
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // No
  let person2: string | null;

  // unknown NO
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any NO
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // NO

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
    return;
    let neverEnding: never; // NO
  }

  // object
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
