"use strict";(self.webpackChunkyearn_docs=self.webpackChunkyearn_docs||[]).push([[1038],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8991:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s={},l="Yearn Stack + FE Features",o={unversionedId:"yearn-sdk/yearn-stack",id:"version-0.4.2/yearn-sdk/yearn-stack",isDocsHomePage:!1,title:"Yearn Stack + FE Features",description:"Yearn SDK integrates several components, both on-chain and off-chain.",source:"@site/versioned_docs/version-0.4.2/yearn-sdk/yearn-stack.md",sourceDirName:"yearn-sdk",slug:"/yearn-sdk/yearn-stack",permalink:"/yearn-devdocs/v2/yearn-sdk/yearn-stack",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/yearn-sdk/yearn-stack.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"yWETH",permalink:"/yearn-devdocs/v2/smart-contracts/yWETH"},next:{title:"Yearn API",permalink:"/yearn-devdocs/v2/yearn-api"}},c=[{value:"Backend stack",id:"backend-stack",children:[{value:"On Chain",id:"on-chain",children:[]},{value:"On IPFS",id:"on-ipfs",children:[]},{value:"Off Chain",id:"off-chain",children:[]}]},{value:"Backend features",id:"backend-features",children:[{value:"Resilience powered by on-chain data and IPFS storage",id:"resilience-powered-by-on-chain-data-and-ipfs-storage",children:[]},{value:"Historical APY and TVL",id:"historical-apy-and-tvl",children:[]},{value:"SDK, aggregator of many datasources",id:"sdk-aggregator-of-many-datasources",children:[]},{value:"Historical User Earnings",id:"historical-user-earnings",children:[]},{value:"Metadata",id:"metadata",children:[]}]}],d={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"yearn-stack--fe-features"},"Yearn Stack + FE Features"),(0,i.kt)("p",null,"Yearn SDK integrates several components, both on-chain and off-chain."),(0,i.kt)("h2",{id:"backend-stack"},"Backend stack"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/2koeiK5.jpg",alt:"Backend Chart"})),(0,i.kt)("h3",{id:"on-chain"},"On Chain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udd0d Yearn Lens",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Oracle"),(0,i.kt)("li",{parentName:"ul"},"Helpers"),(0,i.kt)("li",{parentName:"ul"},"Adapters",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Vaults V1"),(0,i.kt)("li",{parentName:"ul"},"Vaults V2"),(0,i.kt)("li",{parentName:"ul"},"Iron Bank")))))),(0,i.kt)("h3",{id:"on-ipfs"},"On IPFS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yearn Metadata is a lightweight storage for all the stuff that would have been hardcoded in v2 frontend, including but not limited to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"custom messages for deposits / withdrawals"),(0,i.kt)("li",{parentName:"ul"},"custom copywriting for special assets"),(0,i.kt)("li",{parentName:"ul"},"strategy descriptions / diagrams"),(0,i.kt)("li",{parentName:"ul"},"disabling asset interactions"))),(0,i.kt)("li",{parentName:"ul"},"Yearn Frontend")),(0,i.kt)("h3",{id:"off-chain"},"Off Chain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yearn Exporter: stores (and displays) stats about yearn assets, exposing:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"historical TVL"),(0,i.kt)("li",{parentName:"ul"},"historical APY"))),(0,i.kt)("li",{parentName:"ul"},"Yearn Subgraph: stores all historical data for users"),(0,i.kt)("li",{parentName:"ul"},"Zapper Integration")),(0,i.kt)("h2",{id:"backend-features"},"Backend features"),(0,i.kt)("h3",{id:"resilience-powered-by-on-chain-data-and-ipfs-storage"},"Resilience powered by on-chain data and IPFS storage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Critical data (assets, positions, vault deprecations) will be fetched exclusively from the chain / IPFS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"maximizing uptime"),(0,i.kt)("li",{parentName:"ul"},"reducing reliance on other services"))),(0,i.kt)("li",{parentName:"ul"},"Historical TVL, historical APY and other non critical data will be stored off chain and fetched dinamically.")),(0,i.kt)("h4",{id:"on-chain-assets-and-positions"},"On-chain assets and positions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lens does what the old off-chain API does, but directly on-chain. This will speed up the fetching time and greatly reduce our reliance on scheduled jobs in servers.")),(0,i.kt)("h4",{id:"ipfs-cicd-for-frontend-and-metadata"},"IPFS CI/CD for frontend and metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Frontend and hardcoded values will be stored in IPFS utilizing a similar system to the one ",(0,i.kt)("a",{parentName:"li",href:"https://uniswap.org/blog/ipfs-uniswap-interface/"},"introduced")," by Uniswap.")),(0,i.kt)("h3",{id:"historical-apy-and-tvl"},"Historical APY and TVL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yearn Exporter provides a simple backend solution for storing real-time stats from yearn products."),(0,i.kt)("li",{parentName:"ul"},"Metrics are stored in a timeseries database and will be exposed by an api, accessible by SDK and third-party.")),(0,i.kt)("h3",{id:"sdk-aggregator-of-many-datasources"},"SDK, aggregator of many datasources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SDK will provide a simple interface for all integrators, including ourselves."),(0,i.kt)("li",{parentName:"ul"},"Read methods will seamlessly integrate with all datasources, while keeping coherent datastructures."),(0,i.kt)("li",{parentName:"ul"},"Write methods talk directly to assets on chain. Execution of write transactions will trigger refresh events so data freshness of frontend (or other integration platforms) will still be preserved.")),(0,i.kt)("h3",{id:"historical-user-earnings"},"Historical User Earnings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yearn Subgraph leverages thegraph to store historical user data that can be aggregated to display historical earnings.")),(0,i.kt)("h3",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New way to store all the information that would generally be hard coded directly in the frontend."),(0,i.kt)("li",{parentName:"ul"},"Data is now encoded in predefined schemas that are checked at every change.")),(0,i.kt)("h4",{id:"strategy-descriptions"},"Strategy descriptions"),(0,i.kt)("p",null,"We can store Strategy information directly on IPFS so they can be then be queried and rendered the frontend."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("a",{parentName:"p",href:"https://meta.yearn.network/strategies/1InchStaking"},"1inch Staking Reinvest")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "strategy",\n    "name": "1inch Staking Reinvest",\n    "description": "Stakes {{token}} on [1inch DAO](https://app.1inch.io/#/1/dao/governance) to collect governance rewards. Rewards are harvested and deposited back into the strategy.",\n    "addresses": ["0xB12F6A5776EDd2e923fD1Ce93041B2000A22dDc7"],\n    "protocols": ["1inch"],\n    "authors": []\n}\n')),(0,i.kt)("h4",{id:"assets-management"},"Assets management"),(0,i.kt)("p",null,"We can store Asset informations so in critical situations we can toggle interactions and add custom messages."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("a",{parentName:"p",href:"https://meta.yearn.network/vaults/0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A"},"aLINK")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "aLINK",\n  "promoted": true,\n  "retired": true,\n  "migrated": false,\n  "deposit": {\n    "disabled": true, // we can disable interaction directly by editing this file on the repo\n    "message": "This vault is no longer active and its strategy is unwinding. Withdrawals will incur a 1% withdrawal fee during this process."\n  },\n}\n')))}u.isMDXComponent=!0}}]);