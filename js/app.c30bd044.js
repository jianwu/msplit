(function(t){function e(e){for(var i,r,o=e[0],p=e[1],u=e[2],c=0,h=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(t[i]=p[i]);l&&l(e);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var p=n[o];0!==s[p]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],p=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=p;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"4aeb":function(t,e,n){"use strict";var i=n("a599"),s=n.n(i);s.a},"64a9":function(t,e,n){},a599:function(t,e,n){},ab54:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var i,s=n("2b0e"),a=n("5f5b"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MSplitTest")],1)},o=[],p=n("9ab4"),u=n("60a3"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("b-button-group",{staticClass:"mx-1"},[t._v("\n      Pane Visibility:\n      "),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.s1[0]},on:{"update:pressed":function(e){return t.$set(t.s1,0,e)}}},[t._v("p1")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.s2[0]},on:{"update:pressed":function(e){return t.$set(t.s2,0,e)}}},[t._v("p2")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.s3[0]},on:{"update:pressed":function(e){return t.$set(t.s3,0,e)}}},[t._v("p3")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.s31[0]},on:{"update:pressed":function(e){return t.$set(t.s31,0,e)}}},[t._v("p31")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.s32[0]},on:{"update:pressed":function(e){return t.$set(t.s32,0,e)}}},[t._v("p32")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.s4[0]},on:{"update:pressed":function(e){return t.$set(t.s4,0,e)}}},[t._v("p4")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.s41[0]},on:{"update:pressed":function(e){return t.$set(t.s41,0,e)}}},[t._v("p41")]),n("b-btn",{attrs:{size:"sm",variant:"outline-secondary",pressed:t.s42[0]},on:{"update:pressed":function(e){return t.$set(t.s42,0,e)}}},[t._v("p42")]),t._v("\n      Maximize Pane:"),n("b-form-select",{attrs:{options:["","p1","p2","p3","p31","p32","p33","p4","p41","p42"]},model:{value:t.maxPane,callback:function(e){t.maxPane=e},expression:"maxPane"}})],1)],1),n("div",{staticClass:"parent"},[n("msplit",{attrs:{maxPane:t.maxPane}},[n("div",{attrs:{slot:"p1",size:300,min:250,max:500,show:t.s1},slot:"p1"},[t._v("Pane1"),n("br"),t._v("size=300"),n("br"),t._v("min=250"),n("br"),t._v("max=500 ")]),n("div",{attrs:{slot:"p2",grow:10,show:t.s2},slot:"p2"},[t._v(" Pane2")]),n("msplit",{attrs:{slot:"p3",vertical:!0,grow:20,show:t.s3,maxPane:t.maxPane},slot:"p3"},[n("div",{attrs:{slot:"p31",show:t.s31},slot:"p31"},[t._v(" Pane31 ")]),n("div",{attrs:{slot:"p32",show:t.s32},slot:"p32"},[t._v(" Pane32 ")]),n("div",{attrs:{slot:"p33"},slot:"p33"},[t._v("Pane33 ")])]),n("msplit",{attrs:{slot:"p4",size:200,show:t.s4,maxPane:t.maxPane},slot:"p4"},[n("div",{attrs:{slot:"p41",show:t.s41},slot:"p41"},[t._v(" Pane41 ")]),n("div",{attrs:{slot:"p42",show:t.s42},slot:"p42"},[t._v(" Pane42 ")])])],1)],1)])},c=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"on-resize",rawName:"v-on-resize:600",value:t.onWindowResize,expression:"onWindowResize",arg:"600"}],staticClass:"msp-parent"},[n("div",{staticClass:"msp-container",class:{"msp-container-v":t.vertical},on:{mousemove:t.resizing,mouseup:t.stopResize}},[t._l(t.paneSet.panes,(function(e,i){return[n("div",{key:"msp_"+i},[n("div",{staticClass:"msp-pane",style:t.paneStyle(i)},[t._t(e.name)],2),i<t.paneSet.panes.length-1?n("div",{staticClass:"msp-handle",style:t.handleStyle(i),on:{mousedown:function(e){return e.preventDefault(),t.startResize(i,e)}}}):t._e()])]}))],2)])},d=[],f=n("2ef0"),v=n.n(f);function m(t,e){return void 0===e&&(e=0),Number.isNaN(t)?e:t}(function(t){t[t["NORMAL"]=0]="NORMAL",t[t["MAXIMIZED"]=1]="MAXIMIZED",t[t["MIINIMIZED"]=2]="MIINIMIZED"})(i||(i={}));var b=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.min=0,this.max=0,this.min=m(t),this.max=m(e)}return t.prototype.contains=function(t){return t>this.min&&t<this.max},t.prototype.add=function(t){this.min+=t.min,this.max===Number.MAX_VALUE&&t.max===Number.MAX_VALUE||(this.max+=t.max)},t}(),z=function(t){function e(e,n,s,a,r,o){void 0===s&&(s=10),void 0===a&&(a=Number.MAX_VALUE),void 0===r&&(r=1),void 0===o&&(o={});var p=t.call(this,m(s,10),m(a,Number.MAX_VALUE))||this;return p.size=0,p.curSize=0,p.grow=1,p.status=i.NORMAL,p.name=e,p.size=m(n),p.curSize=p.size,p.grow=m(r,1),p.status=i.NORMAL,p.attrs=o,p}return Object(p["b"])(e,t),e.prototype.getDisplaySize=function(){return null==this.paneSet?0:this.paneSet.maxPane?this.paneSet.maxPane===this?this.paneSet.totalSize:0:this.status===i.NORMAL?this.curSize:0},e.prototype.setStatus=function(t){return this.status!==t&&this.paneSet?(t===i.MAXIMIZED?this.paneSet.maxPane=this:this.status=t,this):this},e.prototype.toString=function(){return"{name:"+this.name+",curSize:"+this.curSize.toFixed(2)+", grow:"+this.grow.toFixed(2)+"}"},e}(b),y=(function(){function t(){this.size=0,this.grow=0}}(),function(){function t(){this.totalSize=0,this.panes=new Array}return t.prototype.toString=function(){return"{totalSize:"+this.totalSize+",panes:["+this.panes+"]}"},t.prototype.addPane=function(t){return t.paneSet=this,this.panes.push(t),this},t.prototype.getPaneByName=function(t){return this.panes.find((function(e){return e.name===t}))},t.prototype.setMaxPane=function(t){this.maxPane="string"===typeof t?this.getPaneByName(t):t},t.prototype.calculateSize=function(e,n,s){void 0===e&&(e=0),void 0===n&&(n=this.panes.length),void 0===s&&(s=this.totalSize);for(var a=new Set,r={size:s,grow:0},o=e;o<n;o++){var p=this.panes[o];p.size?(r.size-=p.size,p.size=0):p.status===i.NORMAL&&(a.add(p),r.grow+=p.grow)}while(a.size>0){var u=t.findOutFit(a,r);if(!u)break;a.delete(u),r.size-=u.curSize,r.grow-=u.grow}var l=r.size/r.grow;a.forEach((function(t){t.curSize=l*t.grow})),this.normalizeGrow()},t.prototype.normalizeGrow=function(){var t=this;if(0!==this.totalSize){var e=0;this.panes.forEach((function(t){t.status===i.MIINIMIZED&&(e+=t.grow)})),this.panes.forEach((function(n){n.status!==i.MIINIMIZED&&(n.grow=(1-e)*n.curSize/t.totalSize)}))}},t.findOutFit=function(t,e){for(var n=e.size/e.grow,i=null,s=0,a=0,r=0,o=Array.from(t);r<o.length;r++){var p=o[r],u=n*p.grow;u<p.min&&p.min-u>s?(i=p,s=p.min-u,a=p.min):u>p.max&&u-p.max>s&&(i=p,s=u-p.max,a=p.max)}return null!=i&&(i.curSize=a),i},t.prototype.getSizeRange=function(t,e){void 0===t&&(t=0),void 0===e&&(e=this.panes.length);for(var n=new b,s=t;s<e;s++){var a=this.panes[s];a.status===i.NORMAL&&n.add(a)}return n},t.prototype.getHandlePos=function(t){for(var e=0,n=0;n<=t;n++)e+=this.panes[n].getDisplaySize();return e},t.prototype.moveHandle=function(t,e){this.getSizeRange(0,t+1).contains(e)&&this.getSizeRange(t+1).contains(this.totalSize-e)&&(this.calculateSize(0,t+1,e),this.calculateSize(t+1,this.panes.length,this.totalSize-this.getHandlePos(t)))},t}()),g=y,w=500,S=function(){function t(){}return t.prototype.bind=function(t,e){var n=t;n.handler=e.value,n.width=t.clientWidth,n.height=t.clientHeight;var i=e.arg?parseInt(e.arg):w;(Number.isNaN(i)||i<50)&&(i=w),n.timer=setInterval((function(){n.width===t.clientWidth&&n.height===t.clientHeight||(n.width=t.clientWidth,n.height=t.clientHeight,n.handler(n.width,n.height))}),i)},t.prototype.unbind=function(t){var e=t;clearInterval(e.timer)},t.instance=new t,t}(),x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.startPos=-1,e.startHandlePos=-1,e.paneSet=new g,e.vnodes=new Array,e.resizeIndex=-1,e.show=[],e}return Object(p["b"])(e,t),e.prototype.startResize=function(t,e){this.resizeIndex=t,this.startPos=this.vertical?e.clientY:e.clientX,this.startHandlePos=this.paneSet.getHandlePos(t)},e.prototype.resizing=function(t){if(!(this.resizeIndex<0)){var e=this.vertical?t.clientY:t.clientX;this.paneSet.moveHandle(this.resizeIndex,this.startHandlePos+e-this.startPos),this.$forceUpdate()}},e.prototype.stopResize=function(){this.resizeIndex=-1},e.prototype.onWindowResize=function(){this.$el&&(this.$emit("resize"),this.paneSet.totalSize=this.vertical?this.$el.clientHeight:this.$el.clientWidth,this.paneSet.calculateSize())},Object.defineProperty(e.prototype,"paneStyle",{get:function(){var t=this;return function(e){var n;return n={},n[t.vertical?"height":"width"]=t.paneSet.panes[e].getDisplaySize()+"px",n}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"handleStyle",{get:function(){var t=this;return function(e){var n;return n={},n[t.vertical?"top":"left"]=t.paneSet.getHandlePos(e)+"px",n[t.vertical?"height":"width"]="5px",n.cursor=t.vertical?"row-resize":"col-resize",n}},enumerable:!0,configurable:!0}),e.prototype.maxPaneUpdated=function(){this.paneSet.setMaxPane(this.maxPane),this.paneSet.calculateSize()},e.prototype.showUpdated=function(){if(!(this.show.length<this.paneSet.panes.length)){for(var t=0;t<this.paneSet.panes.length;t++)this.paneSet.panes[t].setStatus(this.show[t][0]?i.NORMAL:i.MIINIMIZED);this.paneSet.calculateSize()}},e.prototype.mounted=function(){var t=0;for(var e in this.$slots)if(this.$slots.hasOwnProperty(e)){var n=this.$slots[e][0];if(n){var i=n.data,s=i.attrs,a=i.slot;if(s){var r=s.show;if(void 0===r)r=[!0];else if(!v.a.isArray(r))throw new Error("show attribute for pane has to be array: show="+s.show+", paneName="+e);this.$set(this.show,t++,r),this.paneSet.addPane(new z(a,parseInt(s.size),parseInt(s.min),parseInt(s.max),parseInt(s.grow),s))}}}return this.paneSet.totalSize=this.vertical?this.$el.clientHeight:this.$el.clientWidth,this.paneSet.calculateSize(),this},Object(p["a"])([Object(u["b"])({default:!1})],e.prototype,"vertical",void 0),Object(p["a"])([Object(u["b"])({default:""})],e.prototype,"maxPane",void 0),Object(p["a"])([Object(u["d"])("maxPane")],e.prototype,"maxPaneUpdated",null),Object(p["a"])([Object(u["d"])("show",{immediate:!0,deep:!0})],e.prototype,"showUpdated",null),e=Object(p["a"])([Object(u["a"])({name:"msplit",directives:{"on-resize":S.instance}})],e),e}(u["c"]),P=x,O=P,_=(n("d5e6"),n("2877")),I=Object(_["a"])(O,h,d,!1,null,"4c73dca7",null),M=I.exports,j={install:function(t){console.log("install msplit"),t.component("msplit",M)}};u["c"].use(j);var N=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.s1=[!0],e.s2=[!0],e.s3=[!0],e.s31=[!0],e.s32=[!0],e.s4=[!0],e.s41=[!0],e.s42=[!0],e.maxPane="",e}return Object(p["b"])(e,t),Object(p["a"])([Object(u["b"])()],e.prototype,"id",void 0),e=Object(p["a"])([u["a"]],e),e}(u["c"]),A=N,$=A,E=(n("4aeb"),Object(_["a"])($,l,c,!1,null,"c8c830f8",null)),R=E.exports,H=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(p["b"])(e,t),e=Object(p["a"])([Object(u["a"])({components:{MSplitTest:R}})],e),e}(u["c"]),D=H,L=D,U=(n("034f"),Object(_["a"])(L,r,o,!1,null,null,null)),X=U.exports;s["default"].config.productionTip=!1,s["default"].use(a["a"]),new s["default"]({render:function(t){return t(X)}}).$mount("#app")},d5e6:function(t,e,n){"use strict";var i=n("ab54"),s=n.n(i);s.a}});
//# sourceMappingURL=app.c30bd044.js.map