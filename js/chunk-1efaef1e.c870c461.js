(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1efaef1e"],{"004c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("page-header-wrapper",{scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"page-header-content"},[e("div",{staticClass:"avatar"},[e("a-avatar",{attrs:{size:"large",src:t.currentUser.avatar}})],1),e("div",{staticClass:"content"},[e("div",{staticClass:"content-title"},[t._v(" "+t._s(t.timeFix)+"，"+t._s(t.user.name)),e("span",{staticClass:"welcome-text"},[t._v("，"+t._s(t.welcome))])]),e("div",[t._v("前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台")])])])]},proxy:!0},{key:"extraContent",fn:function(){return[e("div",{staticClass:"extra-content"},[e("div",{staticClass:"stat-item"},[e("a-statistic",{attrs:{title:"项目数",value:56}})],1),e("div",{staticClass:"stat-item"},[e("a-statistic",{attrs:{title:"团队内排名",value:8,suffix:"/ 24"}})],1),e("div",{staticClass:"stat-item"},[e("a-statistic",{attrs:{title:"项目访问",value:2223}})],1)])]},proxy:!0}])},[e("div",[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"进行中的项目","body-style":{padding:0}}},[e("a",{attrs:{slot:"extra"},slot:"extra"},[t._v("全部项目")]),e("div",t._l(t.projects,(function(a,s){return e("a-card-grid",{key:s,staticClass:"project-card-grid"},[e("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[e("a-card-meta",[e("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[e("a-avatar",{attrs:{size:"small",src:a.cover}}),e("a",[t._v(t._s(a.title))])],1),e("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[t._v(" "+t._s(a.description)+" ")])]),e("div",{staticClass:"project-item"},[e("a",{attrs:{href:"/#/"}},[t._v("科学搬砖组")]),e("span",{staticClass:"datetime"},[t._v("9小时前")])])],1)],1)})),1)]),e("a-card",{attrs:{loading:t.loading,title:"动态",bordered:!1}},[e("a-list",t._l(t.activities,(function(a,s){return e("a-list-item",{key:s},[e("a-list-item-meta",[e("a-avatar",{attrs:{slot:"avatar",src:a.user.avatar},slot:"avatar"}),e("div",{attrs:{slot:"title"},slot:"title"},[e("span",[t._v(t._s(a.user.nickname))]),t._v(" 在 "),e("a",{attrs:{href:"#"}},[t._v(t._s(a.project.name))]),t._v(" "),e("span",[t._v(t._s(a.project.action))]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v(t._s(a.project.event))])]),e("div",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(a.time))])],1)],1)})),1)],1)],1),e("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"快速开始 / 便捷导航",bordered:!1,"body-style":{padding:0}}},[e("div",{staticClass:"item-group"},[e("a",[t._v("操作一")]),e("a",[t._v("操作二")]),e("a",[t._v("操作三")]),e("a",[t._v("操作四")]),e("a",[t._v("操作五")]),e("a",[t._v("操作六")]),e("a-button",{attrs:{size:"small",type:"primary",ghost:"",icon:"plus"}},[t._v("添加")])],1)]),e("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"XX 指数",loading:t.radarLoading,bordered:!1,"body-style":{padding:0}}},[e("div",{staticStyle:{"min-height":"400px"}},[e("radar",{attrs:{data:t.radarData}})],1)]),e("a-card",{attrs:{loading:t.loading,title:"团队",bordered:!1}},[e("div",{staticClass:"members"},[e("a-row",t._l(t.teams,(function(a,s){return e("a-col",{key:s,attrs:{span:12}},[e("a",[e("a-avatar",{attrs:{size:"small",src:a.avatar}}),e("span",{staticClass:"member"},[t._v(t._s(a.name))])],1)])})),1)],1)])],1)],1)],1)])},i=[],r=e("d211"),n=e("ca00"),c=e("5880"),o=e("d54d"),l=e("2af9"),d=e("0fea"),u=e("b74e"),v={name:"Workplace",components:{PageHeaderWrapper:o["b"],Radar:l["k"]},data:function(){return{timeFix:Object(n["a"])(),avatar:"",user:{},projects:[],loading:!0,radarLoading:!0,activities:[],teams:[],axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}],radarData:[]}},computed:Object(r["a"])(Object(r["a"])({},Object(c["mapState"])({nickname:function(t){return t.user.nickname},welcome:function(t){return t.user.welcome}})),{},{currentUser:function(){return{name:"Serati Ma",avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"}},userInfo:function(){return this.$store.getters.userInfo}}),created:function(){this.user=this.userInfo,this.avatar=this.userInfo.avatar,Object(d["a"])().then((function(t){})),Object(d["b"])().then((function(t){}))},mounted:function(){this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar()},methods:{getProjects:function(){var t=this;this.$http.get("/list/search/projects").then((function(a){t.projects=a.result&&a.result.data,t.loading=!1}))},getActivity:function(){var t=this;this.$http.get("/workplace/activity").then((function(a){t.activities=a.result}))},getTeams:function(){var t=this;this.$http.get("/workplace/teams").then((function(a){t.teams=a.result}))},initRadar:function(){var t=this;this.radarLoading=!0,this.$http.get("/workplace/radar").then((function(a){var e=(new u.View).source(a.result);e.transform({type:"fold",fields:["个人","团队","部门"],key:"user",value:"score"}),t.radarData=e.rows,t.radarLoading=!1}))}}},m=v,p=(e("a784"),e("c701")),g=Object(p["a"])(m,s,i,!1,null,"ec749434",null);a["default"]=g.exports},"0fea":function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return n}));var s=e("b775"),i={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function r(t){return Object(s["b"])({url:i.role,method:"get",params:t})}function n(t){return Object(s["b"])({url:i.service,method:"get",params:t})}},"5d67":function(t,a,e){},a784:function(t,a,e){"use strict";e("5d67")}}]);