/*
A quantifier is put after a character (or a character class and so on) 
and specifies exactly how many we need.

\d{5} denotes exactly 5 digits, the same as \d\d\d\d\d.
*/
console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/) ); // ["1234", index: 16, input: "I'm not 12, but 1234 years old"]
console.log("I'm not 12, but 1234 years old".match(/\d{3,}/) ); // ["1234", index: 16, input: "I'm not 12, but 1234 years old"]

/*
short hands
+ the same as {1,}
? the same as {0,1}
* the same as {0,}
*/
let reg1 = /\d+\.\d+/;
console.log("0 1 12.345 7890".match(reg1)); // ["12.345", index: 4, input: "0 1 12.345 7890"]

let reg2 = /<[a-z]+>/ig;
console.log("<body> ... </body>".match(reg2)); // ["<body>"]

let reg3 = /<[a-z][a-z0-9]*>/ig;
console.log("<h1> ... </h1>".match(reg3)); // ["<h1>"]

let reg4 = /<\/?[a-z][a-z0-9]*>/ig;
console.log("<h1> ... </h1>".match(reg4)); // ["<h1>", "</h1>"]

// tasks
let reg5 = /\.{3,}/g;
console.log( "Hello!... How goes?.....".match(reg5) ); // ["...", "....."]

let reg6 = /\b#\w{6}\b/g;
let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log( str.match(reg6) )  // ["#121212", "#AA00ef"]