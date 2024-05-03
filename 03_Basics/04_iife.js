// Immediately Invoked Function Expression (IIFE)


 function chai()
 {
    console.log(`DB Connected`);
 }

 chai()

 // How to write IIFE

// IIFE is used to immediately invoking a function and also prevent it from the global scope pollution ( to prevent the interfere of global varaibles and functions )
( function chai()
 {
    // named IIFE
    console.log(`DB Connected`);
 })();

 // and its mendatory to put semicolon at last of IIFE because compiler dont know that where to stop an IIFE , so whenever you want to write more than one IIFE in a single file then use semicolon


 ((name)=>{
    console.log(`DB Connceted TWO ${name}`);
 })('Sachin');


