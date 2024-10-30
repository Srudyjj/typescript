class Book {
  private checkout: boolean = false;
  constructor(
    readonly title: string,
    public author: string,
    private someValue: number
  ) {}
  public getSomeValue() {
    return this.someValue;
  }

  get info() {
    return `${this.title} by ${this.author}`;
  }

  set checkOut(checkOut: boolean) {
    this.checkout = checkOut;
  }
}

const deepWork = new Book("Deep Work", "Cal Newport", 123);

console.log(deepWork);
console.log((deepWork.checkOut = true));
console.log(deepWork);

console.log(deepWork.info);

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}
const hipster = new Person("shakeAndBake", 100);
hipster.greet();
