"use strict";(self.webpackChunksupport=self.webpackChunksupport||[]).push([[3586],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>h});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),d=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=d(n.components);return a.createElement(l.Provider,{value:e},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),m=d(t),c=r,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return t?a.createElement(h,o(o({ref:e},p),{},{components:t})):a.createElement(h,o({ref:e},p))}));function h(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[m]="string"==typeof n?n:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},80903:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const i={title:"Single Donations - Standard",sidebar_position:2},o=void 0,s={unversionedId:"integration-guides/website-integration/single-donation-standard/index",id:"integration-guides/website-integration/single-donation-standard/index",title:"Single Donations - Standard",description:"Single donations refer to one-time contributions made by any donor. Hence, for one-time donations processed via a website, you need to post data to the Engage webhook endpoint.",source:"@site/docs/07-integration-guides/01-website-integration/02-single-donation-standard/index.md",sourceDirName:"07-integration-guides/01-website-integration/02-single-donation-standard",slug:"/integration-guides/website-integration/single-donation-standard/",permalink:"/docs/integration-guides/website-integration/single-donation-standard/",draft:!1,editUrl:"https://github.com/n3oltd/support/tree/main/docs/07-integration-guides/01-website-integration/02-single-donation-standard/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Single Donations - Standard",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction to Website Data",permalink:"/docs/integration-guides/website-integration/introduction-to-website-data/"},next:{title:"Single Donations - Sponsorships",permalink:"/docs/integration-guides/website-integration/single-donation-sponsorships/"}},l={},d=[{value:"Webhook Format Example",id:"webhook-format-example",level:2},{value:"Supported Payment Methods",id:"supported-payment-methods",level:2},{value:"Stripe",id:"stripe",level:3},{value:"PayPal",id:"paypal",level:3}],p={toc:d},m="wrapper";function u(n){let{components:e,...t}=n;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Single donations refer to one-time contributions made by any donor. Hence, for one-time donations processed via a website, you need to post data to the ",(0,r.kt)("strong",{parentName:"p"},"Engage webhook endpoint"),".   "),(0,r.kt)("h2",{id:"webhook-format-example"},"Webhook Format Example"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"json")," webhook example explained below shows how the data is expected along with a table explaining all webhook data parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2509",\n\n  "type": "Single Donation",\n\n  "timestamp": "2011-10-05T14:48:00.000Z",\n\n  "ip": "82.29.232.77",\n\n  "reference": "2509",\n\n  "currency": "GBP",\n\n  "amount": "25",\n\n  "isOrganization": false,\n\n  "individual": {\n\n        "title": "Mr",\n\n        "first": "Jessie",\n\n        "last": "Iqbal"\n\n   },\n\n  "organization": {\n\n        "name": "N3O Ltd",\n\n        "type": "Business",\n\n        "contact": {\n\n            "title": "Mr",\n\n            "first": "Jessie",\n\n            "last": "Iqbal"\n        }\n    },\n\n    "address": {\n\n        "line1": "101 Alexandra Road South, Whalley Range",\n\n        "line2": "Whalley Range",\n\n        "line3": "Optional",\n\n        "line4": "Optional",\n\n        "townCity": "Manchester",\n\n        "countyState": "Greater Manchester",\n\n        "postcode": "M16 8ST",\n\n        "countryCode": "GB"\n    },\n\n    "email": "donor@gmail.com",\n\n    "phone": "+447714243567",\n\n    "giftAid": true,\n\n    "contactPreferences": {\n\n        "email": {\n\n            "administration": true,\n\n            "fundraising": false\n        },\n\n        "sms": {\n\n            "administration": false,\n\n            "fundraising": false\n        },\n\n        "telephone": {\n\n            "administration": true,\n\n            "fundraising": false\n        },\n\n        "post": {\n\n            "administration": true,\n\n            "fundraising": false\n        }\n    },\n\n   "allocation": [\n   {\n      "type": "fund",\n        \n      "currency": "GBP",\n        \n      "amount": "5",\n        \n      "fund": {\n        \n        "item": "Wash fund"\n      },      \n\n      "fundDimensions": {\n\n        "location": "Where needed",\n        "theme": "WASH",\n        "stipulation": "Sadaqah" \n      }\n    },\n\n    {\n      "type": "fund",\n\n      "amount": "20",   \n\n      "currency": "GBP",\n      \n      "fund": {\n\n        "item": "Food Parcel"\n      },      \n\n      "fundDimensions": {\n\n        "location": "Where needed",\n        "theme": "WASH",\n        "stipulation": "Sadaqah" \n      }\n    },\n\n    {\n\n      "type": "Sponsorship",\n\n      "amount": "840",\n\n      "currency": "GBP",\n\n      "fundDimensions": {\n\n        "location": "Yemen",\n        "theme": "health",\n        "stipulation": "sadaqah"\n      },\n\n      "sponsorship": {\n          \n        "reference": "2509-1",\n\n        "scheme": "Orphan"\n      },\n    },\n\n    {\n\n      "type": "Sponsorship",           \n\n      "amount": "120",\n\n      "currency": "GBP",\n\n      "fundDimensions": {\n\n        "location": "Bangladesh",\n        "theme": "health",\n        "stipulation": "sadaqah"\n      },\n\n      "sponsorship": {\n\n        "reference": "2509-2",\n\n        "scheme": "Hifz"\n      }\n    },\n\n    {\n\n      "type": "Feedback",           \n      \n      "currency": "GBP",\n      \n      "amount": "270.0",\n      \n      "notes": "",\n      \n      "feedback": {\n        "reference": "2509-3",\n          \n        "scheme": "Tube Well",\n                      \n          "funddimensions": {\n\n            "location": "Where Most Needed",              \n            "theme": "WASH",\n            "stipulation": "Sadaqah"\n          },\n          \n          "currency": "GBP",\n                      \n          "price": "270.0",\n          \n          "customfields": { \n\n            "plaque": "Ahmad Ali " \n          }\n        },\n        "funddimensions": {\n\n            "location": "Where Most Needed",              \n            "theme": "WASH",\n            "stipulation": "Sadaqah"\n        }\n    }\n    ],\n\n    "OrphanSponsorships": [\n    {\n        "reference": "2509-1",\n\n        "beganOn": "27/07/2023",\n\n        "beneficiaryReference": "f0rtnt7nbhr",\n\n        "duration": "12",\n\n        "currency": "GBP",\n\n        "monthlyAmount": "70",\n\n        "fundDimensions": {\n\n            "location": "Yemen",\n            "theme": "health",\n            "stipulation": "sadaqah"\n        },\n\n        "scheme" : "Orphan"\n    },\n    ],\n\n    "HifzSponsorships": [\n    {\n        "reference": "2509-2",\n\n        "beganOn": "27/07/2023",\n\n        "beneficiaryReference": "f0rtnt7nbhr",\n\n        "duration": "12",\n\n        "currency": "GBP",\n\n        "monthlyAmount": "10",\n\n        "fundDimensions": {\n\n            "location": "Bangladesh",\n            "theme": "health",\n            "stipulation": "sadaqah"\n        },\n\n      "scheme" : "Hifz"\n    }\n    ],\n\n    "sponsorships": [\n    {\n        "reference": "2509-1",\n\n        "beganOn": "27/07/2023",\n\n        "beneficiaryReference": "f0rtnt7nbhr",\n\n        "duration": "12",\n\n        "currency": "GBP",\n\n        "monthlyAmount": "70",\n\n        "fundDimensions": {\n\n            "location": "Yemen",\n            "theme": "health",\n            "stipulation": "sadaqah"\n        },\n\n        "scheme" : "Orphan"\n\n    },\n\n    {\n        "reference": "2509-2",\n\n        "beganOn": "27/07/2023",\n\n        "beneficiaryReference": "f0rtnt7nbhr",\n\n        "duration": "12",\n            \n        "currency": "GBP",\n\n        "monthlyAmount": "10",\n\n        "fundDimensions": {\n\n            "location": "Bangladesh",\n            "theme": "health",\n            "stipulation": "sadaqah"\n        },\n\n        "scheme" : "Hifz"\n    }\n  ],\n\n    "tubewellFeedbacks" : [\n    {\n        "reference": "2509-3",\n\n        "scheme": "Tube Well",\n                \n        "funddimensions": {\n            "location": "Where Most Needed",\n            "theme": "WASH",\n            "stipulation": "Sadaqah"\n        },\n                \n        "currency": "USD",\n          \n        "price": "270.0",\n          \n        "customfields":\n        { \n            "plaque": "Ahmad Ali " \n        }\n    }\n    ],\n    "feedbacks": [\n    {\n        "reference": "2509-3",\n            \n        "scheme": "Tube Well",\n            \n        "funddimensions": {\n            "location": "Where Most Needed",\n            "theme": "WASH",\n            "stipulation": "Sadaqah"\n        },\n            \n        "currency": "USD",\n            \n        "price": "270.0",\n            \n        "customfields":\n        { \n            "plaque": "Ahmad Ali" \n        }\n    }\n    ],\n    "payment": {\n\n    "paymentMethodName": [This value should be a string that matches the name of the payment method in your engage system, e.g. \u201cCard\u201d or \u201cPaypal\u201d],\n\n    "amount": "5", [Depending on the payment method in use, this will be a property with payments specific fields, e.g:\n\n                "stripe": {\n                    "paymentIntentId": "pi_3JZ0mQHnrctdHvuq1Kz5sPOo",\n                },\n        ]\n    },\n  \n    "interactions": [\n    {\n      "touchpoint": "donated-website", \n      "timestamp": "2023-08-18T03:43:34.36Z"\n    }\n  ]\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters (Fields)"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"A unique string which identifies the transaction on the website.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Either ",(0,r.kt)("em",{parentName:"td"},"single")," or ",(0,r.kt)("em",{parentName:"td"},"regular")," depending on whether the donation is recurring or one-off, in this case, single.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"reference")),(0,r.kt)("td",{parentName:"tr",align:null},"Any reference the donor was given in an email receipt from the website.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isOrganization")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"True")," or ",(0,r.kt)("em",{parentName:"td"},"false")," depending on whether you allow donations from organisations. If omitted, will be assumed false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"individual/organization")),(0,r.kt)("td",{parentName:"tr",align:null},"Complete either one of these sections, ",(0,r.kt)("strong",{parentName:"td"},"not both"),", depending on whether the donor is an individual or an organisation. Usually this will be individual.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"organization.type")),(0,r.kt)("td",{parentName:"tr",align:null},"Should be one of the organisation types you recognise in Engage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"phone")),(0,r.kt)("td",{parentName:"tr",align:null},"Include the country code at the beginning. This should be calculated based on the address if it is not required by the donor to enter their country code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"giftAid")),(0,r.kt)("td",{parentName:"tr",align:null},"Can be ",(0,r.kt)("em",{parentName:"td"},"true")," or ",(0,r.kt)("em",{parentName:"td"},"false")," if the donor explicitly states their gift aid status. Should be ",(0,r.kt)("em",{parentName:"td"},"null")," if the information is not collected or provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"contactPreferences")),(0,r.kt)("td",{parentName:"tr",align:null},"The categories ",(0,r.kt)("em",{parentName:"td"},"other")," and ",(0,r.kt)("em",{parentName:"td"},"fundraising")," are specific to each charity. In general, charities will have a category which covers ",(0,r.kt)("em",{parentName:"td"},"marketing")," (in this case fundraising) and ",(0,r.kt)("em",{parentName:"td"},"administration"),". You have to ensure that exact categories are agreed with the charity and added here. Also, ensure that explicit consent is being captured on the website before setting any category that covers marketing activity to ",(0,r.kt)("em",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"allocation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Allocations is a concept in Engage that represents the area where donation money is allocated to be spent and is a combination of ",(0,r.kt)("em",{parentName:"td"},"donation item")," plus ",(0,r.kt)("em",{parentName:"td"},"fund dimensions"),". Usually, the title of the web page or the item selected by the donor on the website will determine what is entered for an allocation. "),(0,r.kt)("li",null," You can just send the ",(0,r.kt)("em",{parentName:"td"},"Item property"),", and Engage uses ",(0,r.kt)("em",{parentName:"td"},"Transform")," to transform the item sent here into the correct donation item and fund dimensions. "),(0,r.kt)("li",null,(0,r.kt)("strong",{parentName:"td"},"Note:")," This is an array, and it can contain multiple allocations, but generally there will only be 1 allocation here. ")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"allocation","[*]",".type")),(0,r.kt)("td",{parentName:"tr",align:null},"This can be fund or sponsorship.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"beneficiaryReference")),(0,r.kt)("td",{parentName:"tr",align:null},"There is no need to add this reference explicitly but if the donor is sending this reference through the website then Engage will add it otherwise it will auto acquire within.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"$.allocation","[*]",".fundDimensions")),(0,r.kt)("td",{parentName:"tr",align:null},"This is only necessary if your website allows the donor to select or assign different locations or stipulations (e.g. zakah/sadaqah) in addition to the normal donation item. Your system administrator can confirm if this is necessary. In case of sponsorships, add the sponsorship in ",(0,r.kt)("em",{parentName:"td"},"Allocation object")," as ",(0,r.kt)("strong",{parentName:"td"},"allocation","[*]",'.type: "Sponsorship"'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Feedbacks")),(0,r.kt)("td",{parentName:"tr",align:null},"This refers specifically to projects which require donor feedback. These are typically things like ",(0,r.kt)("em",{parentName:"td"},"water wells"),", ",(0,r.kt)("em",{parentName:"td"},"build a classroom")," etc. These 'schemes' must be setup in Engage prior to sending from the website. ",(0,r.kt)("strong",{parentName:"td"},"Note:")," Please speak to N3O to clarify what ",(0,r.kt)("em",{parentName:"td"},"feedback schemes")," are eligible. Also, the ",(0,r.kt)("inlineCode",{parentName:"td"},"Type")," must be ",(0,r.kt)("inlineCode",{parentName:"td"},"Feedbacks"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payment")),(0,r.kt)("td",{parentName:"tr",align:null},"Populated only on Single Donations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payment.paymentMethodName")),(0,r.kt)("td",{parentName:"tr",align:null},"This should be the name of one of the payment methods the charity has set up in Engage which is configured for single donations. For example, if the charity has 2 payment methods called ",(0,r.kt)("em",{parentName:"td"},"Card Payments")," and ",(0,r.kt)("em",{parentName:"td"},"PayPal Payments")," then the value should be the name of the payment method (i.e. ",(0,r.kt)("em",{parentName:"td"},"Card Payments")," or ",(0,r.kt)("em",{parentName:"td"},"PayPal Payments"),"). Depending on the payment method selected, complete the relevant section depending on whether the payment method is ",(0,r.kt)("em",{parentName:"td"},"Stripe, Opayo, Cash, Cheque, SmartDebit, PayPal, LaunchGood")," etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Interactions")),(0,r.kt)("td",{parentName:"tr",align:null},"This signals that the ",(0,r.kt)("em",{parentName:"td"},"touchpoint")," and ",(0,r.kt)("em",{parentName:"td"},"attribution")," of the donation is from the website. The default touchpoint for ",(0,r.kt)("strong",{parentName:"td"},"all")," webhook data should generally be ",(0,r.kt)("inlineCode",{parentName:"td"},"donated-website"),".")))),(0,r.kt)("h2",{id:"supported-payment-methods"},"Supported Payment Methods"),(0,r.kt)("p",null,"Below is a list of supported payment methods and their corresponding webhook structure."),(0,r.kt)("h3",{id:"stripe"},"Stripe"),(0,r.kt)("p",null,"For a Stripe payment method you can use either ",(0,r.kt)("strong",{parentName:"p"},"PaymentIntentId")," or ",(0,r.kt)("strong",{parentName:"p"},"ChargeId"),", but you must supply one of these. ",(0,r.kt)("em",{parentName:"p"},"CustomerID")," is not required, but you can send it if you have it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Stripe": {\n\n    "CustomerId": "cs_1JXlDi2eZvKYlo2CI9M6sFCx",\n\n    "ChargeId": "ch_3MbsKOIhCuwGfAB01hwiYwYZ",\n\n    "PaymentIntentId": "pi_3JZ0mQHnrctdHvuq1Kz5sPOo"\n}\n')),(0,r.kt)("h3",{id:"paypal"},"PayPal"),(0,r.kt)("p",null,"For a PayPal payment method, Engage requires the ",(0,r.kt)("strong",{parentName:"p"},"Transaction reference")," only. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"PayPal": {\n\n    "TransactionReference:": "abc123"\n}\n')))}u.isMDXComponent=!0}}]);