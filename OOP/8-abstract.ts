{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    // abstract를 붙임으로써 이 자체로는 object(instance)를 만들 수가 없다.
    // 대신 자식 클래스에서 사용 가능한 함수들과 자식 클래스마다 달라질 수 있는 행동들에 대해 정의를 해줄 수 있게 된다.
    private static BEANS_GRAMS_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    protected abstract extract(shots: number): CoffeeCup;
    // 자식 클래스마다 달라질 수 있는 행동에 abstract를 작성해주고 자식 클래스에서 접근을 할 수 있도록 protected도 써준다.
    // 또한 abstract(추상)적인 사항이기 때문에 구현 내용을 작성하지 않는다.
    // abstract인 부분은 자식 클래스에서 반드시 작성 돼야 한다.
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    // super를 불러오지 않아도 된다.
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("-------------------------");
    machine.makeCoffee(1);
  });
}
