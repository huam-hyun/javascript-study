// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null);   // true
// Object.prototype을 상속받지 못한다.
// console.log(obj.toString());

obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);   // true

obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true }
});

console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

const myProto = { x: 10 };

// 임의의 객체를 직접 상속밭는다.
obj = Object.create(myProto);
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto);

function Person(name){
    this.name = name;
}
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);