import{_ as v,u as m,a as g,b as I,o as h,c as n,w as k,d as u,e as l,f as c,g as B,h as d,i as t,t as o,j as V,k as x,V as y,l as b}from"./index-b6014086.js";import w from"./commentsList-1a4918f8.js";const N={class:"container"},P={key:0},S={__name:"postPage",setup(C){const e=m(),_=g(),p=I();h(()=>{e.dispatch("post/fetchPostInfo",_.params.id)});const s=n(()=>e.getters["post/POST"]),a=n(()=>e.getters["user/USER"]),i=n(()=>e.getters["post/IS_LOADING"]),f=()=>{p.go(-1)};return k(i,()=>{console.log("loaded",s.value.userId),e.dispatch("user/fetchUserById",s.value.userId)}),(D,r)=>(u(),l("div",N,[c(d(y),{class:"card-button",onClick:r[0]||(r[0]=R=>f())},{default:B(()=>[x("Back")]),_:1}),t("div",null,[t("h1",null,o(s.value.title),1),t("p",null,o(s.value.body),1)]),c(d(b)),a.value.id?(u(),l("div",P,[t("p",null,"name: "+o(a.value.name),1),t("p",null,"website: "+o(a.value.website),1)])):V("",!0),c(w)]))}},O=v(S,[["__scopeId","data-v-2f826588"]]);export{O as default};