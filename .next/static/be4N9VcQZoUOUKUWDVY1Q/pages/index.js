(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{"9Jkg":function(e,t,r){e.exports=r("oh+g")},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("YFqc"),a=r.n(i);t.default=function(){return o.a.createElement("div",null,o.a.createElement(a.a,{href:"/about"},o.a.createElement("a",null,"About Page")),o.a.createElement("p",null,"Hello Next.js testing testing"))}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),i=n(r("/HRN")),a=n(r("WaGi")),l=n(r("ZDA2")),f=n(r("/+P4")),u=n(r("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r("CxY0"),h=s(r("q1tI")),d=(p(r("17x9")),s(r("nOHt"))),v=r("Bu4q");function _(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var w=function(e){function t(){var e,r,n,o,a;return(0,i.default)(this,t),(e=(0,l.default)(this,(0,f.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:_(e),as:_(t)}},n=null,o=null,a=null,function(e,t){if(e===n&&t===o)return a;var i=r(e,t);return n=e,o=t,a=i,i}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,l=i.as;if(function(e){var t=c.parse(e,!1,!0),r=c.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var f=window.location.pathname;a=c.resolve(f,a),l=l?c.resolve(f,l):a,t.preventDefault();var u=e.props.scroll;null==u&&(u=l.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](a,l,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=c.resolve(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),a={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||n),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=d.Router._rewriteUrlForNextExport(a.href)),h.default.cloneElement(i,a)}}]),t}(h.Component);t.default=w},"oh+g":function(e,t,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);