/* Copyright 2011 Google Inc. All Rights Reserved. */ (function(){function h(a){throw a;}
var i=void 0,j=!0,k=null,l=!1,n,aa=aa||{},o=this,ba=function(a){for(var a=a.split("."),b=o,c;c=a.shift();)if(b[c]!=k)b=b[c];else return k;return b},ca=function(){},q=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},t=function(a){var b=q(a);return"array"==b||"object"==b&&"number"==typeof a.length},v=function(a){return"string"==typeof a},da=function(a){var b=typeof a;return"object"==b&&a!=k||"function"==b},ga=function(a){return a[ea]||(a[ea]=++fa)},ea="closure_uid_"+Math.floor(2147483648*
Math.random()).toString(36),fa=0,ha=function(a,b,c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){a||h(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return w.apply(k,arguments)},
ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}},la=Date.now||function(){return+new Date},x=function(a,b){var c=a.split("."),d=o;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==i?d[f]=b:d=d[f]?d[f]:d[f]={}},y=function(a,b){function c(){}c.prototype=b.prototype;a.da=b.prototype;a.prototype=new c};
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return w.apply(k,c)}return w(this,a)};var ma=function(a){this.stack=Error().stack||"";a&&(this.message=""+a)};y(ma,Error);ma.prototype.name="CustomError";var z=function(a,b){for(var c=1;c<arguments.length;c++)var d=(""+arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a},na=/^[a-zA-Z0-9\-_.!~*'()]*$/,oa=function(a){a=""+a;return!na.test(a)?encodeURIComponent(a):a},A=function(a){if(!pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ta,"&quot;"));return a},qa=/&/g,ra=/</g,sa=/>/g,ta=/\"/g,pa=/[&<>\"]/;var ua=function(a,b){b.unshift(a);ma.call(this,z.apply(k,b));b.shift()};y(ua,ma);ua.prototype.name="AssertionError";var va=function(a,b,c){if(!a){var d=Array.prototype.slice.call(arguments,2),f="Assertion failed";if(b)var f=f+(": "+b),e=d;h(new ua(""+f,e||[]))}},wa=function(a,b){h(new ua("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};var C=Array.prototype,xa=C.indexOf?function(a,b,c){va(a.length!=k);return C.indexOf.call(a,b,c)}:function(a,b,c){c=c==k?0:0>c?Math.max(0,a.length+c):c;if(v(a))return!v(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=C.forEach?function(a,b,c){va(a.length!=k);C.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=v(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},za=function(a){return C.concat.apply(C,arguments)},Aa=function(a){if("array"==
q(a))return za(a);for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b},Ba=function(a,b,c){va(a.length!=k);return 2>=arguments.length?C.slice.call(a,b):C.slice.call(a,b,c)};var D=function(a,b){this.width=a;this.height=b};D.prototype.oa=function(){return new D(this.width,this.height)};D.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};D.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};D.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Ca=function(a,b){for(var c in a)b.call(i,a[c],c,a)},Da=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ea=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Fa="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),Ga=function(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<Fa.length;e++)c=Fa[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var E,Ha,Ia,Ja,Ka=function(){return o.navigator?o.navigator.userAgent:k};Ja=Ia=Ha=E=l;var La;if(La=Ka()){var Ma=o.navigator;E=0==La.indexOf("Opera");Ha=!E&&-1!=La.indexOf("MSIE");Ia=!E&&-1!=La.indexOf("WebKit");Ja=!E&&!Ia&&"Gecko"==Ma.product}var Na=E,F=Ha,G=Ja,H=Ia,Oa;
a:{var Pa="",Qa;if(Na&&o.opera)var Ra=o.opera.version,Pa="function"==typeof Ra?Ra():Ra;else if(G?Qa=/rv\:([^\);]+)(\)|;)/:F?Qa=/MSIE\s+([^\);]+)(\)|;)/:H&&(Qa=/WebKit\/(\S+)/),Qa)var Sa=Qa.exec(Ka()),Pa=Sa?Sa[1]:"";if(F){var Ta,Ua=o.document;Ta=Ua?Ua.documentMode:i;if(Ta>parseFloat(Pa)){Oa=""+Ta;break a}}Oa=Pa}
var Va=Oa,Wa={},I=function(a){var b;if(!(b=Wa[a])){b=0;for(var c=(""+Va).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=(""+a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",m=d[e]||"",s=RegExp("(\\d*)(\\D*)","g"),r=RegExp("(\\d*)(\\D*)","g");do{var u=s.exec(g)||["","",""],p=r.exec(m)||["","",""];if(0==u[0].length&&0==p[0].length)break;b=((0==u[1].length?0:parseInt(u[1],10))<(0==p[1].length?0:parseInt(p[1],10))?-1:(0==u[1].length?
0:parseInt(u[1],10))>(0==p[1].length?0:parseInt(p[1],10))?1:0)||((0==u[2].length)<(0==p[2].length)?-1:(0==u[2].length)>(0==p[2].length)?1:0)||(u[2]<p[2]?-1:u[2]>p[2]?1:0)}while(0==b)}b=Wa[a]=0<=b}return b},Xa={},Ya=function(){return Xa[9]||(Xa[9]=F&&!!document.documentMode&&9<=document.documentMode)};var Za=!F||Ya();!G&&!F||F&&Ya()||G&&I("1.9.1");F&&I("9");var $a=function(a,b){var c;c=a.className;c=v(c)&&c.match(/\S+/g)||[];for(var d=Ba(arguments,1),f=c.length+d.length,e=c,g=0;g<d.length;g++)0<=xa(e,d[g])||e.push(d[g]);a.className=c.join(" ");return c.length==f};var ab=function(a,b,c){c=c||document;a=a&&"*"!=a?a.toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(!H||"CSS1Compat"==document.compatMode||I("528"))&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},f=0,e=0,g;g=c[e];e++)a==g.nodeName&&(d[f++]=g);d.length=f;return d}return c}c=c.getElementsByTagName(a||"*");if(b){d={};for(e=f=0;g=c[e];e++)a=g.className,"function"==typeof a.split&&0<=xa(a.split(/\s+/),b)&&(d[f++]=
g);d.length=f;return d}return c},cb=function(a,b){Ca(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in bb?a.setAttribute(bb[d],b):0==d.lastIndexOf("aria-",0)?a.setAttribute(d,b):a[d]=b})},bb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"},J=function(a,b,c){var d=arguments,f=document,e=d[0],
g=d[1];if(!Za&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',A(g.name),'"');if(g.type){e.push(' type="',A(g.type),'"');var m={};Ga(m,g);g=m;delete g.type}e.push(">");e=e.join("")}e=f.createElement(e);g&&(v(g)?e.className=g:"array"==q(g)?$a.apply(k,[e].concat(g)):cb(e,g));2<d.length&&db(f,e,d);return e},db=function(a,b,c){function d(c){c&&b.appendChild(v(c)?a.createTextNode(c):c)}for(var f=2;f<c.length;f++){var e=c[f];if(t(e)&&!(da(e)&&0<e.nodeType)){var g;a:{if(e&&"number"==typeof e.length){if(da(e)){g=
"function"==typeof e.item||"string"==typeof e.item;break a}if("function"==q(e)){g="function"==typeof e.item;break a}}g=l}ya(g?Aa(e):e,d)}else d(e)}},eb=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};var fb="StopIteration"in o?o.StopIteration:Error("StopIteration"),gb=function(){};gb.prototype.next=function(){h(fb)};gb.prototype.eb=function(){return this};var hb=function(a){if("function"==typeof a.Q)return a.Q();if(v(a))return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Da(a)},ib=function(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(t(a)||v(a))ya(a,b,c);else{var d;if("function"==typeof a.ja)d=a.ja();else if("function"!=typeof a.Q)if(t(a)||v(a)){d=[];for(var f=a.length,e=0;e<f;e++)d.push(e)}else d=Ea(a);else d=i;for(var f=hb(a),e=f.length,g=0;g<e;g++)b.call(c,f[g],d&&d[g],a)}};var K=function(a,b){this.i={};this.e=[];var c=arguments.length;if(1<c){c%2&&h(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof K?(c=a.ja(),d=a.Q()):(c=Ea(a),d=Da(a));for(var f=0;f<c.length;f++)this.set(c[f],d[f])}};K.prototype.d=0;K.prototype.fa=0;K.prototype.Q=function(){jb(this);for(var a=[],b=0;b<this.e.length;b++)a.push(this.i[this.e[b]]);return a};K.prototype.ja=function(){jb(this);return this.e.concat()};
var jb=function(a){if(a.d!=a.e.length){for(var b=0,c=0;b<a.e.length;){var d=a.e[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.e[c++]=d);b++}a.e.length=c}if(a.d!=a.e.length){for(var f={},c=b=0;b<a.e.length;)d=a.e[b],Object.prototype.hasOwnProperty.call(f,d)||(a.e[c++]=d,f[d]=1),b++;a.e.length=c}};K.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
K.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.d++,this.e.push(a),this.fa++);this.i[a]=b};K.prototype.oa=function(){return new K(this)};K.prototype.eb=function(a){jb(this);var b=0,c=this.e,d=this.i,f=this.fa,e=this,g=new gb;g.next=function(){for(;;){f!=e.fa&&h(Error("The map has changed since the iterator was created"));b>=c.length&&h(fb);var g=c[b++];return a?g:d[g]}};return g};var kb=function(a,b){if("FORM"==a.tagName)for(var c=a.elements,d=0;a=c[d];d++)kb(a,b);else b==j&&a.blur(),a.disabled=b};var lb=function(a){lb[" "](a);return a};lb[" "]=ca;!F||Ya();var mb=!F||Ya();F&&I("8");!H||I("528");G&&I("1.9b")||F&&I("8")||Na&&I("9.5")||H&&I("528");G&&!I("8")||F&&I("9");var nb=function(){};nb.prototype.Ka=l;nb.prototype.H=function(){this.Ka||(this.Ka=j,this.m())};nb.prototype.m=function(){this.gb&&ob.apply(k,this.gb)};var ob=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];t(d)?ob.apply(k,d):d&&"function"==typeof d.H&&d.H()}};var L=function(a,b){this.type=a;this.currentTarget=this.target=b};y(L,nb);L.prototype.m=function(){delete this.type;delete this.target;delete this.currentTarget};L.prototype.A=l;L.prototype.P=j;var pb=function(a,b){a&&this.N(a,b)};y(pb,L);n=pb.prototype;n.target=k;n.relatedTarget=k;n.offsetX=0;n.offsetY=0;n.clientX=0;n.clientY=0;n.screenX=0;n.screenY=0;n.button=0;n.keyCode=0;n.charCode=0;n.ctrlKey=l;n.altKey=l;n.shiftKey=l;n.metaKey=l;
n.N=function(a,b){var c=this.type=a.type;L.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(G){var f;a:{try{lb(d.nodeName);f=j;break a}catch(e){}f=l}f||(d=k)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=H||a.offsetX!==i?a.offsetX:a.layerX;this.offsetY=H||a.offsetY!==i?a.offsetY:a.layerY;this.clientX=a.clientX!==i?a.clientX:a.pageX;this.clientY=a.clientY!==i?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;delete this.P;delete this.A};n.m=function(){pb.da.m.call(this);this.relatedTarget=this.currentTarget=this.target=k};var qb=function(){},rb=0;n=qb.prototype;n.key=0;n.z=l;n.Ea=l;n.N=function(a,b,c,d,f,e){"function"==q(a)?this.Da=j:a&&a.handleEvent&&"function"==q(a.handleEvent)?this.Da=l:h(Error("Invalid listener argument"));this.F=a;this.va=b;this.src=c;this.type=d;this.capture=!!f;this.ba=e;this.Ea=l;this.key=++rb;this.z=l};n.handleEvent=function(a){return this.Da?this.F.call(this.ba||this.src,a):this.F.handleEvent.call(this.F,a)};var M={},N={},O={},P={},sb=function(a,b,c,d,f){if(b)if("array"==q(b))for(var e=0;e<b.length;e++)sb(a,b[e],c,d,f);else{var d=!!d,g=N;b in g||(g[b]={d:0,h:0});g=g[b];d in g||(g[d]={d:0,h:0},g.d++);var g=g[d],m=ga(a),s;g.h++;if(g[m]){s=g[m];for(e=0;e<s.length;e++)if(g=s[e],g.F==c&&g.ba==f){if(g.z)break;return}}else s=g[m]=[],g.d++;e=tb();e.src=a;g=new qb;g.N(c,e,a,b,d,f);c=g.key;e.key=c;s.push(g);M[c]=g;O[m]||(O[m]=[]);O[m].push(g);a.addEventListener?(a==o||!a.ua)&&a.addEventListener(b,e,d):a.attachEvent(b in
P?P[b]:P[b]="on"+b,e)}else h(Error("Invalid event type"))},tb=function(){var a=ub,b=mb?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b},vb=function(a,b,c,d,f){if("array"==q(b))for(var e=0;e<b.length;e++)vb(a,b[e],c,d,f);else{d=!!d;a:{e=N;if(b in e&&(e=e[b],d in e&&(e=e[d],a=ga(a),e[a]))){a=e[a];break a}a=k}if(a)for(e=0;e<a.length;e++)if(a[e].F==c&&a[e].capture==d&&a[e].ba==f){wb(a[e].key);break}}},wb=function(a){if(M[a]){var b=M[a];if(!b.z){var c=
b.src,d=b.type,f=b.va,e=b.capture;c.removeEventListener?(c==o||!c.ua)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in P?P[d]:P[d]="on"+d,f);c=ga(c);f=N[d][e][c];if(O[c]){var g=O[c],m=xa(g,b);0<=m&&(va(g.length!=k),C.splice.call(g,m,1));0==g.length&&delete O[c]}b.z=j;f.Ba=j;xb(d,e,c,f);delete M[a]}}},xb=function(a,b,c,d){if(!d.O&&d.Ba){for(var f=0,e=0;f<d.length;f++)d[f].z?d[f].va.src=k:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.Ba=l;0==e&&(delete N[a][b][c],N[a][b].d--,0==N[a][b].d&&(delete N[a][b],
N[a].d--),0==N[a].d&&delete N[a])}},yb=function(a){var b,c=0,d=b==k;b=!!b;if(a==k)Ca(O,function(a){for(var e=a.length-1;0<=e;e--){var f=a[e];if(d||b==f.capture)wb(f.key),c++}});else if(a=ga(a),O[a])for(var a=O[a],f=a.length-1;0<=f;f--){var e=a[f];if(d||b==e.capture)wb(e.key),c++}},Ab=function(a,b,c,d,f){var e=1,b=ga(b);if(a[b]){a.h--;a=a[b];a.O?a.O++:a.O=1;try{for(var g=a.length,m=0;m<g;m++){var s=a[m];s&&!s.z&&(e&=zb(s,f)!==l)}}finally{a.O--,xb(c,d,b,a)}}return Boolean(e)},zb=function(a,b){var c=
a.handleEvent(b);a.Ea&&wb(a.key);return c},ub=function(a,b){if(!M[a])return j;var c=M[a],d=c.type,f=N;if(!(d in f))return j;var f=f[d],e,g;if(!mb){e=b||ba("window.event");var m=j in f,s=l in f;if(m){if(0>e.keyCode||e.returnValue!=i)return j;a:{var r=l;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(u){r=j}if(r||e.returnValue==i)e.returnValue=j}}r=new pb;r.N(e,this);e=j;try{if(m){for(var p=[],ja=r.currentTarget;ja;ja=ja.parentNode)p.push(ja);g=f[j];g.h=g.d;for(var B=p.length-1;!r.A&&0<=B&&g.h;B--)r.currentTarget=
p[B],e&=Ab(g,p[B],d,j,r);if(s){g=f[l];g.h=g.d;for(B=0;!r.A&&B<p.length&&g.h;B++)r.currentTarget=p[B],e&=Ab(g,p[B],d,l,r)}}else e=zb(c,r)}finally{p&&(p.length=0),r.H()}return e}d=new pb(b,this);try{e=zb(c,d)}finally{d.H()}return e};var Cb=function(a){return Bb(a||arguments.callee.caller,[])},Bb=function(a,b){var c=[];if(0<=xa(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(Db(a)+"(");for(var d=a.arguments,f=0;f<d.length;f++){0<f&&c.push(", ");var e;e=d[f];switch(typeof e){case "object":e=e?"object":"null";break;case "string":break;case "number":e=""+e;break;case "boolean":e=e?"true":"false";break;case "function":e=(e=Db(e))?e:"[fn]";break;default:e=typeof e}40<e.length&&(e=e.substr(0,40)+"...");c.push(e)}b.push(a);
c.push(")\n");try{c.push(Bb(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")},Db=function(a){if(Eb[a])return Eb[a];a=""+a;if(!Eb[a]){var b=/function ([^\(]+)/.exec(a);Eb[a]=b?b[1]:"[Anonymous]"}return Eb[a]},Eb={};var Fb=function(a,b,c,d,f){this.reset(a,b,c,d,f)};Fb.prototype.Ha=k;Fb.prototype.Ga=k;var Gb=0;Fb.prototype.reset=function(a,b,c,d,f){"number"==typeof f||Gb++;d||la();this.I=a;this.Za=b;delete this.Ha;delete this.Ga};Fb.prototype.Ja=function(a){this.I=a};var Q=function(a){this.bb=a};Q.prototype.R=k;Q.prototype.I=k;Q.prototype.ka=k;Q.prototype.La=k;var Hb=function(a,b){this.name=a;this.value=b};Hb.prototype.toString=function(){return this.name};var Ib=new Hb("SEVERE",1E3),Jb=new Hb("WARNING",900),Kb=new Hb("CONFIG",700),Lb=new Hb("FINE",500);Q.prototype.getParent=function(){return this.R};Q.prototype.Ja=function(a){this.I=a};var Mb=function(a){if(a.I)return a.I;if(a.R)return Mb(a.R);wa("Root logger has no level set.");return k};
Q.prototype.log=function(a,b,c){if(a.value>=Mb(this).value){a=this.cb(a,b,c);b="log:"+a.Za;o.console&&(o.console.timeStamp?o.console.timeStamp(b):o.console.markTimeline&&o.console.markTimeline(b));o.msWriteProfilerMark&&o.msWriteProfilerMark(b);for(b=this;b;){var c=b,d=a;if(c.La)for(var f=0,e=i;e=c.La[f];f++)e(d);b=b.getParent()}}};
Q.prototype.cb=function(a,b,c){var d=new Fb(a,""+b,this.bb);if(c){d.Ha=c;var f;var e=arguments.callee.caller;try{var g;var m=ba("window.location.href");if(v(c))g={message:c,name:"Unknown error",lineNumber:"Not available",fileName:m,stack:"Not available"};else{var s,r,u=l;try{s=c.lineNumber||c.ob||"Not available"}catch(p){s="Not available",u=j}try{r=c.fileName||c.filename||c.sourceURL||m}catch(ja){r="Not available",u=j}g=u||!c.lineNumber||!c.fileName||!c.stack?{message:c.message,name:c.name,lineNumber:s,
fileName:r,stack:c.stack||"Not available"}:c}f="Message: "+A(g.message)+'\nUrl: <a href="view-source:'+g.fileName+'" target="_new">'+g.fileName+"</a>\nLine: "+g.lineNumber+"\n\nBrowser stack:\n"+A(g.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+A(Cb(e)+"-> ")}catch(B){f="Exception trying to expose exception! You win, we lose. "+B}d.Ga=f}return d};
var R=function(a,b){a.log(Lb,b,i)},Nb={},Ob=k,Pb=function(a){Ob||(Ob=new Q(""),Nb[""]=Ob,Ob.Ja(Kb));var b;if(!(b=Nb[a])){b=new Q(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Pb(a.substr(0,c));c.ka||(c.ka={});c.ka[d]=b;b.R=c;Nb[a]=b}return b};var Qb=function(){};y(Qb,nb);n=Qb.prototype;n.ua=j;n.ea=k;n.addEventListener=function(a,b,c,d){sb(this,a,b,c,d)};n.removeEventListener=function(a,b,c,d){vb(this,a,b,c,d)};
n.dispatchEvent=function(a){var b=a.type||a,c=N;if(b in c){if(v(a))a=new L(a,this);else if(a instanceof L)a.target=a.target||this;else{var d=a,a=new L(b,this);Ga(a,d)}var d=1,f,c=c[b],b=j in c,e;if(b){f=[];for(e=this;e;e=e.ea)f.push(e);e=c[j];e.h=e.d;for(var g=f.length-1;!a.A&&0<=g&&e.h;g--)a.currentTarget=f[g],d&=Ab(e,f[g],a.type,j,a)&&a.P!=l}if(l in c)if(e=c[l],e.h=e.d,b)for(g=0;!a.A&&g<f.length&&e.h;g++)a.currentTarget=f[g],d&=Ab(e,f[g],a.type,l,a)&&a.P!=l;else for(f=this;!a.A&&f&&e.h;f=f.ea)a.currentTarget=
f,d&=Ab(e,f,a.type,l,a)&&a.P!=l;a=Boolean(d)}else a=j;return a};n.m=function(){Qb.da.m.call(this);yb(this);this.ea=k};var Rb=function(a){a=""+a;if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}h(Error("Invalid JSON string: "+a))};var Sb=o.window;var Tb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Ub=H,Vb=function(a,b){if(Ub){Ub=l;var c=o.location;if(c){var d=c.href;if(d&&(d=(d=Vb(3,d))&&decodeURIComponent(d))&&d!=c.hostname)Ub=j,h(Error())}}return b.match(Tb)[a]||k};var Wb=function(){};Wb.prototype.M=k;var Xb,Yb=function(){};y(Yb,Wb);var $b=function(a){return(a=Zb(a))?new ActiveXObject(a):new XMLHttpRequest},ac=function(a){var b={};Zb(a)&&(b[0]=j,b[1]=j);return b};Yb.prototype.la=k;var Zb=function(a){if(!a.la&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.la=d}catch(f){}}h(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))}return a.la};
Xb=new Yb;var S=function(a){this.headers=new K;this.s=a||k};y(S,Qb);S.prototype.g=Pb("goog.net.XhrIo");var bc=/^https?$/i,cc=[],ec=function(a,b,c){var d=new S;cc.push(d);b&&sb(d,"complete",b);sb(d,"ready",ka(dc,d));d.send(a,"POST",c,i)},dc=function(a){a.H();a=xa(cc,a);0<=a&&(va(cc.length!=k),C.splice.call(cc,a,1))};n=S.prototype;n.j=l;n.b=k;n.K=k;n.T="";n.na="";n.C="";n.U=l;n.J=l;n.S=l;n.q=l;n.L=0;n.n=k;n.pa="";n.Pa=l;
n.send=function(a,b,c,d){this.b&&h(Error("[goog.net.XhrIo] Object is active with another request"));b=b?b.toUpperCase():"GET";this.T=a;this.C="";this.na=b;this.U=l;this.j=j;this.b=this.s?$b(this.s):$b(Xb);this.K=this.s?this.s.M||(this.s.M=ac(this.s)):Xb.M||(Xb.M=ac(Xb));this.b.onreadystatechange=w(this.ma,this);try{R(this.g,T(this,"Opening Xhr")),this.S=j,this.b.open(b,a,j),this.S=l}catch(f){R(this.g,T(this,"Error opening Xhr: "+f.message));fc(this,f);return}var a=c||"",e=this.headers.oa();d&&ib(d,
function(a,b){e.set(b,a)});"POST"==b&&!Object.prototype.hasOwnProperty.call(e.i,"Content-Type")&&e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");ib(e,function(a,b){this.b.setRequestHeader(b,a)},this);this.pa&&(this.b.responseType=this.pa);"withCredentials"in this.b&&(this.b.withCredentials=this.Pa);try{this.n&&(Sb.clearTimeout(this.n),this.n=k),0<this.L&&(R(this.g,T(this,"Will abort after "+this.L+"ms if incomplete")),this.n=Sb.setTimeout(w(this.Oa,this),this.L)),R(this.g,
T(this,"Sending request")),this.J=j,this.b.send(a),this.J=l}catch(g){R(this.g,T(this,"Send error: "+g.message)),fc(this,g)}};n.Oa=function(){"undefined"!=typeof aa&&this.b&&(this.C="Timed out after "+this.L+"ms, aborting",R(this.g,T(this,this.C)),this.dispatchEvent("timeout"),this.abort(8))};var fc=function(a,b){a.j=l;a.b&&(a.q=j,a.b.abort(),a.q=l);a.C=b;gc(a);hc(a)},gc=function(a){a.U||(a.U=j,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
S.prototype.abort=function(){this.b&&this.j&&(R(this.g,T(this,"Aborting")),this.j=l,this.q=j,this.b.abort(),this.q=l,this.dispatchEvent("complete"),this.dispatchEvent("abort"),hc(this))};S.prototype.m=function(){this.b&&(this.j&&(this.j=l,this.q=j,this.b.abort(),this.q=l),hc(this,j));S.da.m.call(this)};S.prototype.ma=function(){!this.S&&!this.J&&!this.q?this.$a():ic(this)};S.prototype.$a=function(){ic(this)};
var ic=function(a){if(a.j&&"undefined"!=typeof aa)if(a.K[1]&&4==jc(a)&&2==kc(a))R(a.g,T(a,"Local request error detected and ignored"));else if(a.J&&4==jc(a))Sb.setTimeout(w(a.ma,a),0);else if(a.dispatchEvent("readystatechange"),4==jc(a)){R(a.g,T(a,"Request complete"));a.j=l;var b=kc(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 304:case 1223:c=j;break a;default:c=l}if(!c){if(b=0===b)b=Vb(1,""+a.T),!b&&self.location&&(b=self.location.protocol,b=b.substr(0,b.length-1)),b=!bc.test(b?b.toLowerCase():
"");c=b}if(c)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var d;try{d=2<jc(a)?a.b.statusText:""}catch(f){R(a.g,"Can not get status: "+f.message),d=""}a.C=d+" ["+kc(a)+"]";gc(a)}hc(a)}},hc=function(a,b){if(a.b){var c=a.b,d=a.K[0]?ca:k;a.b=k;a.K=k;a.n&&(Sb.clearTimeout(a.n),a.n=k);b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(f){a.g.log(Ib,"Problem encountered resetting onreadystatechange: "+f.message,i)}}},jc=function(a){return a.b?a.b.readyState:0},kc=function(a){try{return 2<
jc(a)?a.b.status:-1}catch(b){return a.g.log(Jb,"Can not get status: "+b.message,i),-1}},lc=function(a){if(a.b)return Rb(a.b.responseText)},T=function(a,b){return b+" ["+a.na+" "+a.T+" "+kc(a)+"]"};var nc=function(a,b){var c=1,d;c instanceof D?(d=c.height,c=c.width):(b==i&&h(Error("missing height argument")),d=b);a.style.width=mc(c);a.style.height=mc(d)},mc=function(a){"number"==typeof a&&(a=Math.round(a)+"px");return a},pc=function(a){var b;a:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,k))){b=b.display||b.getPropertyValue("display");break a}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:k)||
a.style&&a.style.display))return oc(a);b=a.style;var c=b.display,d=b.visibility,f=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=oc(a);b.display=c;b.position=f;b.visibility=d;return a},oc=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=H&&!b&&!c;return(b===i||d)&&a.getBoundingClientRect?(b=a.getBoundingClientRect(),F&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop),new D(b.right-b.left,b.bottom-
b.top)):new D(b,c)},U=function(a,b){a.style.display=b?"":"none"};var V=function(a,b,c,d){b=b?"?repo="+b:"";this.ya=a;this.Va=z("%s/source/comments/set%s",a.projectHomeUrl,b);this.Wa=z("%s/source/comments/del%s",a.projectHomeUrl,b);this.Aa=c;this.za=d;this.B={};this.G=[[],[]]},qc=function(a){var b=[],c;for(c in a)b.length&&b.push("&"),b.push(oa(c)),b.push("="),b.push(oa(a[c]));return b.join("")},W=function(a,b){(!a||!b)&&h(Error(z("Invalid key components: revisionSpec=%s, line=%s",a,b)));return z("%s-%s",a,b)},rc=function(a,b,c,d,f,e){a.B[W(b,c)]=d;a=a.G[0];for(d=
0;d<a.length;d++)try{a[d](b,c,f,e)}catch(g){h(g)}};V.prototype.get=function(a,b,c){return(a=this.B[W(a,b)])?a:c};V.prototype.set=function(a,b,c){var d=qc({r:this.Aa,p:this.za[a],v:a,l:b,c:c,token:this.ya.token});if(c==this.B[W(a,b)]){var f=A(c);rc(this,a,b,c,f,d)}else ec(this.Va,w(this.Ya,this),d)};var sc=function(a,b,c){b=qc({r:a.Aa,p:a.za[b],v:b,l:c,token:a.ya.token});ec(a.Wa,w(a.ab,a),b)};V.prototype.Ya=function(a){var a=lc(a.target),b=a.v,c=a.l,d=a.c,f=A(a.c);rc(this,b,c,d,f,a)};
V.prototype.ab=function(a){var b=lc(a.target),a=b.v,b=b.l,c=W(a,b),d=this.B[W(a,b)];delete this.B[c];for(var c=this.G[1],f=0;f<c.length;f++)try{c[f](a,b,d)}catch(e){h(e)}};
var tc=function(){this.Na={form:'<div class="draft"><div class="header"><span class="title">Draft comment:</span></div><div class="body"><form onsubmit="return false;"><textarea id="$ID">$BODY</textarea><br>$ACTIONS</form></div></div>',draft_comment:'<div class="draft" ondblclick="$ONDBLCLICK"><div class="header"><span class="title">Draft comment:</span><span class="actions">$ACTIONS</span></div><pre id="$ID" class="body">$BODY</pre></div>',published_comment:'<div class="published"><div class="header"><span class="title"><a href="$PROFILE_URL">$AUTHOR:</a></span><div><pre id="$ID" class="body">$BODY</pre></div>',
save_button:"<button name=save type=button onclick='$ONCLICK'>Save</button>",cancel_button:"<button name=cancel type=button onclick='$ONCLICK'>Cancel</button>",discard_button:"<button name=discard type=button onclick='$ONCLICK'>Discard</button>",edit_anchor:"<a href=# onclick='$ONCLICK'>Edit</a>"}},X=function(a,b){a.Na[b]||h(Error(z('Undefined UI element "%s". Use codereviews.registerLayoutElement("%s", {string}) to define.',b,b)));return a.Na[b]},uc=function(a,b,c,d,f){c=X(a,"save_button").replace("$ONCLICK",
z('codereviews.saveEdit("%s", %s); return false;',c,d))+X(a,"cancel_button").replace("$ONCLICK",z('codereviews.cancelEdit("%s", %s); return false;',c,d))+(f?X(a,"discard_button").replace("$ONCLICK",z('codereviews.discardComment("%s", %s); return false;',c,d)):"");f=A(f);return X(a,"form").replace("$ID",b).replace("$BODY",f?f:"").replace("$ACTIONS",c)},vc=function(a,b,c,d,f){var e=X(a,"edit_anchor").replace("$ONCLICK",z('codereviews.startEdit("%s", %s); return false;',c,d));return X(a,"draft_comment").replace("$ID",
b).replace("$BODY",f).replace("$ONDBLCLICK",z('codereviews.startEdit("%s", %s); return false;',c,d)).replace("$ACTIONS",e)},wc=function(a,b,c,d){return X(a,"published_comment").replace("$ID",b).replace("$BODY",c).replace("$ONDBLCLICK","").replace("$PROFILE_URL",d.user.profile_url).replace("$AUTHOR",d.user.display_name).replace("$DATE",d.date).replace("$ACTIONS","")},Y=function(a,b,c){this.k=a;this.k.G[0].push(w(this.Sa,this));this.k.G[1].push(w(this.Ra,this));this.Ua=b;this.Ua.G[0].push(w(this.Ta,
this));this.xa=[[],[],[]];this.f=c(new tc,this,xc)};x("code.reviews.Controller",Y);var xc={REVEAL_DRAFT_PLATE:0,DISCARD_DRAFT_COMMENT:1,REVEAL_PUB_PLATE:2};n=Y.prototype;n.jb=function(a){var b;a:{b=this.f;for(var a=a.target,c=10;a&&0<c--;){var d;b:{d=b;var f=a.id;if(f&&d.V.test(f)&&(d=f.split(d.w),3==d.length)){f={};f.Xa=d[1];f.lineNumber=parseInt(d[2],10);d=f;break b}d=i}if(d){b=d;break a}a=a.parentNode}b=i}b&&this.Ca(b.Xa,b.lineNumber);return l};n.Sa=function(a,b,c){this.f.ia(a,b,c)};
n.Ta=function(a,b,c,d){this.f.Ia(a,b,c,d)};n.Ra=function(a,b){this.f.ha(a,b);this.f.ga(a,b)};n.Ca=function(a,b){var c=this.k.get(a,b,k);this.f.Fa(a,b,c)};Y.prototype.startEdit=Y.prototype.Ca;Y.prototype.mb=function(a,b){kb(document.getElementById(this.f.a(this.f.o,a,b)),j);var c=document.getElementById(this.f.a(this.f.o,a,b)).value;c==k||""==c?sc(this.k,a,b):this.k.set(a,b,c)};Y.prototype.saveEdit=Y.prototype.mb;
Y.prototype.fb=function(a,b){this.f.ha(a,b);var c=this.k.get(a,b,k);c?(c=A(c),this.f.ia(a,b,c)):this.f.ga(a,b)};Y.prototype.cancelEdit=Y.prototype.fb;Y.prototype.hb=function(a,b){sc(this.k,a,b)};Y.prototype.discardComment=Y.prototype.hb;Y.prototype.lb=function(a){sb(a,"dblclick",w(this.jb,this))};Y.prototype.registerSourceContainer=Y.prototype.lb;Y.prototype.kb=function(a,b){this.xa[a].push(b)};Y.prototype.registerActivityListener=Y.prototype.kb;
Y.prototype.Ma=function(a,b){var c=this.xa[a];if(c)for(var d=0;d<c.length;d++)try{c[d](b)}catch(f){h(f)}};Y.prototype.notifyListeners=Y.prototype.Ma;Y.prototype.nb=function(a,b,c){this.k.B[W(a,b)]=c};Y.prototype.setDraft=Y.prototype.nb;Y.prototype.ib=function(){return this.f};Y.prototype.getView=Y.prototype.ib;x("CR_controller.setup",function(a,b,c,d,f){var e=new V(a,b,c,d),a=new V(a,b,c,d);return new Y(e,a,f)});x("CR_ActivityType",xc);x("CR_getElements",function(a,b,c){return ab(a,b,c)});var yc=function(a,b,c){this.t=a;this.Qa=b;this.u=c;this.w="_";this.o="input";this.W="comment";this.X="pc";this.D="cc";this.V=k},Z=function(a,b,c,d,f){a.Qa.Ma(b,{revisionSpec:c,lineNumber:d,cellId:f})};yc.prototype.a=function(a){for(var b="",c=0;c<arguments.length;c++)b+=(b?this.w:"")+arguments[c];return b};var $=function(a,b,c){yc.call(this,a,b,c);this.Z="sl";this.qa="gr";this.Y="pcr";this.sa="pcgc";this.ta="pcgr";this.$="ccr";this.ra="ccgc";this.aa="ccgr";this.V=RegExp("^"+this.Z+this.w+"[a-z]+[0-9a-f]+"+this.w+"[0-9]+$")};y($,yc);n=$.prototype;n.ia=function(a,b,c){var d=zc(this,a,b);d.innerHTML=vc(this.t,this.a(this.W,a,b),a,b,c);this.ca(a,b);Z(this,this.u.REVEAL_DRAFT_PLATE,a,b,d.id)};
n.Ia=function(a,b,c,d){var f=Ac(this,a,b);f.innerHTML+=wc(this.t,this.a(this.W,a,b),c,d);this.wa(a,b);Z(this,this.u.REVEAL_PUB_PLATE,a,b,f.id)};n.ha=function(a,b){var c=zc(this,a,b);c.innerHTML="";Z(this,this.u.DISCARD_DRAFT_COMMENT,a,b,c.id)};n.Fa=function(a,b,c){zc(this,a,b).innerHTML=uc(this.t,this.a(this.o,a,b),a,b,c);this.ca(a,b);a=document.getElementById(this.a(this.o,a,b));a.focus();a.select&&a.select()};
n.ga=function(a,b){var c=this.a(this.$,a,b);U(document.getElementById(c),l);c=z("%s_cursor",c);U(document.getElementById(c),l);c=this.a(this.aa,a,b);U(document.getElementById(c),l);c=z("%s_cursor",c);U(document.getElementById(c),l)};
n.ca=function(a,b){var c=zc(this,a,b),d=this.a(this.$,a,b);U(document.getElementById(d),j);c=pc(c);d=document.getElementById(this.a(this.ra,a,b));if(!d){var f=this.a(this.aa,a,b),d=Bc(document.getElementById(this.a(this.qa,a,b)),f),e=J("td",{id:this.a(this.ra,a,b)}),f=J("tr",{id:f},e);eb(f,d);d=e}nc(d,c.height);d=this.a(this.aa,a,b);U(document.getElementById(d),j)};
n.wa=function(a,b){var c=Ac(this,a,b),d=this.a(this.Y,a,b);U(document.getElementById(d),j);c=pc(c);d=document.getElementById(this.a(this.sa,a,b));if(!d){var f=this.a(this.ta,a,b),d=Bc(document.getElementById(this.a(this.qa,a,b)),f),e=J("td",{id:this.a(this.sa,a,b)}),f=J("tr",{id:f,"class":"ifOpened"},e);eb(f,d);d=e}nc(d,c.height);d=this.a(this.ta,a,b);U(document.getElementById(d),j)};
var zc=function(a,b,c){var d=document.getElementById(a.a(a.D,b,c));if(!d){var d=a.a(a.Y,b,c),f=document.getElementById(d);f||(d=a.a(a.Z,b,c),f=document.getElementById(d));d=a.a(a.$,b,c);f=Bc(f,d);a=J("td",{id:a.a(a.D,b,c)});b=J("tr",{id:d},a);eb(b,f);d=a}d||h("Failed to find or create comment src cell.");return d},Ac=function(a,b,c){var d=document.getElementById(a.a(a.X,b,c));if(!d){var f=a.a(a.Y,b,c),d=Bc(document.getElementById(a.a(a.Z,b,c)),f),a=J("td",{id:a.a(a.X,b,c)}),b=J("tr",{id:f,"class":"ifOpened"},
a);eb(b,d);d=a}d||h("Failed to find or create comment src cell.");return d},Bc=function(a,b){var c=z("%s_cursor",b),d=J("td"),c=J("tr",{id:c,"class":"cursor_hidden"},d);eb(c,a);return c};x("CR_BrowseIntegrationFactory",function(a,b,c){return new $(a,b,c)});x("CR_BrowseIntegration",$);x("CR_BrowseIntegration.prototype.revealDraftCommentRow",$.prototype.ca);x("CR_BrowseIntegration.prototype.revealPublishedCommentRow",$.prototype.wa);var Cc=function(a,b,c){yc.call(this,a,b,c);this.V=RegExp("^sc"+this.w+"[a-z]+[0-9a-f]+"+this.w+"[0-9]+$")};y(Cc,yc);n=Cc.prototype;n.ia=function(a,b,c){var d=this.a(this.D,a,b),f=document.getElementById(d);f.innerHTML=vc(this.t,this.a(this.o,a,b),a,b,c);U(f.parentNode,j);Z(this,this.u.REVEAL_DRAFT_PLATE,a,b,d)};n.Ia=function(a,b,c,d){var f=document.getElementById(this.a(this.X,a,b));f.innerHTML+=wc(this.t,this.a(this.W,a,b),c,d);Z(this,this.u.REVEAL_PUB_PLATE,a,b,f.id)};
n.ha=function(a,b){var c=this.a(this.D,a,b);document.getElementById(c).innerHTML="";Z(this,this.u.DISCARD_DRAFT_COMMENT,a,b,c)};n.Fa=function(a,b,c){var d=document.getElementById(this.a(this.D,a,b));d.innerHTML=uc(this.t,this.a(this.o,a,b),a,b,c);U(d.parentNode,j);a=document.getElementById(this.a(this.o,a,b));a.focus();a.select&&a.select()};n.ga=function(){};x("CR_DiffIntegrationFactory",function(a,b,c){return new Cc(a,b,c)});(function(){function a(a){if(a=document.getElementById(a))a.className="opened"==a.className?"closed":"opened"}function b(){a("review_show_hide");a("review_comment_area");return l}x("CR_toggleCommentDisplay",b)})();})()
