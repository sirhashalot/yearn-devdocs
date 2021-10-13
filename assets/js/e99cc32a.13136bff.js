"use strict";(self.webpackChunkyearn_docs=self.webpackChunkyearn_docs||[]).push([[1801],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,i(i({ref:e},c),{},{components:a})):n.createElement(g,i({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9215:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i={},s=void 0,o={unversionedId:"smart-contracts/BaseWrapper",id:"smart-contracts/BaseWrapper",isDocsHomePage:!1,title:"BaseWrapper",description:"Functions",source:"@site/docs/developers/v2/smart-contracts/BaseWrapper.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/BaseWrapper",permalink:"/yearn-devdocs/v2/next/smart-contracts/BaseWrapper",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/developers/v2/smart-contracts/BaseWrapper.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"BaseStrategyInitializable",permalink:"/yearn-devdocs/v2/next/smart-contracts/BaseStrategyInitializable"},next:{title:"IERC20Metadata",permalink:"/yearn-devdocs/v2/next/smart-contracts/IERC20Metadata"}},u=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"setRegistry",id:"setregistry",children:[]},{value:"bestVault",id:"bestvault",children:[]},{value:"allVaults",id:"allvaults",children:[]},{value:"_updateVaultCache",id:"_updatevaultcache",children:[]},{value:"totalVaultBalance",id:"totalvaultbalance",children:[]},{value:"totalAssets",id:"totalassets",children:[]},{value:"_deposit",id:"_deposit",children:[]},{value:"_withdraw",id:"_withdraw",children:[]},{value:"_migrate",id:"_migrate",children:[]},{value:"_migrate",id:"_migrate-1",children:[]},{value:"_migrate",id:"_migrate-2",children:[]}]}],c={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,l.kt)("h3",{id:"setregistry"},"setRegistry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setRegistry(\n    address _registry\n  ) external\n")),(0,l.kt)("p",null," Used to update the yearn registry."),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_registry")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The new _registry address.")))),(0,l.kt)("h3",{id:"bestvault"},"bestVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function bestVault(\n  ) public returns (contract VaultAPI)\n")),(0,l.kt)("p",null," Used to get the most revent vault for the token using the registry."),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"An")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"instance of a VaultAPI")))),(0,l.kt)("h3",{id:"allvaults"},"allVaults"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function allVaults(\n  ) public returns (contract VaultAPI[])\n")),(0,l.kt)("p",null," Used to get all vaults from the registery for the token"),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"An")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"array containing instances of VaultAPI")))),(0,l.kt)("h3",{id:"_updatevaultcache"},"_updateVaultCache"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _updateVaultCache(\n  ) internal\n")),(0,l.kt)("h3",{id:"totalvaultbalance"},"totalVaultBalance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalVaultBalance(\n  ) public returns (uint256 balance)\n")),(0,l.kt)("p",null," Used to get the balance of an account accross all the vaults for a token.\n@dev will be used to get the wrapper balance using totalVaultBalance(address(this)).\n@param account The address of the account.\n@return balance of token for the account accross all the vaults."),(0,l.kt)("h3",{id:"totalassets"},"totalAssets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalAssets(\n  ) public returns (uint256 assets)\n")),(0,l.kt)("p",null," Used to get the TVL on the underlying vaults.\n@return assets the sum of all the assets managed by the underlying vaults."),(0,l.kt)("h3",{id:"_deposit"},"_deposit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _deposit(\n  ) internal returns (uint256 deposited)\n")),(0,l.kt)("h3",{id:"_withdraw"},"_withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _withdraw(\n  ) internal returns (uint256 withdrawn)\n")),(0,l.kt)("h3",{id:"_migrate"},"_migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256)\n")),(0,l.kt)("h3",{id:"_migrate-1"},"_migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256)\n")),(0,l.kt)("h3",{id:"_migrate-2"},"_migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _migrate(\n  ) internal returns (uint256 migrated)\n")))}d.isMDXComponent=!0}}]);