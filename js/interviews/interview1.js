// 1. what the result will be?
//    var a = 100;
//    function fn() {
//        console.log(a); // undefined
//        var a = 200;
//        console.log(a); // 200
//    }
//    fn();
//    console.log(a); // 100
//    var a;
//    console.log(a); // 100
//    var a = 300;
//    console.log(a); // 300
// js会忽略重复变量声明, 但不会忽略后续的赋值


// 2. what the result will be?
//    var obj1 = {name: 'obj1', fn: function() {
//        console.log(this.name);
//    }};
//    var obj2 = {name: 'obj2'};
//    var obj3 = {name: 'obj3'};
//    obj1.fn(); // "obj1"
//    var newFn = obj1.fn;
//    newFn(); // "" 本来应该输出undefined, 但是刚好window有个属性也叫name, 值为"", 所以...
//    newFn.call(obj2); // "obj2"
//    obj3.fn = newFn;
//    obj3.fn(); // "obj3"

// 3. 一个数组 par 中存放有多个人员的信息, 每个人员的信息由年龄 age 和姓名 name 组成, 
//    如{age: 2, name: 'xx'}. 请写一段 JS 程序, 对这个数组按年龄从小到大进行排序.
//    var testArr = [
//        {age: 22, name: 'John'},
//        {age: 17, name: 'Pitt'},
//        {age: 30, name: 'Micro'}
//    ];
//    testArr.sort(function(a, b) {
//        return a.age - b.age > 0;
//    });
//    console.log(testArr);
// 记住: 升序a-b>0

// 4. 有字符串 var = 'abc345efgabcab', 请写出 3 条 JS 语句分别实现如下 3 个功能: 
//    1）去掉字符串中的a、b、c 字符, 形成结果: '345efg'
//    2）将字符串中的数字用中括号括起来, 形成结果: 'abc3[5]efgabcab'
//    3）将字符串中的每个数字的值分别乘以 2, 形成结果: 'abc6810efgabcab'
//    var test = 'abc345efgabcab';
//    var result;
//    result = test.replace(/[a-c]/g, '');
//    result = test.replace(/(\d)/g, '[$1]');
//    result = test.replace(/(\d)/g, function(num) { return num * 2;});
// 额, 是时候学一下js正则表达式了

// 5. 请写一段JS程序类, 定义一个列表类List, 该类包含两个成员: 
//    属性 length(表示列表中的元素个数)和方法 add (像列表中添加元素), 
//    其中要求构造函数和 add 方法的参数为动态参数.
//    function List() {
//        this._data = [];
// 	      for(var ele of arguments) {
//            this._data.push(ele);
//        }
// 	      this.length = this._data.length;
//    }
//    List.prototype.add = function() {
// 	      for(var ele of arguments) {
// 	          this._data.push(ele);
// 	      }
// 	      this.length = this._data.length;
//    }
//    var list = new List('a', 1, [1, 3]);
//    list.add({a: 'b'});

// 6. 请使用闭包的方式, 写一段 JS 程序实现如下功能: 函数每调用一次则该函数的返回值加 1.
//    function A() {
// 	      var count = 0;
// 	      return function() {
// 	         return count++;
// 	      }
//    }
//    var fun = A();
//    console.log(fun()); // 0
//    console.log(fun()); // 1
//    console.log(fun()); // 2

// 7. what the result will be?
//    function Parent() {
//        this.a = 1;
//        this.b = [1, 2, this.a]; // 一次性初始化
//        this.c = {demo: 5};
//        this.show = function() {
//            document.write(this.a + ' ' + this.c.demo + ':' + this.b + '<br/>')
//        }
//    }
//    function Child() {
//        this.a = 2;
//        this.change = function() {
//            this.b.push(this.a);
//            this.a = this.b.length;
//            this.c.demo = this.a++;
//        }
//    }
//    Child.prototype = new Parent();
//    var parent = new Parent();
//    var child1 = new Child();
//    var child2 = new Child();
//    child1.a = 11;
//    child2.a = 12;
//    parent.show(); // 1 5:[1,2,1]
//    child1.show(); // 11 5:[1,2,1]
//    child2.show(); // 12 5:[1,2,1]
//    child1.change();
//    child2.change();
//    parent.show(); // 1 5:[1,2,1]
//    child1.show(); // 5 5:[1,2,1,11,12]
//    child2.show(); // 6 6:[1,2,1,11,12]

// 8. 请用 js 程序实现二分算法.
//    function binaryFind(arr, val, start, end) {
//        start = start || 0;
//        end = end || arr.length - 1;
//        if (start >= end) return -1;
//        const mid = Math.floor((start + end) / 2);
//        if (arr[mid] === val) return mid;
//        if (arr[mid] < val) return arguments.callee(this, arr, val, start, mid);
//        if (arr[mid] > val) return arguments.callee(this, arr, val, mid, end);
//    }
//    console.log(binaryFind([1,2,3,4,5,6], 7)); // -1

// 9. 提取一个 url 所使用的协议类型如 http ftp host params等
//    let url = "https://mail.tongji.edu.cn/coremail/XT3/index.jsp?sid=DAsnlgLLymLZQgqlXiLLLhqvwocxRHhb#/md=folder&_suid=369";
//    let reg = /^(\w+):\/\/([\w.]+?)\/.*?\?(\w+?=[^&]+)(?:&(\w+?=[^&]+))*/;
//    console.log(url.match(reg));
// 10. 概念: MVC XSS CSRF hash碰撞 前端优化 跨域方法