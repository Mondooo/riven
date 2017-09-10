/* 
借助原型链实现继承
步骤:
	1. 子类的原型等于父类的一个实例
优点:
	1. 函数复用
缺点:
	1. 引用类型的原型属性会被所有实例共享
	2. 在创建子类型的实例时, 无法向超类型的构造函数中传递参数(?????)
*/
function SuperType() {
	this.property = true;
	this.sharedValue = [];
}

SuperType.prototype.getSuperValue = function() {
	return this.property;
};

function SubType() {
	this.subproperty = false;
}

SubType.prototype = new SuperType(); // 使用这种方式会丢掉SubType.prototype.constructor(原来是指向SubType构造函数的, 默认有的)
                                     // 所有的子类实例都继承自同一个对象, 共享其引用类型变量
SubType.prototype.constructor = SubType;
SubType.prototype.getSubValue = function() {
	return this.subproperty;
};

//~ test
const instance = new SubType();
console.log(instance instanceof Object); // true
console.log(instance instanceof SuperType); // true
console.log(instance instanceof SubType); // true

console.log(Object.prototype.isPrototypeOf(instance)); // true
console.log(SuperType.prototype.isPrototypeOf(instance)); // true
console.log(SubType.prototype.isPrototypeOf(instance)); // true

/* this is the instance above

subproperty: false
__proto__: SuperType
	getSubValue: ƒ ()
	property: true
	__proto__: Object
		getSuperValue: ƒ ()
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