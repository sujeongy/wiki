# Bacic

### Variable

> var vs. const / let

var: function scope / const, let: block scope<br>
es06부터는 const를 주로 쓰고, 재할당이 이뤄지는 것에만 let을 사용하자.<br>
const, let은 호이스팅이 일어나지 않는다.<br>

cf. [호이스팅 개념](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)<br>
cf. [const에 대한 오해](https://hyunseob.github.io/2016/11/21/misunderstanding-about-const/)

---

### Babel

> babel + babel-polyfill

babel: javascript compiler<br>
최신버젼의 문법(es06, es07)을 브라우저가 이해할 수 있는 문법으로 변환해준다.<br>

babel-polyfill<br>
객체(Promise, Map, Set..), 메소드(Array.find, Object.assign..)을 브라우저가 이해할 수 있도록 해준다.<br>

cf. [폴리필(polyfill)](<https://ko.wikipedia.org/wiki/%ED%8F%B4%EB%A6%AC%ED%95%84_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)>)
웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드

---

### 빌트인 함수

- toLocaleString
  숫자를 천단위마다 콤마(,)를 찍기위해, 이전에는 정규식을 많이 이용
  Data.prototype, Number.prototype 의 메소드
  Object.prototype.toLocaleString() 메서드를 오버라이드 한다.

* String -> Number 형변화
  parseInt||parseFloat: 숫자로 시작하는 문자열은 모두 숫자로 변환 가능
  Number: 숫자로 구성된 문자열만 숫자로 변환 가능

---

### `script` tag

- [defer](https://caniuse.com/#search=script%20defer)
  HTML 파서가 종료될(DOM이 로딩이 끝날때) 때까지, 스크립트 실행을 늦춘다.

- [async](https://caniuse.com/#search=script%20async)
  구글 애널리틱스 스크립트 등으 호출에 사용
  HTML 파싱은 계속 되고 스크립트는 준비되었을 때 실행된다.

---

##### 참고자료

- [Javascript Boot CAMP](https://fastcampus-js-bootcamp.herokuapp.com/)
- [Chrome V8 엔진에서 자바스크립트 성능 향상 방법](https://joshua1988.github.io/web-development/web-perf/perf-tip-javascript-in-v8/)
