/*
flags:
i case-insensitive
g looks for all matches
m multiline node
u enables full unicode support
y sticky mode
*/
let str = "I love JavaScript!";
console.log(str.search(/LOVE/)); // -1
console.log(str.search(/LOVE/i)); // 2

// two ways to declare regular expression
let regexp = new RegExp("LOVE", "i");
let regexp1 = /LOVE/i;
console.log(str.search(regexp)); // 2
console.log(str.search(regexp1)); // 2