// There  are two ways to create objects 
// One is like literal and other is like constructor

//But when You create using Constructor then it will be singleton 

// But wwhen you create using literal then it is not singleton


// Below is object creation way using literals

const JsUser={

    name:"Sachin",
    age:24,
    "full name":"Sachin Mishra",
    location:"Indore",
    email:"abc@mail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]


}


console.log(JsUser.email);

// Below way is helpful when you are providing keys also in the term of string inside colons(if you want to give space in between the name of key ) , in such case the above way will not work you have to use below way
console.log(JsUser["email"]);


// It will give error
// console.log(JsUser.full name);


console.log(JsUser["full name"]);


const mySymbol=Symbol("key1")

const myObj={
  [mySymbol]:"myKey1"  

}

console.log(myObj.mySymbol);
console.log(typeof myObj.mySymbol);

// Correct syntax of using symbol is below

const myObj2={
    [mySymbol]:"myKey1"

}

console.log(myObj2[mySymbol]);

JsUser.email="def@mail.com"

// It will freeze the object , any change after freezing will not get reflected

Object.freeze(JsUser)


console.log(JsUser);


JsUser.email="xyz@mail.com"

console.log(JsUser);

console.log(myObj);


myObj.greeting=function()
{
    console.log("hello Js User");
}

console.log(myObj.greeting);

console.log(myObj.greeting());


JsUser.greetinTwo=function()
{
    console.log(`Hello JS user,${this.name}`)
}

console.log(JsUser.greetinTwo());













