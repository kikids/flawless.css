//
// LESS - Leaner CSS v1.0.35
// http://lesscss.org
// 
// Copyright (c) 2010, Alexis Sellier
// Licensed under the Apache 2.0 License.
//
(function(y){function q(e){return y.less[e.split("/")[1]]}function U(){for(var e=document.getElementsByTagName("style"),b=0;b<e.length;b++)if(e[b].type.match(V))(new o.Parser).parse(e[b].innerHTML||"",function(d,g){e[b].type="text/css";e[b].innerHTML=g.toCSS()})}function W(e,b){for(var d=0;d<o.sheets.length;d++)X(o.sheets[d],e,b,o.sheets.length-(d+1))}function X(e,b,d,g){var a=y.location.href,i=e.href.replace(/\?.*$/,""),h=D&&D.getItem(i),j=D&&D.getItem(i+":timestamp"),n={css:h,timestamp:j};/^(https?|file):/.test(i)||
(i=a.slice(0,a.lastIndexOf("/")+1)+i);$(e.href,function(r,w){if(!d&&n&&(new Date(w)).valueOf()===(new Date(n.timestamp)).valueOf()){N(n.css,e);b(null,e,{local:true,remaining:g})}else try{(new o.Parser({optimization:o.optimization,paths:[i.replace(/[\w\.-]+$/,"")]})).parse(r,function(t,E){if(t)return Q(t,i);try{b(E,e,{local:false,lastModified:w,remaining:g});aa(document.getElementById("less-error-message:"+R(i)))}catch(O){Q(O,i)}})}catch(v){Q(v,i)}},function(r,w){throw new Error("Couldn't load "+w+
" ("+r+")");})}function R(e){return e.replace(/^[a-z]+:\/\/?[^\/]+/,"").replace(/^\//,"").replace(/\?.*$/,"").replace(/\.[^\.\/]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")}function N(e,b,d){var g,a=b.href?b.href.replace(/\?.*$/,""):"",i="less:"+(b.title||R(a));if((g=document.getElementById(i))===null){g=document.createElement("style");g.type="text/css";g.media=b.media||"screen";g.id=i;document.getElementsByTagName("head")[0].appendChild(g)}if(g.styleSheet)try{g.styleSheet.cssText=e}catch(h){throw new Error("Couldn't reassign styleSheet.cssText.");
}else(function(j){if(g.childNodes.length>0)g.firstChild.nodeValue!==j.nodeValue&&g.replaceChild(j,g.firstChild);else g.appendChild(j)})(document.createTextNode(e));if(d&&D){I("saving "+a+" to cache.");D.setItem(a,e);D.setItem(a+":timestamp",d)}}function $(e,b,d){function g(h,j,n){if(h.status>=200&&h.status<300)j(h.responseText,h.getResponseHeader("Last-Modified"));else typeof n==="function"&&n(h.status,e)}var a=ba(),i=P?false:o.async;typeof a.overrideMimeType==="function"&&a.overrideMimeType("text/css");
a.open("GET",e,i);a.send(null);if(P)a.status===0?b(a.responseText):d(a.status);else if(i)a.onreadystatechange=function(){a.readyState==4&&g(a,b,d)};else g(a,b,d)}function ba(){if(y.XMLHttpRequest)return new XMLHttpRequest;else try{return new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(e){I("browser doesn't support AJAX.");return null}}function aa(e){return e&&e.parentNode.removeChild(e)}function I(e){o.env=="development"&&typeof console!=="undefined"&&console.log("less: "+e)}function Q(e,b){var d="less-error-message:"+
R(b),g=document.createElement("div"),a;g.id=d;g.className="less-error-message";b="<h3>"+(e.message||"There is an error in your .less file")+'</h3><p><a href="'+b+'">'+b+"</a> ";if(e.extract)b+="on line "+e.line+", column "+(e.column+1)+":</p>"+'<ul>\n<li><label>[-1]</label><pre class="ctx">{0}</pre></li>\n<li><label>[0]</label><pre>{current}</pre></li>\n<li><label>[1]</label><pre class="ctx">{2}</pre></li>\n</ul>'.replace(/\[(-?\d)\]/g,function(i,h){return parseInt(e.line)+parseInt(h)||""}).replace(/\{(\d)\}/g,
function(i,h){return e.extract[parseInt(h)]||""}).replace(/\{current\}/,e.extract[1].slice(0,e.column)+'<span class="error">'+e.extract[1].slice(e.column)+"</span>");g.innerHTML=b;N(".less-error-message ul, .less-error-message li {\nlist-style-type: none;\nmargin-right: 15px;\npadding: 4px 0;\nmargin: 0;\n}\n.less-error-message label {\nfont-size: 12px;\nmargin-right: 15px;\npadding: 4px 0;\ncolor: #cc7777;\n}\n.less-error-message pre {\ncolor: #ee4444;\npadding: 4px 0;\nmargin: 0;\ndisplay: inline-block;\n}\n.less-error-message pre.ctx {\ncolor: #dd4444;\n}\n.less-error-message h3 {\nfont-size: 20px;\nfont-weight: bold;\npadding: 15px 0 5px 0;\nmargin: 0;\n}\n.less-error-message a {\ncolor: #10a\n}\n.less-error-message .error {\ncolor: red;\nfont-weight: bold;\npadding-bottom: 2px;\nborder-bottom: 1px dashed red;\n}",
{title:"error-message"});g.style.cssText="font-family: Arial, sans-serif;border: 1px solid #e00;background-color: #eee;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;color: #e00;padding: 15px;margin-bottom: 15px";if(o.env=="development")a=setInterval(function(){if(document.body){document.getElementById(d)?document.body.replaceChild(g,document.getElementById(d)):document.body.insertBefore(g,document.body.firstChild);clearInterval(a)}},10)}if(!Array.isArray)Array.isArray=function(e){return Object.prototype.toString.call(e)===
"[object Array]"||e instanceof Array};if(!Array.prototype.forEach)Array.prototype.forEach=function(e,b){for(var d=this.length>>>0,g=0;g<d;g++)g in this&&e.call(b,this[g],g,this)};if(!Array.prototype.map)Array.prototype.map=function(e,b){for(var d=this.length>>>0,g=new Array(d),a=0;a<d;a++)if(a in this)g[a]=e.call(b,this[a],a,this);return g};if(!Array.prototype.filter)Array.prototype.filter=function(e,b){for(var d=[],g=0;g<this.length;g++)e.call(b,this[g])&&d.push(this[g]);return d};if(!Array.prototype.reduce)Array.prototype.reduce=
function(e){var b=this.length>>>0,d=0;if(b===0&&arguments.length===1)throw new TypeError;if(arguments.length>=2)var g=arguments[1];else{do{if(d in this){g=this[d++];break}if(++d>=b)throw new TypeError;}while(1)}for(;d<b;d++)if(d in this)g=e.call(null,g,this[d],d,this);return g};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(e,b){var d=this.length;b=b||0;if(!d)return-1;if(b>=d)return-1;if(b<0)b+=d;for(;b<d;b++)if(Object.prototype.hasOwnProperty.call(this,b))if(e===this[b])return b;return-1};
if(!Object.keys)Object.keys=function(e){var b=[];for(var d in e)Object.prototype.hasOwnProperty.call(e,d)&&b.push(d);return b};if(!String.prototype.trim)String.prototype.trim=function(){return String(this).replace(/^\s\s*/,"").replace(/\s\s*$/,"")};var o,m;if(typeof y==="undefined"){o=exports;m=q("less/tree")}else{if(typeof y.less==="undefined")y.less={};o=y.less;m=y.less.tree={}}o.Parser=function(e){function b(){r=t[n];E=w=j}function d(){t[n]=r;E=j=w}function g(){if(j>E){t[n]=t[n].slice(j-E);E=j}}
function a(f){var k,l,p;if(f instanceof Function)return f.call(O.parsers);else if(typeof f==="string"){f=h.charAt(j)===f?f:null;k=1;g()}else{g();if(f=f.exec(t[n]))k=f[0].length;else return null}if(f){mem=j+=k;for(p=j+t[n].length-k;j<p;){l=h.charCodeAt(j);if(!(l===32||l===10||l===9))break;j++}t[n]=t[n].slice(k+(j-mem));E=j;t[n].length===0&&n<t.length-1&&n++;return typeof f==="string"?f:f.length===1?f[0]:f}}function i(f){return typeof f==="string"?h.charAt(j)===f:f.test(t[n])?true:false}var h,j,n,r,
w,v,t,E,O,Y=function(){},S=this.imports={paths:e&&e.paths||[],queue:[],files:{},push:function(f,k){var l=this;this.queue.push(f);o.Parser.importer(f,this.paths,function(p){l.queue.splice(l.queue.indexOf(f),1);l.files[f]=p;k(p);l.queue.length===0&&Y()})}};this.env=e=e||{};this.optimization="optimization"in this.env?this.env.optimization:1;this.env.filename=this.env.filename||null;return O={imports:S,parse:function(f,k){var l,p,K=null;j=n=E=v=0;t=[];h=f.replace(/\r\n/g,"\n");t=function(L){for(var G=
0,H=/[^"'`\{\}\/]+/g,A=/\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/.*/g,B=0,x,z=L[0],C,s=0,u;s<h.length;s++){H.lastIndex=s;if(x=H.exec(h))if(x.index===s){s+=x[0].length;z.push(x[0])}u=h.charAt(s);A.lastIndex=s;if(!C&&u==="/"){x=h.charAt(s+1);if(x==="/"||x==="*")if(x=A.exec(h))if(x.index===s){s+=x[0].length;z.push(x[0]);u=h.charAt(s)}}if(u==="{"&&!C){B++;z.push(u)}else if(u==="}"&&!C){B--;z.push(u);L[++G]=z=[]}else{if(u==='"'||u==="'"||u==="`")C=C?C===u?false:C:u;z.push(u)}}if(B>0)throw{type:"Syntax",message:"Missing closing `}`",
filename:e.filename};return L.map(function(F){return F.join("")})}([[]]);l=new m.Ruleset([],a(this.parsers.primary));l.root=true;l.toCSS=function(L){var G,H;return function(A,B){function x(u){return u?(h.slice(0,u).match(/\n/g)||"").length:null}var z=[];A=A||{};if(typeof B==="object"&&!Array.isArray(B)){B=Object.keys(B).map(function(u){var F=B[u];if(!(F instanceof m.Value)){F instanceof m.Expression||(F=new m.Expression([F]));F=new m.Value([F])}return new m.Rule("@"+u,F,false,0)});z=[new m.Ruleset(null,
B)]}try{var C=L.call(this,{frames:z}).toCSS([],{compress:A.compress||false})}catch(s){H=h.split("\n");G=x(s.index);A=s.index;for(z=-1;A>=0&&h.charAt(A)!=="\n";A--)z++;throw{type:s.type,message:s.message,filename:e.filename,index:s.index,line:typeof G==="number"?G+1:null,callLine:s.call&&x(s.call)+1,callExtract:H[x(s.call)],stack:s.stack,column:z,extract:[H[G-1],H[G],H[G+1]]};}return A.compress?C.replace(/(\s)+/g,"$1"):C}}(l.eval);if(j<h.length-1){j=v;p=h.split("\n");f=(h.slice(0,j).match(/\n/g)||
"").length+1;for(var T=j,Z=-1;T>=0&&h.charAt(T)!=="\n";T--)Z++;K={name:"ParseError",message:"Syntax Error on line "+f,filename:e.filename,line:f,column:Z,extract:[p[f-2],p[f-1],p[f]]}}if(this.imports.queue.length>0)Y=function(){k(K,l)};else k(K,l)},parsers:{primary:function(){for(var f,k=[];(f=a(this.mixin.definition)||a(this.rule)||a(this.ruleset)||a(this.mixin.call)||a(this.comment)||a(this.directive))||a(/^[\s\n]+/);)f&&k.push(f);return k},comment:function(){var f;if(h.charAt(j)==="/")if(h.charAt(j+
1)==="/")return new m.Comment(a(/^\/\/.*/),true);else if(f=a(/^\/\*(?:[^*]|\*+[^\/*])*\*+\/\n?/))return new m.Comment(f)},entities:{quoted:function(){var f;if(!(h.charAt(j)!=='"'&&h.charAt(j)!=="'"))if(f=a(/^"((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)'/))return new m.Quoted(f[0],f[1]||f[2])},keyword:function(){var f;if(f=a(/^[A-Za-z-]+/))return new m.Keyword(f)},call:function(){var f,k;if(f=/^([\w-]+|%)\(/.exec(t[n])){f=f[1].toLowerCase();if(f==="url")return null;else j+=f.length+1;if(f==="alpha")return a(this.alpha);
k=a(this.entities.arguments);if(a(")"))if(f)return new m.Call(f,k)}},arguments:function(){for(var f=[],k;k=a(this.expression);){f.push(k);if(!a(","))break}return f},literal:function(){return a(this.entities.dimension)||a(this.entities.color)||a(this.entities.quoted)},url:function(){var f;if(!(h.charAt(j)!=="u"||!a(/^url\(/))){f=a(this.entities.quoted)||a(this.entities.variable)||a(/^[-\w%@$\/.&=:;#+?]+/)||"";if(!a(")"))throw new Error("missing closing ) for url()");return new m.URL(f.value||f instanceof
m.Variable?f:new m.Anonymous(f),S.paths)}},variable:function(){var f,k=j;if(h.charAt(j)==="@"&&(f=a(/^@[\w-]+/)))return new m.Variable(f,k)},color:function(){var f;if(h.charAt(j)==="#"&&(f=a(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/)))return new m.Color(f[1])},dimension:function(){var f;f=h.charCodeAt(j);if(!(f>57||f<45||f===47))if(f=a(/^(-?\d*\.?\d+)(px|%|em|pc|ex|in|deg|s|ms|pt|cm|mm|rad|grad|turn)?/))return new m.Dimension(f[1],f[2])},javascript:function(){var f;if(h.charAt(j)==="`")if(f=a(/^`([^`]*)`/))return new m.JavaScript(f[1],
j)}},variable:function(){var f;if(h.charAt(j)==="@"&&(f=a(/^(@[\w-]+)\s*:/)))return f[1]},shorthand:function(){var f,k;if(i(/^[@\w.%-]+\/[@\w.-]+/))if((f=a(this.entity))&&a("/")&&(k=a(this.entity)))return new m.Shorthand(f,k)},mixin:{call:function(){var f=[],k,l,p,K=j;k=h.charAt(j);if(!(k!=="."&&k!=="#")){for(;k=a(/^[#.][\w-]+/);){f.push(new m.Element(l,k));l=a(">")}a("(")&&(p=a(this.entities.arguments))&&a(")");if(f.length>0&&(a(";")||i("}")))return new m.mixin.Call(f,p,K)}},definition:function(){var f,
k=[],l,p;if(!(h.charAt(j)!=="."&&h.charAt(j)!=="#"||i(/^[^{]*(;|})/)))if(f=a(/^([#.][\w-]+)\s*\(/)){for(f=f[1];l=a(this.entities.variable)||a(this.entities.literal)||a(this.entities.keyword);){if(l instanceof m.Variable)if(a(":"))if(p=a(this.expression))k.push({name:l.name,value:p});else throw new Error("Expected value");else k.push({name:l.name});else k.push({value:l});if(!a(","))break}if(!a(")"))throw new Error("Expected )");if(l=a(this.block))return new m.mixin.Definition(f,k,l)}}},entity:function(){return a(this.entities.literal)||
a(this.entities.variable)||a(this.entities.url)||a(this.entities.call)||a(this.entities.keyword)||a(this.entities.javascript)},end:function(){return a(";")||i("}")},alpha:function(){var f;if(a(/^opacity=/i))if(f=a(/^\d+/)||a(this.entities.variable)){if(!a(")"))throw new Error("missing closing ) for alpha()");return new m.Alpha(f)}},element:function(){var f;c=a(this.combinator);if(f=a(/^[.#:]?[\w-]+/)||a("*")||a(this.attribute)||a(/^\([^)@]+\)/))return new m.Element(c,f)},combinator:function(){var f=
h.charAt(j);if(f===">"||f==="&"||f==="+"||f==="~"){for(j++;h.charAt(j)===" ";)j++;return new m.Combinator(f)}else if(f===":"&&h.charAt(j+1)===":"){for(j+=2;h.charAt(j)===" ";)j++;return new m.Combinator("::")}else return h.charAt(j-1)===" "?new m.Combinator(" "):new m.Combinator(null)},selector:function(){for(var f,k=[],l;f=a(this.element);){l=h.charAt(j);k.push(f);if(l==="{"||l==="}"||l===";"||l===",")break}if(k.length>0)return new m.Selector(k)},tag:function(){return a(/^[a-zA-Z][a-zA-Z-]*[0-9]?/)||
a("*")},attribute:function(){var f="",k,l,p;if(a("[")){if(k=a(/^[a-zA-Z-]+/)||a(this.entities.quoted))f=(p=a(/^[|~*$^]?=/))&&(l=a(this.entities.quoted)||a(/^[\w-]+/))?[k,p,l.toCSS?l.toCSS():l].join(""):k;if(a("]"))if(f)return"["+f+"]"}},block:function(){var f;if(a("{")&&(f=a(this.primary))&&a("}"))return f},ruleset:function(){var f=[],k,l;b();if(k=/^([.#: \w-]+)[\s\n]*\{/.exec(t[n])){j+=k[0].length-1;f=[new m.Selector([new m.Element(null,k[1])])]}else{for(;k=a(this.selector);){f.push(k);if(!a(","))break}k&&
a(this.comment)}if(f.length>0&&(l=a(this.block)))return new m.Ruleset(f,l);else{v=j;d()}},rule:function(){var f;f=h.charAt(j);var k;b();if(!(f==="."||f==="#"||f==="&"))if(name=a(this.variable)||a(this.property)){if(name.charAt(0)!="@"&&(match=/^([^@+\/'"*`(;{}-]*);/.exec(t[n]))){j+=match[0].length-1;f=new m.Anonymous(match[1])}else f=name==="font"?a(this.font):a(this.value);k=a(this.important);if(f&&a(this.end))return new m.Rule(name,f,k,w);else{v=j;d()}}},"import":function(){var f;if(a(/^@import\s+/)&&
(f=a(this.entities.quoted)||a(this.entities.url))&&a(";"))return new m.Import(f,S)},directive:function(){var f,k,l;if(h.charAt(j)==="@")if(k=a(this["import"]))return k;else if(f=a(/^@media|@page/)){l=a(/^[^{]+/).trim();if(k=a(this.block))return new m.Directive(f+" "+l,k)}else if(f=a(/^@[-a-z]+/))if(f==="@font-face"){if(k=a(this.block))return new m.Directive(f,k)}else if((k=a(this.entity))&&a(";"))return new m.Directive(f,k)},font:function(){for(var f=[],k=[],l;l=a(this.shorthand)||a(this.entity);)k.push(l);
f.push(new m.Expression(k));if(a(","))for(;l=a(this.expression);){f.push(l);if(!a(","))break}return new m.Value(f)},value:function(){for(var f,k=[];f=a(this.expression);){k.push(f);if(!a(","))break}if(k.length>0)return new m.Value(k)},important:function(){if(h.charAt(j)==="!")return a(/^! *important/)},sub:function(){var f;if(a("(")&&(f=a(this.expression))&&a(")"))return f},multiplication:function(){var f,k,l,p;if(f=a(this.operand)){for(;(l=a("/")||a("*"))&&(k=a(this.operand));)p=new m.Operation(l,
[p||f,k]);return p||f}},addition:function(){var f,k,l,p;if(f=a(this.multiplication)){for(;(l=a(/^[-+]\s+/)||h.charAt(j-1)!=" "&&(a("+")||a("-")))&&(k=a(this.multiplication));)p=new m.Operation(l,[p||f,k]);return p||f}},operand:function(){return a(this.sub)||a(this.entities.dimension)||a(this.entities.color)||a(this.entities.variable)||a(this.entities.call)},expression:function(){for(var f,k=[];f=a(this.addition)||a(this.entity);)k.push(f);if(k.length>0)return new m.Expression(k)},property:function(){var f;
if(f=a(/^(\*?-?[-a-z_0-9]+)\s*:/))return f[1]}}}};if(typeof y!=="undefined")o.Parser.importer=function(e,b,d){if(e.charAt(0)!=="/"&&b.length>0)e=b[0]+e;X({href:e,title:e},d,true)};(function(e){function b(a){return e.functions.hsla(a.h,a.s,a.l,a.a)}function d(a){if(a instanceof e.Dimension)return parseFloat(a.unit=="%"?a.value/100:a.value);else if(typeof a==="number")return a;else throw{error:"RuntimeError",message:"color functions take numbers as parameters"};}function g(a){return Math.min(1,Math.max(0,
a))}e.functions={rgb:function(a,i,h){return this.rgba(a,i,h,1)},rgba:function(a,i,h,j){a=[a,i,h].map(function(n){return d(n)});j=d(j);return new e.Color(a,j)},hsl:function(a,i,h){return this.hsla(a,i,h,1)},hsla:function(a,i,h,j){function n(v){v=v<0?v+1:v>1?v-1:v;return v*6<1?w+(r-w)*v*6:v*2<1?r:v*3<2?w+(r-w)*(2/3-v)*6:w}a=d(a)%360/360;i=d(i);h=d(h);j=d(j);var r=h<=0.5?h*(i+1):h+i-h*i,w=h*2-r;return this.rgba(n(a+1/3)*255,n(a)*255,n(a-1/3)*255,j)},hue:function(a){return new e.Dimension(Math.round(a.toHSL().h))},
saturation:function(a){return new e.Dimension(Math.round(a.toHSL().s*100),"%")},lightness:function(a){return new e.Dimension(Math.round(a.toHSL().l*100),"%")},alpha:function(a){return new e.Dimension(a.toHSL().a)},saturate:function(a,i){a=a.toHSL();a.s+=i.value/100;a.s=g(a.s);return b(a)},desaturate:function(a,i){a=a.toHSL();a.s-=i.value/100;a.s=g(a.s);return b(a)},lighten:function(a,i){a=a.toHSL();a.l+=i.value/100;a.l=g(a.l);return b(a)},darken:function(a,i){a=a.toHSL();a.l-=i.value/100;a.l=g(a.l);
return b(a)},spin:function(a,i){a=a.toHSL();i=(a.h+i.value)%360;a.h=i<0?360+i:i;return b(a)},greyscale:function(a){return this.desaturate(a,new e.Dimension(100))},e:function(a){return new e.Anonymous(a instanceof e.JavaScript?a.evaluated:a)},"%":function(a){for(var i=Array.prototype.slice.call(arguments,1),h=a.value,j=0;j<i.length;j++)h=h.replace(/%s/,i[j].value).replace(/%[da]/,i[j].toCSS());h=h.replace(/%%/g,"%");return new e.Quoted('"'+h+'"',h)}}})(q("less/tree"));(function(e){e.Alpha=function(b){this.value=
b};e.Alpha.prototype={toCSS:function(){return"alpha(opacity="+(this.value.toCSS?this.value.toCSS():this.value)+")"},eval:function(){return this}}})(q("less/tree"));(function(e){e.Anonymous=function(b){this.value=b.value||b};e.Anonymous.prototype={toCSS:function(){return this.value},eval:function(){return this}}})(q("less/tree"));(function(e){e.Call=function(b,d){this.name=b;this.args=d};e.Call.prototype={eval:function(b){var d=this.args.map(function(g){return g.eval(b)});return this.name in e.functions?
e.functions[this.name].apply(e.functions,d):new e.Anonymous(this.name+"("+d.map(function(g){return g.toCSS()}).join(", ")+")")},toCSS:function(b){return this.eval(b).toCSS()}}})(q("less/tree"));(function(e){e.Color=function(b,d){this.rgb=Array.isArray(b)?b:b.length==6?b.match(/.{2}/g).map(function(g){return parseInt(g,16)}):b.split("").map(function(g){return parseInt(g+g,16)});this.alpha=typeof d==="number"?d:1};e.Color.prototype={eval:function(){return this},toCSS:function(){return this.alpha<1?
"rgba("+this.rgb.map(function(b){return Math.round(b)}).concat(this.alpha).join(", ")+")":"#"+this.rgb.map(function(b){b=Math.round(b);b=(b>255?255:b<0?0:b).toString(16);return b.length===1?"0"+b:b}).join("")},operate:function(b,d){var g=[];d instanceof e.Color||(d=d.toColor());for(var a=0;a<3;a++)g[a]=e.operate(b,this.rgb[a],d.rgb[a]);return new e.Color(g)},toHSL:function(){var b=this.rgb[0]/255,d=this.rgb[1]/255,g=this.rgb[2]/255,a=this.alpha,i=Math.max(b,d,g),h=Math.min(b,d,g),j,n=(i+h)/2,r=i-
h;if(i===h)j=h=0;else{h=n>0.5?r/(2-i-h):r/(i+h);switch(i){case b:j=(d-g)/r+(d<g?6:0);break;case d:j=(g-b)/r+2;break;case g:j=(b-d)/r+4;break}j/=6}return{h:j*360,s:h,l:n,a:a}}}})(q("less/tree"));(function(e){e.Comment=function(b,d){this.value=b;this.silent=!!d};e.Comment.prototype={toCSS:function(b){return b.compress?"":this.value},eval:function(){return this}}})(q("less/tree"));(function(e){e.Dimension=function(b,d){this.value=parseFloat(b);this.unit=d||null};e.Dimension.prototype={eval:function(){return this},
toColor:function(){return new e.Color([this.value,this.value,this.value])},toCSS:function(){return this.value+this.unit},operate:function(b,d){return new e.Dimension(e.operate(b,this.value,d.value),this.unit||d.unit)}}})(q("less/tree"));(function(e){e.Directive=function(b,d){this.name=b;if(Array.isArray(d))this.ruleset=new e.Ruleset([],d);else this.value=d};e.Directive.prototype={toCSS:function(b,d){if(this.ruleset){this.ruleset.root=true;return this.name+(d.compress?"{":" {\n  ")+this.ruleset.toCSS(b,
d).trim().replace(/\n/g,"\n  ")+(d.compress?"}":"\n}\n")}else return this.name+" "+this.value.toCSS()+";\n"},eval:function(b){b.frames.unshift(this);this.ruleset=this.ruleset&&this.ruleset.eval(b);b.frames.shift();return this},variable:function(b){return e.Ruleset.prototype.variable.call(this.ruleset,b)},find:function(){return e.Ruleset.prototype.find.apply(this.ruleset,arguments)},rulesets:function(){return e.Ruleset.prototype.rulesets.apply(this.ruleset)}}})(q("less/tree"));(function(e){e.Element=
function(b,d){this.combinator=b instanceof e.Combinator?b:new e.Combinator(b);this.value=d.trim()};e.Element.prototype.toCSS=function(b){return this.combinator.toCSS(b||{})+this.value};e.Combinator=function(b){this.value=b===" "?" ":b?b.trim():""};e.Combinator.prototype.toCSS=function(b){return{"":""," ":" ","&":"",":":" :","::":"::","+":b.compress?"+":" + ","~":b.compress?"~":" ~ ",">":b.compress?">":" > "}[this.value]}})(q("less/tree"));(function(e){e.Expression=function(b){this.value=b};e.Expression.prototype=
{eval:function(b){return this.value.length>1?new e.Expression(this.value.map(function(d){return d.eval(b)})):this.value[0].eval(b)},toCSS:function(b){return this.value.map(function(d){return d.toCSS(b)}).join(" ")}}})(q("less/tree"));(function(e){e.Import=function(b,d){var g=this;this._path=b;this.path=b instanceof e.Quoted?/\.(le?|c)ss$/.test(b.value)?b.value:b.value+".less":b.value.value||b.value;(this.css=/css$/.test(this.path))||d.push(this.path,function(a){if(!a)throw new Error("Error parsing "+
g.path);g.root=a})};e.Import.prototype={toCSS:function(){return this.css?"@import "+this._path.toCSS()+";\n":""},eval:function(b){var d;if(this.css)return this;else{d=new e.Ruleset(null,this.root.rules.slice(0));for(var g=0;g<d.rules.length;g++)d.rules[g]instanceof e.Import&&Array.prototype.splice.apply(d.rules,[g,1].concat(d.rules[g].eval(b)));return d.rules}}}})(q("less/tree"));(function(e){e.JavaScript=function(b,d){this.expression=b;this.index=d};e.JavaScript.prototype={toCSS:function(){return JSON.stringify(this.evaluated)},
eval:function(b){var d=new Function("return ("+this.expression+")"),g={};for(var a in b.frames[0].variables())g[a.slice(1)]={value:b.frames[0].variables()[a].value,toJS:function(){return this.value.eval(b).toCSS()}};try{this.evaluated=d.call(g)}catch(i){throw{message:"JavaScript evaluation error: '"+i.name+": "+i.message+"'",index:this.index};}return this}}})(q("less/tree"));(function(e){e.Keyword=function(b){this.value=b};e.Keyword.prototype={eval:function(){return this},toCSS:function(){return this.value}}})(q("less/tree"));
(function(e){e.mixin={};e.mixin.Call=function(b,d,g){this.selector=new e.Selector(b);this.arguments=d;this.index=g};e.mixin.Call.prototype={eval:function(b){for(var d,g=[],a=false,i=0;i<b.frames.length;i++)if((d=b.frames[i].find(this.selector)).length>0){for(i=0;i<d.length;i++)if(d[i].match(this.arguments,b))try{Array.prototype.push.apply(g,d[i].eval(b,this.arguments).rules);a=true}catch(h){throw{message:h.message,index:h.index,stack:h.stack,call:this.index};}if(a)return g;else throw{message:"No matching definition was found for `"+
this.selector.toCSS().trim()+"("+this.arguments.map(function(j){return j.toCSS()}).join(", ")+")`",index:this.index};}throw{message:this.selector.toCSS().trim()+" is undefined",index:this.index};}};e.mixin.Definition=function(b,d,g){this.name=b;this.selectors=[new e.Selector([new e.Element(null,b)])];this.params=d;this.arity=d.length;this.rules=g;this._lookups={};this.required=d.reduce(function(a,i){return i.name&&!i.value?a+1:a},0);this.parent=e.Ruleset.prototype;this.frames=[]};e.mixin.Definition.prototype=
{toCSS:function(){return""},variable:function(b){return this.parent.variable.call(this,b)},variables:function(){return this.parent.variables.call(this)},find:function(){return this.parent.find.apply(this,arguments)},rulesets:function(){return this.parent.rulesets.apply(this)},eval:function(b,d){for(var g=new e.Ruleset(null,[]),a=0,i;a<this.params.length;a++)if(this.params[a].name)if(i=d&&d[a]||this.params[a].value)g.rules.unshift(new e.Rule(this.params[a].name,i.eval(b)));else throw{message:"wrong number of arguments for "+
this.name+" ("+d.length+" for "+this.arity+")"};return(new e.Ruleset(null,this.rules.slice(0))).eval({frames:[this,g].concat(this.frames,b.frames)})},match:function(b,d){var g=b&&b.length||0;if(g<this.required)return false;g=Math.min(g,this.arity);for(var a=0;a<g;a++)if(!this.params[a].name)if(b[a].eval(d).toCSS()!=this.params[a].value.eval(d).toCSS())return false;return true}}})(q("less/tree"));(function(e){e.Operation=function(b,d){this.op=b.trim();this.operands=d};e.Operation.prototype.eval=function(b){var d=
this.operands[0].eval(b);b=this.operands[1].eval(b);var g;if(d instanceof e.Dimension&&b instanceof e.Color)if(this.op==="*"||this.op==="+"){g=b;b=d;d=g}else throw{name:"OperationError",message:"Can't substract or divide a color from a number"};return d.operate(this.op,b)};e.operate=function(b,d,g){switch(b){case "+":return d+g;case "-":return d-g;case "*":return d*g;case "/":return d/g}}})(q("less/tree"));(function(e){e.Quoted=function(b,d){this.value=d||"";this.quote=b.charAt(0)};e.Quoted.prototype=
{toCSS:function(){return this.quote+this.value+this.quote},eval:function(){return this}}})(q("less/tree"));(function(e){e.Rule=function(b,d,g,a){this.name=b;this.value=d instanceof e.Value?d:new e.Value([d]);this.important=g?" "+g.trim():"";this.index=a;this.variable=b.charAt(0)==="@"?true:false};e.Rule.prototype.toCSS=function(b){return this.variable?"":this.name+(b.compress?":":": ")+this.value.toCSS(b)+this.important+";"};e.Rule.prototype.eval=function(b){return new e.Rule(this.name,this.value.eval(b),
this.important,this.index)};e.Shorthand=function(b,d){this.a=b;this.b=d};e.Shorthand.prototype={toCSS:function(b){return this.a.toCSS(b)+"/"+this.b.toCSS(b)},eval:function(){return this}}})(q("less/tree"));(function(e){e.Ruleset=function(b,d){this.selectors=b;this.rules=d;this._lookups={}};e.Ruleset.prototype={eval:function(b){var d=new e.Ruleset(this.selectors,this.rules.slice(0));d.root=this.root;b.frames.unshift(d);if(d.root)for(var g=0;g<d.rules.length;g++)d.rules[g]instanceof e.Import&&Array.prototype.splice.apply(d.rules,
[g,1].concat(d.rules[g].eval(b)));for(g=0;g<d.rules.length;g++)if(d.rules[g]instanceof e.mixin.Definition)d.rules[g].frames=b.frames.slice(0);for(g=0;g<d.rules.length;g++)d.rules[g]instanceof e.mixin.Call&&Array.prototype.splice.apply(d.rules,[g,1].concat(d.rules[g].eval(b)));g=0;for(var a;g<d.rules.length;g++){a=d.rules[g];a instanceof e.mixin.Definition||(d.rules[g]=a.eval?a.eval(b):a)}b.frames.shift();return d},match:function(b){return!b||b.length===0},variables:function(){return this._variables?
this._variables:(this._variables=this.rules.reduce(function(b,d){if(d instanceof e.Rule&&d.variable===true)b[d.name]=d;return b},{}))},variable:function(b){return this.variables()[b]},rulesets:function(){return this._rulesets?this._rulesets:(this._rulesets=this.rules.filter(function(b){return b instanceof e.Ruleset||b instanceof e.mixin.Definition}))},find:function(b,d){d=d||this;var g=[],a=b.toCSS();if(a in this._lookups)return this._lookups[a];this.rulesets().forEach(function(i){if(i!==d)for(var h=
0;h<i.selectors.length;h++)if(b.match(i.selectors[h])){b.elements.length>1?Array.prototype.push.apply(g,i.find(new e.Selector(b.elements.slice(1)),d)):g.push(i);break}});return this._lookups[a]=g},toCSS:function(b,d){var g=[],a=[],i=[],h=[];if(!this.root)if(b.length===0)h=this.selectors.map(function(r){return[r]});else for(var j=0;j<this.selectors.length;j++)for(var n=0;n<b.length;n++)h.push(b[n].concat([this.selectors[j]]));for(j=0;j<this.rules.length;j++){b=this.rules[j];if(b.rules||b instanceof
e.Directive)i.push(b.toCSS(h,d));else if(b instanceof e.Comment)b.silent||(this.root?i.push(b.toCSS(d)):a.push(b.toCSS(d)));else if(b.toCSS&&!b.variable)a.push(b.toCSS(d));else b.value&&!b.variable&&a.push(b.value.toString())}i=i.join("");if(this.root)g.push(a.join(d.compress?"":"\n"));else if(a.length>0){h=h.map(function(r){return r.map(function(w){return w.toCSS(d)}).join("").trim()}).join(d.compress?",":h.length>3?",\n":", ");g.push(h,(d.compress?"{":" {\n  ")+a.join(d.compress?"":"\n  ")+(d.compress?
"}":"\n}\n"))}g.push(i);return g.join("")+(d.compress?"\n":"")}}})(q("less/tree"));(function(e){e.Selector=function(b){this.elements=b;if(this.elements[0].combinator.value==="")this.elements[0].combinator.value=" "};e.Selector.prototype.match=function(b){return this.elements[0].value===b.elements[0].value?true:false};e.Selector.prototype.toCSS=function(b){if(this._css)return this._css;return this._css=this.elements.map(function(d){return typeof d==="string"?" "+d.trim():d.toCSS(b)}).join("")}})(q("less/tree"));
(function(e){e.URL=function(b,d){if(!/^(?:https?:\/|file:\/)?\//.test(b.value)&&d.length>0&&typeof y!=="undefined")b.value=d[0]+(b.value.charAt(0)==="/"?b.value.slice(1):b.value);this.value=b;this.paths=d};e.URL.prototype={toCSS:function(){return"url("+this.value.toCSS()+")"},eval:function(b){return new e.URL(this.value.eval(b),this.paths)}}})(q("less/tree"));(function(e){e.Value=function(b){this.value=b;this.is="value"};e.Value.prototype={eval:function(b){return this.value.length===1?this.value[0].eval(b):
new e.Value(this.value.map(function(d){return d.eval(b)}))},toCSS:function(b){return this.value.map(function(d){return d.toCSS(b)}).join(b.compress?",":", ")}}})(q("less/tree"));(function(e){e.Variable=function(b,d){this.name=b;this.index=d};e.Variable.prototype={eval:function(b){var d,g,a=this.name;if(d=e.find(b.frames,function(i){if(g=i.variable(a))return g.value.eval(b)}))return d;else throw{message:"variable "+this.name+" is undefined",index:this.index};}}})(q("less/tree"));q("less/tree").find=
function(e,b){for(var d=0,g;d<e.length;d++)if(g=b.call(e,e[d]))return g;return null};var P=location.protocol==="file:"||location.protocol==="chrome:"||location.protocol==="resource:";o.env=o.env||location.hostname=="127.0.0.1"||location.hostname=="0.0.0.0"||location.hostname=="localhost"||location.port.length>0||P?"development":"production";o.async=false;o.poll=o.poll||(P?1E3:1500);o.watch=function(){return this.watchMode=true};o.unwatch=function(){return this.watchMode=false};if(o.env==="development"){o.optimization=
0;/!watch/.test(location.hash)&&o.watch();o.watchTimer=setInterval(function(){o.watchMode&&W(function(e,b,d){e&&N(e.toCSS(),b,d.lastModified)})},o.poll)}else o.optimization=3;var D;try{D=typeof y.localStorage==="undefined"?null:y.localStorage}catch(ca){D=null}var M=document.getElementsByTagName("link"),V=/^text\/(x-)?less$/;o.sheets=[];for(var J=0;J<M.length;J++)if(M[J].rel==="stylesheet/less"||M[J].rel.match(/stylesheet/)&&M[J].type.match(V))o.sheets.push(M[J]);o.refresh=function(e){var b=endTime=
new Date;W(function(d,g,a){if(a.local)I("loading "+g.href+" from cache.");else{I("parsed "+g.href+" successfully.");N(d.toCSS(),g,a.lastModified)}I("css for "+g.href+" generated in "+(new Date-endTime)+"ms");a.remaining===0&&I("css generated in "+(new Date-b)+"ms");endTime=new Date},e);U()};o.refreshStyles=U;o.refresh(o.env==="development")})(window);

/* This script compresses or pretty prints valid CSS code */
/* Author: datube - Date: 2005-11-08 - Revision: 0.0.3-1 */

/* This script is free software; you can distribute it and/or modify it */
/* under the terms of the GNU GPL.  See the file COPYING. */

/* Copyright (C) 2005 datube */

/*
  Modified: $Author: datube $- $Date: 2005-11-08 13:29:00 +0100 (Tue, 08 Now 2005) $ - $Rev: 33 $ 
*/


/* --- compress --- */
// input: 
//  (str) sin = valid css
//  (bool) bs = single line
//  (bool) ic = include comment
// output:
//   (str) compressed css
function compress(sin, bs, ic,bsort){
var sout= '';
var comp = 0;
var re;
  sout = sin;

  bs=(typeof(bs)=='undefined')?false:bs;
  ic=(typeof(ic)=='undefined')?false:ic;  
  bsort=(typeof(bsort)=='undefined')?false:bsort;
      
  // I've not a lot of experience with Regular Expressions,
  // Any for additional add-ons.. please notify me!	
  
  //remove all multiple white-spaces
  sout = sout.replace(/\s+/g, ' ');
  
  //remove all -*/..-
  sout = sout.replace(/\*\/\s+/g, '*\/');
   
  //replace all occurences of - spaces + [ an { or an } ] + white-spaces - with "the character"
  sout = sout.replace(/\s{0,}({|})\s{0,}/g, '$1');

  //whipe out all spaces between css-names:.. and last value ; ..
  sout = sout.replace(/\s{0,}(:|;|,)\s{0,}/g, '$1');

  //remove all -;- before -}-
  sout=sout.replace(/(;})/g, '}');

  // shorthand notations
  sout = shorthand_notations(sout); 

  //remove all comments
  if(!ic) sout = sout.replace(/(\/\*).*?(\*\/)\s{0,}/g, '');
  
  //trim leading and trailing spaces (if any left)
  sout = sout.replace(/^\s+/g, '').replace(/\s+$/g, '');

  // sort css definitions (only if no comments included)
  if(!ic && bsort) sout = sortcss(sout);

  //and for the reading-ness of all.. replace -} or */- with - } and a line break -
  
  if(!bs){
    sout = sout.replace(/}/g, '}\n'); 
    sout=sout.replace(/\*\//g, '*\/\n');  
  }
  


  return sout;

}//--------------------------------------------------------------


function shorthand_notations(sin){
var sout = sin;

  /* Smart replaces for shorthand notations */
  // replace ' 0px|em|pt|cm|mm|in' by ' 0'
  sout = sout.replace(/([\s|:])0\w+/g, '$10');
    
  // replace default colorcoding with shorthand notation
  sout = sout.replace(/#(\S)\1(\S)\2(\S)\3([;|}|\s])/g, '#$1$2$3$4');
  
  return sout;
}//--------------------------------------------------------------


function uncompress(sin,style){
var sout= '';

  // first compress it; so we sure we have singe-line input
  sout = compress(sin, true, true); 

  /* pretty print */
  	
  // strip leading and trailing spaces (if any)
  sout = sout.replace(/\s+$/g, '');
  
  // lay(back)out comments (also strips spaces..)
  sout = sout.replace(/\*\/(\w{0,})/g, '*\/\n$1');
    
  switch (style) {
    case '0':
      // opening curly bracket on next line
      sout = sout.replace(/\{/g, '\n{ ');
      // new line before new rule (semicolon)
      sout = sout.replace(/([\w|\W]);([\w|\W])/g, '$1;\n  $2');
      //ugly hack to fix stuff
      sout = sout.replace(/\}/g, '; }\n\n');
      break;
    case '1':
      // replace curly bracket with  newline curly bracket newline
      sout = sout.replace(/\{/g, ' {\n  ');
      // new line before new rule (semicolon)
      sout = sout.replace(/([\w|\W]);([\w|\W])/g, '$1;\n  $2');
      //add an extra space between prop and val and after a comma
      sout = sout.replace(/(:|,)/g, '$1 ');
      //extract shorthand rgb-color notation
      sout = sout.replace(/#(\S)(\S)(\S)([;|}|\s])/g, '#$1$1$2$2$3$3$4');
      //ugly hack to fix stuff
      sout = sout.replace(/\}/g, ';\n}\n\n');
      break;
  }

  // add -  -  after -;..comment-line-
  sout = sout.replace(/;\s{0,}\/\*(.*?)\*\/\s{0,}/g,'; /\* $1 \*\/\n  ');  
  return sout;

}//------------------------------------------------------------

/* _c(ompose)f(ont)prop(erty) */
function _cfprop(grp){
var ret = s = '';
var k = c = 0;

//http://www.w3.org/TR/REC-CSS2/fonts.html#font-shorthand
//[[<'font-style'> || <'font-variant'> || <'font-weight'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ]

    //number of style settings
  for(k=1;k<grp[1].length;k++){c+=1*(grp[1][k]!='') };

  if ((c>1)&&(grp[1][4]!='')&&(grp[1][6]!='')){ // MUST have an font-size AND family <- 2005-11-08
    //compose shorthand property
    ret+= ((s=grp[1][1])!='')?' '+s:''; // style
    ret+= ((s=grp[1][2])!='')?' '+s:''; // variant
    ret+= ((s=grp[1][3])!='')?' '+s:''; // weight
    ret+= ((s=grp[1][4])!='')?' '+s:''; // size
    ret+=(((s=grp[1][5])!='')&&(grp[1][4]!=''))?'/'+s:' '; //height (requires font-size?)
    ret+= ((s=grp[1][6])!='')?' '+s:''; // family
    //remove unwanted white-spaces
    ret = 'font:'+ret.replace(/\s+/g, ' ').replace(/^\s+/g, '').replace(/\s+$/g, '');
  }else //or not..
    ret=grp[1][0]; //retrieved style settings
    
  return ret;
}

/* sort output by style definition names */
/* output is by [html][class][id] */
function sortcss(sin){
var sout = sin.substring(0,sin.length-1); //strip last -}- and split by -}-
var css = new Array();
var c='';var i=0;
  css[0] = sout.split('}'); //create array of styles
  css[1]= new Array(); css[2]= new Array(); css[3]= new Array();
  for(i=0;i<css[0].length;i++){
    c=(css[0][i]).charAt(0);
    if(c=='#')      { css[3][css[3].length] = css[0][i]; }  /* ID class styles */
    else{ if(c=='.'){ css[2][css[2].length] = css[0][i]; }  /* class styles    */
    else            { css[1][css[1].length] = css[0][i]; }} /* html tag styles */ 
  }
  //sort them seperately
  css[1].sort(); css[2].sort(); css[3].sort();
  sout = css[1].join('}')+((css[1].length!=0)?'}':'')+
         css[2].join('}')+((css[2].length!=0)?'}':'')+
         css[3].join('}')+((css[3].length!=0)?'}':''); 
         
  return  sout;
}

function getSize(count) {
	var level = 0;

	while(count > 1024) {
		count = count/1024;
		level++;
	}

	// Round to 2 decimals
	count = Math.round(count*100)/100;

	level = (['', 'K', 'M', 'G', 'T'])[level];

	return '<strong>' + count + '</strong> ' + level + 'B';
}

function showCompressedCss() {
  var styleNode = document.getElementById("less:flawless_css");
  var css = '';
  if (styleNode.styleSheet) { // IE
      css = styleNode.styleSheet.cssText;
  } else {
      css = styleNode.firstChild.nodeValue;
  }
  css = compress(css, true, false);
  css = css.replace(/0{5,11}|1{5,11}|2{5,11}|3{5,11}|4{5,11}|5{5,11}|6{5,11}|7{5,11}|8{5,11}|9{5,11}/g, '');

  $("body").append("<div style='width:100%; border: 1px solid #ccc' id='flawless-compress'><p>Flaw{LESS} Css Framework - generated and compressed css (~" + getSize(css.length) + ")</p><textarea style='width:100%; height:200px'></textarea></div>");

  $("#flawless-compress > textarea").html(css);
}

if(window.location.hash == "#compress") {
	showCompressedCss();
}