(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],p=0,m=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vuex_simple_employee/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0910":function(e,t,n){"use strict";var r=n("29c4"),o=n.n(r);o.a},"29c4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/employees"}},[e._v("employees")])],1),n("router-view")],1)},i=[],a=(n("5c0b"),n("2877")),u={},c=Object(a["a"])(u,o,i,!1,null,null,null),s=c.exports,l=(n("96cf"),n("3b8d")),p=n("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Welcome",{attrs:{msg:"如何用 Vuex 實作員工資料的 CRUD"}})],1)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("p")])},y=[],v={name:"HelloWorld",props:{msg:String}},h=v,b=Object(a["a"])(h,f,y,!1,null,null,null),E=b.exports,g={name:"home",components:{Welcome:E}},w=g,O=Object(a["a"])(w,m,d,!1,null,null,null),_=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"employees"},[n("div",{staticClass:"spane-30"},[n("div",[n("label",[e._v("Employee name")]),n("input",{attrs:{type:"text"},domProps:{value:e.newEmployee.name},on:{input:e.updateNewEmployeeName}})]),n("div",[n("label",[e._v("Employee Email")]),n("input",{attrs:{type:"text"},domProps:{value:e.newEmployee.email},on:{input:e.updateNewEmployeeEmail}})]),n("button",{on:{click:e.addNew}},[e._v("Add Employee")])]),n("section",[e._m(0),e._l(e.gettersEmployees,(function(t){return n("div",{key:t.id},[n("div",{staticClass:"table-text"},[n("div",[n("input",{class:{inputBorderNone:!(e.editingId===t.id)},attrs:{type:"text",disabled:!(e.editingId===t.id)},domProps:{value:t.name},on:{input:function(t){return e.updateCachedEmployee("name",t)}}})]),n("div",[n("input",{class:{inputBorderNone:!(e.editingId===t.id)},attrs:{type:"text",disabled:!(e.editingId===t.id)},domProps:{value:t.email},on:{input:function(t){return e.updateCachedEmployee("email",t)}}})]),e.editingId===t.id?n("div",[n("button",{on:{click:e.submit}},[e._v("送出")]),n("button",{on:{click:e.cancel}},[e._v("取消")])]):n("div",[n("button",{on:{click:function(n){return e.editMode(t)}}},[e._v("編輯")]),n("button",{on:{click:function(n){return e.deleteEm(t.id)}}},[e._v("刪除")])])])])}))],2)])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-title"},[n("div",[e._v("Name")]),n("div",[e._v("Email")]),n("div",[e._v("Actions")])])}],P=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),N=n("2f62");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(P["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={name:"employees",data:function(){return{editingId:null,cachedEmployee:{}}},methods:{updateNewEmployeeName:function(e){this.$store.commit("updateNewEmployeeName",e.target.value)},updateNewEmployeeEmail:function(e){this.$store.commit("updateNewEmployeeEmail",e.target.value)},addNew:function(){this.$store.dispatch("addNewEmployee")},editMode:function(e){this.editingId=e.id,this.cachedEmployee=Object.assign({},e)},updateCachedEmployee:function(e,t){this.cachedEmployee[e]=t.target.value},submit:function(){this.$store.dispatch("editEmployee",this.cachedEmployee),this.editingId=null},cancel:function(){this.editingId=null},deleteEm:function(e){this.$store.dispatch("deleteEmployee",e)}},computed:R({gettersEmployees:function(){return this.$store.getters.employees}},Object(N["b"])({newEmployee:function(e){return e.newEmployee}}))},C=$,I=(n("0910"),Object(a["a"])(C,j,x,!1,null,null,null)),S=I.exports,M=n("bc3a"),D=n.n(M),T=D.a.create({baseURL:"https://jsonplaceholder.typicode.com"});T.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e.response)}));var W=T;r["a"].use(N["a"]);var A=new N["a"].Store({state:{employees:[],newEmployee:{name:null,email:null}},getters:{employees:function(e){return e.employees}},mutations:{updateNewEmployeeName:function(e,t){e.newEmployee.name=t},updateNewEmployeeEmail:function(e,t){e.newEmployee.email=t},pushToEmployees:function(e,t){e.employees.push(t)},setEmployees:function(e,t){e.employees=t},updateEmployee:function(e,t){console.log("updatedId",t.id),this.state.employees=this.state.employees.map((function(e){return e.id===t.id?t:e}))},deleteEmployee:function(e,t){e.employees=e.employees.filter((function(e){return e.id!==t}))}},actions:{getEmployees:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,W.get("/users");case 3:r=e.sent,n("setEmployees",r);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),addNewEmployee:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,W.post("/users",t.state.newEmployee);case 2:n=e.sent,t.commit("pushToEmployees",n);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),editEmployee:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,r("updateEmployee",n);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteEmployee:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,W.delete("/users/".concat(n));case 3:return e.next=5,r("deleteEmployee",n);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}});r["a"].use(p["a"]);var B=new p["a"]({mode:"history",base:"/vuex_simple_employee/",routes:[{path:"/",name:"home",component:_},{path:"/employees",name:"employees",beforeEnter:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.dispatch("getEmployees");case 2:return e.next=4,r();case 4:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}(),component:S}]});r["a"].config.productionTip=!1,new r["a"]({router:B,store:A,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("e332"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e332:function(e,t,n){}});
//# sourceMappingURL=app.1b623042.js.map