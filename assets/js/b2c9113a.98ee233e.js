"use strict";(self.webpackChunkyearn_docs=self.webpackChunkyearn_docs||[]).push([[7596],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3035:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c={},s=void 0,i={unversionedId:"smart-contracts/RegistryAPI",id:"smart-contracts/RegistryAPI",isDocsHomePage:!1,title:"RegistryAPI",description:"Functions",source:"@site/docs/developers/v2/smart-contracts/RegistryAPI.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/RegistryAPI",permalink:"/yearn-devdocs/v2/next/smart-contracts/RegistryAPI",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/developers/v2/smart-contracts/RegistryAPI.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"IWETH",permalink:"/yearn-devdocs/v2/next/smart-contracts/IWETH"},next:{title:"StrategyAPI",permalink:"/yearn-devdocs/v2/next/smart-contracts/StrategyAPI"}},u=[{value:"Functions",id:"functions",children:[{value:"governance",id:"governance",children:[]},{value:"latestVault",id:"latestvault",children:[]},{value:"numVaults",id:"numvaults",children:[]},{value:"vaults",id:"vaults",children:[]}]}],l={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"governance"},"governance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function governance(\n  ) external returns (address)\n")),(0,o.kt)("h3",{id:"latestvault"},"latestVault"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function latestVault(\n  ) external returns (address)\n")),(0,o.kt)("h3",{id:"numvaults"},"numVaults"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function numVaults(\n  ) external returns (uint256)\n")),(0,o.kt)("h3",{id:"vaults"},"vaults"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function vaults(\n  ) external returns (address)\n")))}p.isMDXComponent=!0}}]);