let str = "abcfff";
let result, temp;

// String.prototype.includes
result = str.includes("cff", 0);
console.log(result); // true;

// String.prototype.split
result = str.split('');
console.log(result); // ["a", "b", "c", "f", "f", "f"]
result = str.split('f');
console.log(result); // ["abc", "", "", ""]
result = str.split('c');
console.log(result); // ["ab", "fff"]
	// example: removing space from string
temp = "This is  something called string. ";
result = temp.split(/\s*/).join('');
console.log(result); // Thisissomethingcalledstring.
	// example: reverse a string
result = temp.split('').reverse().join('');
console.log(result); //  .gnirts dellac gnihtemos  si sihT

// String.prototype.trim
temp = '   foo ';
result = temp.trim();
console.log(result); // foo

// String.prototype.toLowerCase
temp = 'AbC DefG';
result = temp.toLowerCase();
console.log(temp); // AbC DefG
console.log(result); // abc defg

// String.prototype.substr
result = temp.substr(1, 2);
console.log(result); // bC
result = temp.substr(-2, 3); // NOTICE: the index of the last character is -1
console.log(result); // fG

// String.prototype.substring
result = temp.substring(1, 2);
console.log(result); // b
result = temp.substring(2, 1); // NOTICE: If indexStart is greater than indexEnd, 
                               // then the effect of substring() is as if the two arguments were swapped
console.log(result); // b
result = temp.substring(1, -1); // -1 was changed to 0, then swapped to (0, 1)
console.log(result); // A

// String.prototype.padEnd
temp = 'abc';
result = temp.padEnd(10, "00000001111111");
console.log(result); // abc0000000
result = temp.padEnd(10, "AB");
console.log(result); // abcABABABA

// String.prototype.endsWith
temp = 'klj Tlkj Abns ';
result = temp.endsWith('ns ');
console.log(result); // true
result = temp.endsWith('kj', 8);
console.log(result); // true

// example: change initials to uppercase
temp = "what's going  on in rOOm 310?";
result = temp.toLowerCase().split(/\s+/).map(function(currentValue, index, array) {
	return currentValue.substr(0,1).toUpperCase() + currentValue.substring(1);
}).join(" ");
console.log(result); // What's Going On In Room 310?