(function(e){function t(t){for(var n,s,c=t[0],l=t[1],a=t[2],p=0,u=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,a||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,c=1;c<i.length;c++){var l=i[c];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"04df":function(e,t,i){},"0573":function(e,t,i){"use strict";i("04df")},"0a4a":function(e,t,i){"use strict";i("8c45")},"56d7":function(e,t,i){"use strict";i.r(t);var n=i("7a23");const r={class:"content"},o={class:"main"},s={key:0,style:{marginBottom:"15px","font-size":"22px"}},c=Object(n["d"])("img",{src:"https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK",alt:"",width:"20",height:"20"},null,-1),l=Object(n["d"])("p",{style:{color:"black","font-size":"14px","margin-left":"20px","margin-top":"0px","font-weight":"800"}},"Bei Google ansehen",-1),a={style:{"margin-bottom":"10px","margin-top":"10px"}},d={key:4},p=Object(n["d"])("img",{id:"spinner",src:"https://www.bluvale.com/skin/frontend/bluvale/default/images/more/loader/loader-white1.gif",alt:"",height:"40",width:"40"},null,-1);function u(e,t,i,u,f,h){const b=Object(n["h"])("Header");return Object(n["e"])(),Object(n["b"])("div",r,[Object(n["d"])(b,{header_title:"Bird ID"}),Object(n["d"])("div",o,[Object(n["d"])("img",{id:"loaded_image",src:this.imageUrl,alt:""},null,8,["src"]),f.speciesSet?(Object(n["e"])(),Object(n["b"])("p",s,Object(n["i"])(f.species),1)):Object(n["c"])("",!0),Object(n["d"])("a",{ref:"googleLink",hidden:"",href:f.googleUrl},null,8,["href"]),f.speciesSet?(Object(n["e"])(),Object(n["b"])("button",{key:1,id:"googleButton",style:{display:"flex","flex-direction":"row","align-items":"center",padding:"10px"},onClick:t[1]||(t[1]=e=>h.googleLink())},[c,l])):Object(n["c"])("",!0),Object(n["d"])("input",{ref:"uploadInput",type:"file",name:"filename",hidden:"",onChange:t[2]||(t[2]=e=>h.fileNameChanged())},null,544),f.spinnerActive?Object(n["c"])("",!0):(Object(n["e"])(),Object(n["b"])("button",{key:2,onClick:t[3]||(t[3]=e=>h.uploadImage())},"Bild hochladen")),Object(n["d"])("h3",a,Object(n["i"])(f.fileName),1),f.runClassify&&!f.spinnerActive?(Object(n["e"])(),Object(n["b"])("button",{key:3,style:{"margin-bottom":"20px"},onClick:t[4]||(t[4]=e=>h.classify())},"Klassifizieren")):Object(n["c"])("",!0),f.spinnerActive?(Object(n["e"])(),Object(n["b"])("div",d,[p])):Object(n["c"])("",!0)])])}const f=Object(n["j"])("data-v-779cf80c");Object(n["g"])("data-v-779cf80c");const h={class:"header"},b=Object(n["d"])("img",{src:"https://cdn.iconscout.com/icon/free/png-512/bird-299-1131175.png",alt:"bird",width:"45",height:"45"},null,-1);Object(n["f"])();const g=f((e,t,i,r,o,s)=>(Object(n["e"])(),Object(n["b"])("div",h,[Object(n["d"])("h1",null,Object(n["i"])(i.header_title),1),b])));var m={name:"Header",props:{header_title:String}};i("0a4a");m.render=g,m.__scopeId="data-v-779cf80c";var O=m,j={name:"App",data(){return{species:"",fileName:"(Keine Datei hochgeladen)",speciesSet:!1,googleUrl:"",runClassify:!1,spinnerActive:!1,imageUrl:"https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}},components:{Header:O},methods:{uploadImage(){console.log("Hochladen!"),this.$refs.uploadInput.click()},classify(){if(void 0!==this.$refs.uploadInput.files[0]){this.spinnerActive=!0;var e=this.$refs.uploadInput.files[0];fetch("http://192.168.178.88:5000/classify",{method:"POST",body:e}).then(e=>{e.json().then(e=>{this.species=e["some_key"],this.speciesSet=!0,this.art=e["some_key"],this.spinnerActive=!1,this.fileName="(Keine neue Datei hochgeladen)",this.runClassify=!1;let t=this.art.replace(" ","+");this.googleUrl="https://www.google.de/search?q="+t+"&source=lnms&tbm=isch"})})}else this.fileName="Es wurde kein Bild gefunden."},fileNameChanged(){if(void 0!==this.$refs.uploadInput.files[0]){this.runClassify=!0,this.speciesSet=!1;var e=this.$refs.uploadInput.files[0];this.fileName=e.name;var t=(window.URL||window.webkitURL).createObjectURL(e);this.imageUrl=t}else this.fileName="(Keine Datei hochgeladen)"},googleLink(){this.$refs.googleLink.click()}}};i("0573");j.render=u;var v=j;Object(n["a"])(v).mount("#app")},"8c45":function(e,t,i){}});
//# sourceMappingURL=app.ff2baf28.js.map