(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addSource"],{3182:function(e,t,c){"use strict";c("fd47")},3986:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["withScopeId"])("data-v-951b73e2");Object(a["pushScopeId"])("data-v-951b73e2");var r={class:"index"};Object(a["popScopeId"])();var n=o((function(e,t,c,n,d,i){var l=Object(a["resolveComponent"])("Header");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])(l,{isHistory:!0},{default:o((function(){return[Object(a["createVNode"])("span",r,Object(a["toDisplayString"])(!0===e.paramVals.isUid?"新建资源":e.paramVals.title),1)]})),_:1})])})),d=(c("5d41"),c("9bf3")),i=c("6c02"),l=Object(a["defineComponent"])({setup:function(){var e=Object(i["c"])();console.log(e.params),console.log(e.query);var t={isUid:""===Reflect.get(e.params,"sourceId"),title:""===Reflect.get(e.params,"sourceId")?"":Reflect.get(e.query,"title")};return{paramVals:t}},components:{Header:d["a"]}});c("3182");l.render=n,l.__scopeId="data-v-951b73e2";t["default"]=l},"3e98":function(e,t,c){},5112:function(e,t,c){"use strict";c("3e98")},"5d41":function(e,t,c){var a=c("23e7"),o=c("861d"),r=c("825a"),n=c("5135"),d=c("06cf"),i=c("e163");function l(e,t){var c,a,s=arguments.length<3?e:arguments[2];return r(e)===s?e[t]:(c=d.f(e,t))?n(c,"value")?c.value:void 0===c.get?void 0:c.get.call(s):o(a=i(e))?l(a,t,s):void 0}a({target:"Reflect",stat:!0},{get:l})},"9bf3":function(e,t,c){"use strict";var a=c("7a23"),o=Object(a["withScopeId"])("data-v-7b6aa76c");Object(a["pushScopeId"])("data-v-7b6aa76c");var r={class:"header"};Object(a["popScopeId"])();var n=o((function(e,t,c,o,n,d){var i=Object(a["resolveComponent"])("ArrowLeftOutlined");return Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[e.isHistory?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:0,onClick:e.Jump,class:"al-left"},null,8,["onClick"])):Object(a["createCommentVNode"])("",!0),Object(a["renderSlot"])(e.$slots,"default",{},void 0,!0)])})),d=c("f4c5"),i=c("6c02"),l=Object(a["defineComponent"])({props:{isHistory:{type:Boolean,required:!1,default:!1},pathUrl:{type:String,required:!1,default:""},isUrl:{type:Boolean,required:!1,default:!1}},setup:function(e){var t=Object(i["d"])(),c=function(){e.isUrl?t.push(e.pathUrl):t.back()};return{Jump:c}},components:{ArrowLeftOutlined:d["ArrowLeftOutlined"]}});c("5112");l.render=n,l.__scopeId="data-v-7b6aa76c";t["a"]=l},fd47:function(e,t,c){}}]);