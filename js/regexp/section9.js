/*
1. 分组
2. 获取
*/
console.log("Gogogo now!".match(/(?:go)+/i)); // ["Gogogo", index: 0, input: "Gogogo now!"]

let str = '<h1>Hello, world!</h1>';
let reg = /<(.*?)>/g;
let match;
while(match = reg.exec(str)) {
	console.log(match);
	// ["<h1>", "h1", index: 0, input: "<h1>Hello, world!</h1>"]
	// ["</h1>", "/h1", index: 17, input: "<h1>Hello, world!</h1>"]
}

str = '<span class="my">';
reg = /<(([a-z]+)\s*([^>]*))>/;
let result = str.match(reg);
console.log(result); // ["<span class="my">", "span class="my"", "span", "class="my"", index: 0, input: "<span class="my">"]

match = 'a'.match(/a(z)?(c)?/);
console.log(match); // ["a", undefined, undefined, index: 0, input: "a"]

// tasks
reg = /#([0-9a-z]{3}){1,2}\b/gi;
str = "color: #3f3; background-color: #AA00ef; and: #abcd";
console.log( str.match(reg) ); // ["#3f3", "#AA00ef"]

reg = /\d+(\.\d+)?/g;
str = "-1.5 0 2 -123.4.";
console.log( str.match(reg) ); // ["1.5", "0", "2", "123.4"]

function parse(str) {
	let reg = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
	let result = str.match(reg);
	result.shift();
	return result;
}
let [a, op, b] = parse("1.2 * 3.4");
console.log(a);
console.log(op);
console.log(b);