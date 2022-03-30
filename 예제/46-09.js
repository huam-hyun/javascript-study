function* genFunc(){
    // 처음 next 메서드를 호출하면 첫 번째 yield까지 실행되고 일시 중지된다.
    // 이때 yield된 값 1은 x가 아니라 이터레이터 리절트 객체의 value 프로퍼티에 할당된다.
    // x 변수에는 아직 아무것도 할당되지 않았다. x 변수의 값은 next 메서드가 두 번째 호출될 때 결정된다.
    const x = yield 1;
    
    // 두 번째 next 메서드를 호출할 때 전달한 인수 10은 첫 번째 yield 표현식을 할당받는 x 변수에 할당된다.
    // 그렇기에 const x = yield 1;은 두 번째 next가 호출될 때 완료된다.
    const y = yield (x + 10);
    
    // 세 번째 next 메서드를 호출하면 yield가 없기 때문에 함수 끝까지 실행된다.
    // 제너레이터 함수의 반환값 x + y는 value 프로퍼티에 할당된다.
    // 일반적으로 제너레이터의 반환값은 의미가 없기 때문에 return은 종료의 의미로만 사용해야 한다.
    return x + y;
}

const generator = genFunc(0);

let res = generator.next();
console.log(res);

res = generator.next(10);
console.log(res);

res = generator.next(20);
console.log(res);