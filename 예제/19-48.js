function Person(name){
    this.name = name;
}

const me = new Person('Lee');

const parent = {};

me.__proto__ = parent;
Person.prototype = parent;

console.log(me instanceof Person);
console.log(me instanceof Object);