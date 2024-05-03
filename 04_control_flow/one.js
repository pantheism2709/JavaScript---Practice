// if

if (true) {
  console.log("hello World");
}

const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("Yes User is Logged in");
}

// <,>,<=,>=,==,===,!=,!==

if (2 == "2") console.log("executed");

if (2 === "2") console.log("executed second");

const temperature = 41;

if (temperature < 50) console.log("temperature is less than 50");
else console.log("temperature is greater than 50");

const score = 200;

if (score > 100) {
  const power = "fly";

  console.log(`User power: ${power}`);
}

const balance = 1000;

// it is allowed to write
if (balance > 500)
  console.log("balance is greater than 500"), console.log("test2");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("Less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard ) {
  console.log("Allow to buy course");
}

if(LoggedInFromGoogle||LoggedInFromEmail)
{
    console.log("User Logged in");
}


