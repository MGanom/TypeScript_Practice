{
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
  const either1: Either<number, number> = new SimpleEither(1, 2);
  console.log(either1.left()); // 1
  console.log(either1.right()); // 2

  const either2 = new SimpleEither({ name: "Moon" }, "hello");
  console.log(either2.left()); // { name: Moon}
  console.log(either2.right()); // hello
}
