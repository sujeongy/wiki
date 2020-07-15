# JavaScrpt101

##### # Table of Contents
1. basic syntax type
1. scope(let, const, var 묶어서 설명)
1. 실행컨테스트
1. 클로져 closure
1. 호이스팅
1. [Babel](#babel)
1. use strict
1. SSR vs. CSR(vs.SPA)
1. CORS
1. Promise


### variable
> var vs. const / let

var: function scope / const, let: block scope
es06부터는 const를 주로 쓰고, 재할당이 이뤄지는 것에만 let을 사용하자.
const, let은 호이스팅이 일어나지 않는다.

cf. [호이스팅 개념](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)
cf. [const에 대한 오해](https://hyunseob.github.io/2016/11/21/misunderstanding-about-const/)


### Babel
> babel + babel-polyfill

babel: javascript compiler
최신버젼의 문법(es06, es07)을 브라우저가 이해할 수 있는 문법으로 변환해준다.

babel-polyfill
객체(Promise, Map, Set..), 메소드(Array.find, Object.assign..)을 브라우저가 이해할 수 있도록 해준다.

cf. [폴리필(polyfill)](https://ko.wikipedia.org/wiki/%ED%8F%B4%EB%A6%AC%ED%95%84_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D))
웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드


**[⬆ back to top](#table-of-contents)**

---

### #
