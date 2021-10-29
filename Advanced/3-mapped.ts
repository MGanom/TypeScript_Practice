{
  type Optional<T> = {
    [P in keyof T]?: T[P]; // []를 사용하면 for ... in과 같은 작동을 한다.
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // T라는 객체 안의 키 값인 P들을 불러와 각각의 T[P]에 해당하는 타입을 적용해준다.
  };

  type Video = {
    title: string;
    author: string;
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
    author: "moon",
  };
  const videoReadonly: ReadOnly<Video> = {
    title: "hello",
    author: "ganom",
  };
  // videoReadonly.title = 'hi' // Cannot assign to 'hello' because it is a read-only property.

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //   };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj: Nullable<Video> = {
    title: null,
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
