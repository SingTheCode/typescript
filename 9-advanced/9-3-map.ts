{
  type Video = {
    title: string;
    author: string;
  };

  // optional을 붙여주거나
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // readonly를 걸어주고 싶은 경우
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  // type을 여러개 만드는 건 비효율적인 방법

  // 제네릭과 map을 이용해 기존 type을 optional 하게 사용할 수 있다.
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in : Object에 있는 모든 key들을 하나하나씩 도는 연산자
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // video.author = "dfews" // readonly 이므로 변경 X

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
