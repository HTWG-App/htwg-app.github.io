import{_ as m,T as f,w,g as k}from"./index.8e32b6f9.js";import{d as g,k as u,l as v,c as n,b as h,w as p,r as y,o as a,a as t,F as x,s as T,g as o,A as z,B as V,i as _}from"./vendor.65389702.js";const B=g({name:"View_Library",components:{Tile:f},setup(){const e=u([]),c=u(0);return v(async()=>{const i=await k("","https://webapi.affluences.com/api/timetable?token=wWAjgowjn7iD85&week_offset=0&index=0");c.value=i.status,e.value=i.content.times}),{weekdays:w,times:e}}}),s=e=>(z("data-v-5000b646"),e=e(),V(),e),D={class:"tile-group"},S={id:"timetable","aria-label":"\xD6ffnungszeiten der Bibliothek"},F={scope:"row"},I={key:0,id:"openingTimes"},K={key:1},L=o(" Hochschulbibliothek der HTWG Konstanz "),$=s(()=>t("br",null,null,-1)),A=o(" Geb\xE4ude K "),C=s(()=>t("br",null,null,-1)),G=o(" Alfred-Wachtel-Stra\xDFe 8 "),N=s(()=>t("br",null,null,-1)),W=o(" 78462 Konstanz "),j=s(()=>t("br",null,null,-1)),E=s(()=>t("br",null,null,-1)),H=o(" Tel: 07531/206-580 "),M=s(()=>t("br",null,null,-1)),q=o(" Fax: 07531/206-587 "),J=s(()=>t("br",null,null,-1)),O=s(()=>t("a",{class:"link decorate",href:"mailto:bib-service@htwg-konstanz.de"},"bib-service@htwg-konstanz.de",-1));function P(e,c,b,i,Q,R){const r=y("tile");return a(),n("div",D,[h(r,{"tile-title":"\xD6ffnungszeiten"},{default:p(()=>[t("table",S,[(a(!0),n(x,null,T(e.times,(l,d)=>(a(),n("tr",{key:e.weekdays[d]},[t("th",F,_(e.weekdays[d]),1),l?(a(),n("td",I,_(l[0])+" - "+_(l[1]),1)):(a(),n("td",K,"Geschlossen"))]))),128))])]),_:1}),h(r,{"tile-title":"Kontakt"},{default:p(()=>[L,$,A,C,G,N,W,j,E,H,M,q,J,O]),_:1})])}var Y=m(B,[["render",P],["__scopeId","data-v-5000b646"]]);export{Y as default};
