const sparse = [, 2, , 4]

console.log(sparse.length); // 4
console.log(sparse);    // [ <1 empty item>, 2, <1 empty item>, 4 ]

// 인덱스가 0, 2인 요소가 존재하지 않는다.
console.log(Object.getOwnPropertyDescriptors(sparse))
/*
{
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '3': { value: 4, writable: true, enumerable: true, configurable: true },
  length: { value: 4, writable: true, enumerable: false, configurable: false }
}
*/