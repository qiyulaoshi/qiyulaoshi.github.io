(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{774:function(t,a,s){"use strict";s.r(a);var n=s(34),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"vue子组件向父组件传递信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue子组件向父组件传递信息"}},[t._v("#")]),t._v(" Vue子组件向父组件传递信息")]),t._v(" "),s("p",[t._v("1.子组件通过自定义事件(emit Event)向父组件传递信息\n2.传递步骤及方法")]),t._v(" "),s("ul",[s("li",[t._v("先在子组件中自定义一个方法")])]),t._v(" "),s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sendMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("发送数据"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  //自定义了一个sendMsg的方法\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("\x3c!-- more --\x3e\n")])])]),s("ul",[s("li",[t._v("在methods中注册该方法")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  methods:{\n  sendMsg(event){\n    //两个参数,参数1:key  参数2: 数据\n    this.$emit("sendmsg",this.msg);\n   }\n }\n')])])]),s("p",[t._v("注意传递时应为两个参数：参数1 : key  参数2 : 数据")]),t._v(" "),s("ul",[s("li",[t._v("在父组件中为key值定义绑定事件获取传递值")])]),t._v(" "),s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@sendmsg")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("getMsg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n//此处的key为sendmsg,为其定义了一个getMsg事件\n")])])]),s("ul",[s("li",[t._v("在父组件methods注册该方法")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  methods:{\n  getMsg(data){\n    this.info = data;\n  }\n}\n//  此时的data的值即为子组件传递的数据,在这里将它赋值给info\n")])])]),s("h3",{attrs:{id:"子父级组件信息传递的总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子父级组件信息传递的总结"}},[t._v("#")]),t._v(" 子父级组件信息传递的总结")]),t._v(" "),s("p",[t._v("往往子父级组件传递数据的用法是父组件向子组件传递了数据,在子组件中处理了数据之后,又将数据返回给父组件进行其他的处理.所以往往子父级组件传递数据是相互存在的.")])])}),[],!1,null,null,null);a.default=e.exports}}]);