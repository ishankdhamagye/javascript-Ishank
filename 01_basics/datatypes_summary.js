//  PRIMITIVE
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id == anotherId); // false

const bigNumber = 345868497562n;



// REFERENCE (NON-PRIMITIVE)
// Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "Doga"];

let myObj = {
    name: "Ishank",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof heros);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myName = "Ishank Dhamgaye"
let anotherName = myName;
anotherName = "Java Wala"
console.log(anotherName);
console.log(myName);

let user1 = {
    email:"javwala@google.com",
    upi : "user@ybl"
}

let user2 = user1;
user2.email = "ishank@google.com";

console.log(user1.email);
console.log(user2.email);
