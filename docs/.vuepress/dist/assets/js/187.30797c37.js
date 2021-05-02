(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{534:function(n,e,t){"use strict";t.r(e);var a=t(41),s=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"clean-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-code"}},[n._v("#")]),n._v(" Clean Code")]),n._v(" "),t("h2",{attrs:{id:"함수-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#함수-function"}},[n._v("#")]),n._v(" # 함수(Function)")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("매개변수(parameter): 2개 이하, 없는 경우가 제일 좋다.")])]),n._v(" "),t("li",[t("p",[n._v("한 함수에 한가지 행동만 수행(순수 함수) -> *테스트에 용이하게 함수를 분해")])]),n._v(" "),t("li",[t("p",[n._v("중복된 코드는 한 함수로 묶기")])]),n._v(" "),t("li",[t("p",[t("strong",[n._v("매개변수로 플래그(flag) 사용 피하기")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("//bad\nfunction createFile(name, flag) {\n    if(flag) {\n        //..\n        fs.create(`./test/${name}`);\n    } else {\n        //..\n        fs.create(name);\n    }\n}\n\n//good\nfunction createFile(name) {\n    fs.create(name);\n}\nfunction createTempFile(name) {\n    fs.create(`./test/${name}`);\n}\n")])])])]),n._v(" "),t("li",[t("p",[t("strong",[n._v("부작용(side effect) 피하기")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("//bad\nlet name = 'Yoo Sujeong';\n\nfunction splitIntoFirstandLastName() {\n    name = name.split(' ');\n}\n\nsplitIntoFirstandLastName();\n\nconsole.log(name); //['Yoo', 'Sujeong']\n\n//good\nfunction splitIntoFirstandLastName() {\n    name = name.split(' ');\n}\n\nlet name = 'Yoo Sujeong';\nlet newName = splitIntoFirstandLastName(name);\n\nconsole.log(name); //'Yoo Sujeong'\nconsole.log(newName); //['Yoo', 'Sujeong']\n")])])])]),n._v(" "),t("li",[t("p",[n._v("전역함수 변경 피하기")])]),n._v(" "),t("li",[t("p",[t("strong",[n._v("조건문 캡슐화")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("//bad\nif(obj.state == 'working' && someFunc(list)) {\n    //...\n}\n\n//good\nfunction checkCodition(obj, list) {\n    return obj.state == 'working' && someFunc(list);\n}\nif(checkCodition(objInstance, listInstance)) {\n    //...\n}\n")])])])]),n._v(" "),t("li",[t("p",[n._v("**다형성(객제지향 vs. 절차형)")])])]),n._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[n._v("#")]),n._v(" # References")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.slideshare.net/jrogue/2020-6-20?ref=https://jhrogue.blogspot.com/2020/06/b-2020-6-20.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("2020년 6월 20일 개발 이야기 특집(클린코드)"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);