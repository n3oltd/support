"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[1100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var i=n(87462),r=(n(67294),n(3905));const a={title:"Setting up Emails",sidebar_position:1},o=void 0,s={unversionedId:"administrators/communication/setting-up-emails/index",id:"administrators/communication/setting-up-emails/index",title:"Setting up Emails",description:"The main Product Owners along with the members having Admin Roles access granted.",source:"@site/docs/05-administrators/06-communication/01-setting-up-emails/index.md",sourceDirName:"05-administrators/06-communication/01-setting-up-emails",slug:"/administrators/communication/setting-up-emails/",permalink:"/docs/administrators/communication/setting-up-emails/",draft:!1,editUrl:"https://github.com/n3oltd/support/tree/main/docs/05-administrators/06-communication/01-setting-up-emails/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Setting up Emails",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Communication",permalink:"/docs/administrators/communication/"},next:{title:"Partials",permalink:"/docs/administrators/communication/setting-up-emails/partials/"}},l={},m=[{value:"Configure Email Settings",id:"configure-email-settings",level:2},{value:"Compose Email Layouts",id:"compose-email-layouts",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Who can use this feature?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The main ",(0,r.kt)("strong",{parentName:"p"},"Product Owners")," along with the members having ",(0,r.kt)("strong",{parentName:"p"},"Admin Roles")," access granted.  ")),(0,r.kt)("p",null,"Email is a type of communication channel that handles customer inquiries and interactions. In Engage, before sending emails to donors, admin users need to set up the whole email layout and configure the email settings. "),(0,r.kt)("h2",{id:"configure-email-settings"},"Configure Email Settings"),(0,r.kt)("p",null,"You, as an admin user, need to set up and configure email settings in the ",(0,r.kt)("strong",{parentName:"p"},"Email Delivery")," section. You can add or edit any previous email setting via the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," button. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide the ",(0,r.kt)("strong",{parentName:"li"},"Email Delivery")," name."),(0,r.kt)("li",{parentName:"ul"},"Input the ",(0,r.kt)("strong",{parentName:"li"},"API Key"),"."),(0,r.kt)("li",{parentName:"ul"},"Enter different domains from where the emails would be sent in the ",(0,r.kt)("strong",{parentName:"li"},"From Domain")," section. ")),(0,r.kt)("p",null,"You can also test these settings to verify whether the email domains and other information are correct or not. Click ",(0,r.kt)("strong",{parentName:"p"},"Test these settings"),", input the ",(0,r.kt)("strong",{parentName:"p"},"From Address")," and ",(0,r.kt)("strong",{parentName:"p"},"To Address")," emails and select ",(0,r.kt)("strong",{parentName:"p"},"Send"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure email settings",src:n(84564).Z,width:"1745",height:"665"})),(0,r.kt)("h2",{id:"compose-email-layouts"},"Compose Email Layouts"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To learn about how emails are composed in Engage, use the ",(0,r.kt)("strong",{parentName:"p"},"Learn about composing emails")," option on the top right.")),(0,r.kt)("p",null,"In Engage, composing emails via the admin section requires you to create 3 different parts with each part explained in their respective sections."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Partials")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Layouts")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Email Templates"))))}u.isMDXComponent=!0},84564:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/configure-email-settings-451f63c93bd8f84f0c48bdeb13dafa96.png"}}]);