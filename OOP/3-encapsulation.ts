{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public: 외부에서 볼 수 있고 접근할 수 있는 상태. 이는 작성하여 명시하지 않아도 보편적, 자동적으로 설정된다.
  // private: 외부에서 볼 수 없고 접근할 수 없는 상태.
  // protected: 부모 클래스를 상속한 자식 클래스에서만 접근 가능한 상태.
  class CoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; // private을 붙여줌으로써 외부에서 확인이 불가하고 직접적인 접근을 못하게 했다.
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      // private으로 인해 직접 접근 불가능한 coffeeBeans를 수정하기 위한 함수
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMS_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMS_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      // get을 사용함으로써 호출하는 시점에 fullName의 반환값이 정해진다.
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      // 호출하는 시점에 internalAge가 설정된다.
      return this.internalAge;
    }
    set age(num: number) {
      // private이라 직접 접근이 불가능한 internalAge의 값을 set을 통해 설정해 줄 수 있다.
      if (num < 0) {
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {} // 인자로 전달되어 오는 것이 this.firstName과 this.lastName이 된다.
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName);
}
