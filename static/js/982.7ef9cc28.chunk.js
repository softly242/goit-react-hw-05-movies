"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[982],{4086:function(e,r,t){t.d(r,{Z:function(){return h}});var n=function(){function e(e){var r=this;this._insertTag=function(e){var t;t=0===r.tags.length?r.insertionPoint?r.insertionPoint.nextSibling:r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(e,t),r.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(r);try{t.insertRule(e,t.cssRules.length)}catch(n){0}}else r.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=t(1795),o=t(6100),i=t(8825),c=t(4132),s=t(8197),l=t(1287),u=function(e,r,t){for(var n=0,o=0;n=o,o=(0,a.fj)(),38===n&&12===o&&(r[t]=1),!(0,a.r)(o);)(0,a.lp)();return(0,a.tP)(e,a.FK)},f=function(e,r){return(0,a.cE)(function(e,r){var t=-1,n=44;do{switch((0,a.r)(n)){case 0:38===n&&12===(0,a.fj)()&&(r[t]=1),e[t]+=u(a.FK-1,r,t);break;case 2:e[t]+=(0,a.iF)(n);break;case 4:if(44===n){e[++t]=58===(0,a.fj)()?"&\f":"",r[t]=e[t].length;break}default:e[t]+=(0,o.Dp)(n)}}while(n=(0,a.lp)());return e}((0,a.un)(e),r))},p=new WeakMap,d=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===r.charCodeAt(0)||p.get(t))&&!n){p.set(e,!0);for(var a=[],o=f(r,a),i=t.props,c=0,s=0;c<o.length;c++)for(var l=0;l<i.length;l++,s++)e.props[s]=a[c]?o[c].replace(/&\f/g,i[l]):i[l]+" "+o[c]}}},y=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}};function m(e,r){switch((0,o.vp)(e,r)){case 5103:return i.G$+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return i.G$+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return i.G$+e+i.uj+e+i.MS+e+e;case 6828:case 4268:return i.G$+e+i.MS+e+e;case 6165:return i.G$+e+i.MS+"flex-"+e+e;case 5187:return i.G$+e+(0,o.gx)(e,/(\w+).+(:[^]+)/,i.G$+"box-$1$2"+i.MS+"flex-$1$2")+e;case 5443:return i.G$+e+i.MS+"flex-item-"+(0,o.gx)(e,/flex-|-self/,"")+e;case 4675:return i.G$+e+i.MS+"flex-line-pack"+(0,o.gx)(e,/align-content|flex-|-self/,"")+e;case 5548:return i.G$+e+i.MS+(0,o.gx)(e,"shrink","negative")+e;case 5292:return i.G$+e+i.MS+(0,o.gx)(e,"basis","preferred-size")+e;case 6060:return i.G$+"box-"+(0,o.gx)(e,"-grow","")+i.G$+e+i.MS+(0,o.gx)(e,"grow","positive")+e;case 4554:return i.G$+(0,o.gx)(e,/([^-])(transform)/g,"$1"+i.G$+"$2")+e;case 6187:return(0,o.gx)((0,o.gx)((0,o.gx)(e,/(zoom-|grab)/,i.G$+"$1"),/(image-set)/,i.G$+"$1"),e,"")+e;case 5495:case 3959:return(0,o.gx)(e,/(image-set\([^]*)/,i.G$+"$1$`$1");case 4968:return(0,o.gx)((0,o.gx)(e,/(.+:)(flex-)?(.*)/,i.G$+"box-pack:$3"+i.MS+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+i.G$+e+e;case 4095:case 3583:case 4068:case 2532:return(0,o.gx)(e,/(.+)-inline(.+)/,i.G$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if((0,o.to)(e)-1-r>6)switch((0,o.uO)(e,r+1)){case 109:if(45!==(0,o.uO)(e,r+4))break;case 102:return(0,o.gx)(e,/(.+:)(.+)-([^]+)/,"$1"+i.G$+"$2-$3$1"+i.uj+(108==(0,o.uO)(e,r+3)?"$3":"$2-$3"))+e;case 115:return~(0,o.Cw)(e,"stretch")?m((0,o.gx)(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==(0,o.uO)(e,r+1))break;case 6444:switch((0,o.uO)(e,(0,o.to)(e)-3-(~(0,o.Cw)(e,"!important")&&10))){case 107:return(0,o.gx)(e,":",":"+i.G$)+e;case 101:return(0,o.gx)(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+i.G$+(45===(0,o.uO)(e,14)?"inline-":"")+"box$3$1"+i.G$+"$2$3$1"+i.MS+"$2box$3")+e}break;case 5936:switch((0,o.uO)(e,r+11)){case 114:return i.G$+e+i.MS+(0,o.gx)(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return i.G$+e+i.MS+(0,o.gx)(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return i.G$+e+i.MS+(0,o.gx)(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return i.G$+e+i.MS+e+e}return e}var g=[function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case i.h5:e.return=m(e.value,e.length);break;case i.lK:return(0,c.q)([(0,a.JG)(e,{value:(0,o.gx)(e.value,"@","@"+i.G$)})],n);case i.Fr:if(e.length)return(0,o.$e)(e.props,(function(r){switch((0,o.EQ)(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return(0,c.q)([(0,a.JG)(e,{props:[(0,o.gx)(r,/:(read-\w+)/,":"+i.uj+"$1")]})],n);case"::placeholder":return(0,c.q)([(0,a.JG)(e,{props:[(0,o.gx)(r,/:(plac\w+)/,":"+i.G$+"input-$1")]}),(0,a.JG)(e,{props:[(0,o.gx)(r,/:(plac\w+)/,":"+i.uj+"$1")]}),(0,a.JG)(e,{props:[(0,o.gx)(r,/:(plac\w+)/,i.MS+"input-$1")]})],n)}return""}))}}],h=function(e){var r=e.key;if("css"===r){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||g;var o,i,u={},f=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),(function(e){for(var r=e.getAttribute("data-emotion").split(" "),t=1;t<r.length;t++)u[r[t]]=!0;f.push(e)}));var p=[d,y];var m,h=[c.P,(0,s.cD)((function(e){m.insert(e)}))],b=(0,s.qR)(p.concat(a,h));i=function(e,r,t,n){var a;m=t,a=e?e+"{"+r.styles+"}":r.styles,(0,c.q)((0,l.MY)(a),b),n&&(v.inserted[r.name]=!0)};var v={key:r,sheet:new n({key:r,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:u,registered:{},insert:i};return v.sheet.hydrate(f),v}},7666:function(e,r,t){t.d(r,{O:function(){return y}});var n=t(8952),a=t(9797),o=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!==typeof e},l=(0,a.Z)((function(e){return c(e)?e:e.replace(o,"-$&").toLowerCase()})),u=function(e,r){switch(e){case"animation":case"animationName":if("string"===typeof r)return r.replace(i,(function(e,r,t){return p={name:r,styles:t,next:p},r}))}return 1===n.Z[e]||c(e)||"number"!==typeof r||0===r?r:r+"px"};function f(e,r,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return p={name:t.name,styles:t.styles,next:p},t.name;if(void 0!==t.styles){var n=t.next;if(void 0!==n)for(;void 0!==n;)p={name:n.name,styles:n.styles,next:p},n=n.next;return t.styles+";"}return function(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=f(e,r,t[a])+";";else for(var o in t){var i=t[o];if("object"!==typeof i)null!=r&&void 0!==r[i]?n+=o+"{"+r[i]+"}":s(i)&&(n+=l(o)+":"+u(o,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=r&&void 0!==r[i[0]]){var c=f(e,r,i);switch(o){case"animation":case"animationName":n+=l(o)+":"+c+";";break;default:n+=o+"{"+c+"}"}}else for(var p=0;p<i.length;p++)s(i[p])&&(n+=l(o)+":"+u(o,i[p])+";")}return n}(e,r,t);case"function":if(void 0!==e){var a=p,o=t(e);return p=a,f(e,r,o)}}if(null==r)return t;var i=r[t];return void 0!==i?i:t}var p,d=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var y=function(e,r,t){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";p=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,a+=f(t,r,o)):a+=o[0];for(var i=1;i<e.length;i++)a+=f(t,r,e[i]),n&&(a+=o[i]);d.lastIndex=0;for(var c,s="";null!==(c=d.exec(a));)s+="-"+c[1];var l=function(e){for(var r,t=0,n=0,a=e.length;a>=4;++n,a-=4)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(r>>>16)<<16),t=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(a){case 3:t^=(255&e.charCodeAt(n+2))<<16;case 2:t^=(255&e.charCodeAt(n+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(n)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)}(a)+s;return{name:l,styles:a,next:p}}},5438:function(e,r,t){t.d(r,{My:function(){return a},fp:function(){return n}});function n(e,r,t){var n="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]+";"):n+=t+" "})),n}var a=function(e,r,t){!function(e,r,t){var n=e.key+"-"+r.name;!1===t&&void 0===e.registered[n]&&(e.registered[n]=r.styles)}(e,r,t);var n=e.key+"-"+r.name;if(void 0===e.inserted[r.name]){var a=r;do{e.insert(r===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}},8044:function(e,r,t){t.d(r,{x:function(){return R}});var n=t(7762),a=t(2791),o=t(9249),i=t(910),c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function u(e){var r=e,t=r.m,a=r.mx,o=r.my,u=r.mt,f=r.mb,p=r.ml,d=r.mr,y=r.p,m=r.px,g=r.py,h=r.pt,b=r.pb,v=r.pl,k=r.pr,S=r.bg,w=r.c,x=r.opacity,O=r.ff,j=r.fz,$=r.fw,z=r.lts,A=r.ta,C=r.lh,P=r.fs,G=r.tt,E=r.td,Z=r.w,N=r.miw,M=r.maw,T=r.h,R=r.mih,I=r.mah,F=r.bgsz,W=r.bgp,_=r.bgr,H=r.bga,B=r.pos,L=r.top,D=r.left,q=r.bottom,J=r.right,U=r.inset,K=r.display,V=function(e,r){var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c){var o,i=(0,n.Z)(c(e));try{for(i.s();!(o=i.n()).done;)a=o.value,r.indexOf(a)<0&&l.call(e,a)&&(t[a]=e[a])}catch(u){i.e(u)}finally{i.f()}}return t}(r,["m","mx","my","mt","mb","ml","mr","p","px","py","pt","pb","pl","pr","bg","c","opacity","ff","fz","fw","lts","ta","lh","fs","tt","td","w","miw","maw","h","mih","mah","bgsz","bgp","bgr","bga","pos","top","left","bottom","right","inset","display"]);return{systemStyles:(0,i.L)({m:t,mx:a,my:o,mt:u,mb:f,ml:p,mr:d,p:y,px:m,py:g,pt:h,pb:b,pl:v,pr:k,bg:S,c:w,opacity:x,ff:O,fz:j,fw:$,lts:z,ta:A,lh:C,fs:P,tt:G,td:E,w:Z,miw:N,maw:M,h:T,mih:R,mah:I,bgsz:F,bgp:W,bgr:_,bga:H,pos:B,top:L,left:D,bottom:q,right:J,inset:U,display:K}),rest:V}}var f=t(7718),p=t(1167),d=t(4942),y=t(3433),m=t(2969),g=t(7653);function h(e){var r=e.value,t=e.theme,n=e.getValue,a=e.property;if(null!=r){if("object"===typeof r){var o=function(e,r){var t=Object.keys(e).filter((function(e){return"base"!==e})).sort((function(e,t){return(0,m.oI)((0,g.a)({size:e,sizes:r.breakpoints}))-(0,m.oI)((0,g.a)({size:t,sizes:r.breakpoints}))}));return"base"in e?["base"].concat((0,y.Z)(t)):t}(r,t).reduce((function(e,o){if("base"===o&&void 0!==r.base){var i=n(r.base,t);return Array.isArray(a)?(a.forEach((function(r){e[r]=i})),e):(e[a]=i,e)}var c=n(r[o],t);return Array.isArray(a)?(e[t.fn.largerThan(o)]={},a.forEach((function(r){e[t.fn.largerThan(o)][r]=c})),e):(e[t.fn.largerThan(o)]=(0,d.Z)({},a,c),e)}),{});return o}var i=n(r,t);return Array.isArray(a)?a.reduce((function(e,r){return e[r]=i,e}),{}):(0,d.Z)({},a,i)}}var b=t(5431);var v=["-xs","-sm","-md","-lg","-xl"];var k={identity:function(e){return e},color:function(e,r){return"dimmed"===e?"dark"===r.colorScheme?r.colors.dark[2]:r.colors.gray[6]:r.fn.variant({variant:"filled",color:e,primaryFallback:!1}).background},size:function(e){return(0,b.h)(e)},fontSize:function(e,r){return(0,g.a)({size:e,sizes:r.fontSizes})},spacing:function(e,r){return v.includes(e)?"calc(".concat((0,g.a)({size:e.replace("-",""),sizes:r.spacing})," * -1)"):(0,g.a)({size:e,sizes:r.spacing})}},S={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},mx:{type:"spacing",property:["marginRight","marginLeft"]},my:{type:"spacing",property:["marginTop","marginBottom"]},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},px:{type:"spacing",property:["paddingRight","paddingLeft"]},py:{type:"spacing",property:["paddingTop","paddingBottom"]},bg:{type:"color",property:"background"},c:{type:"color",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"identity",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"identity",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"}},w=Object.defineProperty,x=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,$=function(e,r,t){return r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},z=function(e,r){for(var t in r||(r={}))O.call(r,t)&&$(e,t,r[t]);if(x){var a,o=(0,n.Z)(x(r));try{for(o.s();!(a=o.n()).done;){t=a.value;j.call(r,t)&&$(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e};function A(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S,n=Object.keys(t).reduce((function(n,a){return a in e&&void 0!==e[a]&&n.push(h({value:e[a],getValue:k[t[a].type],property:t[a].property,theme:r})),n}),[]);return n.reduce((function(e,r){return Object.keys(r).forEach((function(t){"object"===typeof r[t]&&null!==r[t]?e[t]=t in e?z(z({},e[t]),r[t]):r[t]:e[t]=r[t]})),e}),{})}function C(e,r){return"function"===typeof e?e(r):e}function P(e,r,t){var n=(0,f.rZ)(),a=(0,p.Z)(),o=a.css,i=a.cx;return Array.isArray(e)?i(t,o(A(r,n)),e.map((function(e){return o(C(e,n))}))):i(t,o(C(e,n)),o(A(r,n)))}var G=Object.defineProperty,E=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,M=function(e,r,t){return r in e?G(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},T=(0,a.forwardRef)((function(e,r){var t=e,o=t.className,i=t.component,c=t.style,s=t.sx,l=u(function(e,r){var t={};for(var a in e)Z.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&E){var o,i=(0,n.Z)(E(e));try{for(i.s();!(o=i.n()).done;)a=o.value,r.indexOf(a)<0&&N.call(e,a)&&(t[a]=e[a])}catch(c){i.e(c)}finally{i.f()}}return t}(t,["className","component","style","sx"])),f=l.systemStyles,p=l.rest,d=i||"div";return a.createElement(d,function(e,r){for(var t in r||(r={}))Z.call(r,t)&&M(e,t,r[t]);if(E){var a,o=(0,n.Z)(E(r));try{for(o.s();!(a=o.n()).done;)t=a.value,N.call(r,t)&&M(e,t,r[t])}catch(i){o.e(i)}finally{o.f()}}return e}({ref:r,className:P(s,f,o),style:c},p))}));T.displayName="@mantine/core/Box";var R=(0,o.F)(T)},9982:function(e,r,t){t.d(r,{x:function(){return G}});var n=t(4942),a=t(7762),o=t(2791),i=t(7718),c=t(9249),s=t(7581),l=t(7653),u=Object.defineProperty,f=Object.defineProperties,p=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=function(e,r,t){return r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},h=function(e,r){for(var t in r||(r={}))y.call(r,t)&&g(e,t,r[t]);if(d){var n,o=(0,a.Z)(d(r));try{for(o.s();!(n=o.n()).done;){t=n.value;m.call(r,t)&&g(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e};function b(e){var r=e.underline,t=e.strikethrough,n=[];return r&&n.push("underline"),t&&n.push("line-through"),n.length>0?n.join(" "):"none"}function v(e){var r=e.theme,t=e.color;return"dimmed"===t?r.fn.dimmed():"string"===typeof t&&(t in r.colors||t.split(".")[0]in r.colors)?r.fn.variant({variant:"filled",color:t}).background:t||"inherit"}function k(e){return"number"===typeof e?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:e,WebkitBoxOrient:"vertical"}:null}function S(e){var r=e.theme,t=e.truncate;return"start"===t?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",direction:"ltr"===r.dir?"rtl":"ltr",textAlign:"ltr"===r.dir?"right":"left"}:t?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null}var w=(0,s.k)((function(e,r,t){var n,a,o=r.color,i=r.lineClamp,c=r.truncate,s=r.inline,u=r.inherit,d=r.underline,y=r.gradient,m=r.weight,g=r.transform,w=r.align,x=r.strikethrough,O=r.italic,j=t.size,$=e.fn.variant({variant:"gradient",gradient:y});return{root:(n=h(h(h(h({},e.fn.fontStyles()),e.fn.focusStyles()),k(i)),S({theme:e,truncate:c})),a={color:v({color:o,theme:e}),fontFamily:u?"inherit":e.fontFamily,fontSize:u||void 0===j?"inherit":(0,l.a)({size:j,sizes:e.fontSizes}),lineHeight:u?"inherit":s?1:e.lineHeight,textDecoration:b({underline:d,strikethrough:x}),WebkitTapHighlightColor:"transparent",fontWeight:u?"inherit":m,textTransform:g,textAlign:w,fontStyle:O?"italic":void 0},f(n,p(a))),gradient:{backgroundImage:$.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}})),x=t(8044),O=Object.defineProperty,j=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,A=function(e,r,t){return r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},C={variant:"text"},P=(0,o.forwardRef)((function(e,r){var t=(0,i.N4)("Text",C,e),c=t.className,s=t.size,l=t.weight,u=t.transform,f=t.color,p=t.align,d=t.variant,y=t.lineClamp,m=t.truncate,g=t.gradient,h=t.inline,b=t.inherit,v=t.underline,k=t.strikethrough,S=t.italic,O=(t.classNames,t.styles,t.unstyled),P=t.span,G=t.__staticSelector,E=function(e,r){var t={};for(var n in e)$.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&j){var o,i=(0,a.Z)(j(e));try{for(i.s();!(o=i.n()).done;)n=o.value,r.indexOf(n)<0&&z.call(e,n)&&(t[n]=e[n])}catch(c){i.e(c)}finally{i.f()}}return t}(t,["className","size","weight","transform","color","align","variant","lineClamp","truncate","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span","__staticSelector"]),Z=w({color:f,lineClamp:y,truncate:m,inline:h,inherit:b,underline:v,strikethrough:k,italic:S,weight:l,transform:u,align:p,gradient:g},{unstyled:O,name:G||"Text",variant:d,size:s}),N=Z.classes,M=Z.cx;return o.createElement(x.x,function(e,r){for(var t in r||(r={}))$.call(r,t)&&A(e,t,r[t]);if(j){var n,o=(0,a.Z)(j(r));try{for(o.s();!(n=o.n()).done;)t=n.value,z.call(r,t)&&A(e,t,r[t])}catch(i){o.e(i)}finally{o.f()}}return e}({ref:r,className:M(N.root,(0,n.Z)({},N.gradient,"gradient"===d),c),component:P?"span":"div"},E))}));P.displayName="@mantine/core/Text";var G=(0,c.F)(P)},7718:function(e,r,t){t.d(r,{N4:function(){return J},T1:function(){return q},O2:function(){return D},rZ:function(){return L}});var n=t(7762),a=t(2791),o=t.t(a,2),i=t(4086);t(7666);var c=!!o.useInsertionEffect&&o.useInsertionEffect,s=(c||a.useLayoutEffect,a.createContext("undefined"!==typeof HTMLElement?(0,i.Z)({key:"css"}):null));s.Provider;t(5438),t(2110);var l={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]};var u=t(4942),f=Object.defineProperty,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,m=function(e,r,t){return r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},g=function(e,r){for(var t in r||(r={}))d.call(r,t)&&m(e,t,r[t]);if(p){var a,o=(0,n.Z)(p(r));try{for(o.s();!(a=o.n()).done;){t=a.value;y.call(r,t)&&m(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e};var h=t(9439);function b(e){return function(r){return"number"===typeof e.primaryShade?e.primaryShade:e.primaryShade[r||e.colorScheme]}}function v(e){var r=b(e);return function(t,n){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if("string"===typeof t&&t.includes(".")){var i=t.split("."),c=(0,h.Z)(i,2),s=c[0],l=c[1],u=parseInt(l,10);if(s in e.colors&&u>=0&&u<10)return e.colors[s]["number"!==typeof n||o?u:n]}var f="number"===typeof n?n:r();return t in e.colors?e.colors[t][f]:a?e.colors[e.primaryColor][f]:t}}function k(e){for(var r="",t=1;t<e.length-1;t+=1)r+="".concat(e[t]," ").concat(t/(e.length-1)*100,"%, ");return"".concat(e[0]," 0%, ").concat(r).concat(e[e.length-1]," 100%")}function S(e){var r=v(e),t=b(e);return function(n){var a={from:(null==n?void 0:n.from)||e.defaultGradient.from,to:(null==n?void 0:n.to)||e.defaultGradient.to,deg:(null==n?void 0:n.deg)||e.defaultGradient.deg};return"linear-gradient(".concat(a.deg,"deg, ").concat(r(a.from,t(),!1)," 0%, ").concat(r(a.to,t(),!1)," 100%)")}}var w=t(2969);function x(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)?function(e){var r=e.replace("#","");if(3===r.length){var t=r.split("");r=[t[0],t[0],t[1],t[1],t[2],t[2]].join("")}var n=parseInt(r,16);return{r:n>>16&255,g:n>>8&255,b:255&n,a:1}}(e):e.startsWith("rgb")?function(e){var r=e.replace(/[^0-9,.]/g,"").split(",").map(Number),t=(0,h.Z)(r,4);return{r:t[0],g:t[1],b:t[2],a:t[3]||1}}(e):{r:0,g:0,b:0,a:1}}function O(e,r){if("string"!==typeof e||r>1||r<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var(--"))return e;var t=x(e),n=t.r,a=t.g,o=t.b;return"rgba(".concat(n,", ").concat(a,", ").concat(o,", ").concat(r,")")}var j=t(5431);var $={fontStyles:function(e){return function(){return{fontFamily:e.fontFamily||"sans-serif"}}},themeColor:v,focusStyles:function(e){return function(r){var t;return t={WebkitTapHighlightColor:"transparent"},(0,u.Z)(t,r||"&:focus",g({},"always"===e.focusRing||"auto"===e.focusRing?e.focusRingStyles.styles(e):e.focusRingStyles.resetStyles(e))),(0,u.Z)(t,r?r.replace(":focus",":focus:not(:focus-visible)"):"&:focus:not(:focus-visible)",g({},"auto"===e.focusRing||"never"===e.focusRing?e.focusRingStyles.resetStyles(e):null)),t}},linearGradient:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return"linear-gradient(".concat(e,"deg, ").concat(k(t),")")},radialGradient:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return"radial-gradient(circle, ".concat(k(r),")")},smallerThan:w.I4,largerThan:w.u4,rgba:O,cover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{position:"absolute",top:(0,j.h)(e),right:(0,j.h)(e),left:(0,j.h)(e),bottom:(0,j.h)(e)}},darken:function(e,r){if("string"===typeof e&&e.startsWith("var(--"))return e;var t=x(e),n=t.r,a=t.g,o=t.b,i=t.a,c=1-r,s=function(e){return Math.round(e*c)};return"rgba(".concat(s(n),", ").concat(s(a),", ").concat(s(o),", ").concat(i,")")},lighten:function(e,r){if("string"===typeof e&&e.startsWith("var(--"))return e;var t=x(e),n=t.r,a=t.g,o=t.b,i=t.a,c=function(e){return Math.round(e+(255-e)*r)};return"rgba(".concat(c(n),", ").concat(c(a),", ").concat(c(o),", ").concat(i,")")},radius:function(e){return function(r){if("number"===typeof r)return(0,j.h)(r);var t="number"===typeof e.defaultRadius?e.defaultRadius:e.radius[e.defaultRadius]||e.defaultRadius;return e.radius[r]||r||t}},variant:function(e){var r=v(e),t=b(e),n=S(e);return function(a){var o=a.variant,i=a.color,c=a.gradient,s=a.primaryFallback,l=function(e,r){if("string"===typeof e&&e.includes(".")){var t=e.split("."),n=(0,h.Z)(t,2),a=n[0],o=n[1],i=parseInt(o,10);if(a in r.colors&&i>=0&&i<10)return{isSplittedColor:!0,key:a,shade:i}}return{isSplittedColor:!1}}(i,e);switch(o){case"light":return{border:"transparent",background:O(r(i,"dark"===e.colorScheme?8:0,s,!1),"dark"===e.colorScheme?.2:1),color:"dark"===i?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:r(i,"dark"===e.colorScheme?2:t("light")),hover:O(r(i,"dark"===e.colorScheme?7:1,s,!1),"dark"===e.colorScheme?.25:.65)};case"subtle":return{border:"transparent",background:"transparent",color:"dark"===i?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:r(i,"dark"===e.colorScheme?2:t("light")),hover:O(r(i,"dark"===e.colorScheme?8:0,s,!1),"dark"===e.colorScheme?.2:1)};case"outline":return{border:r(i,"dark"===e.colorScheme?5:t("light")),background:"transparent",color:r(i,"dark"===e.colorScheme?5:t("light")),hover:"dark"===e.colorScheme?O(r(i,5,s,!1),.05):O(r(i,0,s,!1),.35)};case"default":return{border:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4],background:"dark"===e.colorScheme?e.colors.dark[6]:e.white,color:"dark"===e.colorScheme?e.white:e.black,hover:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[0]};case"white":return{border:"transparent",background:e.white,color:r(i,t()),hover:null};case"transparent":return{border:"transparent",color:"dark"===i?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:r(i,"dark"===e.colorScheme?2:t("light")),background:"transparent",hover:null};case"gradient":return{background:n(c),color:e.white,border:"transparent",hover:null};default:var u=t(),f=l.isSplittedColor?l.shade:u,p=l.isSplittedColor?l.key:i;return{border:"transparent",background:r(p,f,s),color:e.white,hover:r(p,9===f?8:f+1)}}}},primaryShade:b,hover:function(e){return{"@media (hover: hover)":{"&:hover":e},"@media (hover: none)":{"&:active":e}}},gradient:S,primaryColor:function(e){return function(r){var t=b(e)(r);return e.colors[e.primaryColor][t]}},placeholderStyles:function(e){return function(){return{userSelect:"none",color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]}}},dimmed:function(e){return function(){return"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]}}},z=Object.defineProperty,A=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,Z=function(e,r,t){return r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t};function N(e){return r=function(e,r){for(var t in r||(r={}))G.call(r,t)&&Z(e,t,r[t]);if(P){var a,o=(0,n.Z)(P(r));try{for(o.s();!(a=o.n()).done;)t=a.value,E.call(r,t)&&Z(e,t,r[t])}catch(i){o.e(i)}finally{o.f()}}return e}({},e),t={fn:{fontStyles:$.fontStyles(e),themeColor:$.themeColor(e),focusStyles:$.focusStyles(e),largerThan:$.largerThan(e),smallerThan:$.smallerThan(e),radialGradient:$.radialGradient,linearGradient:$.linearGradient,gradient:$.gradient(e),rgba:$.rgba,cover:$.cover,lighten:$.lighten,darken:$.darken,primaryShade:$.primaryShade(e),radius:$.radius(e),variant:$.variant(e),hover:$.hover,primaryColor:$.primaryColor(e),placeholderStyles:$.placeholderStyles(e),dimmed:$.dimmed(e)}},A(r,C(t));var r,t}Object.keys(l);var M=N({dir:"ltr",primaryShade:{light:6,dark:8},focusRing:"auto",loader:"oval",colorScheme:"light",white:"#fff",black:"#000",defaultRadius:"sm",transitionTimingFunction:"ease",colors:l,lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"blue",respectReducedMotion:!0,cursorType:"default",defaultGradient:{from:"indigo",to:"cyan",deg:45},shadows:{xs:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",sm:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",md:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",lg:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",xl:"0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem"},radius:{xs:"0.125rem",sm:"0.25rem",md:"0.5rem",lg:"1rem",xl:"2rem"},spacing:{xs:"0.625rem",sm:"0.75rem",md:"1rem",lg:"1.25rem",xl:"1.5rem"},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},headings:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontWeight:700,sizes:{h1:{fontSize:"2.125rem",lineHeight:1.3,fontWeight:void 0},h2:{fontSize:"1.625rem",lineHeight:1.35,fontWeight:void 0},h3:{fontSize:"1.375rem",lineHeight:1.4,fontWeight:void 0},h4:{fontSize:"1.125rem",lineHeight:1.45,fontWeight:void 0},h5:{fontSize:"1rem",lineHeight:1.5,fontWeight:void 0},h6:{fontSize:"0.875rem",lineHeight:1.5,fontWeight:void 0}}},other:{},components:{},activeStyles:{transform:"translateY(0.0625rem)"},datesLocale:"en",globalStyles:void 0,focusRingStyles:{styles:function(e){return{outlineOffset:"0.125rem",outline:"0.125rem solid ".concat(e.colors[e.primaryColor]["dark"===e.colorScheme?7:5])}},resetStyles:function(){return{outline:"none"}},inputStyles:function(e){return{outline:"none",borderColor:e.colors[e.primaryColor]["object"===typeof e.primaryShade?e.primaryShade[e.colorScheme]:e.primaryShade]}}}});Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var T=t(910);"".concat((0,j.h)(1)," dotted ButtonText");var R=Object.defineProperty,I=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,_=function(e,r,t){return r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},H=function(e,r){for(var t in r||(r={}))F.call(r,t)&&_(e,t,r[t]);if(I){var a,o=(0,n.Z)(I(r));try{for(o.s();!(a=o.n()).done;){t=a.value;W.call(r,t)&&_(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e},B=(0,a.createContext)({theme:M});function L(){var e;return(null==(e=(0,a.useContext)(B))?void 0:e.theme)||M}function D(e){var r=L(),t=function(e){var t,n,a,o;return{styles:(null==(t=r.components[e])?void 0:t.styles)||{},classNames:(null==(n=r.components[e])?void 0:n.classNames)||{},variants:null==(a=r.components[e])?void 0:a.variants,sizes:null==(o=r.components[e])?void 0:o.sizes}};return Array.isArray(e)?e.map(t):[t(e)]}function q(){var e;return null==(e=(0,a.useContext)(B))?void 0:e.emotionCache}function J(e,r,t){var n,a=L(),o=null==(n=a.components[e])?void 0:n.defaultProps,i="function"===typeof o?o(a):o;return H(H(H({},r),i),(0,T.L)(t))}},2969:function(e,r,t){t.d(r,{I4:function(){return c},oI:function(){return o},u4:function(){return i}});var n=t(5431),a=t(7653);function o(e){return"number"===typeof e?e:"string"===typeof e&&e.includes("rem")?16*Number(e.replace("rem","")):"string"===typeof e&&e.includes("em")?16*Number(e.replace("em","")):Number(e)}function i(e){return function(r){return"@media (min-width: ".concat((0,n.em)(o((0,a.a)({size:r,sizes:e.breakpoints}))),")")}}function c(e){return function(r){return"@media (max-width: ".concat((0,n.em)(o((0,a.a)({size:r,sizes:e.breakpoints}))-1),")")}}},910:function(e,r,t){function n(e){return Object.keys(e).reduce((function(r,t){return void 0!==e[t]&&(r[t]=e[t]),r}),{})}t.d(r,{L:function(){return n}})},7653:function(e,r,t){t.d(r,{a:function(){return a}});var n=t(5431);function a(e){var r=e.size,t=e.sizes,a=e.units;return r in t?t[r]:"number"===typeof r?"em"===a?(0,n.em)(r):(0,n.h)(r):r||t.md}},5431:function(e,r,t){function n(e){return function(r){if("number"===typeof r)return"".concat(r/16).concat(e);if("string"===typeof r){var t=r.replace("px","");if(!Number.isNaN(Number(t)))return"".concat(Number(t)/16).concat(e)}return r}}t.d(r,{em:function(){return o},h:function(){return a}});var a=n("rem"),o=n("em")},7581:function(e,r,t){t.d(r,{k:function(){return g}});var n=t(4942),a=t(7762),o=t(1167),i=t(7718);function c(e){var r=e.cx,t=e.classes,n=e.context,a=e.classNames,o=e.name,i=e.cache,c=n.reduce((function(e,r){return Object.keys(r.classNames).forEach((function(t){"string"!==typeof e[t]?e[t]="".concat(r.classNames[t]):e[t]="".concat(e[t]," ").concat(r.classNames[t])})),e}),{});return Object.keys(t).reduce((function(e,n){return e[n]=r(t[n],c[n],null!=a&&a[n],Array.isArray(o)?o.filter(Boolean).map((function(e){return"".concat((null==i?void 0:i.key)||"mantine","-").concat(e,"-").concat(n)})).join(" "):o?"".concat((null==i?void 0:i.key)||"mantine","-").concat(o,"-").concat(n):null),e}),{})}var s=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=function(e,r,t){return r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},d=function(e,r){for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(l){var n,o=(0,a.Z)(l(r));try{for(o.s();!(n=o.n()).done;){t=n.value;f.call(r,t)&&p(e,t,r[t])}}catch(i){o.e(i)}finally{o.f()}}return e};function y(e,r){return r&&Object.keys(r).forEach((function(t){e[t]?e[t]=d(d({},e[t]),r[t]):e[t]=d({},r[t])})),e}function m(e,r,t,n){var a=function(e){return"function"===typeof e?e(r,t||{},n):e||{}};return Array.isArray(e)?e.map((function(e){return a(e.styles)})).reduce((function(e,r){return y(e,r)}),{}):a(e)}function g(e){var r="function"===typeof e?e:function(){return e};return function(e,t){var a=(0,i.rZ)(),s=(0,i.O2)(null==t?void 0:t.name),l=(0,i.T1)(),u={variant:null==t?void 0:t.variant,size:null==t?void 0:t.size},f=(0,o.Z)(),p=f.css,d=f.cx,g=r(a,e,u),h=m(null==t?void 0:t.styles,a,e,u),b=m(s,a,e,u),v=function(e){var r=e.ctx,t=e.theme,n=e.params,a=e.variant,o=e.size;return r.reduce((function(e,r){return r.variants&&a in r.variants&&y(e,r.variants[a](t,n,{variant:a,size:o})),r.sizes&&o in r.sizes&&y(e,r.sizes[o](t,n,{variant:a,size:o})),e}),{})}({ctx:s,theme:a,params:e,variant:null==t?void 0:t.variant,size:null==t?void 0:t.size}),k=Object.fromEntries(Object.keys(g).map((function(e){return[e,d((0,n.Z)({},p(g[e]),!(null==t?void 0:t.unstyled)),p(v[e]),p(b[e]),p(h[e]))]})));return{classes:c({cx:d,classes:k,context:s,classNames:null==t?void 0:t.classNames,name:null==t?void 0:t.name,cache:l}),cx:d,theme:a}}}},1167:function(e,r,t){t.d(r,{Z:function(){return w}});var n=t(9439),a=t(7762);function o(e){var r,t,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=o(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function i(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=o(e))&&(n&&(n+=" "),n+=r);return n}var c=t(7666),s=t(5438),l=t(3433),u=t(2791);var f=(0,t(4086).Z)({key:"mantine",prepend:!0}),p=t(7718);var d=Object.defineProperty,y=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=function(e,r,t){return r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},b="ref";function v(e){var r;if(1!==e.length)return{args:e,ref:r};var t=(0,n.Z)(e,1)[0];if(!(t instanceof Object))return{args:e,ref:r};if(!(b in t))return{args:e,ref:r};r=t.ref;var o=function(e,r){for(var t in r||(r={}))m.call(r,t)&&h(e,t,r[t]);if(y){var n,o=(0,a.Z)(y(r));try{for(o.s();!(n=o.n()).done;)t=n.value,g.call(r,t)&&h(e,t,r[t])}catch(i){o.e(i)}finally{o.f()}}return e}({},t);return delete o.ref,{args:[o],ref:r}}var k=function(){function e(e,r,t){var n=[],a=(0,s.fp)(e,n,t);return n.length<2?t:a+r(n)}return{cssFactory:function(r){var t=r.cache,n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=v(r),o=a.ref,i=a.args,l=(0,c.O)(i,t.registered);return(0,s.My)(t,l,!1),"".concat(t.key,"-").concat(l.name).concat(void 0===o?"":" ".concat(o))};return{css:n,cx:function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e(t.registered,n,i(a))}}}}}(),S=k.cssFactory;function w(){var e=(0,p.T1)()||f;return function(e,r){var t=(0,u.useRef)();return(!t.current||r.length!==t.current.prevDeps.length||t.current.prevDeps.map((function(e,t){return e===r[t]})).indexOf(!1)>=0)&&(t.current={v:e(),prevDeps:(0,l.Z)(r)}),t.current.v}((function(){return S({cache:e})}),[e])}},9249:function(e,r,t){function n(e){return e}t.d(r,{F:function(){return n}})},4942:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(9142);function a(e,r,t){return(r=(0,n.Z)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}}}]);
//# sourceMappingURL=982.7ef9cc28.chunk.js.map