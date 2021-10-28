{
  // 일반적인 every 메서드
  // every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
  type Student = {
    passed: boolean;
  };

  const students: Student[] = [
    { passed: true },
    { passed: true },
    { passed: false },
  ];

  const result = students.every((student) => {
    return student.passed;
  });

  console.log(result);

  // 타입을 활용한 every 메서드
  // every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
  class Animal {}

  class Cat extends Animal {
    isCat: boolean = true;
  }

  class Dog extends Animal {
    isDog: boolean = true;
  }

  const animals1: Animal[] = [new Cat(), new Cat(), new Dog()];
  const animals2: Animal[] = [new Cat(), new Cat(), new Cat()];

  // isCat은 Animal타입만 인자로 받을 수 있으며, Cat타입으로 리턴이 되야함을 보장하는 함수이다.
  // 이후 Cat타입인 animal에서 .isCat이 존재하는지 체크한다.
  // 존재하면 true가 나올 것이고 존재하지 않으면 undefined가 나오게 된다.
  function isCat(animal: Animal): animal is Cat {
    console.log((animal as Cat).isCat);
    return (animal as Cat).isCat !== undefined;
  }

  console.log(animals1.every<Cat>(isCat)); // false
  console.log(animals2.every<Cat>(isCat)); // true
}
