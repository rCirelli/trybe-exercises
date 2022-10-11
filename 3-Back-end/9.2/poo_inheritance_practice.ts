class Superclass {
  constructor(public isSuper: boolean = true) {
  }

  public sayHello() {
    console.log('Hello world!');    
  }
}

class Subclass extends Superclass {

}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
}

const superObj = new Superclass();
const subObj = new Subclass();

myFunc(superObj);
myFunc(subObj);

