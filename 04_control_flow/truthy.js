const userEmail = "user@mail.com";

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Dont have user email");
}
/*

Truthy Values :- All values that are not falsy values are called truthy values , but following are some suprising kind of cases

1) "0"
2) 'false'
3) " "
4) []
5) {}
6) function(){}   ( empty function )



Falsy Values

1) False
2) 0 
3) -0
4) 0n (BigInt)
5) ""
6) null
7) undefined
8) NaN


*/

const array = [1, 2, 3, 4, 5];

if (array.length == 0) {
  console.log("array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// some comparisons that return true
console.log(false == 0);
console.log(false == "");
console.log(0 == "");

// Nullish Coalescing Operator (??): null undefined


// it is use when we call to an api ... so if we get any valid response then fine other wise whatever is the left side of ?? that will be assigned to the variable

// it is made only for null undefined
let val1;

val1 = 5 ?? 10;

console.log(val1);

val1 = null ?? 10;

val1=undefined??15
val1=null??10??17



// Ternary Operator

// condition?true:false

const iceTeaPrice=100

iceTeaPrice>=80?console.log("Less than 80"):console.log("more than 80");








