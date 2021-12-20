(function(e){function t(t){for(var r,i,o=t[0],u=t[1],s=t[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"34d6":function(e,t,n){"use strict";n("45e0")},"45e0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("FibComponent")],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"form-outline col-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newFib,expression:"newFib"}],staticClass:"form-control",attrs:{type:"number",id:"form12",placeholder:"Enter a number..."},domProps:{value:e.newFib},on:{input:function(t){t.target.composing||(e.newFib=t.target.value)}}})]),n("button",{staticClass:"btn btn-sm btn-outline-primary col-2",on:{click:e.addFib}},[e._v("+ Fibonacci")]),n("button",{staticClass:"btn btn-sm btn-danger col-1",on:{click:e.clearFibs}},[e._v("Clear")])]),n("br"),e._l(e.fibs,(function(t){return n("div",{key:t.number},[n("div",{staticClass:"container p-2 my-2"},[n("h2",[e._v(e._s(t.number))]),n("h4",[e._v(e._s("Fibonacci = "+t.fib_value))]),n("small",[e._v(" "+e._s("Generated on: "+t.date)+" ")])]),n("hr")])}))],2)},o=[],u=n("1da1"),s=(n("96cf"),n("d4ec")),l=n("bee2"),p=n("bc3a"),f=n.n(p),b="/api/fibs",v=function(){function e(){Object(s["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getFibs",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get(b);case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:return e.abrupt("return",t.data);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"createFib",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post(b,{number:t});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteFibs",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete(b);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),d=v,m={name:"Fibonacci",data:function(){return{fibs:[],error:"",newFib:""}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.getFibs();case 3:e.fibs=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{addFib:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.createFib(e.newFib);case 3:return t.next=5,d.getFibs();case 5:e.fibs=t.sent,e.newFib="",t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.error=t.t0.message;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},clearFibs:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.deleteFibs();case 3:e.fibs=[],t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},h=m,g=(n("34d6"),n("2877")),w=Object(g["a"])(h,i,o,!1,null,"065b9d9e",null),x=w.exports,y={name:"App",components:{FibComponent:x}},F=y,k=(n("034f"),Object(g["a"])(F,a,c,!1,null,null,null)),O=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e9561cb0.js.map