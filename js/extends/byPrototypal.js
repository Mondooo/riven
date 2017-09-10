/*
原型式继承
特点:
	1. 必须有一个对象可以作为另一个对象的基础
缺点: 
	1. 与原型链继承类似
*/
function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

//~ test
function SuperType() {
	this.name = "Nicholas";
	this.color = ["red", "blue"];
}
SuperType.prototype.sayName = function() {
	console.log(this.name);
}
const superIns = new SuperType();
const subIns = object(superIns);

subIns.sayName(); // Nicholas
console.log(subIns instanceof SuperType); // true
console.log(subIns instanceof Object); // true

console.log(Object.prototype.isPrototypeOf(subIns)); // true
console.log(SuperType.prototype.isPrototypeOf(subIns)); // true

/* this is the subIns above

__proto__: SuperType
	color: (2) ["red", "blue"]
	name: "Nicholas"
	__proto__: Object
		sayName: ƒ ()
		constructor: ƒ SuperType()
		__proto__: Object
			constructor: ƒ Object()
			hasOwnProperty: ƒ hasOwnProperty()
			isPrototypeOf: ƒ isPrototypeOf()
			propertyIsEnumerable: ƒ propertyIsEnumerable()
			toLocaleString: ƒ toLocaleString()
			toString: ƒ toString()
			valueOf: ƒ valueOf()
			__defineGetter__: ƒ __defineGetter__()
			__defineSetter__: ƒ __defineSetter__()
			__lookupGetter__: ƒ __lookupGetter__()
			__lookupSetter__: ƒ __lookupSetter__()
			get __proto__: ƒ __proto__()
			set __proto__: ƒ __proto__()
*/