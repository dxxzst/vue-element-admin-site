(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{167:function(t,e,o){"use strict";o.r(e);var a=o(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[t._m(0),t._v(" "),o("p",[t._v("Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose "),o("a",{attrs:{href:"https://github.com/tinymce/tinymce",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tinymce"),o("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),o("p",[t._v("Let me analyze some of the other rich texts on the market:")]),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://github.com/summernote/summernote",target:"_blank",rel:"noopener noreferrer"}},[t._v("summernote"),o("OutboundLink")],1)]),t._v(" Let me start with a rich text that I definitely would not recommend.It is inconsistent with many recognized default behaviors between others. And only for the use of a dialog feature, they import the bootstrap, A bunch of people protest. Formatting is also very bad. Do not use anyway! Do not use it! Do not use it!")])]),t._v(" "),o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://github.com/galetahub/ckeditor",target:"_blank",rel:"noopener noreferrer"}},[t._v("ckeditor"),o("OutboundLink")],1)]),t._v(" Ckeditor is also a veteran company to do rich text,\nI used to use it in company project.This year, the 5.0 version of the UI has also become more beautiful, quite good, and it has the richest plugins. It's recommended that you try it.")])]),t._v(" "),o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://github.com/quilljs/quill",target:"_blank",rel:"noopener noreferrer"}},[t._v("quill"),o("OutboundLink")],1)]),t._v(" Is also a very hot rich text, the skin is very elegant. Writing a plug-in based on it is also very simple. The API design is very cool. The reason I did not choose it was because it was not good for operation picture and was hard to change. If there is no operation of the picture of the user, it is recommended.")])]),t._v(" "),o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://github.com/yabwe/medium-editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("medium-"),o("em",[t._v("editor")]),o("OutboundLink")],1)]),t._v(" The famous medium rich text (unofficial produced), but the degree of completion is still not very good, scalability is not bad. However, I think most users still will not be used medium this way of writing.")])]),t._v(" "),o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://github.com/neilj/Squire",target:"_blank",rel:"noopener noreferrer"}},[t._v("Squire"),o("OutboundLink")],1)]),t._v(" A relatively light, rich text, compressed only 11.5kb, relative to other rich text is very small, recommended features is not complicated suggestion.")])]),t._v(" "),o("li",[o("p",[o("strong",[o("a",{attrs:{href:"http://ueditor.baidu.com/website/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UEditor"),o("OutboundLink")],1)]),t._v(" Not used in depth, only a simple project used in the angular1X, but ui really ugly, does not meet the aesthetic today, the official has also been a long time did not go with the new.")])]),t._v(" "),o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://github.com/ianstormtaylor/slate",target:"_blank",rel:"noopener noreferrer"}},[t._v("slate"),o("OutboundLink")],1)]),t._v(" A completely customizable framework for building rich text editors. Slate lets you build rich, intuitive editors like those in Medium, Dropbox Paper or Google Docs—which are becoming table stakes for applications on the web—without your codebase getting mired in complexity. Looks cool, after a chance I will practice in the project try it.")])])]),t._v(" "),o("p",[t._v("I listed a lot of rich text, but I didn't list any rich text related to vue, mainly because rich text is really more complex than thought. Also said in the previous article, in fact, encapsulation vue components is very convenient, there is no need to use someone else's package of things.\nWhat kind of vue-quill vue-editor is just a simple package, no difficulty. You might as well encapsulate it yourself, and be a little more flexible and controllable. In addition vue really doesn't have any good rich text, unlike react has "),o("a",{attrs:{href:"https://github.com/facebook/draft-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("draft"),o("OutboundLink")],1),t._v(" produced by facebook, "),o("a",{attrs:{href:"https://github.com/ory/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("editor"),o("OutboundLink")],1),t._v(" produced by ory. Vue doesn't have this product from a big company.")]),t._v(" "),o("p",[t._v("Of course, you can also choose some paid rich text editor, the author's own company has a project in the use of the "),o("a",{attrs:{href:"https://www.froala.com/wysiwyg-editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("froala-editor"),o("OutboundLink")],1),t._v(". Whether it is beautiful and easy to use are good, the company bought a professional version, $ 349 a year, the price is also very reasonable, but in fact save the cost of developer development may go far beyond the price.")]),t._v(" "),t._m(2),t._v(" "),o("p",[t._v("Here to briefly talk about the use of Tinymce in you own projects.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"rich-text-editor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rich-text-editor","aria-hidden":"true"}},[this._v("#")]),this._v(" Rich text editor")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("Here is a brief introduction to the reasons why "),o("code",[t._v("tinymce")]),t._v(" is recommended: "),o("code",[t._v("tinymce")]),t._v(" is a veteran to do rich text company(Here also recommended "),o("code",[t._v("ckeditor")]),t._v(", is also a company that has been doing rich text, the new version is very good), its products have stood the test of the market, and it has detailed documentation and rich configuration. One of the keys to using rich text is to copy formatting. Before using a Korean text rich "),o("code",[t._v("summernote")]),t._v(", It wasted me a lot of time, very unfriendly. But "),o("code",[t._v("tinymce")]),t._v("'s formatting is pretty good. It also has a value-added feature is powerpaste, it is extremely powerful, support for copying everything from word or any other place. Extensibility is also critical for rich text. I use "),o("code",[t._v("tinymce")]),t._v(" to write several plug-ins, learning costs and ease of study are good, and very easy to expand. The last point is that the documentation is very good, basically you want to get the configuration item, it has. Tinymce also supports on-demand loading, you can customize plugins through its official build page.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tinymce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tinymce","aria-hidden":"true"}},[this._v("#")]),this._v(" Tinymce")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The current method of using the global reference. Code in: "),e("code",[this._v("static/tinymce")]),this._v(" (The files in the static directory will not be build by webpack), import in index.html .And make sure it's in the order before your "),e("code",[this._v("app.js")]),this._v("!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("The current use of the npm installation 'Tinymce' method is more complex and has some problems (which may be used in the future). 👾")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Usage")]),this._v("\nBecause rich text is not suitable for two-way data, so only watch the content changes once, and then will not be watch again. If later you need to change the rich text content.Can be set by "),e("code",[this._v("this.refs.xxx.setContent ()")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The source code is also very simple, any other needs can be modified in "),e("code",[this._v("@/components/Tinymce/index.vue")]),this._v(".")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"language-html extra-class"},[o("pre",{pre:!0,attrs:{class:"language-html"}},[o("code",[o("span",{attrs:{class:"token tag"}},[o("span",{attrs:{class:"token tag"}},[o("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tinymce")]),t._v(" "),o("span",{attrs:{class:"token attr-name"}},[t._v(":height")]),o("span",{attrs:{class:"token attr-value"}},[o("span",{attrs:{class:"token punctuation"}},[t._v("=")]),o("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("300"),o("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),o("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),o("span",{attrs:{class:"token attr-value"}},[o("span",{attrs:{class:"token punctuation"}},[t._v("=")]),o("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content"),o("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),o("span",{attrs:{class:"token attr-name"}},[t._v("id")]),o("span",{attrs:{class:"token attr-value"}},[o("span",{attrs:{class:"token punctuation"}},[t._v("=")]),o("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("tinymce"),o("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),o("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),o("span",{attrs:{class:"token tag"}},[o("span",{attrs:{class:"token tag"}},[o("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tinymce")]),o("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="rich-editor.md";e.default=n.exports}}]);