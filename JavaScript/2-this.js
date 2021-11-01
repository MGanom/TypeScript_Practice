// 글로벌 객체 호출
console.log(this); // Window

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // 글로벌에서 호출하는 것은 Window에서 호출하는 것과 같기에 Window

class Counter {
  count = 0;
  // 일반 함수는 this가 호출한 대상을 의미한다.
  increase = function () {
    console.log(this);
  };
  // 화살표 함수는 this가 자신이 속한 class를 의미한다.
  decrease = () => {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // Counter
const caller1 = counter.increase;
caller1(); // undefined
const caller2 = counter.increase.bind(counter);
caller2(); // Counter
const caller3 = counter.decrease;
caller3(); // Counter

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
