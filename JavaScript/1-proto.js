const x = {};
const y = {};
console.log(x); // 생성되는 순간 Prototype Object가 존재함
console.log(y);
console.log(x.__proto__); // 조상 Prototype Object와 연결되어 있음
console.log(y.__proto__);
console.log(x.__proto__ === y.__proto__); // 동일한 조상 Prototype Object를 가리키고 있음

const array = [];
console.log(array); // Array 프로토타입을 상속하고, 그 Array 프로토타입은 Object 프로토타입을 상속한다.
console.log(array.__proto__); // Array 프로토타입과 연결되어 있음
console.log(array.__proto__.__proto__); // Object 프로토타입과 연결되어 있음
console.log(x.__proto__ === array.__proto__.__proto__); // 동일한 조상 Prototype Object를 가리키고 있음

function CoffeeMachine(beans) {
  this.beans = beans;
  // 생성되는 instance마다 포함되는 instance member level
  // CoffeeMachine 함수에 makeCoffee기능이 추가된다.
  this.makeCoffee = (shots) => {
    console.log("making coffee");
  };
}
// Prototype member level
// CoffeMachine 함수의 프로토타입 오브젝트에 makeCoffee라는 함수를 추가한다.
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making coffee");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
// LatteMachine의 프로토타입을 CoffeeMachine으로 설정해준다. 즉, LatteMachine의 프로토타입은 CoffeMachine이고, CoffeeMachine의 프로토타입은 Prototype Object가 되는 것이다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(123);
console.log(latteMachine);

// 프로토타입을 CoffeeMachine으로 설정해줬으므로 CoffeeMachine의 프로토타입 오브젝트 안에 있는 makeCoffee 함수를 사용할 수 있게 된다.
latteMachine.makeCoffee();
