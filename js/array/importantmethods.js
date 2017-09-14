const sourceArr = [1, 3, 2, 4];
let result;

// Array.prototype.every
// 用于检测数组所有元素是否都符合指定条件
result = sourceArr.every(function(currentValue, index, array) {
    if (currentValue > 2) return true;
});
console.log(sourceArr); // [1, 3, 2, 4]
console.log(result); // false 表示并非所有元素都符合指定条件

// Array.prototype.some
// 用于检测数组是否存在元素符合指定条件
result = sourceArr.some(function(currentValue, index, array) {
	if (currentValue * index > 10) return true;
});
console.log(sourceArr); // [1, 3, 2, 4]
console.log(result); // true 表示存在元素都符合指定条件

// Array.prototype.forEach
result = sourceArr.forEach(function(currentValue, index, array) {
	// do something using the arguments
	currentValue *= index;
});
console.log(sourceArr); // [1, 3, 2, 4]
console.log(result); // undefined

// Array.prototype.map
// 基于原有数组返回一个新的数组, 数组元素为回调函数的返回值
result = sourceArr.map(function(currentValue, index, array) {
    return currentValue * index;
});
console.log(sourceArr); // [1, 3, 2, 4]
console.log(result); // [0, 3, 4, 12]

// Array.prototype.reduce
// 遍历数组, 逐渐计算出一个最终值并返回
result = [[1, 2], [4, 3], [8, 8]].reduce(function(accumulator, currentValue, index, array) {
	// accumulator为上一次计算的返回值
	return accumulator.concat(currentValue);
});
console.log(result); // [1, 2, 4, 3, 8, 8]

// Array.prototype.filter
// 筛选出符合条件的元素组成一个新的数组
result = sourceArr.filter(function(currentValue, index, array) {
	return currentValue > 2;
});
console.log(sourceArr); // [1, 3, 2, 4]
console.log(result); // [3, 4]

// for-in for-of
for(const index in sourceArr) {
	console.log(index); // 0 1 2 3
	console.log(sourceArr[index]); // 1 3 2 4
}
for(const value of sourceArr) {
	console.log(value); // 1 3 2 4
}

// Array.prototype.sort
sourceArr.sort();
console.log(sourceArr); // [1, 2, 3, 4]