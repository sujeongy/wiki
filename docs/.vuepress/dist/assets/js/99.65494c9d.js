(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{447:function(t,s,a){"use strict";a.r(s);var e=a(41),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime"}},[t._v("#")]),t._v(" mime")]),t._v(" "),a("p",[t._v("Comprehensive MIME type mapping API based on mime-db module.")]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("Install with "),a("a",{attrs:{href:"http://github.com/isaacs/npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("npm install mime\n")])])]),a("h2",{attrs:{id:"contributing-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing-testing"}},[t._v("#")]),t._v(" Contributing / Testing")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("npm run test\n")])])]),a("h2",{attrs:{id:"command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[t._v("#")]),t._v(" Command Line")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("mime [path_string]\n")])])]),a("p",[t._v("E.g.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("> mime scripts/jquery.js\napplication/javascript\n")])])]),a("h2",{attrs:{id:"api-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-queries"}},[t._v("#")]),t._v(" API - Queries")]),t._v(" "),a("h3",{attrs:{id:"mime-lookup-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-lookup-path"}},[t._v("#")]),t._v(" mime.lookup(path)")]),t._v(" "),a("p",[t._v("Get the mime type associated with a file, if no mime type is found "),a("code",[t._v("application/octet-stream")]),t._v(" is returned. Performs a case-insensitive lookup using the extension in "),a("code",[t._v("path")]),t._v(" (the substring after the last '/' or '.').  E.g.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/to/file.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'text/plain'")]),t._v("\nmime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'text/plain'")]),t._v("\nmime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.TXT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'text/plain'")]),t._v("\nmime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'htm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'text/html'")]),t._v("\n")])])]),a("h3",{attrs:{id:"mime-default-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-default-type"}},[t._v("#")]),t._v(" mime.default_type")]),t._v(" "),a("p",[t._v("Sets the mime type returned when "),a("code",[t._v("mime.lookup")]),t._v(" fails to find the extension searched for. (Default is "),a("code",[t._v("application/octet-stream")]),t._v(".)")]),t._v(" "),a("h3",{attrs:{id:"mime-extension-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-extension-type"}},[t._v("#")]),t._v(" mime.extension(type)")]),t._v(" "),a("p",[t._v("Get the default extension for "),a("code",[t._v("type")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'html'")]),t._v("\nmime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/octet-stream'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'bin'")]),t._v("\n")])])]),a("h3",{attrs:{id:"mime-charsets-lookup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-charsets-lookup"}},[t._v("#")]),t._v(" mime.charsets.lookup()")]),t._v(" "),a("p",[t._v("Map mime-type to charset")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("charsets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'UTF-8'")]),t._v("\n")])])]),a("p",[t._v("(The logic for charset lookups is pretty rudimentary.  Feel free to suggest improvements.)")]),t._v(" "),a("h2",{attrs:{id:"api-defining-custom-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-defining-custom-types"}},[t._v("#")]),t._v(" API - Defining Custom Types")]),t._v(" "),a("p",[t._v("Custom type mappings can be added on a per-project basis via the following APIs.")]),t._v(" "),a("h3",{attrs:{id:"mime-define"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-define"}},[t._v("#")]),t._v(" mime.define()")]),t._v(" "),a("p",[t._v("Add custom mime/extension mappings")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/x-some-format'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-sf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-sft'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-sfml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/x-my-type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-mt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-mtt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// etc ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lookup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-sft'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'text/x-some-format'")]),t._v("\n")])])]),a("p",[t._v("The first entry in the extensions array is returned by "),a("code",[t._v("mime.extension()")]),t._v(". E.g.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extension")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/x-some-format'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 'x-sf'")]),t._v("\n")])])]),a("h3",{attrs:{id:"mime-load-filepath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-load-filepath"}},[t._v("#")]),t._v(" mime.load(filepath)")]),t._v(" "),a("p",[t._v('Load mappings from an Apache ".types" format file')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./my_project.types'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The .types file format is simple -  See the "),a("code",[t._v("types")]),t._v(" dir for examples.")])])}),[],!1,null,null,null);s.default=n.exports}}]);