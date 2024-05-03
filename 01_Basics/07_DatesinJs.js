// ******Dates*****

let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);

console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);

console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3 = new Date("2023-01-14");

console.log(myCreatedDate3.toLocaleString());


let myCreatedDate4 = new Date("01-14-2023");

console.log(myCreatedDate4.toLocaleString());


let myTimeStamp= Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// For getting seconds of current time
console.log(Math.floor(Date.now()/1000));


let newDate=new Date()

console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());


// Very important Method

newDate.toLocaleString('default',{
    weekday:'long',
})


