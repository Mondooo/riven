/*
[...]
Please note that although there are multiple characters in the set, 
they correspond to exactly ONE character in the match.
*/
let regexp1 = /[\s\S]/g;
let regexp2 = /./g;
console.log("ABc-_ 123.".match(regexp1)); // ["A", "B", "c", "-", "_", " ", "1", "2", "3", "."]
console.log("ABc-_ 123.".match(regexp2)); // ["A", "B", "c", "-", "_", " ", "1", "2", "3", "."]

let regexp3 = /[^0-9]/g; // same as /[\D]/g
console.log("alice15@gmail.com".match(/[^\w\d\s]/gi)); // ["@", "."]

/*
no escape in [...]
A dot '.'.
A plus '+'.
Parentheses '( )'.
Dash '-' in the beginning or the end (where it does not define a range).
A caret '^' if not in the beginning (where it means exclusion).
And the opening square bracket '['.
*/
let regexp4 = /[-().\]^+]/g;
console.log("(1 + 2) - 3.5^2]".match(regexp4)); // ["(", "+", ")", "-", ".", "^", "]"]

// tasks
let regexp5 = /Java[^script]/;
console.log("Java".match(regexp5)); // null
console.log("JavaScript".match(regexp5)); // ["JavaS", index: 0, input: "JavaScript"]

// 
let regexp6 = /\d\d[:-]\d\d/g;
console.log( "Breakfast at 09:00. Dinner at 21-30".match(regexp6) ); // ["09:00", "21-30"]
