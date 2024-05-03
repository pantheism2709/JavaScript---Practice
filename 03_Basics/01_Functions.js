// console.log("S");
// console.log("A");
// console.log("C");
// console.log("H");
// console.log("I");
// console.log("N");

function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("C");
  console.log("H");
  console.log("I");
  console.log("N");
}

sayMyName();

// function addTwoNumbers(number1,number2)
// {

//     console.log(number1+number2);

// }

function addTwoNumbers(number1, number2) {
  // let result=number1+number2;

  // return result;

  return number1 + number2;
}

addTwoNumbers(3, 4);
addTwoNumbers(3, "4");
addTwoNumbers(3, "a");
addTwoNumbers(3, null);

const result = addTwoNumbers(3, 5);

console.log("result: ", result);

function loginUserMessage(username = "sam") {
  if (username === undefined) {
    // (!username)
    console.log("Please enter a username");
    return;
  }

  return `${username} just Logged In`;
}

const message = loginUserMessage("Sachin Mishra");

console.log(message);

console.log(loginUserMessage());

// function calculateCartPrice(num1){

//     return num1;
// }

// console.log(calculateCartPrice(200,400,500));

// rest operator  (...) it is more likely to spread operator  , We use the rest operator when the number of parameters is dynamic

// The first and second arguements will go in val1,val2 and  other will go in num1 as array element

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "sachin",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);
handleObject({ username: "sam", price: 399 });


const myNewArray=[200,400,100,600]


function returnSecondValue(getArray)
{
    return getArray[1];

}

console.log(returnSecondValue(myNewArray))

