"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Converters",sidebar_position:5},i=void 0,s={unversionedId:"engage/data/imports/converters/index",id:"engage/data/imports/converters/index",title:"Converters",description:"Converters are tools designed to manage different types of data, especially financial data. They eliminate the need for manual data entry, automatically mapping key details from statements into formatted reports. This guide will walk you through financial bank statement converters and their usage in Engage.",source:"@site/docs/01-engage/08-data/03-imports/05-converters/index.md",sourceDirName:"01-engage/08-data/03-imports/05-converters",slug:"/engage/data/imports/converters/",permalink:"/docs/engage/data/imports/converters/",draft:!1,editUrl:"https://github.com/n3oltd/support/tree/main/docs/01-engage/08-data/03-imports/05-converters/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Converters",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Using Webhooks",permalink:"/docs/engage/data/imports/webhooks/using-webhooks/"},next:{title:"Introduction to Analytics",permalink:"/docs/engage/data/introduction-to-analytics/"}},l={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Converters are tools designed to manage different types of data, especially financial data. They eliminate the need for manual data entry, automatically mapping key details from statements into formatted reports. This guide will walk you through financial bank statement converters and their usage in Engage."),(0,r.kt)("p",null,"Follow the steps below to upload a sample file to a converter and then import it in Engage."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Customer support requests the client for the downloaded bank statement or sheet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The client sheet includes data about the banks payments and other information. This data needs to be cleansed and sorted out with separate headings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'For this purpose, N3O developers create and set up a converter within Umbraco (Engage Forms). Each folder under "Converters" section has a separate converter for a separate bank file.'))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to set up a converter, please contact ",(0,r.kt)("inlineCode",{parentName:"p"},"support@n3o.ltd"),".")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select the main folder, the converter type folder, and click ",(0,r.kt)("strong",{parentName:"li"},"Create")," to choose the converter for your preferred bank statement e.g. ",(0,r.kt)("em",{parentName:"li"},"Barclays Bank Statement Converter"),".  ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Step 4: Converter bank statement",src:n(67033).Z,width:"1730",height:"746"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Input")," section upload the sheet with ",(0,r.kt)("inlineCode",{parentName:"li"},".csv")," extension via the ",(0,r.kt)("strong",{parentName:"li"},"Drag and drop")," option. Click ",(0,r.kt)("strong",{parentName:"li"},"Save and publish"),", and the converter converts the sheet into perfectly clear data along with additional fields like ",(0,r.kt)("em",{parentName:"li"},"account reference"),", ",(0,r.kt)("em",{parentName:"li"},"allocation type"),", ",(0,r.kt)("em",{parentName:"li"},"fund dimensions"),", ",(0,r.kt)("em",{parentName:"li"},"donation item"),", etc. ")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"A sample bank statement to be uploaded may look like this.")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Sample bank statement",src:n(6380).Z,width:"1336",height:"462"})),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"These additional fields have been added by the N3O developers prior to the conversion, so that the client can manually fill it up themselves and then import in into Engage."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Step 5: Input section",src:n(58481).Z,width:"1920",height:"868"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"The converted file appears under the ",(0,r.kt)("strong",{parentName:"li"},"Output")," section and can be downloaded as well. A sample downloaded output ",(0,r.kt)("inlineCode",{parentName:"li"},".csv")," file shows up like this.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Downloaded file",src:n(58950).Z,width:"1890",height:"460"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"As the last step, login into Engage, and navigate towards the ",(0,r.kt)("strong",{parentName:"li"},"Imports")," section under ",(0,r.kt)("strong",{parentName:"li"},"Data"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Step 7: Login to Engage",src:n(81603).Z,width:"1745",height:"499"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Select any queue and import the downloaded file into Engage via the ",(0,r.kt)("strong",{parentName:"li"},"Import Now")," option.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Step 8: Import Now",src:n(46428).Z,width:"1734",height:"830"})))}m.isMDXComponent=!0},58950:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/downloaded-sample-file-083a9059edd0babf1baa4fbc327129ae.png"},6380:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sample-date-file-1a2d7dfb1c2cf9392d4860c48f9f6d65.png"},67033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step-4-cf4ec7159c9f4130d4c4c16283763928.png"},58481:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step-5-2844032e8227c4fa3caf31b0b7fb2719.jpg"},81603:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step-7-e54dc2a33f89b3f6ae2905537962f6fc.jpg"},46428:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step-8-38af9e5b19f7f59d7983c7d6b764a6d4.png"}}]);