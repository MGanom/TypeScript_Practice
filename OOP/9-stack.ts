{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImple implements Stack {
    private _size: number = 0; // 변수의 이름을 동일하게 할 시 내부에서만 쓰이는 변수에는 앞에 _ 를 넣어준다.
    private head?: StackNode;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full");
      }
      const node: StackNode = { value: value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): string {
      if (this.head == null) {
        // ===가 아닌 ==를 통해 비교하면 null == undefined이기 때문에 undefined인 경우도 체크가 가능하다.
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack1 = new StackImple(10);
  stack1.push("1");
  stack1.push("2");
  stack1.push("3");
  while (stack1.size !== 0) {
    console.log(stack1);
    console.log(stack1.pop());
  }

  const stack2 = new StackImple(5);
  let i = "a";
  while (stack2.size < 5) {
    stack2.push(i);
    console.log(stack2);
    i += "a";
  }
}
