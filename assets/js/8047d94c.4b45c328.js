"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[7001],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>u});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var d=i.createContext({}),c=function(t){var e=i.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},g=function(t){var e=c(t.components);return i.createElement(d.Provider,{value:e},t.children)},m="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,d=t.parentName,g=s(t,["components","mdxType","originalType","parentName"]),m=c(n),p=o,u=m["".concat(d,".").concat(p)]||m[p]||l[p]||a;return n?i.createElement(u,r(r({ref:e},g),{},{components:n})):i.createElement(u,r({ref:e},g))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=t,s[m]="string"==typeof t?t:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52262:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={title:"Adding and Editing Donation Items",sidebar_position:1},r=void 0,s={unversionedId:"websites/content/settings/adding-and-editing-donation-items/index",id:"websites/content/settings/adding-and-editing-donation-items/index",title:"Adding and Editing Donation Items",description:"The next main building block under Content in the section menu is Settings. This module is related to all the donation items and projects that you are raising money for. It is important to note that this effective integration between Umbraco and Engage CRM ensures that charities having a higher number of donation items get rid of the struggle to know what's coming into the website or the CRM.",source:"@site/docs/04-websites/02-content/02-settings/01-adding-and-editing-donation-items/index.md",sourceDirName:"04-websites/02-content/02-settings/01-adding-and-editing-donation-items",slug:"/websites/content/settings/adding-and-editing-donation-items/",permalink:"/docs/websites/content/settings/adding-and-editing-donation-items/",draft:!1,editUrl:"https://github.com/n3oltd/support/tree/main/docs/04-websites/02-content/02-settings/01-adding-and-editing-donation-items/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Adding and Editing Donation Items",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Settings",permalink:"/docs/websites/content/settings/"},next:{title:"Giving",permalink:"/docs/websites/content/giving/"}},d={},c=[{value:"Adding Donation Items in Engage",id:"adding-donation-items-in-engage",level:2},{value:"Viewing or Editing Donation Items in Umbraco Backoffice",id:"viewing-or-editing-donation-items-in-umbraco-backoffice",level:2}],g=(m="K2Link",function(t){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)});var m;const l={toc:c},p="wrapper";function u(t){let{components:e,...a}=t;return(0,o.kt)(p,(0,i.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The next main building block under ",(0,o.kt)("strong",{parentName:"p"},"Content")," in the section menu is ",(0,o.kt)("strong",{parentName:"p"},"Settings"),". This module is related to all the donation items and projects that you are raising money for. It is important to note that this effective integration between Umbraco and Engage CRM ensures that charities having a higher number of donation items get rid of the struggle to know what's coming into the website or the CRM."),(0,o.kt)("p",null,"This guide will show you how the donation items are first added in Engage and then linked to the Umbraco backoffice. "),(0,o.kt)("h2",{id:"adding-donation-items-in-engage"},"Adding Donation Items in Engage"),(0,o.kt)("p",null,"Each donation item added in the Umbraco backoffice must first be created in the Engage CRM. You can ask your system administrator to add all the donation items for your charity organisation via the admin section. To read more on how to add them, visit the ",(0,o.kt)(g,{route:"docs/administrators/giving/adding-donation-items/",text:"Adding Donation Items Administrator docs",isInternal:!0,mdxType:"K2Link"}),"."),(0,o.kt)("p",null,"As soon as a donation item is added, it is automatically linked within Umbraco and you can choose those items for the projects you want to market for a specific audience."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Donation items screen in Engage",src:n(64323).Z,width:"1666",height:"818"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Any change or addition made towards a donation item, whether ",(0,o.kt)("strong",{parentName:"p"},"fund dimensions")," (location, theme or stipulation) or ",(0,o.kt)("strong",{parentName:"p"},"name")," is automatically reflected upon refreshing the Umbraco backoffice. ")),(0,o.kt)("h2",{id:"viewing-or-editing-donation-items-in-umbraco-backoffice"},"Viewing or Editing Donation Items in Umbraco Backoffice"),(0,o.kt)("p",null,"To view or edit a donation item in the Umbraco backoffice:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Go to ",(0,o.kt)("strong",{parentName:"p"},"Settings")," and select ",(0,o.kt)("strong",{parentName:"p"},"Giving"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," A folder containing all existing donation items predefined by N3O will be shown."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Folder for donation items",src:n(56098).Z,width:"1796",height:"816"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3."),' Refresh the page to view the donation item added before in the Engage CRM. Choose that one or any existing e.g. "Care for Elderly Fund".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," The donation item page displays the ",(0,o.kt)("strong",{parentName:"p"},"type of giving"),", ",(0,o.kt)("strong",{parentName:"p"},"fund dimensions")," (location, theme, and stipulation) and ",(0,o.kt)("strong",{parentName:"p"},"price"),". Fud dimensions can vary from client to client. This information exactly matches with the one in Engage CRM."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Donation Item Page",src:n(73900).Z,width:"1812",height:"830"})))}u.isMDXComponent=!0},73900:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/donation-item-page-44516da69352c653ecfd71000dec397e.jpg"},64323:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/donation-items-screen-engage-4c9c8c34779380dedf73d2c3abaacb63.jpg"},56098:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/folder-for-donation-items-d8537f82a19cefd3357ab031165d20cc.jpg"}}]);