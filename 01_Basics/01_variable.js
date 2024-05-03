
// use const declaration for keeping something constant and for other use let and var
const accountId = 144553
let accountEmail = "hitesh@google.com"

//var is used for declaring non constant variable but due to scope issue we dont use it , we generally use let and const
var accountPassword = "12345"

// initialization without declaration is also possible but not prefferable 

accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

and if we want to print something without initialization then it will print undefined

*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])