function add(x, y){
    return x + y;
}

let inst = new add();

// 반환문이 객체가 아니니 빈 객체가 생성되어 반환된다.
console.log(inst);

function createUser(name, role){
    return {name, role};
}

inst = new createUser('Lee', 'admin');

console.log(inst);