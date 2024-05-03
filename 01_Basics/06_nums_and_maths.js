const score = 400;
console.log(score);

const balance = new Number(100);

console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(1));

const otherNumber=123.85746;

console.log(otherNumber.toPrecision(3));



const hundrerds=100000;

console.log(hundrerds.toLocaleString());
console.log(hundrerds.toLocaleString('en-IN'));


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// ***************Maths*****************

// It comes by-default with JS  means we dont need to explicitly create object

console.log(Math)

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));


console.log(Math.sqrt(4))

console.log(Math.min(4,3,5,6,8))
console.log(Math.max(4,3,5,6,8))




console.log(Math.random())// always come in range from 0 to 1

// Below will give no in range 1 to 10;
console.log((Math.random()*10)+1);

// for rounding off to lowest value thats generated from inner expression
console.log(Math.floor((Math.random()*10))+1);


// Below is the way to generate the random no. in range of min and max

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);






