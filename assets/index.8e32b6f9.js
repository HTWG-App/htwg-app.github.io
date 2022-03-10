import{d as h,u as L,c as f,a as p,b as d,w as k,F as _,r as c,o as r,e as w,f as P,K as j,g as C,t as U,h as m,n as D,i as $,j as K,k as g,l as B,m as F,p as I,q as Q,s as Z,v as X,x,J as ee,y as te,z as ne}from"./vendor.65389702.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};se();var y=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const oe=h({name:"App",setup(){L().commit("getCredentials")}}),ie={class:"nav"},ae=C("HTWG App");function re(e,t,n,o,s,i){const a=c("router-link"),l=c("router-view");return r(),f(_,null,[p("nav",ie,[d(a,{class:"big-link important-text",to:"Home","aria-roledescription":"Zur Startseite zu gelangen","aria-label":"Startseite"},{default:k(()=>[ae]),_:1})]),d(l,null,{default:k(({Component:u})=>[(r(),w(j,null,[(r(),w(P(u),{key:e.$route.fullPath}))],1024))]),_:1})],64)}var le=y(oe,[["render",re]]);const ue="modulepreload",N={},ce="/",A=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${ce}${o}`,o in N)return;N[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":ue,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function T(e){return e===null||typeof e=="undefined"}const S="https://htwg-app-back.herokuapp.com/";function G(e){switch(e){case 0:return"Daten noch nicht da";case 200:return"Hat einwandfrei geklappt";case 400:return"Die Anfrage war fehlerhaft";case 403:return"Deine Benutzerdaten sind nicht richtig";case 404:return"Es wurde \xFCberall gesucht, aber die Antwort ist nicht zu finden";case 500:return"Wir haben einen Fehler gemacht";default:return"Unbekannter Fehler"}}async function q(e){let t="";if(e.status===200){const n=e.headers.get("content-type");T(n)?t=await e.text():n.includes("application/json")?t=await e.json():(n.includes("text/plain")||n.includes("text/html"))&&(t=await e.text())}else t=G(e.status);return{content:t,status:e.status}}async function de(e,t=S){const n=await J(e,t);return q(n)}async function J(e,t=S){return fetch(t,{method:"POST",body:e})}async function z(e,t=S){const n=await fetch(t+e);return q(n)}const pe=h({name:"TileComponent",props:{tileTitle:{type:String,required:!1},tileSubtitle:{type:String,required:!1,default:""},tileRouteTo:{type:String,required:!1,default:""},tileIcon:{type:String,required:!1,default:""},bigContent:{type:Boolean,required:!1,default:!1},isDeactivated:{type:Boolean,required:!1,default:!1},isInverted:{type:Boolean,required:!1,default:!1},isWarning:{type:Boolean,required:!1,default:!1},status:{type:Number,required:!1,default:200}},setup(e){const{status:t}=U(e),n=m(()=>t.value!==200),o=m(()=>G(t.value));return{error:n,errorMessage:o}}}),me={class:"tile-wrapper"},fe={class:"tile-subtitle"},ge={class:"tile-title"},ve={class:"tile-subtitle"};function _e(e,t,n,o,s,i){return r(),w(P(e.tileRouteTo!==""?"router-link":"div"),{class:D(["tile",{disabled:e.isDeactivated&&!e.error},{"inverted-tile":e.isInverted&&!e.error},{"warning-tile":e.error||e.isWarning}]),to:e.tileRouteTo,"aria-label":`Kachel ${e.tileTitle}`,tabindex:e.tileRouteTo!==""?"0":"-1"},{default:k(()=>[p("div",me,[!e.error&&!e.isWarning?(r(),f(_,{key:0},[p("div",{class:D([{"big-tile-title":e.bigContent||e.tileIcon!==""},{"tile-title":!e.bigContent&&e.tileIcon===""}])},$(e.tileTitle),3),p("div",{class:D(["tile-content",{"big-tile-content":e.bigContent||e.tileIcon!==""}])},[K(e.$slots,"default",{},()=>[p("em",{class:D([e.tileIcon,"icon"])},null,2)])],2),p("div",fe,$(e.tileSubtitle),1)],64)):(r(),f(_,{key:1},[p("div",ge,$(e.errorMessage),1),p("div",ve,$(e.tileSubtitle),1)],64))])]),_:3},8,["class","to","aria-label","tabindex"])}var E=y(pe,[["render",_e]]);const he=h({name:"TileLogin",components:{Tile:E},setup(){const e=L(),t=m(()=>e.state.username),n=m(()=>t.value!==""&&!T(t.value));return{greeting:m(()=>n.value?"Hallo!":"Logge dich ein, um Dienste des Rechenzentrums zu verwenden")}}});function ye(e,t,n,o,s,i){const a=c("tile");return r(),w(a,{"tile-subtitle":e.greeting,"is-inverted":"","tile-icon":"ri-login-box-line","tile-route-to":"Login","tile-title":"Einloggen"},null,8,["tile-subtitle"])}var be=y(he,[["render",ye]]);const $e=h({name:"TileLibrary",components:{Tile:E},setup(){const e=g(-1),t=g(0);return B(async()=>{const o=await z("","https://webapi.affluences.com/api/fillRate?token=6r3Kuo6JjNhH9e");t.value=o.status,e.value=o.content.progress}),{fillRate:e}}}),ke=C("Geschlossen");function we(e,t,n,o,s,i){const a=c("tile");return r(),w(a,{"is-inverted":"","big-content":"","tile-title":"Bibliothek","tile-subtitle":"Auslastung","tile-route-to":"Library"},{default:k(()=>[e.fillRate===-1?(r(),f(_,{key:0},[ke],64)):(r(),f(_,{key:1},[C($(e.fillRate)+"%",1)],64))]),_:1})}var Ce=y($e,[["render",we]]);const Ee=h({name:"TileCertificateEnrollment",components:{Tile:E},setup(){const e=L(),t=g(!1),n=g(0);return{wait:t,status:n,download:()=>{t.value=!0;const s=m(()=>{var l;return(l=e==null?void 0:e.state)==null?void 0:l.username}),i=m(()=>{var l;return(l=e==null?void 0:e.state)==null?void 0:l.password}),a=JSON.stringify({username:s.value||"",password:i.value||"",reqtype:"immatrikulations_bescheinigung"});J(a).then(l=>{if(l.status===200)return l.blob().then(u=>{t.value=!1,n.value=200;const b=window.URL.createObjectURL(u),v=document.createElement("a");v.href=b,v.download="Immatrikulations_Bescheinigung.pdf",document.body.appendChild(v),v.click(),v.remove()});n.value=-1,t.value=!1})}}}}),Ae=["aria-busy","aria-disabled"],Te=C(" Bitte warten ..."),Le=C("Ein Fehler ist aufgetreten "),De=C("Herunterladen");function Ie(e,t,n,o,s,i){const a=c("tile");return r(),w(a,{"tile-title":"Immatrikulationsbescheinigung","is-inverted":""},{default:k(()=>[p("button",{class:D(["button",{disabled:e.wait}]),onClick:t[0]||(t[0]=(...l)=>e.download&&e.download(...l)),"aria-busy":e.wait,"aria-disabled":e.wait,"aria-label":"Immatrikulationsbescheinigung herunterladen",role:"button"},[e.wait&&e.status===0?(r(),f(_,{key:0},[Te],64)):e.status!==0&&e.status!==200?(r(),f(_,{key:1},[Le],64)):(r(),f(_,{key:2},[De],64))],10,Ae)]),_:1})}var Be=y(Ee,[["render",Ie]]);async function W(e,t=L()){const n=m(()=>{var i;return(i=t==null?void 0:t.state)==null?void 0:i.username}),o=m(()=>{var i;return(i=t==null?void 0:t.state)==null?void 0:i.password}),s=JSON.stringify({username:n.value||"",password:o.value||"",reqtype:e});return await de(s)}const Se=h({name:"TilePrinterAccount",components:{Tile:E},setup(){const e=g(""),t=g(0),n=L(),o=async()=>{const s=await W("drucker",n);e.value=s.content.replace(/,/,".")+"\u20AC",t.value=s.status};return B(o),F(o),{status:t,druckerGuthaben:e}}}),He=p("em",{class:"ri-printer-line icon"},null,-1);function Ne(e,t,n,o,s,i){const a=c("tile");return r(),w(a,{status:e.status,"big-content":"","is-inverted":"","tile-subtitle":"Druckerkonto","tile-title":"Guthaben"},{default:k(()=>[He,C(" "+$(e.druckerGuthaben),1)]),_:1},8,["status"])}var Oe=y(Se,[["render",Ne]]);const Re=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];function Ve(e){return T(e)?"":`${e.getDate()}.${e.getMonth()+1}.${e.getFullYear()}`}function Pe(e){if(T(e))return null;const[t,n,o]=e.split(".");return new Date(parseInt(o),parseInt(n)-1,parseInt(t))}function M(e){return T(e)?"":Re[Ue(e)]}function Ue(e,t=!1){let n=(e.getDay()-1+7)%7;return t&&n>=5&&(n=7),n}const Ke=h({name:"TileUniversityEvents",components:{Tile:E},setup(){const e=g(new Date),t=m(()=>Ve(e.value)),n=m(()=>M(e.value));return{date:t,weekday:n}}});function Fe(e,t,n,o,s,i){const a=c("tile");return r(),w(a,{"big-content":"","tile-route-to":"Termine","tile-title":"Termine","tile-subtitle":e.weekday},{default:k(()=>[C($(e.date),1)]),_:1},8,["tile-subtitle"])}var Ge=y(Ke,[["render",Fe]]);const qe=h({name:"View_Home",components:{TileUniversityEvents:Ge,TilePrinterAccount:Oe,TileCertificateEnrollment:Be,Tile:E,TileLibrary:Ce,TileLogin:be}}),Je={class:"tile-group"};function ze(e,t,n,o,s,i){const a=c("tile"),l=c("tile-certificate-enrollment"),u=c("tile-printer-account"),b=c("tile-library"),v=c("tile-university-events"),Y=c("tile-login");return r(),f("div",Je,[d(a,{"tile-icon":"ri-restaurant-line","tile-route-to":"Canteen","tile-title":"Speiseplan"}),d(a,{"tile-icon":"ri-calendar-line","tile-route-to":"Timetable","tile-title":"Stundenplan"}),d(l),d(a,{"is-inverted":"","tile-icon":"ri-mental-health-line","tile-route-to":"Health","tile-title":"Gesundheit"}),d(a,{"tile-icon":"ri-map-2-line","tile-route-to":"CampusPlan","tile-title":"Campus Plan"}),d(a,{"tile-route-to":"Grades","tile-title":"Noten","tile-subtitle":"Eine \xDCbersicht \xFCber deine bisherigen Leistungen"}),d(u),d(b),d(v),d(a,{"tile-icon":"ri-cup-line","tile-route-to":"Endlicht","tile-title":"Endlicht"}),d(Y),d(a,{"tile-route-to":"About","tile-title":"\xDCber"})])}var We=y(qe,[["render",ze]]);const Me=h({name:"TileGroup",components:{Tile:E},props:{status:{type:Number,required:!1,default:200},tileTitle:{type:String,required:!1,default:""}},setup(e){const{status:t}=U(e);return{error:m(()=>t.value!==200)}}}),Ye={class:"tile-group"};function je(e,t,n,o,s,i){const a=c("tile");return r(),f("div",Ye,[e.error?(r(),w(a,{key:1,"tile-subtitle":e.tileTitle,status:e.status},null,8,["tile-subtitle","status"])):K(e.$slots,"default",{key:0})])}var Qe=y(Me,[["render",je]]);const Ze=h({name:"View_Canteen",components:{TileGroup:Qe,Tile:E},setup(){const e=g({}),t=g(0),n=g(0),o=async()=>{const b=await z("?mensa");t.value=b.status,e.value=b.content},s=m(()=>Object.keys(e.value)),i=m(()=>s.value[n.value]),a=m(()=>M(Pe(i.value))),l=m(()=>T(e.value)||T(i.value)?[]:e.value[i.value].items),u=b=>{if(l.value.length===0)return;const v=s.value.length;n.value=b===1?(n.value+1)%v:(n.value-1+v)%v};return B(o),{food:l,weekday:i,weekdayAsWord:a,status:t,changeDay:u}}});function Xe(e,t,n,o,s,i){const a=c("tile"),l=c("tile-group");return r(),f(_,null,[p("div",null,[p("h1",null,$(e.weekdayAsWord)+" "+$(e.weekday),1),e.food.length>0?(r(),f(_,{key:0},[p("button",{class:"button",onKeydown:[t[0]||(t[0]=I(u=>e.changeDay(1),["right"])),t[1]||(t[1]=I(u=>e.changeDay(-1),["left"]))],onClick:t[2]||(t[2]=u=>e.changeDay(-1)),role:"button","aria-label":"Vorheriger tag",tabindex:"0"}," Vorheriger Tag ",32),p("button",{class:"button",onKeydown:[t[3]||(t[3]=I(u=>e.changeDay(1),["right"])),t[4]||(t[4]=I(u=>e.changeDay(-1),["left"]))],onClick:t[5]||(t[5]=u=>e.changeDay(1)),role:"button","aria-label":"N\xE4chster Tag",tabindex:"0"}," N\xE4chster Tag ",32)],64)):Q("",!0)]),d(l,{status:e.status},{default:k(()=>[(r(!0),f(_,null,Z(e.food,(u,b)=>(r(),w(a,{key:b,"tile-title":`${u.category} | ${u.price[0]}\u20AC`,class:"food",tabindex:"-1"},{default:k(()=>[C($(u.title),1)]),_:2},1032,["tile-title"]))),128))]),_:1},8,["status"])],64)}var xe=y(Ze,[["render",Xe]]);const et=h({name:"View_Timetable",components:{Tile:E},setup(){const e=g(""),t=g(0),n=L(),o=async()=>{const s=await W("stundenplan",n);e.value=s.content,t.value=s.status};return B(o),F(o),{status:t,timetable:e}}}),tt={id:"termine",class:"timetable"},nt=["innerHTML"];function st(e,t,n,o,s,i){const a=c("tile");return r(),f("div",null,[d(a,{"is-inverted":"",status:e.status},{default:k(()=>[p("div",tt,[p("div",{innerHTML:e.timetable},null,8,nt)])]),_:1},8,["status"])])}var ot=y(et,[["render",st]]);const it=[{path:"/",name:"Home",component:We,alias:["/Home"]},{path:"/Canteen",name:"Canteen",component:xe},{path:"/Timetable",name:"Timetable",component:ot},{path:"/Health",name:"Health",component:()=>A(()=>import("./View_Health.ac55fd89.js"),["assets/View_Health.ac55fd89.js","assets/vendor.65389702.js"])},{path:"/Termine",name:"Termine",component:()=>A(()=>import("./View_UniversityEvents.74e8d883.js"),["assets/View_UniversityEvents.74e8d883.js","assets/vendor.65389702.js"])},{path:"/Grades",name:"Grades",component:()=>A(()=>import("./View_Grades.f830d98e.js"),["assets/View_Grades.f830d98e.js","assets/vendor.65389702.js"])},{path:"/Endlicht",name:"Endlicht",component:()=>A(()=>import("./View_Endlicht.65f35834.js"),["assets/View_Endlicht.65f35834.js","assets/vendor.65389702.js"])},{path:"/Library",name:"Library",component:()=>A(()=>import("./View_Library.ddcf2388.js"),["assets/View_Library.ddcf2388.js","assets/View_Library.b5176f29.css","assets/vendor.65389702.js"])},{path:"/CampusPlan",name:"CampusPlan",component:()=>A(()=>import("./View_CampusPlan.074de934.js"),["assets/View_CampusPlan.074de934.js","assets/vendor.65389702.js"])},{path:"/Login",name:"Login",component:()=>A(()=>import("./View_Login.6a17221b.js"),["assets/View_Login.6a17221b.js","assets/vendor.65389702.js"])},{path:"/About",name:"About",component:()=>A(()=>import("./View_About.0a063a56.js"),["assets/View_About.0a063a56.js","assets/vendor.65389702.js"])}],at=X({history:x(),routes:it}),rt="-----BEGIN PUBLIC KEY-----MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAj3qaKlndElU/pymKKiPpO3oek9D0/NsHWgrzimnID0Bngjym4Vqq40WJjmiN9SqEZtBDP/Cm5Qve5Nn3LV0JbLI3l/ks9a/uLz72vk9aOQvykfqvejMqrI9YPVLLRs91giz/gMVMcKL7k5kU8B4FHYhvWe1k2ZsGUtNN/sT4Rq7ob1+ANxSAJCrg8hJJEEMvzNHACG8SFnybz5Ep4c4lyvBY9BQ2W3Fw72WWZgHkmeWnSxVTQtYH+Cmv3J9cxHHTRKIshebNBE0pFm0DZYpHHUkRoypbVLes8g6g/mkpwu1gOQuUY3OzbmLNN2nyWNlUUawCly0unnXvOorGGzYmq5RmAvNVu2/CVHnssHlg3dVB7QSKMNwLkSja0rXJD3omuFvVgg2XfBYV325LxwBvLwvG4evsHMw/QoeRy1Jb9gVVBdQ+3QgHU7RUjSNeggBSvGcndhTUfGE1C9FZ7GZ/16xGrWkdpTpOu7VafoGp7erFPz8pY6JViZokeJY6CnKfnWMmkBbwyj7oLADCCgYScc173se7Z1DgGdFezSMM+9YUBzFZrlyjbj9mncKp3k861uygSiLhahfvNRtjEgGr94HBe0/b1P2EAskyR4YlJ5zqDsd7uA867imDKfqxLmv5K7s9pJiyRJ7bfG1dH5c5OwfGNVl++Lf3gK1P3kd4vIUCAwEAAQ==-----END PUBLIC KEY-----",lt="-----BEGIN PUBLIC KEY-----MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApsBUpo+JgmIMI8JR/ZW5YGbbttEPac/fQM4e06QwJaBSbe4+D9bR4yGkFa9F4BQ+5YzMOVesvRbxYHzMNOoc5JonOEJtL+JWVjp40fHL2nDL/g+BzRDoA4DHxEzdjiqHfZsxLPpYkcOb+U1h41v99m8vPUUSoOB9ZDZNqTUl53xria0kpLeW50RhnBVfdA8l/p6U6OasiBTyXp4Ob0g7rHzPKkzJyFXSUwmYOkq01fY9Qz3UzQroJlhWHTPmasU6xaHRuXEZYJEkMsEW7s4kCR9lHrAnsrl/E+SP/lFRIINcOZCw+hLtMMsPDrupfBWQLd6Atz219DNlzzOarrU0NW2hL3rolf1oWOZ2DZNip8WtX0a97Nv5J4/1JskjKUOVXVP307HXEWlcKgmvqc4QnOiLn4KyAE2MwpUhVYa93lJNQ+MAW0RvV6Ei+UyASsX8RMpk1JjU1Fbot6+Xxi3hILqvHmvKZHJH/z3y6al64nXdHfYE6vO7nsAQOrr45HclKpTFfQX+iSJ+4vbi9S4/9qkIPX7kdUg4cfK4Gn11l0FHTTBCXVBG+yVvJgm3kVzyHbxiX69FI4v2it9+gzPrhmesANzly4BtUItgO5c27XDnFjiktO0v+W/1xCij1iURZ+hDCsxl9WmGKSK01OXqNjCeh1c2lnYL3BntmOZBmicCAwEAAQ==-----END PUBLIC KEY-----";var ut={pubKey:rt,pubKeyDev:lt};function O(e){const t=new ee;t.setPublicKey(ut.pubKey);const n=t.encrypt(e);return n||""}function R(e){const{key:t,value:n,expiration:o}=e,s=new Date;s.setTime(s.getTime()+o*24*60*60*1e3);const i="expires="+s.toUTCString();return`${t}=${n};${i};path=/`}function V(e){var s,i;const n=`; ${document.cookie}`.split(`; ${e}=`);let o=null;return n.length===2&&(o=(i=(s=n.pop())==null?void 0:s.split(";"))==null?void 0:i.shift()),o||null}const ct=te({state:{username:"",password:""},mutations:{storeCredentials(e,t){const{username:n,password:o}=t;e.username=O(n),e.password=O(o),document.cookie=R({key:"username",value:e.username,expiration:30}),document.cookie=R({key:"password",value:e.password,expiration:30})},getCredentials(e){const t=V("username"),n=V("password");t!==null&&n!==null&&(e.username=t,e.password=n)}},actions:{storeCredentials(e,t){e.dispatch("storeCredentials",t)}},modules:{}}),H=ne(le);H.use(ct);H.use(at);H.mount("#app");export{E as T,y as _,Qe as a,W as b,z as g,T as n,Re as w};
