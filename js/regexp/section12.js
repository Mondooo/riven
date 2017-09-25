// tasks
let reg = /^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}/;
console.log( reg.test('01:32:54:67:89:AB') ); // true
console.log( reg.test('0132546789AB') ); // false (no colons)
console.log( reg.test('01:32:54:67:89') ); // false (5 numbers, must be 6)
console.log( reg.test('01:32:54:67:89:ZZ') ) // false (ZZ ad the end)