(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["endlicht"],{"46fb":function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),c={class:"tile-list"},s=Object(i["g"])("div",{class:"left"},"* Auch Laktosefrei",-1),u=Object(i["g"])("div",{class:"left"},"** Pfand 1€",-1),r=Object(i["g"])("div",{class:"left"},"*** Pfand 0,25€",-1),a=["innerHTML"];function l(t,e,n,l,f,o){var b=Object(i["A"])("tile"),d=Object(i["A"])("tile-group");return Object(i["s"])(),Object(i["e"])(d,{status:f.status,"tile-title":"Endlicht"},{default:Object(i["H"])((function(){return[Object(i["i"])(b,{"tile-title":"Endlicht Preise"},{default:Object(i["H"])((function(){return[Object(i["g"])("ul",c,[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(f.items,(function(t,e){return Object(i["s"])(),Object(i["f"])("li",{key:e},Object(i["D"])(t.name)+": "+Object(i["D"])(t.price),1)})),128))]),s,u,r]})),_:1}),Object(i["i"])(b,{"is-inverted":"","tile-title":"Endlicht Öffnungszeiten"},{default:Object(i["H"])((function(){return[Object(i["g"])("div",{innerHTML:f.times},null,8,a)]})),_:1})]})),_:1},8,["status"])}var f=n("0bfd"),o=n("9c02"),b={name:"Endlicht",components:{TileGroup:o["a"]},data:function(){return{items:[],times:"",status:0}},methods:{getPrices:function(){var t=this;Object(f["a"])("?endlicht&reqtype=preise").then((function(e){var n=e.content,i=e.status;t.status=i,t.items=n}))},getTimes:function(){var t=this;Object(f["a"])("?endlicht&reqtype=zeiten").then((function(e){var n=e.content,i=e.status;t.status=i,t.times=n}))}},mounted:function(){this.getPrices(),this.getTimes()}},d=n("6b0d"),j=n.n(d);const O=j()(b,[["render",l]]);e["default"]=O},b0c0:function(t,e,n){var i=n("83ab"),c=n("5e77").EXISTS,s=n("9bf2").f,u=Function.prototype,r=u.toString,a=/^\s*function ([^ (]*)/,l="name";i&&!c&&s(u,l,{configurable:!0,get:function(){try{return r.call(this).match(a)[1]}catch(t){return""}}})}}]);