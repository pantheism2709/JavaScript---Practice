// For loop 

// short cut for coppying all the use of a variable you can use ctrl+D

for (let i = 0; i <= 10; i++) {
    const element = i;

    console.log(element);
    
}

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 0; j <= 10; j++) {
    // console.log(`Outer loop value ${j} and inner loop ${i}`);

    console.log(i+' * '+j+' = '+ i*j);
    
   }
    
}

let myArray=["flash","batman","superman"]

console.log(myArray.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}


// break; and continue;


for (let index = 1; index < 20; index++) {

    if(index==5)
    {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of index is ${index}`);
    
}

// Continue skips the iteration for once and breaks just stop the execution of that loop 


