/*
In Js String can be represted using a single colon and double colon there is not any restriction

*/

const name = "Sachin";
const repoCount = 50;

// console.log(name + repoCount + "Value");

// Below way of writing string using $ is called string interpolation we can apply method as well on variable inside curly braces



console.log(`Hello my name is ${name}" and my repo count is ${repoCount}`);

// Please write the code using backTiks not the string then '+' and all 


const gameName1 = "SachinGame";

const gameName2 = new String("SachinGame"); // This way provide some more features to apply on string

const gameName3 = new String("Sachin-Game"); // This way provide some more features to apply on string

console.log(gameName2[0]);

console.log(gameName2.__proto__);

console.log(gameName2.length);

console.log(gameName2.toUpperCase());

console.log(gameName2.charAt(2));

console.log(gameName2.indexOf('t'));

const newString=gameName3.substring(0,4)  // substring not follow the concept of negative index

const anotherString=gameName3.slice(0,4)


// const anotherString=gameName3.slice(-8,4)


const newStringOne="   Sachin    "

console.log(newStringOne);
console.log(newStringOne.trim());


const url="https://sachin.com/sachin%20Mishra"

url.replace('%20','-')

console.log( url.includes('sachin'));


console.log(gameName3.split('-'));// split on the basis of '-' and create a new array
