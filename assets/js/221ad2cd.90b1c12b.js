"use strict";(self.webpackChunkyearn_docs=self.webpackChunkyearn_docs||[]).push([[4179],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||p;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<p;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9955:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=r(7462),a=r(3366),p=(r(7294),r(3905)),l={title:"Submit a Pull Request"},i=void 0,o={unversionedId:"submit_pr",id:"submit_pr",isDocsHomePage:!1,title:"Submit a Pull Request",description:"The final step to be added to the partnership program is to submit a pull request to be added to the list of partners. You should submit a request to add yourself to partners.py",source:"@site/docs/partners/submit_pr.md",sourceDirName:".",slug:"/submit_pr",permalink:"/yearn-devdocs/partners/submit_pr",tags:[],version:"current",lastUpdatedBy:"Facu",lastUpdatedAt:1629730659,formattedLastUpdatedAt:"8/23/2021",frontMatter:{title:"Submit a Pull Request"},sidebar:"mySidebar",previous:{title:"Integration Methods",permalink:"/yearn-devdocs/partners/integration_guide"}},s=[{value:"Partner",id:"partner",children:[]},{value:"Wrapper Class",id:"wrapper-class",children:[]},{value:"WildcardWrapper Class",id:"wildcardwrapper-class",children:[]},{value:"Full Example",id:"full-example",children:[{value:"Wrapper",id:"wrapper",children:[]},{value:"WildcardWrapper",id:"wildcardwrapper",children:[]}]}],d={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The final step to be added to the partnership program is to submit a pull request to be added to the list of partners. You should submit a request to add yourself to ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-exporter/blob/master/yearn/partners/partners.py"},"partners.py")),(0,p.kt)("p",null,"First, you have to fork the repository into your account, make the modifications to update the file, and then submit the pull request to the main repo."),(0,p.kt)("p",null,"Below you will find the specification for the file and some examples."),(0,p.kt)("h2",{id:"partner"},"Partner"),(0,p.kt)("p",null,"The file consists of an array of ",(0,p.kt)("inlineCode",{parentName:"p"},"Partner")," objects. Each ",(0,p.kt)("inlineCode",{parentName:"p"},"Partner")," has the following attributes:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"name"),": descriptive name for the partner."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"treasury"),": the address where you want to receive the shared fees."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"wrappers"),": an array of objects that contain the addresses that will hold the vault tokens. It's an array of ",(0,p.kt)("inlineCode",{parentName:"li"},"Wrapper")," or ",(0,p.kt)("inlineCode",{parentName:"li"},"WildcardWrapper")," objects")),(0,p.kt)("h2",{id:"wrapper-class"},"Wrapper Class"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Wrapper")," should be used when only one yVault token is going to be held in that address."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Wrapper")," has the following attributes:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"name"),": descriptive name for this wrapper. It's recommended to use the vault name as part of it."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"vault"),": the address of the vault whose tokens are going to be held here."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"wrapper"),": the address that is going to be holding the tokens.")),(0,p.kt)("h2",{id:"wildcardwrapper-class"},"WildcardWrapper Class"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"WilcardWrapper")," should be used when one address is going to hold more than one yVault token. "),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"WildcardWrapper")," has the following attributes:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"name"),": descriptive name for this wrapper."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"wrapper"),": the address that is going to be holding the tokens.")),(0,p.kt)("h2",{id:"full-example"},"Full Example"),(0,p.kt)("h3",{id:"wrapper"},"Wrapper"),(0,p.kt)("p",null,"Below there's an example from one of our partners who have multiple addresses for multiple vaults. It's done using the ",(0,p.kt)("inlineCode",{parentName:"p"},"Wrapper")," class."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"Partner(\n    name='partner-wrapper',\n    treasury='0x8392F6669292fA56123F71949B52d883aE57e225',\n    wrappers=[\n        Wrapper(\n            name='dai 0.3.0',\n            vault='0x19D3364A399d251E894aC732651be8B0E4e85001',\n            wrapper='0x014dE182c147f8663589d77eAdB109Bf86958f13',\n        ),\n        Wrapper(\n            name='dai 0.3.0 t',\n            vault='0x19D3364A399d251E894aC732651be8B0E4e85001',\n            wrapper='0x491EAFC47D019B44e13Ef7cC649bbA51E15C61d7',\n        ),\n        Wrapper(\n            name='dai 0.4.3',\n            vault='0xdA816459F1AB5631232FE5e97a05BBBb94970c95',\n            wrapper='0xb039eA6153c827e59b620bDCd974F7bbFe68214A',\n        ),\n        Wrapper(\n            name='dai 0.4.3 t',\n            vault='0xdA816459F1AB5631232FE5e97a05BBBb94970c95',\n            wrapper='0x6Fe02BE0EC79dCF582cBDB936D7037d2eB17F661',\n        ),\n        Wrapper(\n            name='weth 0.4.2',\n            vault='0xa258C4606Ca8206D8aA700cE2143D7db854D168c',\n            wrapper='0x546E6711032Ec744A7708D4b7b283A210a85B3BC',\n        ),\n        Wrapper(\n            name='weth 0.4.2 t',\n            vault='0xa258C4606Ca8206D8aA700cE2143D7db854D168c',\n            wrapper='0x6d75657771256C7a8CB4d475fDf5047B70160132',\n        ),\n    ],\n),\n")),(0,p.kt)("h3",{id:"wildcardwrapper"},"WildcardWrapper"),(0,p.kt)("p",null,"Below you will find a partner that uses WildcardWrapper because each address is going to hold multiple different yVault tokens."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"Partner(\n    name='partner-wildcardwrapper',\n    treasury='0x7301C46be73bB04847576b6Af107172bF5e8388e',\n    wrappers=[\n        WildcardWrapper(\n            name='bdi',\n            wrapper='0x0309c98B1bffA350bcb3F9fB9780970CA32a5060',\n        ),\n        WildcardWrapper(\n            name='bmi',\n            wrapper='0x0aC00355F80E289f53BF368C9Bdb70f5c114C44B',\n        ),\n    ],\n),\n")))}u.isMDXComponent=!0}}]);