//for of

const arr=[1,2,3,4,5]

for (const it of arr) {
    console.log(it);
}


// Maps

const map=new Map()
map.set("IN","India");
map.set("USA","United States of America");
map.set("Fr","France");

console.log(map);

for (const [key,value] of map) {
console.log(key,':-',value);
}


const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}

