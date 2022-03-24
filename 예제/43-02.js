const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis']
};

const prettyJson = JSON.stringify(obj);
console.log(typeof prettyJson, prettyJson);

// replacer 함수. 값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value){
    return typeof value === 'number' ? undefined: value;
}

// JSON.stringify 메서드에 두 번째 인수로 replacer 함수를 전달한다.
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);