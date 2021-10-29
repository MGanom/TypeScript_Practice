{
  type Check<T> = T extends string ? boolean : number; // string타입을 상속하면 boolean타입, 그 외에는 number타입으로 설정
  type Type = Check<string>; // boolean

  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

  type T0 = TypeName<string>; // 'string'
  type T1 = TypeName<"a">; // 'string'
  type T2 = TypeName<() => void>; // 'function'
}
