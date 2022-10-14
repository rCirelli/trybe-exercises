class Superclass {
  constructor(public isSuper: boolean = true) {
  }

  public sayHello() {
    console.log('Hello world!');    
  }
}

class Subclass extends Superclass {
  constructor(){
    super(false);
  }
}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
  console.log(obj.isSuper ? 'Super' : 'Sub!');
}

const superObj = new Superclass();
const subObj = new Subclass();

myFunc(superObj);
myFunc(subObj);

