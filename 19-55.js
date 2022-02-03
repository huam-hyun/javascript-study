const myProto = { x: 10 };

// 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj = {
    y: 20,
    __proto__: myProto
};

console.log(obj.x, obj.y);
console.log(Object.getPrototypeOf(obj) === myProto);