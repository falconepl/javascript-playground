var Foo = function () {
    this.bar = 'bar';
};

Foo.prototype.baz = function () {
    this.qux = 'qux';
};

var myFoo = new Foo();

console.log('*.prototype:');
console.log(Function.prototype);
console.log(Array.prototype);
console.log(Object.prototype);

console.log('*.constructor:');
console.log(Function.constructor);
console.log(Array.constructor);
console.log(Object.constructor);

console.log('*.__proto__:');
console.log(Function.__proto__);
console.log(Array.__proto__);
console.log(Object.__proto__);

console.log('*.prototype.__proto__:');
console.log(Function.prototype.__proto__);
console.log(Array.prototype.__proto__);
console.log(Object.prototype.__proto__);

console.log('for myFoo:');
console.log(myFoo.prototype); // not available (only for constructors)
console.log(myFoo.constructor);
console.log(myFoo.__proto__);
// console.log(myFoo.prototype.__proto__); - error
