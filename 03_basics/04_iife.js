// Immediately Invoked Function Expressions (IIFE)
//Syntax : (function_definion)(function_invoke)

(function chai(){ // named IIFE
    
    console.log(`DB CONNECTED`);
})(); // 2 continuous 'iife' likhna h.. to semicolon lgake..context rokna pdega.. pehle 'iife' ka

( (name) => {
    console.log(`DB TWO CONNECTED, ${name}`);
} )('Aditya')