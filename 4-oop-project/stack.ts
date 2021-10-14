interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}
//풀이
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};
//
class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  constructor(private capacity: number) {}
  // 풀이
  get size() {
    return this._size;
  }
  //

  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
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

const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Singco 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
  console.log(stack.size);
}
stack.pop();
