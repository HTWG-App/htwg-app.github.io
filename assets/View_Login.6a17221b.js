import{d as p,k as r,C as m,u as f,c as v,b as c,w,r as C,o as _,a as o,D as l,E as i,p as g}from"./vendor.65389702.js";import{_ as b,T as V}from"./index.8e32b6f9.js";const h=p({name:"View_Login",components:{Tile:V},setup(){const e=r(""),s=r(""),n=m(),t=f();return{username:e,password:s,saveCredentials:()=>{t.commit("storeCredentials",{username:e.value,password:s.value}),e.value="",s.value="",n.push({name:"Home"})}}}}),B={class:"tile-group no-pointer"},k={class:"form"},$={class:"form-group"},y=o("label",{class:"form-label",for:"username"},"RZ-Benutzername",-1),E={class:"form-group"},T=o("label",{class:"form-label",for:"password"},"Passwort",-1),D={class:"form-group"};function K(e,s,n,t,d,L){const u=C("tile");return _(),v("div",B,[c(u,null,{default:w(()=>[o("div",k,[o("div",$,[y,l(o("input",{id:"username",class:"form-input",placeholder:"Bsp. jo391mue","onUpdate:modelValue":s[0]||(s[0]=a=>e.username=a)},null,512),[[i,e.username]])]),o("div",E,[T,l(o("input",{id:"password",class:"form-input",type:"password","onUpdate:modelValue":s[1]||(s[1]=a=>e.password=a),onKeydown:s[2]||(s[2]=g((...a)=>e.saveCredentials&&e.saveCredentials(...a),["enter"]))},null,544),[[i,e.password]])]),o("div",D,[o("button",{onClick:s[3]||(s[3]=(...a)=>e.saveCredentials&&e.saveCredentials(...a))},"Einloggen")])])]),_:1})])}var U=b(h,[["render",K]]);export{U as default};
