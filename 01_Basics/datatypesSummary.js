//  Primitive Datatypes ( They do Call by Value)

/*

7 Types := String , Number , Boolean , null , undefined , Symbol , BigInt



*/

// Reference ( Non Premitive ) ( They Do Call by Reference )

/*

Array , Object , Functions

*/

// Javascript is Loosely typed Language

// TypeScript is Highly Typed Language

const score = 200;

const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 2443546435634n;

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "Sachin Mishra",
  age: 24,
};

const myFunction = function () {
  console.log("hello World");
};

console.log(typeof bigNumber);

console.log(typeof myFunction);

/*

type of undefined => undefined
type of null => object
type of boolean => boolean
type of string => string

*/

// ******************Memory***********

// Stack (Premitive ), Heap (Non- Premitive)

// when a memory created in stack then you will get the copy of that memory but when the memory is created in heap then you will get the reference of that memory

let myYoutubeName = "Sachin_Youtube";

let anotherName = myYoutubeName;

console.log(anotherName);

anotherName = "New_Sachin_Youtube";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "admin@mail.com",
  upi: "abcdfedef@ibl",
};

let userTwo = user;


userTwo.email="user@mail.com"

console.log(userOne.email);

console.log(userTwo.email);


