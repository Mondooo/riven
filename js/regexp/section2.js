// str.search(reg) always looks for the first match
let str = "A drop of ink may make a million think"; 
console.log( str.search( /a/i ) ); // 0 (the first position)


// str.match(reg), no "g" flag
str = "Fame is the thirst of youth";
let result = str.match(/fame/i);
console.log(result); // ["Fame", index: 0, input: "Fame is the thirst of youth"]
str = "JavaScript is a programming language";
result = str.match(/JAVA(SCRIPT)/i);
console.log(result); // ["JavaScript", "Script", index: 0, input: "JavaScript is a programming language"]


// str.match(reg) with "g" flag
str = "HO-Ho-ho!";
result = str.match( /h(o)/ig );
console.log(result); // ["HO", "Ho", "ho"]


// str.split(regexp|substr, limit)
console.log("AbaBABaab".split(/b/i)); // ["A", "a", "A", "aa", ""]


// str.replace(str|reg, str|func)
console.log("AbaBABaab".replace(/b/ig, "-")); // A-a-A-aa-
/*
$$	"$"
$&	the whole match
$`	a part of the string before the match
$'	a part of the string after the match
$n	if n is a 1-2 digit number, then it means the contents of n-th parentheses counting fro left to right
*/
console.log("AbAb".replace(/b/g, "[$&]")); // A[b]A[b]
str = "John Smith";
console.log(str.replace(/(John) (Smith)/, '$2, $1')) // Smith, John
str = "One is Two is Not ONE is Not three is Not one."
str.replace(/o(ne)/ig, function() {
	console.log(arguments); // 打印了三次
	/*
		["One", "ne", 0, "One is Two is Not ONE is Not three is Not one." ...]
		["ONE", "NE", 18, "One is Two is Not ONE is Not three is Not one." ...]
		["one", "ne", 42, "One is Two is Not ONE is Not three is Not one." ...]
	*/
});


// regexp.test(str) the same as str.search(reg) != -1
str = "I love JavaScript";
console.log( /love/i.test(str) ); // true
console.log( /lover/i.test(str) ); // false


// regexp.exec(str)
str = 'A lot about JavaScript at https://javascript.info';
let regexp = /java(script)/ig;
while (result = regexp.exec(str)) {
    console.log(result);
    // ["JavaScript", "Script", index: 12, input: "A lot about JavaScript at https://javascript.info"]
    // ["javascript", "script", index: 34, input: "A lot about JavaScript at https://javascript.info"]
}


// the y flag
str = "I love JavaScript!";
regexp = /javascript/iy;
console.log( regexp.lastIndex ); // 0 (default)
console.log( str.match(regexp) ); // null, not found at position 0

regexp.lastIndex = 7;
console.log( str.match(regexp) ); // ["JavaScript", index: 7, input: "I love JavaScript!"]