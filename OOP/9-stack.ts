{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    value: string;
    next: StackNode | undefined;
  };

  class StackImple implements Stack {
    private _size: number; // 변수의 이름을 동일하게 할 시 내부에서만 쓰이는 변수에는 앞에 _ 를 넣어준다.
    get size() {
      return this._size;
    }
    push(value: string) {
      this._size++;
    }
    pop(): string {
      this._size--;
    }
  }
}
