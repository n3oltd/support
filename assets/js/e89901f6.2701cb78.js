"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[3058],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=m(n),d=i,g=u["".concat(p,".").concat(d)]||u[d]||l[d]||o;return n?r.createElement(g,a(a({ref:e},c),{},{components:n})):r.createElement(g,a({ref:e},c))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:i,a[1]=s;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87556:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const o={title:"Setting up SMS",sidebar_position:3},a=void 0,s={unversionedId:"administrators/communication/setting-up-sms/index",id:"administrators/communication/setting-up-sms/index",title:"Setting up SMS",description:"The main Product Owners along with the members having Admin Roles access granted.",source:"@site/docs/05-administrators/06-communication/03-setting-up-sms/index.md",sourceDirName:"05-administrators/06-communication/03-setting-up-sms",slug:"/administrators/communication/setting-up-sms/",permalink:"/docs/administrators/communication/setting-up-sms/",draft:!1,editUrl:"https://github.com/n3oltd/support/tree/main/docs/05-administrators/06-communication/03-setting-up-sms/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Setting up SMS",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"PDF Templates",permalink:"/docs/administrators/communication/setting-up-pdfs/pdf-templates/"},next:{title:"Partials",permalink:"/docs/administrators/communication/setting-up-sms/partials/"}},p={},m=[{value:"Configure SMS Communication Settings",id:"configure-sms-communication-settings",level:2},{value:"Compose SMS Layouts",id:"compose-sms-layouts",level:2}],c={toc:m},u="wrapper";function l(t){let{components:e,...o}=t;return(0,i.kt)(u,(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Who can use this feature?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The main ",(0,i.kt)("strong",{parentName:"p"},"Product Owners")," along with the members having ",(0,i.kt)("strong",{parentName:"p"},"Admin Roles")," access granted.  ")),(0,i.kt)("p",null,"In Engage, before sending an SMS to donors, admin users need to set up the whole SMS layout and configure the SMS settings. "),(0,i.kt)("h2",{id:"configure-sms-communication-settings"},"Configure SMS Communication Settings"),(0,i.kt)("p",null,"You, as an admin user, need to set up and configure SMS settings in the ",(0,i.kt)("strong",{parentName:"p"},"SMS Communications")," section. You can add or edit any previous SMS setting via the ",(0,i.kt)("strong",{parentName:"p"},"Edit")," button. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide the ",(0,i.kt)("strong",{parentName:"li"},"SMS Provider")," name."),(0,i.kt)("li",{parentName:"ul"},"Input the ",(0,i.kt)("strong",{parentName:"li"},"API Username")," and ",(0,i.kt)("strong",{parentName:"li"},"API Password"),"."),(0,i.kt)("li",{parentName:"ul"},"Choose the ",(0,i.kt)("strong",{parentName:"li"},"Environment")," as Production or Sandbox. ")),(0,i.kt)("p",null,"You can also test these settings to verify whether the SMS provider and other information are correct or not. Click ",(0,i.kt)("strong",{parentName:"p"},"Test these settings"),", input the ",(0,i.kt)("strong",{parentName:"p"},"Sender")," and ",(0,i.kt)("strong",{parentName:"p"},"Recipient")," phone numbers and select ",(0,i.kt)("strong",{parentName:"p"},"Send"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure SMS settings",src:n(80716).Z,width:"1661",height:"539"})),(0,i.kt)("h2",{id:"compose-sms-layouts"},"Compose SMS Layouts"),(0,i.kt)("p",null,"In Engage, composing SMS via the admin section requires you to create 3 different parts with each part explained in their respective sections."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Partials")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Layouts")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"SMS Templates"))))}l.isMDXComponent=!0},80716:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/configure-sms-settings-284a45ef15b4647d4b59efb72e0308ae.png"}}]);