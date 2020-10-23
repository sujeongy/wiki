# JavaScrpt101

##### # Table of Contents
1. basic syntax type
1. [scope(let, const, var 묶어서 설명)](#Variable)
1. 실행컨텍스트
1. 클로져 closure
1. 호이스팅
1. [Babel](#babel)
1. use strict
1. SSR vs. CSR(vs.SPA)
1. CORS
1. Promise


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

cf. [폴리필(polyfill)](https://ko.wikipedia.org/wiki/%ED%8F%B4%EB%A6%AC%ED%95%84_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D))
웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드


**[⬆ back to top](#table-of-contents)**

---

### # 빌트인 함수

- toLocaleString
    숫자를 천단위마다 콤마(,)를 찍기위해, 이전에는 정규식을 많이 이용
    Data.prototype, Number.prototype 의 메소드
    Object.prototype.toLocaleString() 메서드를 오버라이드 한다.


- String -> Number 형변화
    parseInt||parseFloat: 숫자로 시작하는 문자열은 모두 숫자로 변환 가능
    Number: 숫자로 구성된 문자열만 숫자로 변환 가능



cf. [HTML／CSS／JS/JavaScript
[JavaScript/자바스크립트] 숫자 천 단위마다 콤마 찍는 내장 함수(toLocaleString)](https://this-programmer.com/entry/JavaScript%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%88%AB%EC%9E%90-%EC%B2%9C-%EB%8B%A8%EC%9C%84%EB%A7%88%EB%8B%A4-%EC%BD%A4%EB%A7%88-%EC%B0%8D%EB%8A%94-%EB%82%B4%EC%9E%A5-%ED%95%A8%EC%88%98toLocaleString)
cf. [parseInt()vs.Number()](https://jamong-icetea.tistory.com/14)

---

### # <script>
- [<script defer>](https://caniuse.com/#search=script%20defer)
    HTML 파서가 종료될(DOM이 로딩이 끝날때) 때까지, 스크립트 실행을 늦춘다.

- [<script async>](https://caniuse.com/#search=script%20async)
    구글 애널리틱스 스크립트 등으 호출에 사용
    HTML 파싱은 계속 되고 스크립트는 준비되었을 때 실행된다.


cf. [Asynchronous and deferred JS execution explained](https://peter.sh/experiments/asynchronous-and-deferred-javascript-execution-explained/)

---

##### 참고자료
- [Javascript Boot CAMP](https://fastcampus-js-bootcamp.herokuapp.com/)
