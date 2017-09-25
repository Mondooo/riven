/*
The multiline mode is enabled by the flag /.../m.
It only affects the behavior of ^ and $.
*/

let str = `1st place: Winnie
2nd place: Piglet
33rd place: Eeyore`;

console.log( str.match(/^\d+/gm) ); // 1, 2, 33