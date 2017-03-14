/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-history-setclasses !*/
!function(n,e,o){function s(n){var e=f.className,o=Modernizr._config.classPrefix||"";if(r&&(e=e.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");e=e.replace(s,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(e+=" "+o+n.join(" "+o),r?f.className.baseVal=e:f.className=e)}function i(n,e){return typeof n===e}function a(){var n,e,o,s,a,f,r;for(var d in l)if(l.hasOwnProperty(d)){if(n=[],e=l[d],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)n.push(e.options.aliases[o].toLowerCase());for(s=i(e.fn,"function")?e.fn():e.fn,a=0;a<n.length;a++)f=n[a],r=f.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),t.push((s?"":"no-")+r.join("-"))}}var t=[],f=e.documentElement,r="svg"===f.nodeName.toLowerCase(),l=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var o=this;setTimeout(function(){e(o[n])},0)},addTest:function(n,e,o){l.push({name:n,fn:e,options:o})},addAsyncTest:function(n){l.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr,Modernizr.addTest("history",function(){var e=navigator.userAgent;return-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")?n.history&&"pushState"in n.history:!1}),a(),s(t),delete d.addTest,delete d.addAsyncTest;for(var c=0;c<Modernizr._q.length;c++)Modernizr._q[c]();n.Modernizr=Modernizr}(window,document);