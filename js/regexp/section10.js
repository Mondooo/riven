/*
backreferences: \n and $n
*/
let name = "John Smith";
name = name.replace(/(\w+) (\w+)/i, "$2, $1");
console.log( name ); // Smith, John

let str = "He said: \"She's the one!\".";
let reg = /(['"])(.*?)\1/g;
console.log( str.match(reg) ); // [""She's the one!""]