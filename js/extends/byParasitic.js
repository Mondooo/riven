/*
寄生式继承
*/
function createAnother(original) {
	var clone = Object.create(original);
	clone.sayHi = function() {
		console.log("hi");
	};
	return clone;
}

// ~test
function SuperType() {
	this.name = "Nicholas";
	this.color = ["red", "blue"];
}
SuperType.prototype.sayName = function() {
	console.log(this.name);
}
const superIns = new SuperType();
const subIns = createAnother(superIns);

subIns.sayName(); // Nicholas
subIns.sayHi(); // hi
console.log(subIns instanceof SuperType); // true
console.log(subIns instanceof Object); // true

console.log(Object.prototype.isPrototypeOf(subIns)); // true
console.log(SuperType.prototype.isPrototypeOf(subIns)); // true

/* this is the subIns above

sayHi: ƒ ()
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