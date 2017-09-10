/*
借助构造函数继承, 又称伪造对象或经典继承
步骤:
	1. 子类call超类构造函数
特点:
	1. 跟SuperType毛线关系都没有, 就是当普通函数使用了一下
优点:
	1. 可传递参数
缺点:
	1. 方法都在都在构造函数定义, 函数复用无从谈起
	2. 超类型原型中定义的方法对子类不可见
	3. 类型判断会有问题
*/

function SuperType(name) {
	this.colors = ['red', 'blue', 'green'];
	this.name = name;
}

function SubType(name) {
	SuperType.call(this, name);
}

//~ test
const instance1 = new SubType("John");
instance1.colors.push('black');
console.log(instance1.colors); // ["red", "blue", "green", "black"]
console.log(instance1.name); // John

const instance2 = new SubType("Sam");
console.log(instance2.colors); // ["red", "blue", "green"]
console.log(instance2.name); // Sam

console.log(instance1 instanceof SubType); // true
console.log(instance1 instanceof SuperType); // false

console.log(SubType.prototype.isPrototypeOf(instance1)); // true
console.log(SuperType.prototype.isPrototypeOf(instance1)); // false
console.log(Object.prototype.isPrototypeOf(instance1)); // true

/* this is the instance1 above

colors: (3) ["red", "blue", "green"]
name: "John"
__proto__: Object
	constructor: ƒ SubType(name)
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