(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{389:function(t,e,a){"use strict";a.r(e);var s=a(41),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[t._v("#")]),t._v(" content-type")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://npmjs.org/package/content-type",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/content-type.svg",alt:"NPM Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://npmjs.org/package/content-type",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/content-type.svg",alt:"NPM Downloads"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"http://nodejs.org/download/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/node/v/content-type.svg",alt:"Node.js Version"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/jshttp/content-type",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/travis/jshttp/content-type/master.svg",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/r/jshttp/content-type",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/content-type/master.svg",alt:"Test Coverage"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Create and parse HTTP Content-Type header according to RFC 7231")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" content-type\n")])])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" contentType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"contenttype-parse-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contenttype-parse-string"}},[t._v("#")]),t._v(" contentType.parse(string)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/svg+xml; charset=utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Parse a content type string. This will return an object with the following\nproperties (examples are shown for the string "),a("code",[t._v("'image/svg+xml; charset=utf-8'")]),t._v("):")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("type")]),t._v(": The media type (the type and subtype, always lower case).\nExample: "),a("code",[t._v("'image/svg+xml'")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("parameters")]),t._v(": An object of the parameters in the media type (name of parameter\nalways lower case). Example: "),a("code",[t._v("{charset: 'utf-8'}")])])])]),t._v(" "),a("p",[t._v("Throws a "),a("code",[t._v("TypeError")]),t._v(" if the string is missing or invalid.")]),t._v(" "),a("h3",{attrs:{id:"contenttype-parse-req"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contenttype-parse-req"}},[t._v("#")]),t._v(" contentType.parse(req)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Parse the "),a("code",[t._v("content-type")]),t._v(" header from the given "),a("code",[t._v("req")]),t._v(". Short-cut for\n"),a("code",[t._v("contentType.parse(req.headers['content-type'])")]),t._v(".")]),t._v(" "),a("p",[t._v("Throws a "),a("code",[t._v("TypeError")]),t._v(" if the "),a("code",[t._v("Content-Type")]),t._v(" header is missing or invalid.")]),t._v(" "),a("h3",{attrs:{id:"contenttype-parse-res"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contenttype-parse-res"}},[t._v("#")]),t._v(" contentType.parse(res)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Parse the "),a("code",[t._v("content-type")]),t._v(" header set on the given "),a("code",[t._v("res")]),t._v(". Short-cut for\n"),a("code",[t._v("contentType.parse(res.getHeader('content-type'))")]),t._v(".")]),t._v(" "),a("p",[t._v("Throws a "),a("code",[t._v("TypeError")]),t._v(" if the "),a("code",[t._v("Content-Type")]),t._v(" header is missing or invalid.")]),t._v(" "),a("h3",{attrs:{id:"contenttype-format-obj"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contenttype-format-obj"}},[t._v("#")]),t._v(" contentType.format(obj)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contentType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/svg+xml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Format an object into a content type string. This will return a string of the\ncontent type for the given object with the following properties (examples are\nshown that produce the string "),a("code",[t._v("'image/svg+xml; charset=utf-8'")]),t._v("):")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("type")]),t._v(": The media type (will be lower-cased). Example: "),a("code",[t._v("'image/svg+xml'")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("parameters")]),t._v(": An object of the parameters in the media type (name of the\nparameter will be lower-cased). Example: "),a("code",[t._v("{charset: 'utf-8'}")])])])]),t._v(" "),a("p",[t._v("Throws a "),a("code",[t._v("TypeError")]),t._v(" if the object contains an invalid type or parameter names.")]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[a("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);e.default=r.exports}}]);