import { add, diff } from "./b";
import product from "./b"; // this is the default funtion in b file

console.log(product(10, 2), "Anwer");

// class Employee implements Person {
//   name: string;
//   age: number;
//   constructor() {
//     this.name = "Rajesh";
//     this.age = 287;
//   }
//   greet = (arg0: string) => "Hello" + arg0;
// }

// interface Person {
//   name: string;
//   age: number;
//   greet: (arg0: string) => string;
// }

// // //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function test(fn: () => string): number {
//   setTimeout(fn, 1000);
//   return 7;
// }

// test(function () {
//   console.log("Hello");
//   return "Hello";
// });

// // //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// type StringOrNumber = string | number;

// let res: StringOrNumber = 1 || "Rajesh"; //Cant be a boolean

// // //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// type Creature = {
//   name: string;
//   age: number;
// };

// type Properties = {
//   name: string;
//   type: string;
// };

// type TeamLead = Creature & Properties;

// const navdeep: TeamLead = {
//   name: "Navedde",
//   age: 30,
//   type: "Dog",
// };

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function maxValue(values: number[]): number {
//   let maxVal: number = values[0];

//   for (let i: number = 1; i <= values.length; i++) {
//     if (values[i] >= maxVal) {
//       maxVal = values[i];
//     }
//   }

//   return maxVal;
// }

// console.log(maxValue([1, 2, 3, 4, 5]));

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Given a list of users, filter out the users that are legal (greater than 18 years of age)
// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const users: User[] = [
//   {
//     firstName: "Rajesh",
//     lastName: "Kumar",
//     age: 25,
//   },

//   {
//     firstName: "Rinku",
//     lastName: "Kumar",
//     age: 78,
//   },

//   {
//     firstName: "Tinku",
//     lastName: "Kumar",
//     age: 10,
//   },
// ];

// function returnEithteen(users: User[]): User[] {
//   let greaterUsers: User[] = [];
//   for (let i: number = 0; i <= users.length; i++) {
//     if (users[i].age > 18) {
//       greaterUsers.push(users[i]);
//     }
//   }
//   return greaterUsers;
// }

// returnEithteen(users);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// //By default it is
// // enum Direction {
// //   Up = 1,
// //   Down = 2,
// //   Left = 3,
// //   Right = 4,
// // }

// function testDiretion(dir: Direction): void {
//   if (dir === Direction.Down) {
//     console.log("Hey is downfall");
//   }

//   if (dir === Direction.Up) {
//     console.log("Hey is Rising");
//   }

//   if (dir === Direction.Left) {
//     console.log("Hey is Left");
//   }
// }

// testDiretion(Direction.Up);

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// enum DirectionGiven {
//   Up = "up",
//   Down = "down",
//   Left = "left",
//   Right = "right",
// }

// function testDiretionGiven(dir: DirectionGiven): void {
//   if (dir === DirectionGiven.Down) {
//     console.log("Hey is downfall");
//   }

//   if (dir === DirectionGiven.Up) {
//     console.log("Hey is Rising");
//   }

//   if (dir === DirectionGiven.Left) {
//     console.log("Hey is Left");
//   }
// }

// testDiretionGiven(DirectionGiven.Up);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getFirstElement(arr: (string | number)[]) {
  return arr[0];
}

const el = getFirstElement(["Rajesh", "Kumar"]);

//console.log(el.toLowerCase()); Does not work as type of el is string or number. So lowerCase can be used.
//Suppose i want that there should only be ["Rajesh","kumar"] or [1,2] should't be ["Rajesh",1], will not work

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Rajehs");
let output2 = identity<number>(6);

output1.toUpperCase(); //will work
//output2.toUpperCase() does not work.

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function getFirstElementInGeneric<T>(arg: T[]): T {
  return arg[0];
}

interface User {
  name: string;
}

const el1 = getFirstElementInGeneric<User>([{ name: "Rahdjd" }]);

const el2 = getFirstElementInGeneric<string>(["Rahend", "dehe"]);

const el3 = getFirstElementInGeneric<number>([1, 2]);

const el4 = getFirstElementInGeneric<number | string>([1, 2, "Rajesh"]);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
