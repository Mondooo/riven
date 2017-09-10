/*
一定要专一, 不要见异思迁
寄生式组合继承
解决组合式继承中的以下缺点:
	1. 超类构造函数重复调用
	2. 子类原型中存在多余重复属性
*/
function SuperType(name) {
	this.name = name; // 这里的语句用于初始化SubType的name属性, 对于SuperType没有任何意义
	this.color = ['red', 'blue', 'green'];
	console.log("invoked!");
}

SuperType.prototype.sayName = function() {
	console.log(this.name);
}

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

function inheritPrototype(subType, superType) {
	const prototype = superType.prototype;
	prototype.constructor = subType;
	subType.prototype = prototype;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
	console.log(this.age);
}

// ~test
const instance1 = new SubType('Nicholas', 29);
instance1.color.push('black');
console.log(instance1.color); // ["red", "blue", "green", "black"]
instance1.sayName(); // Nicholas
instance1.sayAge(); // 29

const instance2 = new SubType('Greg', 27);
console.log(instance2.color); // ["red", "blue", "green"]
instance2.sayName(); // Greg
instance2.sayAge(); // 27

console.log(instance1 instanceof SubType); // true
console.log(instance1 instanceof SuperType); // true

console.log(SubType.prototype.isPrototypeOf(instance1)); // true
console.log(SuperType.prototype.isPrototypeOf(instance1)); // true
console.log(Object.prototype.isPrototypeOf(instance1)); // true

/* this is the instance1 above

age: 29
color: (3) ["red", "blue", "green"]
name: "Nicholas"
__proto__: Object
	constructor: ƒ SubType(name, age)
	sayAge: ƒ ()
	sayName: ƒ ()
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