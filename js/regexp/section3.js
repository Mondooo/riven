/*
\d ("d" is from "digit")
A digit: a character from 0 to 9.

\s ("s" is from "space")
A space symbol: that includes spaces, tabs, newlines.

\w ("w" is from "word")
A "wordly" character: either a letter of English alphabet or a digit or an underscore. Non-english letters (like cyrillic or hindi) do not belong to \w.

\b ("b" is from "boundry")
a boundary between characters.
*/
console.log("I love HTML5!".match(/\s\w\w\w\w\d!/)); // [" HTML5!", index: 6, input: "I love HTML5!"]
console.log("Hello, Java!".match(/\bJava\b/)); // ["Java", index: 7, input: "Hello, Java!"]
console.log("Hello, Java_".match(/\bJava\b/)); // null
console.log("Hello, JavaScript!".match(/\bJava\b/)); // null
console.log("1 23 456 78".match(/\b\d\d\b/)); // ["23", index: 2, input: "1 23 456 78"]

/*
\D
Non-digit: any character except \d, for instance a letter.

\S
Non-space: any character except \s, for instance a letter.

\W
Non-wordly character: anything but \w.

\B
Non-boundary: a test reverse to \b.
*/
console.log("+7(903)-123-45-67".replace(/\D/g, "")); // 79031234567

/*
.
any character
*/
console.log("CS4".match(/CS.4/)); // null
console.log("CS4".match(/CS./)); // ["CS4", index: 0, input: "CS4"]

str = "Breakfast at 09:00 in the room 123:456.";
console.log(str.match(/\b\d\d:\d\d\b/g)); // ["09:00"]