const user={
    username:"Sachin",
    price:"999",

    welcomeMessage:function()
    {
        console.log(`${this.username}, welcome to website`);

        console.log(this);


        //  this keyword is representing the  current context
    }

}

user.welcomeMessage()

user.username="sam"

user.welcomeMessage()


// If You run the following line in browser , it will give the window object , because in browser the global object is  window object
console.log(this)



// function chai()
// {
//     let username="sachin"
//     console.log(this.username);
// }

// chai()

// const chai=function(){
//     let username="sachin"
//     console.log(this.username);
// }



const chai=()=>{
    let username="Sachin Mishra"
    console.log(this)
}


const addTwo=(num1,num2)=>{
    return num1+num2
}


const addThree=(num1,num2,num3)=>num1+num2+num3


// If You are writing like that (num1+num2+num3+num4) then you dont need to write return 
const addFour=(num1,num2,num3,num4)=>(num1+num2+num3+num4)


console.log(addTow(3,4));

// so You have to wrap the object in parantheses
const dummy=()=>({username:"Sachin Mishra"})

console.log(dummy);


// const myArray=[2,5,3,7,8]

// myArray.forEach()