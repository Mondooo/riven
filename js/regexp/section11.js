// Alternation (OR) |
/*
gr(a|e)y means exactly the same as gr[ae]y.
gra|ey means “gra” or “ey”.
*/
let reg = /([0-1]\d|2[0-3]):[0-5]\d/g;
console.log("00:00 10:10 23:59 25:99 1:2".match(reg)); // ["00:00", "10:10", "23:59"]

// tasks
reg = /Java(Script)?|PHP|C(\+\+)?/g;
console.log("Java JavaScript PHP C++ C".match(reg)); // Java JavaScript PHP C++ C

reg = /\[(url|quote|b)\][\s\S]*?\[\/\1\]/g;
let str = "..[url][b]http://google.com[/b][/url]..";
console.log( str.match(reg) ); // [url][b]http://google.com[/b][/url]