"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[1238],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),h=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=h(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=h(o),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return o?n.createElement(g,i(i({ref:t},l),{},{components:o})):n.createElement(g,i({ref:t},l))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var h=2;h<r;h++)i[h]=o[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},86646:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var n=o(87462),a=(o(67294),o(3905));const r={title:"Getting Started with Webhooks",sidebar_position:1},i=void 0,s={unversionedId:"engage/data/imports/webhooks/getting-started-with-webhooks/index",id:"engage/data/imports/webhooks/getting-started-with-webhooks/index",title:"Getting Started with Webhooks",description:"A webhook's function is to notify anytime a donation is made, so the CRM can run any process configured once such an event is triggered. The data is then sent over the web from the website where the event originally occurred, to the receiving application (CRM) that handles the data. This exchange of data happens over the web through a \u201cwebhook URL\u201d that is provided by the receiving application, and acts as a phone number that the other application can call whenever an event happens.",source:"@site/docs/01-engage/08-data/03-imports/04-webhooks/01-getting-started-with-webhooks/index.md",sourceDirName:"01-engage/08-data/03-imports/04-webhooks/01-getting-started-with-webhooks",slug:"/engage/data/imports/webhooks/getting-started-with-webhooks/",permalink:"/docs/engage/data/imports/webhooks/getting-started-with-webhooks/",draft:!1,editUrl:"https://github.com/n3oltd/support/tree/main/docs/01-engage/08-data/03-imports/04-webhooks/01-getting-started-with-webhooks/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started with Webhooks",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Webhooks",permalink:"/docs/engage/data/imports/webhooks/"},next:{title:"Using Webhooks",permalink:"/docs/engage/data/imports/webhooks/using-webhooks/"}},p={},h=[{value:"Why use Webhooks?",id:"why-use-webhooks",level:2},{value:"How to Set up and Test Webhooks in Engage",id:"how-to-set-up-and-test-webhooks-in-engage",level:2}],l=(c="K2Link",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const d={toc:h},u="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A webhook's function is to notify anytime a donation is made, so the CRM can run any process configured once such an event is triggered. The data is then sent over the web from the website where the event originally occurred, to the receiving application (CRM) that handles the data. This exchange of data happens over the web through a \u201cwebhook URL\u201d that is provided by the receiving application, and acts as a ",(0,a.kt)("em",{parentName:"p"},"phone number")," that the other application can call whenever an event happens."),(0,a.kt)("h2",{id:"why-use-webhooks"},"Why use Webhooks?"),(0,a.kt)("p",null,"Webhooks offer many benefits including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Real-Time Updates:")," Enables real-time communication between systems. When an event occurs in the source system (e.g. CRM), the webhook immediately triggers actions in the destination system, ensuring that information is up-to-date.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Automation:")," Facilitates the automation of processes by triggering predefined actions based on specific events. This reduces manual intervention and streamlines workflows.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Seamless Integrations:")," Easy to integrate different systems and applications. They provide a standardized way for systems to communicate and share data, fostering interoperability. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Flexibility:")," Provides flexibility in terms of data format and payload. They can deliver data in various formats (e.g. JSON, XML or CSV) and allow customization based on the specific needs of the receiving system."))),(0,a.kt)("h2",{id:"how-to-set-up-and-test-webhooks-in-engage"},"How to Set up and Test Webhooks in Engage"),(0,a.kt)("p",null,"Engage provides webhooks in order to send data from one application to another. Webhooks generally have a three-step process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get the webhook URL from the application you want to send data to."),(0,a.kt)("li",{parentName:"ol"},"Use that URL in the webhook section of the application you want to receive data from."),(0,a.kt)("li",{parentName:"ol"},"Choose the type of events you want the application to notify you about.")),(0,a.kt)("p",null,"Engage also follows the same general webhook process. To try out a webhook yourself, you must first create a webhook and then test the data coming from the sending application within Engage. To read more on the webhook process, go to the ",(0,a.kt)(l,{route:"docs/category/developers--designers",text:"Developers and Designers documentation",isInternal:!0,mdxType:"K2Link"}),"."))}g.isMDXComponent=!0}}]);