(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,a=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?a=c.concat(a):l=-1,a.length&&h())}function h(){if(!f){var e=s(p);f=!0;for(var t=a.length;t;){for(c=a,a=[];++l<t;)c&&c[l].run();l=-1,t=a.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new v(e,t)),1!==a.length||f||s(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},RNiq:function(e,t,n){"use strict";n.r(t),function(e){var r=n("q1tI"),o=n.n(r),i=n("YFqc"),u=n.n(i),s=o.a.createElement;t.default=function(){return s("div",null,s("h1",null,"Hello Sakthi!"),s(u.a,{href:"/test",as:e.env.FE_URL+"/test"},"Sakthi"))}}.call(this,n("8oxB"))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),u=n("/+P4"),s=n("N9n2"),c=n("5Uuq"),a=n("KI45");t.__esModule=!0,t.default=void 0;var f,l=a(n("LX0d")),p=n("CxY0"),h=c(n("q1tI")),v=(a(n("17x9")),a(n("nOHt"))),d=(n("KA3u"),n("Bu4q"));function m(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var w=new l.default,y=window.IntersectionObserver;function g(){return f||(y?f=new y(function(e){e.forEach(function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),w.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var T=function(e){function t(e){var n;return r(this,t),(n=i(this,u(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var u=e(o,i);return t=o,n=i,r=u,u}}(function(e,t){return{href:m(e),as:t?m(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),u=i.href,s=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(u)){var c=window.location.pathname;u=(0,p.resolve)(c,u),s=s?(0,p.resolve)(c,s):u,e.preventDefault();var a=n.props.scroll;null==a&&(a=s.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](u,s,{shallow:n.props.shallow}).then(function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),w.set(e,t),function(){n.unobserve(e),w.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,p.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),u={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),h.default.cloneElement(i,u)}}]),t}(h.Component);T.propTypes=void 0;var k=T;t.default=k},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);