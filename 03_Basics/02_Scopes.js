///---------------- Global Scope ----------------


let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);

//scope is nothing but anything inside curly brace "{ }""

var f = 300;
if (true) {
   //----------- Block Scope -------------------- 
  let d = 40;
  const e = 50;
  var f = 60;
}

console.log(d);
console.log(e);
console.log(f);



/*

So basically, let and const variables have block level scope , while the var variables have global scope


*/



//  Nested Scope 

// If there is any nesting in function , then inner function has the access of outer function and that is called the closure .


function one() {
    const username="Sachin"
    function two() {
        const website="youtube"
        console.log(username);

    }

    console.log(website);


    two()

}

one()



// below is also the example of nesting
if(true)
{
    const username="Sachin"
    if(username==="Sachin")
    {
        const website="youtube"
        console.log(username);

    }

    console.log(website);
}

console.log(username);

// ++++++++++++ interesting ++++++++++++


// Below is called function


console.log(addone(5));
function addone(num)
{
    return num+1;


}





// Below is called expression or function expression

console.log(addTwo(5));
const addTwo=function(num){
    return num+2;
}

addTwo(5);
















