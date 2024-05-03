const marvel_heroes=["thor","IronMan","SpiderMan"]

const dc_heroes=["superman","flash ","batman"];

// marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


const allHeroes=marvel_heroes.concat(dc_heroes)

console.log(allHeroes);

// creating new array using spread operator , it basically spread down all the elements form a Data structure , people ususally use spread operator instead of concat

const allHeroes2=[...marvel_heroes,...dc_heroes]

console.log(allHeroes2);


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]


// flat function helps in flattening the nested array

const real_another_array=anotherArray.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Hitesh"))

console.log(Array.from("Hitesh"));

console.log(Array.from({name:"hitesh"})); // interesting case becuase here  we need to define that wee want to create the array from keys or values otherwise it will give only empty array


let score1=100;
let score2=200;
let score3=300;


console.log(Array.of(score1,score2,score3));