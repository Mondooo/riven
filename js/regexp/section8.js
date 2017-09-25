let reg1 = /".+"/g;
let str = 'a "witch" and her "broom" is one';
console.log( str.match(reg1) ); // witch" and her "broom"
// not we want

// default is greedy search: find . to the end then backtrack
// In the greedy mode (by default) the quantifier is repeated as many times as possible.

// lazy mode
// repeat minimal number of times
// added ? after another quantifier (or even itself) it gets another meaning – it switches the matching mode from greedy to lazy.
let reg2 = /".+?"/g;
console.log(str.match(reg2)); // [""witch"", ""broom""]
console.log("123 456 789".match(/\d+ \d+?/g)); // ["123 4", "56 7"]

str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let reg3 = /href="(.*?)" class="doc"/g;
console.log(str.match(reg3)); // ["href="link1" class="wrong">... <p style="" class="doc""]
// not we want
let reg4 = /href="[^"]*" class="doc"/g;
console.log(str.match(reg4)); // null

// tasks
console.log("123 456".match(/\d+? \d+?/g) ); // ["123 4"]

let reg5 = /<!--[\s\S]*?-->/g;
str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

console.log( str.match(reg5) ); // ["<!-- My -- comment↵ test -->", "<!---->"]