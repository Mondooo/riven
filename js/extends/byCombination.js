/*
组合继承, 又称伪经典继承, 是指将原型链和借用构造函数的技术组合到一块
步骤:
	1. 子类的原型等于父类的一个实例
	2. 子类call超类构造函数
特点:
	1. 超类方法体内的东西都是为了初始化子类用的, 对于超类本身没有任何意义
	2. 子类的原型等于父类的一个实例, 为的是函数复用
缺点:
	1. 会调用两次超类构造函数
	2. 子类原型中存在多余的重复的属性
SuperType即作为普通函数被使用, 又作为prototype的构造函数被使用
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

SubType.prototype = new SuperType(); // 因为这时候name未初始化, 所以prototype中的name = undefined
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
	console.log(this.age);
}

//~ test
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
__proto__: SuperType
	color: (3) ["red", "blue", "green"]                    // 这里属性多余
	constructor: ƒ SubType(name, age)
	name: undefined                                        // 这里属性多余
	sayAge: ƒ ()
	__proto__: Object
		sayName: ƒ ()
		constructor: ƒ SuperType(name)
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