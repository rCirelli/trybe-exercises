interface Myinterface {
  myNumber: number;
  myFunc(myParam: number): string
}

class MyClass implements Myinterface {
  constructor(public myNumber: number) {}

  public myFunc(num: number) {
    return `the sum is: ${this.myNumber + num}`;
  }
}

const obj = new MyClass(42);
console.log(obj.myFunc(10));
