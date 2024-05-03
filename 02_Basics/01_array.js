// array

const myArray = [0, 1, 2, 3, 4, 5];

const myHeros = ["shaktiman", "nagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArray[0]);

// array in JS create shallow copy ... means it share the same reference

// In arrays you got elements, prototypes and lentgh property

//Array Methods

myArray.push(6);
myArray.push(7);
console.log(myArray);

myArray.pop();

// unshift is Time Consuming operation
myArray.unshift(9);

myArray.shift();

console.log(myArray.includes(9));

console.log(myArray.indexOf(9));

const newArr = myArray.join();

console.log(myArray);

console.log(newArr);
console.log(typeof newArr);


//slice , splice

console.log("A ",myArray);

const myn1=myArray.slice(1,3) // slice just give the part of array but not manipulate it

console.log(myn1);
console.log("B ",myArray);


const myn2=myArray.splice(1,3) // splice give the part of original array and also Manipulates the original array

console.log(myn2);

console.log("C ",myArray);


