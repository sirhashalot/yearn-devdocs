"use strict";(self.webpackChunkyearn_docs=self.webpackChunkyearn_docs||[]).push([[9909],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={},c=void 0,l={unversionedId:"smart-contracts/BaseStrategyInitializable",id:"version-0.3.4/smart-contracts/BaseStrategyInitializable",isDocsHomePage:!1,title:"BaseStrategyInitializable",description:"Functions",source:"@site/versioned_docs/version-0.3.4/smart-contracts/BaseStrategyInitializable.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/BaseStrategyInitializable",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/BaseStrategyInitializable",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.4/smart-contracts/BaseStrategyInitializable.md",tags:[],version:"0.3.4",frontMatter:{},sidebar:"version-0.3.4/mySidebar",previous:{title:"BaseStrategy",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/BaseStrategy"},next:{title:"BaseWrapper",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/BaseWrapper"}},s=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"clone",id:"clone",children:[]},{value:"clone",id:"clone-1",children:[]}]},{value:"Events",id:"events",children:[{value:"Cloned",id:"cloned",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,i.kt)("h3",{id:"initialize"},"initialize"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function initialize(\n  ) external\n")),(0,i.kt)("h3",{id:"clone"},"clone"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function clone(\n  ) external returns (address)\n")),(0,i.kt)("h3",{id:"clone-1"},"clone"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function clone(\n  ) external returns (address newStrategy)\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"cloned"},"Cloned"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Cloned(\n  )\n")))}d.isMDXComponent=!0}}]);