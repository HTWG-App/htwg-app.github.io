(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["endlicht"],{"46fb":function(t,e,n){"use strict";n.r(e);n("b0c0");var i=n("7a23"),c={class:"tile-list","aria-label":"Endlicht Angebote"},s=Object(i["g"])("div",{class:"left"},"* Auch Laktosefrei",-1),r=Object(i["g"])("div",{class:"left"},"** Pfand 1€",-1),u=Object(i["g"])("div",{class:"left"},"*** Pfand 0,25€",-1),a=["innerHTML"];function l(t,e,n,l,o,b){var f=Object(i["B"])("tile"),d=Object(i["B"])("tile-group");return Object(i["t"])(),Object(i["e"])(d,{status:o.status,"tile-title":"Endlicht"},{default:Object(i["J"])((function(){return[Object(i["i"])(f,{"tile-title":"Endlicht Preise"},{default:Object(i["J"])((function(){return[Object(i["g"])("ol",c,[(Object(i["t"])(!0),Object(i["f"])(i["a"],null,Object(i["z"])(o.items,(function(t,e){return Object(i["t"])(),Object(i["f"])("li",{key:e},Object(i["E"])(t.name)+": "+Object(i["E"])(t.price),1)})),128))]),s,r,u]})),_:1}),Object(i["i"])(f,{"is-inverted":"","tile-title":"Endlicht Öffnungszeiten"},{default:Object(i["J"])((function(){return[Object(i["g"])("div",{innerHTML:o.times},null,8,a)]})),_:1})]})),_:1},8,["status"])}var o=n("0bfd"),b=n("9c02"),f={name:"Endlicht",components:{TileGroup:b["a"]},data:function(){return{items:[],times:"",status:0}},methods:{getPrices:function(){var t=this;Object(o["a"])("?endlicht&reqtype=preise").then((function(e){var n=e.content,i=e.status;t.status=i,t.items=n}))},getTimes:function(){var t=this;Object(o["a"])("?endlicht&reqtype=zeiten").then((function(e){var n=e.content,i=e.status;t.status=i,t.times=n}))}},mounted:function(){this.getPrices(),this.getTimes()}},d=n("d959"),j=n.n(d);const O=j()(f,[["render",l]]);e["default"]=O},b0c0:function(t,e,n){var i=n("83ab"),c=n("5e77").EXISTS,s=n("e330"),r=n("9bf2").f,u=Function.prototype,a=s(u.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,o=s(l.exec),b="name";i&&!c&&r(u,b,{configurable:!0,get:function(){try{return o(l,a(this))[1]}catch(t){return""}}})}}]);