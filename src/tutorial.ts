let tax: number | string = 10;
tax = 100;
tax = "$10";

let requestStatus: "pending" | "success" | "error" = "pending";

let notSure: any = 4;
notSure = "Maybe";
notSure = false;

//ARRAYS
let temperatures: number[] = [20, 25, 30];
// temperatures.push("hot");
let colors: string[] = ["red", "green", "blue"];
// colors.push(true)
let mixed: (number | string)[] = [1, "two", 3];

//OBJECTS
let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "ford";
// car.color = "blue";

let car1: { brand: string; year: number } = { brand: "audi", year: 2020 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 20 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "new book";

//FUNCTIONS
function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("john");
// sayHi(1);

function calcDiscount(price: number): number | string | void {
  const hasDiscount = true;
  if (hasDiscount) {
    return "Discount Applied";
  } else if (!hasDiscount) {
    return price * 0.9;
  }
  return;
}

const finalPrice = calcDiscount(200);

function calcPrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calcPrice(100, 20);

function calcScore(initialScore: number, penaltyPoints: number = 0): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calcScore(100, 20);
let scoreWithoutPenalty = calcScore(300);

//FUNCTION REST PARAMETER
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);
  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5);
console.log(result);

function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello there");

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLowerCase());
  }
}

processInput(10);
processInput("Hello");

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 === 0,
  };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!`);
}

const newStudent = {
  id: 5,
  name: "anna",
  email: "anna@gmail.com",
};

createStudent(newStudent);
//  createStudent({ id: 1, name: "bob", email: "bobo@gmail.com" });

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toLowerCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(10);
console.log("Hello");
console.log("Hello", { reverse: true });

//TYPE ALIAS

type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};

const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello";
value = 123;

type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is an manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: "alice", department: "Sales" };
const steve: Employee = { id: 1, name: "steve", department: "HR" };

const bob: Manager = { id: 1, name: "bob", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);
