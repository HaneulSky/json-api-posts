import{d as n,e as _,i as m,t as i,r as V,a as h,u as x,m as b,g as f,f as l,h as a,n as C,p as y,V as S,k as g,q as k,s as B,o as F,c as M,F as v,v as N}from"./index-b6014086.js";const T={class:"comment-card"},L={__name:"commentCard",props:{comment:Object},setup(t){return(o,e)=>(n(),_("div",T,[m("h1",null,i(t.comment.name),1),m("p",null,i(t.comment.body),1),m("p",null,"Author "+i(t.comment.email),1)]))}},$={__name:"commentForm",setup(t){const o=V(""),e=V(""),u=h(),p=x(),c=()=>{p.dispatch("comment/postComment",{name:e.value,email:"test@test.te",body:e.value,postId:u.params.id})};return(r,s)=>(n(),b(a(B),{onSubmit:k(c,["prevent"])},{default:f(()=>[l(a(C),{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=d=>o.value=d)},null,8,["modelValue"]),l(a(y),{modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=d=>e.value=d)},null,8,["modelValue"]),l(a(S),{type:"submit",onClick:c},{default:f(()=>[g("Submit")]),_:1})]),_:1},8,["onSubmit"]))}},w=m("h2",null,"Comments",-1),O={__name:"commentsList",setup(t){const o=h(),e=x();F(()=>{e.dispatch("comment/fetchCommentsList",o.params.id)});const u=M(()=>e.getters["comment/COMMENTS"]);return(p,c)=>(n(),_(v,null,[w,l($),(n(!0),_(v,null,N(u.value,r=>(n(),b(L,{key:r.id,comment:r},null,8,["comment"]))),128))],64))}};export{O as default};