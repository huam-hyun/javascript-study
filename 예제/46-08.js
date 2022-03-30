function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = genFunc();

// 처음 next가 호출되면 첫 번째 yield 표현식까지 실행되고 일시 중지된다.
// next 메서드는 이터레이터 리절트 객체를 반환한다.
// value 프로퍼티에 첫 yield 표현식에서 yield된 값 1이 할당된다.
// done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 false가 할당된다.
console.log(generator.next());

// 다음 next가 호출되면 두 번째 yield 표현식까지 실행되고 일시 중지된다.
console.log(generator.next());

// 다음 next가 호출되면 세 번째 yield 표현식까지 실행되고 일시 중지된다.
console.log(generator.next());

// 다음 next가 호출되면 남은 yield 표현식이 없으므로 제너레이터 함수의 마지막까지 실행한다.
// value 프로퍼티에는 undefined가 할당된다.
// done 프로퍼티에는 true가 할당된다.
console.log(generator.next());