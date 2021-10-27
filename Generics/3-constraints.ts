{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("Full Time");
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("Part Time");
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // Generics이긴 하지만 Employee를 확장한 타입만 받을 수 있는 constraints를 걸어준다.
  function payGood<T extends Employee>(employee: T): T {
    employee.pay(); // constraints가 없을 시 pay함수 사용 불가
    return employee;
  }

  const moon = new FullTimeEmployee();
  const ganom = new PartTimeEmployee();

  moon.workFullTime; // FullTimeEmployess 클래스 내부에 있는 함수 호출 가능
  ganom.workPartTime; //PartTimeEmployess 클래스 내부에 있는 함수 호출 가능

  const moonAfterPayBad = payBad(moon); // moonAfterPay는 payBad함수를 통해 Employee라는 타입으로 재정의 되었기 때문에 moonAfterPay.workFullTime은 호출이 불가능하다
  const ganomAfterPayBad = payBad(ganom); // 마찬가지의 이유로 ganomAfterPay.workPartTime은 호출이 불가능하다

  const moonAfterPayGood = payGood(moon); // Employee타입을 상속한 FullTimeEmployee타입인 moon을 받아 moon의 타입, 즉 FullTimeEmployee타입으로 반환한다
  const ganomAfterPayGood = payGood(ganom); // Employee타입을 상속한 PartTimeEmployee타입인 ganom타입을 받아 ganom의 타입, 즉 PartTimeEmployee타입으로 반환한다

  moonAfterPayGood.pay(); // pay함수 호출이 여전히 가능하다.
  ganomAfterPayGood.pay(); // pay함수 호출이 여전히 가능하다.
}

{
  const obj1 = {
    name: "moon",
    age: 20,
  };

  const obj2 = {
    shape: "⚪",
  };

  // 사용할 타입으로 T와 그 T의 키 값을 타입으로 받는 K를 설정해주고, 반환값은 T의 키 값 K의 밸류값인 T[K]로 설정해준다.
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj1, "name")); // moon
  console.log(getValue(obj1, "age")); // 20
  console.log(getValue(obj2, "shape")); // ⚪
}
