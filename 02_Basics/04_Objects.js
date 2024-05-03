// const tinderUser=new Object() --- its an singleTon object

const tinderUser = {}; // its an non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "abc@mail.com",
  fullname: {
    userfullname: {
      firstname: "Sachin",
      lastname: "Mishra",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj6  ={5:"a",6:"b"}

const obj3 = { obj1, obj2 };


console.log(obj3);

// Below are two ways of making new object from existing object
const obj4 = Object.assign(obj1, obj2);
const obj5 = Object.assign({}, obj1, obj2,obj6);


const obj7={...obj1,...obj2,...obj3}

console.log(obj7);

const users=[

  {
    id:1,
    email:"sachin@mail.com"

  },
  {
    id:2,
    email:"sachin@mail.com"

  },
  {
    id:3,
    email:"sachin@mail.com"

  },
  {
    id:4,
    email:"sachin@mail.com"

  },
  {
    id:5,
    email:"sachin@mail.com"

  },

]



users[0].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// *****************Destructuring*************



const course={
  courseName:"JS in Hindi",
  price:"999",
  courseInsructor:"Sachin"


}

const {courseInsructor}=course;

console.log(courseInsructor);

const {courseInsructor:instructor}=course;

console.log(instructor);

const navbar=({company})=>{

  log(company)

}

navbar(company="Sachin Mishra Company")

/* JSON Object  i is either JSON Object or it  may be array of JSON Object)

{
  "Name" :"Sachin",
  "courseName":"JS in Hindi",
  "price":"free"
}

*/









