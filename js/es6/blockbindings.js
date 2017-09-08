/*
* use const by default and only use let when you know a variable’s value needs to change. 
* The rationale is that most variables should not change their value after initialization 
* because unexpected value changes are a SOURCE OF BUGS. 
* This idea has a significant amount of traction and is worth exploring in your code as you adopt ECMAScript 6.
*/
function getA(condition) {
	console.log(a); // undefined because variable [a] is hoisted due to var declaration
	console.log(notexist); // ReferenceError: notexist is not defined
	if (condition) {
		var a = "blue";
		return a;
	} else {
		// a exists here with a value of undefined
		return null;
	}
}

function getB(condition) {
	if (condition) {
		let b = "blue";
		return b;
	} else {
		console.log(b) // ReferenceError: b is not defined
		return null;
	}
}

function constVariable() {
	console.log(c); // ReferenceError: c is not defined. so no hoisting
	const c = 30;
	// const name; // SyntaxError: Missing initializer in const declaration
}

function inTDZ() {
	console.log(typeof d); // ReferenceError: d is not defined
	/*
    * this zone is called TDZ of variable d
	*/
	let d = "blue";
}

function notInTDZ() {
	console.log(typeof e); // undefined, e isn't in the TDZ
	if (true) {
		let e = "blue";
	}
}

function letInForLoop() {
	for (let i = 0; i < 10; i++) {
		
	}
	console.log(i); // ReferenceError: i is not defined
}

function funcInLoop() {
	var funcs = [];
	for (let i = 0; i < 10; i++) {
		funcs.push(function() {
			console.log(i);
		});
	}
	funcs.forEach(function(func) {
		func();
	}); // 0 1 2 3 4 5 6 7 8 9
}

function globalBlockBindings() {
	/* If you instead use let or const in the global scope, 
	*  a NEW BINDING is created in the global scope but no property is added to the global object
	*/
	let RegExp = "Hello";
	console.log(RegExp);
	console.log(global.RegExp === RegExp);

	const ncz = "Hi";
	console.log(ncz);
	console.log(ncz in global);
}