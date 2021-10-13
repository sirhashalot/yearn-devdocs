"use strict";(self.webpackChunkyearn_docs=self.webpackChunkyearn_docs||[]).push([[9723],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s={},l=void 0,o={unversionedId:"smart-contracts/StrategyAPI",id:"smart-contracts/StrategyAPI",isDocsHomePage:!1,title:"StrategyAPI",description:"This interface is here for the keeper bot to use.",source:"@site/docs/developers/v2/smart-contracts/StrategyAPI.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/StrategyAPI",permalink:"/yearn-devdocs/v2/next/smart-contracts/StrategyAPI",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/developers/v2/smart-contracts/StrategyAPI.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"RegistryAPI",permalink:"/yearn-devdocs/v2/next/smart-contracts/RegistryAPI"},next:{title:"VaultAPI",permalink:"/yearn-devdocs/v2/next/smart-contracts/VaultAPI"}},c=[{value:"Functions",id:"functions",children:[{value:"name",id:"name",children:[]},{value:"vault",id:"vault",children:[]},{value:"want",id:"want",children:[]},{value:"apiVersion",id:"apiversion",children:[]},{value:"keeper",id:"keeper",children:[]},{value:"isActive",id:"isactive",children:[]},{value:"delegatedAssets",id:"delegatedassets",children:[]},{value:"estimatedTotalAssets",id:"estimatedtotalassets",children:[]},{value:"tendTrigger",id:"tendtrigger",children:[]},{value:"tend",id:"tend",children:[]},{value:"harvestTrigger",id:"harvesttrigger",children:[]},{value:"harvest",id:"harvest",children:[]}]},{value:"Events",id:"events",children:[{value:"Harvested",id:"harvested",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This interface is here for the keeper bot to use."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,i.kt)("h3",{id:"vault"},"vault"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function vault(\n  ) external returns (address)\n")),(0,i.kt)("h3",{id:"want"},"want"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function want(\n  ) external returns (address)\n")),(0,i.kt)("h3",{id:"apiversion"},"apiVersion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function apiVersion(\n  ) external returns (string)\n")),(0,i.kt)("h3",{id:"keeper"},"keeper"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function keeper(\n  ) external returns (address)\n")),(0,i.kt)("h3",{id:"isactive"},"isActive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isActive(\n  ) external returns (bool)\n")),(0,i.kt)("h3",{id:"delegatedassets"},"delegatedAssets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function delegatedAssets(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"estimatedtotalassets"},"estimatedTotalAssets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function estimatedTotalAssets(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"tendtrigger"},"tendTrigger"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tendTrigger(\n  ) external returns (bool)\n")),(0,i.kt)("h3",{id:"tend"},"tend"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tend(\n  ) external\n")),(0,i.kt)("h3",{id:"harvesttrigger"},"harvestTrigger"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function harvestTrigger(\n  ) external returns (bool)\n")),(0,i.kt)("h3",{id:"harvest"},"harvest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function harvest(\n  ) external\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"harvested"},"Harvested"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Harvested(\n  )\n")))}u.isMDXComponent=!0}}]);