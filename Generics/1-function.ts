{
  // 좋지 않은 방법1 (타입이 number로 한정되어 있음)
  function checkNotNull1(arg: number | null): number {
    if (arg == null) {
      throw new Error("Invalid number");
    }
    return arg;
  }
  const result1 = checkNotNull1(123);
  console.log(result1); // 123
  checkNotNull1(null); // Error :Invalid number

  // 좋지 않은 방법2 (타입이 정의되지 않아 안전하지 않음)
  function checkNotNull2(arg: any | null): any {
    if (arg == null) {
      throw new Error("Invalid number");
    }
    return arg;
  }
  const result2 = checkNotNull2(123);
  console.log(result2); // 타입이 number
  const result2_2 = checkNotNull2("hi");
  console.log(result2_2); // 타입이 string

  // 좋은 방법 (Generics를 활용)
  function checkNotNull3<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("Invalid number");
    }
    return arg;
  }
  const result3 = checkNotNull3(123); // 123을 인자로 받는 순간 result3은 number 타입을 리턴하도록 설정된다.
  const result3_2: boolean = checkNotNull3(true); // true를 인자로 받는 순간 result3_2는 boolean 타입을 리턴하도록 설정된다.
}
