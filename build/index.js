!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-apollo"),require("apollo-link-http"),require("apollo-client"),require("apollo-cache-inmemory"),require("node-fetch"));else if("function"==typeof define&&define.amd)define(["React","react-apollo","apollo-link-http","apollo-client","apollo-cache-inmemory","node-fetch"],t);else{var r="object"==typeof exports?t(require("react"),require("react-apollo"),require("apollo-link-http"),require("apollo-client"),require("apollo-cache-inmemory"),require("node-fetch")):t(e.React,e[void 0],e[void 0],e[void 0],e[void 0],e.fetch);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e,t,r,n,o,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(1),u=r(2),a=r(3),l=r(4),c=r(5),f=r.n(c),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("Uri prop not passed to the ApolloWrapper component");var r={uri:e,fetch:f.a};Object.keys(t).length>0&&(r.headers=t);var n=Object(u.createHttpLink)(r),o={cache:new l.InMemoryCache,link:n};return new a.ApolloClient(o)},s=function(e){var t=e.children,r=e.uri,n=e.headers;return o.a.createElement(i.ApolloProvider,{client:p(r,n)},t)};s.defaultProps={headers:{}};var d=s,y=function(e){return e.reduce(function(e,t){return e[t.key]=t.message,e},{})};function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){m(e,t,r[t])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(e,t,r,n){var o=e.readQuery({query:r});e.writeQuery({query:r,data:m({},n,{__typename:o[n].__typename,list:[t].concat(v(o[n].list)),totalCount:o[n].totalCount,pageInfo:o[n].pageInfo})})},g=function(e,t,r,n){var o=e.readQuery({query:t});e.writeQuery({query:t,data:m({},r,{__typename:o[r].__typename,list:o[r].list.filter(function(e){return!n(e)}),totalCount:o[r].totalCount-1,pageInfo:o[r].pageInfo})})},j=function(e,t,r,n){e({variables:{input:b({},n,{first:arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,after:t.endCursor})},updateQuery:function(e,t){var n=t.fetchMoreResult,o=n[r].list,i=n[r].pageInfo,u=n[r].totalCount;return o.length?m({},r,{__typename:e[r].__typename,list:[].concat(v(e[r].list),v(o)),totalCount:u,pageInfo:i}):e}})};r.d(t,"ApolloWrapper",function(){return d}),r.d(t,"formatGQLErrors",function(){return y}),r.d(t,"updateList",function(){return h}),r.d(t,"deleteFromList",function(){return g}),r.d(t,"loadMore",function(){return j})}])});