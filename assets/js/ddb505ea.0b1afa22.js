"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[2941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),f=i,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||n;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},17308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={title:"Using Filters",sidebar_position:4},l=void 0,o={unversionedId:"engage/data/introduction-to-analytics/reports/using-filters/index",id:"engage/data/introduction-to-analytics/reports/using-filters/index",title:"Using Filters",description:"The Filters panel on the right-hand side shows all the filters applied to the report. This is an area where you can view information about each filter, interact with them and change these filters to see the impact on your visuals and report.",source:"@site/docs/01-engage/07-data/04-introduction-to-analytics/01-reports/04-using-filters/index.md",sourceDirName:"01-engage/07-data/04-introduction-to-analytics/01-reports/04-using-filters",slug:"/engage/data/introduction-to-analytics/reports/using-filters/",permalink:"/docs/engage/data/introduction-to-analytics/reports/using-filters/",draft:!1,editUrl:"https://github.com/n3oltd/support/tree/main/docs/01-engage/07-data/04-introduction-to-analytics/01-reports/04-using-filters/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Using Filters",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Adding Bookmarks",permalink:"/docs/engage/data/introduction-to-analytics/reports/adding-bookmarks/"},next:{title:"Analysis",permalink:"/docs/engage/data/introduction-to-analytics/analysis/"}},s={},p=[{value:"Display Filter Details",id:"display-filter-details",level:2},{value:"Search a Filter",id:"search-a-filter",level:2},{value:"View Filter Applied to a Visual",id:"view-filter-applied-to-a-visual",level:2},{value:"Change Filter Selections",id:"change-filter-selections",level:2},{value:"Clear a Filter",id:"clear-a-filter",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Filters")," panel on the right-hand side shows all the filters applied to the report. This is an area where you can view information about each filter, interact with them and change these filters to see the impact on your visuals and report. "),(0,i.kt)("p",null,"It displays and manages several types of report filters including: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A whole single report"),(0,i.kt)("li",{parentName:"ul"},"Different report pages"),(0,i.kt)("li",{parentName:"ul"},"Visuals ")),(0,i.kt)("h2",{id:"display-filter-details"},"Display Filter Details"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Anyone who has permissions to the report can interact with the filters section.")),(0,i.kt)("p",null,"Whenever a report is viewed in Engage, some default filters are displayed for each report under the ",(0,i.kt)("em",{parentName:"p"},"Filters")," panel e.g. income overview report has filters: ",(0,i.kt)("em",{parentName:"p"},"Reporting Period"),", ",(0,i.kt)("em",{parentName:"p"},"Donation Item")," and ",(0,i.kt)("em",{parentName:"p"},"Stipulation"),". Simply expand the panel for each report and view the filters already added."),(0,i.kt)("p",null,"To completely understand a filter in detail, expand the filter card with the ",(0,i.kt)("em",{parentName:"p"},"arrow")," next to the filter name and view at all the available values and their counts. Some filters have ",(0,i.kt)("em",{parentName:"p"},"(All)")," beside them meaning all values under the filter have been selected to display. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Display filter detail",src:a(95227).Z,width:"1680",height:"736"})),(0,i.kt)("h2",{id:"search-a-filter"},"Search a Filter"),(0,i.kt)("p",null,"Sometimes there might be more filters for a single report or a filters can have a long list of values within itself. To cater this purpose, use the search bar under the ",(0,i.kt)("em",{parentName:"p"},"Filters")," heading or the search box within any filter to search and find any value you want."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Search a filter",src:a(89157).Z,width:"1660",height:"608"})),(0,i.kt)("h2",{id:"view-filter-applied-to-a-visual"},"View Filter Applied to a Visual"),(0,i.kt)("p",null,"You can get a closer look at the filters affecting a specific visual by hovering over the visual to reveal the ",(0,i.kt)("em",{parentName:"p"},"filter icon"),". Select that filter icon to see a pop-up window with all the filters and slicers affecting that visual. The filters in the pop-up window are the same filters displayed on the ",(0,i.kt)("em",{parentName:"p"},"Filters panel"),", and you can view them as explained in the ",(0,i.kt)("a",{parentName:"p",href:"#display-filter-details"},"Display Filter Details"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Applying filter to visual",src:a(32404).Z,width:"1854",height:"924"})),(0,i.kt)("h2",{id:"change-filter-selections"},"Change Filter Selections"),(0,i.kt)("p",null,"Another way to search for data insights within a report is to interact with the filters. You can change filter selections by using the drop-down arrow next to the filter name. Depending on the filter and type of data that you are filtering, your options range from simple selections from a list, to identifying ranges of dates or numbers."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Changing filter selections",src:a(87610).Z,width:"1854",height:"924"})),(0,i.kt)("h2",{id:"clear-a-filter"},"Clear a Filter"),(0,i.kt)("p",null,"To reset or clear a filter, you can clear all values by selecting the ",(0,i.kt)("em",{parentName:"p"},"eraser icon")," next to the ",(0,i.kt)("em",{parentName:"p"},"filter name"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clear a filter",src:a(5378).Z,width:"1608",height:"614"})))}u.isMDXComponent=!0},32404:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/applying-filter-to-visual-06111076cbe64a1cb531b9cab8889e28.gif"},87610:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/change-filter-selections-ff9d42eb5274663d4e2b43682830cd35.gif"},5378:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/clear-filter-fc7542dabc5df7473aca4eadf0c176d1.png"},95227:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/display-filter-detail-ec1509550823eae24fc3e7645b076dd4.png"},89157:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/search-filter-4c9fafb20dc944e78d887c646d23c2aa.png"}}]);