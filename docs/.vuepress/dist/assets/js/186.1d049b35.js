(window.webpackJsonp = window.webpackJsonp || []).push([
  [186],
  {
    533: function(t, r, e) {
      "use strict";
      e.r(r);
      var a = e(41),
        n = Object(a.a)(
          {},
          function() {
            var t = this,
              r = t.$createElement,
              e = t._self._c || r;
            return e("ContentSlotsDistributor", { attrs: { "slot-key": t.$parent.slotKey } }, [
              e("h1", { attrs: { id: "Basic" } }, [
                e("a", { staticClass: "header-anchor", attrs: { href: "#Basic" } }, [t._v("#")]),
                t._v(" Basic"),
              ]),
              t._v(" "),
              e("h3", { attrs: { id: "variable" } }, [
                e("a", { staticClass: "header-anchor", attrs: { href: "#variable" } }, [t._v("#")]),
                t._v(" Variable"),
              ]),
              t._v(" "),
              e("blockquote", [e("p", [t._v("var vs. const / let")])]),
              t._v(" "),
              e("p", [
                t._v("var: function scope / const, let: block scope"),
                e("br"),
                t._v("\nes06부터는 const를 주로 쓰고, 재할당이 이뤄지는 것에만 let을 사용하자."),
                e("br"),
                t._v("\nconst, let은 호이스팅이 일어나지 않는다."),
                e("br"),
              ]),
              t._v(" "),
              e("p", [
                t._v("cf. "),
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [t._v("호이스팅 개념"), e("OutboundLink")],
                  1
                ),
                e("br"),
                t._v("\ncf. "),
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://hyunseob.github.io/2016/11/21/misunderstanding-about-const/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [t._v("const에 대한 오해"), e("OutboundLink")],
                  1
                ),
              ]),
              t._v(" "),
              e("hr"),
              t._v(" "),
              e("h3", { attrs: { id: "babel" } }, [
                e("a", { staticClass: "header-anchor", attrs: { href: "#babel" } }, [t._v("#")]),
                t._v(" Babel"),
              ]),
              t._v(" "),
              e("blockquote", [e("p", [t._v("babel + babel-polyfill")])]),
              t._v(" "),
              e("p", [
                t._v("babel: javascript compiler"),
                e("br"),
                t._v("\n최신버젼의 문법(es06, es07)을 브라우저가 이해할 수 있는 문법으로 변환해준다."),
                e("br"),
              ]),
              t._v(" "),
              e("p", [
                t._v("babel-polyfill"),
                e("br"),
                t._v(
                  "\n객체(Promise, Map, Set..), 메소드(Array.find, Object.assign..)을 브라우저가 이해할 수 있도록 해준다."
                ),
                e("br"),
              ]),
              t._v(" "),
              e("p", [
                t._v("cf. "),
                e(
                  "a",
                  {
                    attrs: {
                      href:
                        "https://ko.wikipedia.org/wiki/%ED%8F%B4%EB%A6%AC%ED%95%84_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [t._v("폴리필(polyfill)"), e("OutboundLink")],
                  1
                ),
                t._v("\n웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드"),
              ]),
              t._v(" "),
              e("hr"),
              t._v(" "),
              e("h3", { attrs: { id: "빌트인-함수" } }, [
                e("a", { staticClass: "header-anchor", attrs: { href: "#빌트인-함수" } }, [t._v("#")]),
                t._v(" 빌트인 함수"),
              ]),
              t._v(" "),
              e("ul", [
                e("li", [
                  t._v(
                    "toLocaleString\n숫자를 천단위마다 콤마(,)를 찍기위해, 이전에는 정규식을 많이 이용\nData.prototype, Number.prototype 의 메소드\nObject.prototype.toLocaleString() 메서드를 오버라이드 한다."
                  ),
                ]),
              ]),
              t._v(" "),
              e("ul", [
                e("li", [
                  t._v(
                    "String -> Number 형변화\nparseInt||parseFloat: 숫자로 시작하는 문자열은 모두 숫자로 변환 가능\nNumber: 숫자로 구성된 문자열만 숫자로 변환 가능"
                  ),
                ]),
              ]),
              t._v(" "),
              e("hr"),
              t._v(" "),
              e("h3", { attrs: { id: "script-tag" } }, [
                e("a", { staticClass: "header-anchor", attrs: { href: "#script-tag" } }, [t._v("#")]),
                t._v(" "),
                e("code", [t._v("script")]),
                t._v(" tag"),
              ]),
              t._v(" "),
              e("ul", [
                e("li", [
                  e("p", [
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://caniuse.com/#search=script%20defer",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("defer"), e("OutboundLink")],
                      1
                    ),
                    t._v("\nHTML 파서가 종료될(DOM이 로딩이 끝날때) 때까지, 스크립트 실행을 늦춘다."),
                  ]),
                ]),
                t._v(" "),
                e("li", [
                  e("p", [
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://caniuse.com/#search=script%20async",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("async"), e("OutboundLink")],
                      1
                    ),
                    t._v(
                      "\n구글 애널리틱스 스크립트 등으 호출에 사용\nHTML 파싱은 계속 되고 스크립트는 준비되었을 때 실행된다."
                    ),
                  ]),
                ]),
              ]),
              t._v(" "),
              e("hr"),
              t._v(" "),
              e("h5", { attrs: { id: "참고자료" } }, [
                e("a", { staticClass: "header-anchor", attrs: { href: "#참고자료" } }, [t._v("#")]),
                t._v(" 참고자료"),
              ]),
              t._v(" "),
              e("ul", [
                e("li", [
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://fastcampus-js-bootcamp.herokuapp.com/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("Javascript Boot CAMP"), e("OutboundLink")],
                    1
                  ),
                ]),
                t._v(" "),
                e("li", [
                  e(
                    "a",
                    {
                      attrs: {
                        href: "https://joshua1988.github.io/web-development/web-perf/perf-tip-javascript-in-v8/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("Chrome V8 엔진에서 자바스크립트 성능 향상 방법"), e("OutboundLink")],
                    1
                  ),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      r.default = n.exports;
    },
  },
]);
