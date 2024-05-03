const myObject={
   js:'javascript',
   cpp:"C++",
   rb:"ruby",
   swift:"swift by apple"}

// For in loop 

for (const key in myObject) {
    console.log(myObject[key]);
}

// for in loop in array
const programming=["C","C++","Java"]

for (const key in programming) {
    console.log(programming[key]);
}


// For in Loop cant be used for Map

// For each loop

const coding=["C","C++","Java"]

coding.forEach((values)=>{

    console.log(values);

})
coding.forEach((values,index,arr)=>{

    console.log(values,index,arr);

})


const myCoding=[
    {
        languageName:"javascript",
        languageFIleName:"js"
    },
    {
        languageName:"C plus plus",
        languageFIleName:"c++"
    },
    {
        languageName:"java",
        languageFIleName:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})



const map=new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")


for ( const key of map.keys() )
console.log(key);


for ( const value of map.values() )
console.log(value);









