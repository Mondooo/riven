/*
escaping
Here’s a full list of them: [ \ ^ $ . | ? * + ( ) /
*/
console.log("Chapter 5.1".match(/\d\.\d/)); // ["5.1", index: 8, input: "Chapter 5.1"]
console.log("function g()".match(/g\(\)/g)); // ["g()"]
console.log("s///s".match(/\/\/\//g)); // ["///"]
