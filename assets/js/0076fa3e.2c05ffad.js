"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[3410],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var i=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=i.createContext({}),l=function(n){var e=i.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=l(n.components);return i.createElement(d.Provider,{value:e},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,d=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=l(t),p=o,g=u["".concat(d,".").concat(p)]||u[p]||m[p]||a;return t?i.createElement(g,r(r({ref:e},c),{},{components:t})):i.createElement(g,r({ref:e},c))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,r=new Array(a);r[0]=p;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s[u]="string"==typeof n?n:o,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},66021:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(87462),o=(t(67294),t(3905));const a={title:"Fund Dimensions",sidebar_position:2},r=void 0,s={unversionedId:"engage/donations/allocations/fund-dimensions/index",id:"engage/donations/allocations/fund-dimensions/index",title:"Fund Dimensions",description:"Fund dimensions are an integral part within Engage and allow you to categorize and manage funds or donations according to pre-defined dimension criteria.",source:"@site/docs/01-engage/03-donations/06-allocations/02-fund-dimensions/index.md",sourceDirName:"01-engage/03-donations/06-allocations/02-fund-dimensions",slug:"/engage/donations/allocations/fund-dimensions/",permalink:"/docs/engage/donations/allocations/fund-dimensions/",draft:!1,editUrl:"https://github.com/n3oltd/support/tree/main/docs/01-engage/03-donations/06-allocations/02-fund-dimensions/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Fund Dimensions",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Donation Items",permalink:"/docs/engage/donations/allocations/donation-items/"},next:{title:"Fundraiser",permalink:"/docs/engage/donations/allocations/fundraiser/"}},d={},l=[{value:"Adding Fund dimensions in Engage",id:"adding-fund-dimensions-in-engage",level:2}],c={toc:l},u="wrapper";function m(n){let{components:e,...a}=n;return(0,o.kt)(u,(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Fund dimensions are an integral part within Engage and allow you to categorize and manage funds or donations according to pre-defined dimension criteria."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Fund dimensions are configured and managed by your system administrator."),(0,o.kt)("li",{parentName:"ul"},"While adding a donation item, there is a separate section for allocating fund dimensions to it."),(0,o.kt)("li",{parentName:"ul"},"In some cases, Engage pre-sets certain dimensions during the onboarding process, but they can be modified as per necessary."))),(0,o.kt)("h2",{id:"adding-fund-dimensions-in-engage"},"Adding Fund dimensions in Engage"),(0,o.kt)("p",null,"Fund dimensions in Engage have two different options which are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Restricted Options:")," Restricted options refers to adding options to assign funds (donation items) to various specific purposes. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Unrestricted Options:")," Unrestricted options means adding a general option for funds that are not restricted to any of the options mentioned in the restricted area.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Removing or changing fund dimensions will result in certain donation items not working (if they are linked to a fund dimension)."),(0,o.kt)("li",{parentName:"ul"},"A fund dimension remains ",(0,o.kt)("em",{parentName:"li"},"inactive")," and cannot be used until restricted options have been added and activated from the option's menu. "))),(0,o.kt)("p",null,"You can ask your system administrator to add fund dimensions for you before adding a donation item. Fund dimensions may include ",(0,o.kt)("em",{parentName:"p"},"location, theme, stipulation")," etc. and can be activated or deactivated according to their usage. "),(0,o.kt)("p",null,"While making a single or regular giving donation, fund dimensions are added after selecting a donation item in the ",(0,o.kt)("strong",{parentName:"p"},"Fund")," area of the ",(0,o.kt)("em",{parentName:"p"},"Allocations")," section. All fund dimensions added by your system administrator appear in the same order while adding a fund."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Fund in Allocations section",src:t(12419).Z,width:"1311",height:"779"})))}m.isMDXComponent=!0},12419:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/adding-fund-allocations-0da3f46865a7ec2d30cb76ab292086b9.png"}}]);