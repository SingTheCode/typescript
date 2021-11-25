interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}
//풀이
type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};
//
class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  constructor(private capacity: number) {}
  // 풀이
  get size() {
    return this._size;
  }
  //

  push(value: T): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    // null == undefined
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    this._size--;
    const node = this.head;
    this.head = node.next;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push("Ellie 1");
stack.push("Singco 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
